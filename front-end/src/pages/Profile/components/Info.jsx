function Info({ data, setOpen, setOverlay }) {
  const { name, email } = data;
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
          <p>200</p>
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
