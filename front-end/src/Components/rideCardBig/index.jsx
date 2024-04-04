import './index.css'

const RideCardBig=({
    ride_id,departure_station,arrival_station,departure_time,arrival_time,handleBooking
})=>{

    return(
        <div className='ride-card-big flex column center '>
            <h1>Ride: {ride_id}</h1>
            <p>From: {departure_station}</p>
            <p>To: {arrival_station}</p>
            <p>Starts at: {departure_time}</p>
            <p>Arrives at: {arrival_time}</p>
            <button className='txt-white bg-primary' onClick={handleBooking}>book ticket!</button>
        </div>
    )
}

export default RideCardBig