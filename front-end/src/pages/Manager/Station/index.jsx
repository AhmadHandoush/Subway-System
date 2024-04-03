import "./index.css";

const Station = () => {
  return (
    <div className="station flex center column full-width">
      <p>Station</p>
      <div className="update-station flex bg-secondary full-width column">
        <div className="flex between">
          <label htmlFor="name"> Station name:</label>
          <input type="text " id="name" />
        </div>

        <div className="flex between">
          <label htmlFor="location"> Station location:</label>
          <input type="text " id="location" />
        </div>

        <div className="flex select between">
          <label htmlFor="status">Station status</label>
          <select name="" id="status">
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <div className="select flex between">
          <label htmlFor="open">Opens at</label>
          <select name="" id="open">
            <option value="1:00">1:00</option>
            <option value="2:00">2:00</option>
            <option value="3:00">3:00</option>
            <option value="5:00">5:00</option>
            <option value="6:00">6:00</option>
            <option value="7:00">7:00</option>
            <option value="8:00">8:00</option>
            <option value="9:00">9:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="13:00">13:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option>
            <option value="23:00">23:00</option>
            <option value="00:00">00:00</option>
          </select>
        </div>

        <div className="flex select between">
          <label htmlFor="close">Closes at</label>
          <select name="" id="close">
            <option value="1:00">1:00</option>
            <option value="2:00">2:00</option>
            <option value="3:00">3:00</option>
            <option value="5:00">5:00</option>
            <option value="6:00">6:00</option>
            <option value="7:00">7:00</option>
            <option value="8:00">8:00</option>
            <option value="9:00">9:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="13:00">13:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option>
            <option value="23:00">23:00</option>
            <option value="00:00">00:00</option>
          </select>
        </div>
        <button className="update-btn"></button>
      </div>
      <div className="reviews-div flex column center">
        <h1>Recent reviews</h1>

      </div>
    </div>
  );
};

export default Station;
