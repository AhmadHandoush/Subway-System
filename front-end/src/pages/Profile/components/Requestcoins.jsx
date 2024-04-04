import { useState } from "react";

function Requestcoins() {
  const [inputValue, setInputValue] = useState("");
  const [id, setId] = useState(window.localStorage.getItem("user_id"));
  const [success, setSuccess] = useState(false);
  const data = {
    passenger_id: id,
    amount: inputValue,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/api/request_coins", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send data to backend");
      }

      setSuccess(true);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form className="coins-amount flex-between" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your needed amount"
        value={inputValue}
        onChange={handleChange}
      />
      <button type="submit" className="send">
        Request
      </button>
      {success && (
        <div className="success flex-center">
          <h3>Request Sent Successfully</h3>
        </div>
      )}
    </form>
  );
}

export default Requestcoins;
