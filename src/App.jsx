import "./App.css";
import { useState } from "react";

function App() {
  // 📌 ETABLIR LES STATES
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [reset, setReset] = useState(false);
  const [editInfo, setEditInfo] = useState(false);

  return (
    <>
      {reset ? (
        <>
          <header>
            <h1>Results</h1>
          </header>
          <main className="resultPage">
            <div className="infoResultPage">
              <p>Name : {name}</p>
              <p>Email : {email}</p>
              <p>Password : {password} </p>
            </div>
            <button
              onClick={() => {
                setEditInfo(true);
              }}
            >
              Edit your information
            </button>
          </main>
          <footer>
            <p>
              Made with <span>React</span> at <span>Le Reacteur</span> by{" "}
              <span>Elodiiiiie</span> 🐸
            </p>
          </footer>
        </>
      ) : (
        <>
          <header>
            <h1>Create account</h1>
          </header>
          <main>
            <form
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <div>
                <label htmlFor="Name"> Name</label>
                <input
                  type="text"
                  placeholder="Jean Dupont"
                  id="Name"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  placeholder="jeandupont@lereacteur.io"
                  id="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder="lErEaCtEuR2020"
                  id="password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="confirmpassword">Confirm your Password</label>
                <input
                  type="password"
                  placeholder="lErEaCtEuR2020"
                  id="confirmpassword"
                  value={confirmPassword}
                  onChange={(event) => {
                    setConfirmPassword(event.target.value);
                  }}
                />
              </div>
              <div>
                <button
                  className="register"
                  onClick={() => {
                    if (password != confirmPassword) {
                      alert("Vos deux mots de passe ne sont pas identiques !");
                    } else {
                      setReset(true);
                    }
                  }}
                >
                  Register
                </button>
              </div>
            </form>
          </main>
          <footer>
            <p>
              Made with <span>React</span> at <span>Le Reacteur</span> by{" "}
              <span>Elodiiiiie</span> 🐸
            </p>
          </footer>
        </>
      )}
    </>
  );
}

export default App;
