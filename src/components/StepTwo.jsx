const StepTwo = (props) => {
  console.log(props); // undefined
  return (
    <main className="resultPage">
      <div className="infoResultPage">
        <p>Name : {props.eventName}</p>
        <p>Email : {props.eventEmail}</p>
        <p>Password : {props.eventPassword} </p>
      </div>
      <button
        onClick={() => {
          props.stateReset(false);
        }}
      >
        Edit your information
      </button>
    </main>
  );
};

export default StepTwo;
