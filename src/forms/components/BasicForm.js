import UseValidation from "../hooks/use-validation";

const BasicForm = (props) => {
  const {
    value,
    isValid,
    isInvValid,
    reset,
    onNameChangeHandler,
    onNameBlurHandler
  } = UseValidation(value => value.trim() !== '');

  const formIsValid = isValid;

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    reset();

    console.warn('SUBMISSION');
  };

  const nameClasses = `form-control ${isInvValid ? "invalid" : ""}`;

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={nameClasses}>
          <label htmlFor="first-name">First Name</label>
          <input
            value={value}
            type="text"
            id="first-name"
            onChange={onNameChangeHandler}
            onBlur={onNameBlurHandler}
          />
          {isInvValid && <p>Required</p>}
        </div>
        <div className="form-control">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="email">E-Mail Address</label>
        <input type="text" id="email" />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
