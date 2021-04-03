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

// class App extends React.Component {
//   state = {
//     name: "",
//     email: ""
//   };
//   handleSubmit = e => {
//     e.preventDefault();
//     console.log(this.state.name, this.state.email);
//   };
//   handleChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };
//   render() {
//     const { name, email } = this.state;
//     return (
//       <div className="App">
//         <form onSubmit={this.handleSubmit}>
//           <label>Name</label>
//           <br />
//           <input
//             type="text"
//             name="name"
//             placeholder="Mary"
//             value={name}
//             onChange={this.handleChange}
//           />
//           <br />
//           <label>Email</label>
//           <br />
//           <input
//             type="text"
//             placeholder="mary.poppins@disney.fr"
//             onChange={this.handleChange}
//             name="email"
//             value={email}
//           />
//           <br />
//           <button onClick={this.onSubmit}>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default App;
