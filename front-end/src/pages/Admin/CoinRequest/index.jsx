import "./index.css";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CoinRequest = () => {
  const [coinRequests, setCoinRequests] = useState([]);

  useEffect(() => {
    fetchCoinRequests();
  }, []);

  const fetchCoinRequests = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/coin_requests');
      console.log(response.data);
      setCoinRequests(response.data);
    } catch (error) {
      console.error('Error fetching coin requests:', error);
    }
  };

  const handleAccept = async (id) => {
    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/accept_request`, { id });
      fetchCoinRequests();
      toast.success(response.data.message);
    } catch (error) {
      console.error('Error accepting coin request:', error);
    }
  };

  const handleReject = async (id) => {
    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/reject_request`, { id });
      fetchCoinRequests();
      toast.error(response.data.message);
    } catch (error) {
      console.error('Error rejecting coin request:', error);
    }
  };

  return (
    <div className="flex column admin">
      <ToastContainer position="top-right" autoClose={3000} />
      <h2>Coin Requests</h2>
      <table>
        <thead>
          <tr>
            <th>Passenger ID</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Balance</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {coinRequests.map(request => (
            <tr key={request.id}>
              <td>{request.passenger_id}</td>
              <td>{request.passenger_name}</td>
              <td>{request.amount}</td>
              <td>{request.status}</td>               
              <td>{request.balance}</td>
              <td>
                {request.status === 'Pending' && (
                  <>
                    <button onClick={() => handleAccept(request.id)}>Accept</button>
                    <button onClick={() => handleReject(request.id)}>Reject</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinRequest;