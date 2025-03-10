import React from "react";

const Input = ({label, name, onChange, value, placeholder }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-gray-700 mb-1">
        {label}
      </label>
      <input
        type="text"
        id={name}
        value={value}
        className="w-full p-2 border rounded-lg"
        required
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


// const Register = () => {

//
// import Input from "../utility/Input";

const Register = ({ users, handleRegister }) => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [universityType, setUniversityType] = useState("state");
  const [universityName, setUniversityName] = useState("");
  const [levelOfEducation, setLevelOfEducation] = useState("");
  const [courseName, setCourseName] = useState("");
  const navigate = useNavigate();

  const stateUniversities = [
    "Acharya Nagarjuna University",
    "Andhra University",
    "Dr. B.R. Ambedkar Open University",
    "Jawaharlal Nehru Technological University, Anantapur",
    "Krishna University",
    "Palamuru University",
    "Rayalaseema University",
    "Adikavi Nannaya University",
    "Dravidian University",
    "Prakasam Engineering College",
    // Add more state universities as needed
  ];

  const privateUniversities = [
    "Vignana Jyothi Institute of Management",
    "SRM University, AP",
    "KL University",
    "Aditya Degree College",
    "Annamacharya Institute of Technology and Sciences",
    "Anurag Group of Institutions",
    "Avanti Institute of Pharmaceutical Sciences",
    "Balaji Institute of Technology and Science",
    "Bharat Institute of Engineering and Technology",
    "Bhoj Reddy Engineering College for Women",
    // Add more private universities as needed
  ];

  const levelOptions = ["Undergraduate", "Master's", "Ph.D."];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === "" ||
      universityName.trim() === "" ||
      levelOfEducation.trim() === "" ||
      courseName.trim() === ""
    ) {
      alert("All fields are required");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (users.find((u) => u.email === email)) {
      alert("Email already registered");
      return;
    }
    const user = {
      name,
      email,
      password,
      universityType,
      universityName,
      levelOfEducation,
      courseName,
    };
    handleRegister(user);
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setUniversityType("state");
    setUniversityName("");
    setLevelOfEducation("");
    setCourseName("");
    navigate("/login ");
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 text-center mb-12">
          Register
        </h1>
        <form
          className="bg-gray-50 p-6 rounded-lg shadow-md max-w-2xl mx-auto"
          onSubmit={handleSubmit}
        >
          {/* <Input
            name="name"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={"Enter your name"}
          /> */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              className="w-full p-2 border rounded-lg"
              required
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              className="w-full p-2 border rounded-lg"
              required
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              className="w-full p-2 border rounded-lg"
              required
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 mb-1"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              className="w-full p-2 border rounded-lg"
              required
              placeholder="Confirm your password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="universityType"
              className="block text-gray-700 mb-1"
            >
              University Type
            </label>
            <select
              value={universityType}
              className="w-full p-2 border rounded-lg"
              required
              onChange={(e) => setUniversityType(e.target.value)}
            >
              <option value="state">State University</option>
              <option value="private">Private University</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="universityName"
              className="block text-gray-700 mb-1"
            >
              University Name
            </label>
            <select
              value={universityName}
              className="w-full p-2 border rounded-lg"
              required
              onChange={(e) => setUniversityName(e.target.value)}
            >
              {universityType === "state"
                ? stateUniversities.map((u) => (
                    <option key={u} value={u}>
                      {u}
                    </option>
                  ))
                : privateUniversities.map((u) => (
                    <option key={u} value={u}>
                      {u}
                    </option>
                  ))}
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="levelOfEducation"
              className="block text-gray-700 mb-1"
            >
              Level of Education
            </label>
            <select
              value={levelOfEducation}
              className="w-full p-2 border rounded-lg"
              required
              onChange={(e) => setLevelOfEducation(e.target.value)}
            >
              <option value="">Select Level</option>
              {levelOptions.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="courseName" className="block text-gray-700 mb-1">
              Course Name
            </label>
            <input
              type="text"
              id="courseName"
              value={courseName}
              className="w-full p-2 border rounded-lg"
              required
              placeholder="Enter your course name (e.g., B.Tech in Mechanical Engineering)"
              onChange={(e) => setCourseName(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-green-800 text-white rounded-lg hover:bg-green-700"
          >
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;
