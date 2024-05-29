import React from "react";
import "./RegistrationForm.css";
import { useState } from "react";
import { useRef } from "react";

export default function RegistrationForm() {
  const [form, setForm] = useState({
    fName: "",
    lName: "",
    mail: "",
    number: "",
  });
  const [popmsg, setPopMsg] = useState({
    fName: "",
    lName: "",
    mail: "",
    number: "",
  });
  const [popup, setPopup] = useState("");
  const [popboolean, setPopupboolean] = useState(false);
  const mailref = useRef(null);
  const numref = useRef(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const validateForm = () => {
    const newPopMsg = {
      fName: "",
      lName: "",
      mail: "",
      number: "",
    };
    let isvalid = true;
    if (!/^\d{10}$/.test(form.number)) {
      newPopMsg.number = "Please enter your Phone Number";
      isvalid = false;
      numref.current.focus();
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(form.mail).toLowerCase())) {
      newPopMsg.mail = "Please enter your Mail Id";
      isvalid = false;
      mailref.current.focus();
    }
    if (form.fName.length < 2) {
      isvalid = false;
      newPopMsg.fName = "Please enter your first name";
    }
    if (form.lName.length < 2) {
      newPopMsg.lName = "Please enter your last name";
    }
    setPopMsg(newPopMsg);
    return isvalid;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setPopup("Registration successful!");
      setPopupboolean(true);
    }
  };
  return (
    <div>
      <div>
        <div className="form-page">
          <div className="form">
            <form onSubmit={handleSubmit}>
              {popboolean && <div className="popup"> {popup}</div>}

              <input
                value={form.fName}
                name="fName"
                onChange={handleChange}
                type="text"
                placeholder="First Name"
              />
              <p>{popmsg.fName}</p>

              <input
                value={form.lName}
                name="lName"
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
              />
              <p> {popmsg.lName}</p>

              <input
                value={form.mail}
                name="mail"
                type="text"
                ref={mailref}
                placeholder="Email"
                onChange={handleChange}
              />
              <p> {popmsg.mail}</p>

              <input
                value={form.number}
                name="number"
                ref={numref}
                type="text"
                placeholder="Phone Number"
                onChange={handleChange}
              />
              <p> {popmsg.number}</p>

              <button type="submit">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
