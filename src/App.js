import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [userRegistration, setUserRegistration] = useState({
    username: "",
    email: "",
    mobile: "",
    country: "",
    city: "",
    state: "",
    message: "",
  });
  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setUserRegistration({ ...userRegistration, [name]: value }); //getting Values
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = {
      ...userRegistration,
      id: new Date().getTime().toString(),
    };
    setRecords([...records, newRecord]); //getting new and old records aswell
    setUserRegistration({
      username: "",
      email: "",
      mobile: "",
      country: "",
      city: "",
      state: "",
      message: "",
    });
  };
  return (
    <div>
      <h1><center>Validation Form Task</center></h1>
      <div className="container">
        <form action="" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="username">Name</label>
            <input
              type="text"
              autoComplete="off"
              value={userRegistration.username}
              onChange={handleInput}
              name="username"
              id="username"
              required
            />
          </div>
          <div className="field">
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              autoComplete="off"
              value={userRegistration.email}
              onChange={handleInput}
              name="email"
              id="email"
              required
            />
          </div>
          <div className="field">
            <label htmlFor="Mobile">Mobile</label>
            <input
              type="text"
              autoComplete="off"
              value={userRegistration.mobile}
              onChange={handleInput}
              name="mobile"
              id="mobile"
            />
          </div>
          <div className="field">
            <label htmlFor="Country">Country</label>
            <input
              type="text"
              autoComplete="off"
              value={userRegistration.country}
              onChange={handleInput}
              name="country"
              id="country"
            />
          </div>
          <div className="field">
            <label htmlFor="City">City</label>
            <input
              type="text"
              autoComplete="off"
              value={userRegistration.city}
              onChange={handleInput}
              name="city"
              id="city"
            />
          </div>
          <div className="field">
            <label htmlFor="State">State</label>
            <input
              type="text"
              autoComplete="off"
              value={userRegistration.state}
              onChange={handleInput}
              name="state"
              id="state"
            />
          </div>
          <div className="field">
            <label htmlFor="Message">Message</label>
            <input
              type="text"
              autoComplete="off"
              value={userRegistration.message}
              onChange={handleInput}
              name="message"
              id="message"
              placeholder="Any thoughts in mind"
            />
          </div>
          <button type="submit">Submit</button>
        </form>

        <div className="output">
          {records.map((curElem) => {
            const {
              id,
              username,
              email,
              mobile,
              country,
              city,
              state,
              message,
            } = curElem;
            return (
              <div className="showDataStyle" key={curElem.id}>
                <p>{username}</p>
                <p>{email}</p>
                <p>{mobile}</p>
                <p>{country}</p>
                <p>{city}</p>
                <p>{state}</p>
                <p>{message}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
