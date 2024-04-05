import { useEffect, useState } from "react";

function Info({ data, setOpen, setOverlay }) {
  const { name, email } = data;
  const [balance, setBalance] = useState(null);

  const [id, setId] = useState(window.localStorage.getItem("user_id"));
  const [passengerId, setPassengerId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchPassengerId = async () => {
      try {
        const response = await fetch(`/api/passenger-id/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch passenger ID");
        }
        const data = await response.json();
        setPassengerId(data.passenger_id);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPassengerId();
  }, [id]);

  useEffect(() => {
    const fetchBalanceData = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/user/balance/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch balance data");
        }
        const data = await response.json();
        setBalance(data.balance);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchBalanceData();
  }, [id]);
  console.log(passengerId);

  return (
    <div className="user-info">
      <div className="user-details flex column">
        <div className="username flex-between flex-items">
          <h2>Username:</h2>
          <p>{name}</p>
        </div>
        <div className="email flex-between flex-items">
          <h2>Email:</h2>
          <p>{email}</p>
        </div>
        <div className="username flex-between flex-items">
          <h2>Balance:</h2>
          <p>{balance}</p>
        </div>
        <button
          className=" edit flex-center"
          onClick={() => {
            setOpen(true);
            setOverlay(true);
          }}
        >
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
      </div>
    </div>
  );
}

export default Info;
