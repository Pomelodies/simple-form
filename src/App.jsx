import "./App.css";
import { useState } from "react";
import Footer from "./components/Footer";
import Form from "./components/Form";
import StepTwo from "./components/StepTwo";

function App() {
  // 📌 ETABLIR LES STATES
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [reset, setReset] = useState(false);

  return (
    <>
      {reset ? (
        <>
          <header>
            <h1>Results</h1>
          </header>
          <StepTwo
            eventName={name}
            eventEmail={email}
            eventPassword={password}
            stateReset={setReset}
          />
          <Footer />
        </>
      ) : (
        <>
          <header>
            <h1>Create account</h1>
          </header>
          <Form
            eventName={name}
            stateName={setName}
            eventEmail={email}
            stateEmail={setEmail}
            eventPassword={password}
            statePassword={setPassword}
            eventConfirmPassword={confirmPassword}
            stateConfirmPassword={setConfirmPassword}
            eventReset={reset}
            stateReset={setReset}
          />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
