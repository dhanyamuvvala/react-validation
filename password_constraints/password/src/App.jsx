import { useState } from "react";
import "./App.css";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    // Strict Email Validation
    const emailPattern =
      /^[a-zA-Z0-9_%+-]+@[a-zA-Z0-9-]+\.com$/;

    if (!emailPattern.test(email)) {
      newErrors.email =
        "Enter valid email (example: user@gmail.com)";
    }

    // Password Validation
    // 1) Starts with capital letter
    // 2) At least one number
    // 3) At least one special character
    // 4) Minimum 5 characters
    const passwordPattern =
      /^[A-Z](?=.*[0-9])(?=.*[!@#$%^&*]).{4,}$/;

    if (!passwordPattern.test(password)) {
      newErrors.password =
        "Password must start with capital letter, include number, special character & minimum 5 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Form Submitted Successfully ✅");
      setEmail("");
      setPassword("");
      setErrors({});
    }
  };

  return (
    <div className="page">
      <div className="form-card">
        <h2>Client Side Validation</h2>

        <form onSubmit={handleSubmit}>

          {/* Email Field */}
          <div className="form-group">
            <label>Email ID</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="error">{errors.email}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="error">{errors.password}</p>
            )}
          </div>

          {/* Submit Button */}
          <button type="submit">
            Submit
          </button>

        </form>
      </div>
    </div>
  );
}

export default Form;