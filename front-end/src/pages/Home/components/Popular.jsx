import { useEffect, useState } from "react";
import Card from "../../../Components/Card";
import "aos/dist/aos.css";
import AOS from "aos";
import Loader from "../../../Components/Loader";
function Popular() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://127.0.0.1:8000/api/get_three");

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const jsonData = await response.json();

        setData(jsonData.stations);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="popular-stations">
      {isLoading && <Loader />}
      {data.map((station) => (
        <Card key={station.id} station={station} />
      ))}
    </div>
  );
}

export default Popular;
