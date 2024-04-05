import { useState } from "react";

function Editbox({ setOpen, setOverlay }) {
  const [id, setId] = useState(window.localStorage.getItem("user_id"));
  const [formData, setFormData] = useState({
    name: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClose = () => {
    setOpen(false);
    setOverlay(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/update/${id}`, {
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
      window.location.reload();
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
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="text"
          accept="image/*"
          onChange={handleChange}
          placeholder="Enter ur image "
          name="image"
        />
        <button type="submit">Edit</button>
      </form>
    </div>
  );
}

export default Editbox;
