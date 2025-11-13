const Form = (props) => {
  console.log(props); //{
  //     "eventName": "",
  //     "stateName": "setName",
  //     "eventEmail": "",
  //     "stateEmail": "setEmail",
  //     "eventPassword": "",
  //     "statePassword": "setPassword",
  //     "eventConfirmPassword": "",
  //     "stateConfirmPassword": "setConfirmPassword",
  //     "eventReset": false,
  //     "stateReset": "setReset"
  // }
  return (
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
            value={props.eventName}
            onChange={(event) => {
              props.stateName(event.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="jeandupont@lereacteur.io"
            id="email"
            value={props.eventEmail}
            onChange={(event) => {
              props.stateEmail(event.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="lErEaCtEuR2020"
            id="password"
            value={props.eventPassword}
            onChange={(event) => {
              props.statePassword(event.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="confirmpassword">Confirm your Password</label>
          <input
            type="password"
            placeholder="lErEaCtEuR2020"
            id="confirmpassword"
            value={props.eventConfirmPassword}
            onChange={(event) => {
              props.stateConfirmPassword(event.target.value);
            }}
          />
        </div>
        <div>
          <button
            className="register"
            onClick={() => {
              if (props.eventPassword != props.eventConfirmPassword) {
                alert("Vos deux mots de passe ne sont pas identiques !");
              } else {
                props.stateReset(true);
              }
            }}
          >
            Register
          </button>
        </div>
      </form>
    </main>
  );
};

export default Form;
