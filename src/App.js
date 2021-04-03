import React from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name, email);
  }

  function handleChange(e) {
    e.preventDefault();
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    }
  }

  return (
    <div className="App">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Name</label>
        <br />
        <input
          type="text"
          name="name"
          placeholder="Mary"
          value={name}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <label>Email</label>
        <br />
        <input
          type="text"
          placeholder="mary.poppins@disney.fr"
          onChange={(e) => handleChange(e)}
          name="email"
          value={email}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
