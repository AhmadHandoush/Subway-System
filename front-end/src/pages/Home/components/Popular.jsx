import { useEffect } from "react";
import Card from "../../../Components/Card";

// { id: 1, name: "ahmad", image: "ahmad", close: "12" },
// { id: 2, name: "ahmad", image: "ahmad", close: "12" },
// { id: 3, name: "ahmad", image: "ahmad", close: "12" },
function Popular() {
  const arr = [
    {
      id: 1,
      name: "beirut",
      image: "/brussels metro.jpg",
      open_at: "18",
      close_at: "22",
      location: "lebanon",
    },
    {
      id: 2,
      name: "saida",
      image: "/brussels metro.jpg",
      open_at: "18",
      close_at: "22",
      location: "paris",
    },
    {
      id: 3,
      name: "tripoli",
      image: "/brussels metro.jpg",
      open_at: "18",
      close_at: "22",
      location: "lebanon",
    },
  ];

  // const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("https://api.example.com/data");

  //       if (!response.ok) {
  //         throw new Error("Failed to fetch data");
  //       }

  //       const jsonData = await response.json();

  //       setData(jsonData);
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="popular-stations">
      {arr.map((station) => (
        <Card key={station.id} station={station} />
      ))}
      {/* {stations.map((station) => (
        <div key={station.id}>
          <div>{station.name}</div>
          <div>{station.image}</div>
          <div>{station.close}</div>
        </div>
      ))} */}
      {/* {console.log(stations)} */}
    </div>
  );
}

export default Popular;
