const StepTwo = (props) => {
  console.log(props); // undefined
  return (
    <main className="resultPage">
      <div className="infoResultPage">
        <p>Name : {name}</p>
        <p>Email : {email}</p>
        <p>Password : {password} </p>
      </div>
      <button
        onClick={() => {
          setReset(false);
        }}
      >
        Edit your information
      </button>
    </main>
  );
};

export default StepTwo;
