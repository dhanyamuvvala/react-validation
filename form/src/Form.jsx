import { useState } from "react";
import "./App.css";

function Form() {
  const initialState = {
    firstName: "",
    lastName: "",
    gender: "",
    address: "",
    dob: "",
    state: "",
    skills: []
  };

  const [formData, setFormData] = useState(initialState);

  // Get today's date (YYYY-MM-DD format)
  const today = new Date().toISOString().split("T")[0];

  // All Indian States + UTs
  const states = [
    "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh",
    "Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand",
    "Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur",
    "Meghalaya","Mizoram","Nagaland","Odisha","Punjab",
    "Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura",
    "Uttar Pradesh","Uttarakhand","West Bengal",
    "Andaman and Nicobar Islands","Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi","Jammu and Kashmir","Ladakh",
    "Lakshadweep","Puducherry"
  ];

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle checkbox change
  const handleSkillChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setFormData({
        ...formData,
        skills: [...formData.skills, value]
      });
    } else {
      setFormData({
        ...formData,
        skills: formData.skills.filter((skill) => skill !== value)
      });
    }
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Extra protection against future date
    if (formData.dob > today) {
      alert("Future date is not allowed!");
      return;
    }

    alert(`
First Name: ${formData.firstName}
Last Name: ${formData.lastName}
Gender: ${formData.gender}
Address: ${formData.address}
DOB: ${formData.dob}
State: ${formData.state}
Skills: ${formData.skills.join(", ")}
    `);
  };

  // Reset form
  const handleReset = () => {
    setFormData(initialState);
  };

  return (
  <div className="page">
    <div className="form-card">
      <h2>User Registration Form</h2>

      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Gender</label>
          <div className="inline">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
                required
              />
              Male
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
              />
              Female
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            rows="3"
            required
          />
        </div>

        <div className="form-group">
          <label>Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            max={today}
            required
          />
        </div>

        <div className="form-group">
          <label>State</label>
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          >
            <option value="">Select State</option>
            {states.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Skills</label>
          <div className="inline">
            {["HTML", "CSS", "JavaScript", "React"].map((skill) => (
              <label key={skill}>
                <input
                  type="checkbox"
                  value={skill}
                  checked={formData.skills.includes(skill)}
                  onChange={handleSkillChange}
                />
                {skill}
              </label>
            ))}
          </div>
        </div>

        <div className="buttons">
          <button type="submit" className="submit-btn">Submit</button>
          <button type="button" onClick={handleReset} className="cancel-btn">
            Cancel
          </button>
        </div>

      </form>
    </div>
  </div>
);
}

export default Form;