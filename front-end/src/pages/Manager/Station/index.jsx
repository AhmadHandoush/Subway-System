import { useEffect, useState } from "react";
import "./index.css";
import ReviewCard from "../../../Components/reviewCard/reviewCard";
import { FaPen } from "react-icons/fa";
import Title from "../../Home/components/Title";
import axios from "axios";


const Station = () => {
  const [stationStatus, setStationStatus] = useState("");
  const [stationOpen, setStationOpen] = useState("");
  const [stationClose, setStationClose] = useState("");
  const [reviews, setReviews] = useState([]);

  const [userId,setUserID] = useState("")
  const [managerId,setManagerID] = useState("")
  const user = JSON.parse(localStorage.getItem('user'))
  setUserID(user.id)
    

  const getManagerId = () => { 
    axios(
      {
        url: `http://127.0.0.1:8000/api/get_manager/${userId}`,
        method: "get",
      }
      ).then((res)=>{
        setManagerID(res.data.id)
      })
    }



    const getReviews = () => {
      axios(
        {
          url: `http://127.0.0.1:8000/api/get_station_reviews/${managerId}`,
          method: "get",

    }
      ).then((res)=>{
        console.log(res)
      })
    }


    
      useEffect(() => {
        getManagerId();
        getReviews();
      }, [])
    

  const times=['1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00','00:00']

  const handleStationUpdate = () => {
    const data= new FormData()
    data.append('status',stationStatus)
    data.append('open_hour',stationOpen)
    data.append('close_hour',stationClose)

    axios(
      {
        url: `http://127.0.0.1:8000/api/update_station/${managerId}`,
        method: "post",
        data: data
        ,
      }
      ).then((res)=>{
        console.log(res)
      })
  };

  return (
    <div className="station flex center column full-width">
      <div className="update-station flex bg-secondary full-width column">
        <h1>Update station:</h1>
        <div className="flex select between">
          <label htmlFor="status">Station status</label>
          <select
            name=""
            id="status"
            onChange={(e) => setStationStatus(e.target.value)}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <div className="select flex between">
          <label htmlFor="open">Opens at</label>
          <select
            name=""
            id="open"
            onChange={(e) => setStationOpen(e.target.value)}
          >
           {times.map((time)=>(
            <option value={time}>{time}</option>
           ))}
          </select>
        </div>

        <div className="select flex between">
          <label htmlFor="close">Closes at</label>
          <select
            name=""
            id="close"
            onChange={(e) => setStationClose(e.target.value)}
          >
           {times.map((time)=>(
            <option value={time}>{time}</option>
           ))}
          </select>
        </div>
        <button
          className="update-btn bg-primary txt-white"
          onClick={handleStationUpdate}
        >
          update <span></span> <FaPen />
        </button>
      </div>
      <div className=" flex column center full-width">
      <Title>Recent Reviews</Title>

        <div className="update-station bg-secondary full-width">
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              name={review.passenger_id}
              rating={review.rating}
              reviewText={review.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Station;
