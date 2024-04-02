function Requestcoins() {
  return (
    <form className="coins-amount flex-between">
      <input type="text" placeholder="Enter your needed amount" />
      <button type="submit" className="send">
        Request
      </button>
    </form>
  );
}

export default Requestcoins;
