import { useState } from "react";

function Editbox({ setOpen, setOverlay }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    image: null,
    address: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setFormData({
        ...formData,
        image: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleClose = () => {
    setOpen(false);
    setOverlay(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://api.example.com/update-profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to update profile");
      }

      console.log("Profile updated successfully");
    } catch (error) {
      console.error("Error updating profile:", error.message);
    }
  };

  return (
    <div className="edit-box flex column">
      <div className=" close flex">
        <span className="btn_close" onClick={handleClose}>
          X
        </span>
      </div>
      <h1>Want to update your data?</h1>
      <form onSubmit={handleSubmit} className="form flex column">
        <input
          type="text"
          placeholder="Username..."
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Adress..."
          value={formData.address}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password..."
          value={formData.password}
          onChange={handleChange}
        />
        <input type="file" accept="image/*" onChange={handleChange} />
        <button type="submit">Edit</button>
      </form>
    </div>
  );
}

export default Editbox;
