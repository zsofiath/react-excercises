import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputIsInvalid,
    reset: resetNameInput,
    valueChangeHandler: nameInputChangeHandler,
    valueBlurHandler: nameInputBlurHandler
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputIsInvalid,
    reset: resetEmailInput,
    valueChangeHandler: emailInputChangeHandler,
    valueBlurHandler: emailInputBlurHandler
  } = useInput(value => value.trim() !== '' && value.indexOf('@') > -1 && value.indexOf('.') > value.indexOf('@'));

  let formIsValid = false;
  if(enteredNameIsValid && enteredEmailIsValid) formIsValid = true;

  const formSubmissionHandler = event => {
    event.preventDefault();
    if(!enteredNameIsValid || !enteredEmailIsValid) return;
    console.log('Boom');
    resetNameInput();
    resetEmailInput();
  }

  const nameInputClasses = `form-control${!nameInputIsInvalid ? '' : ' invalid'}`;
  const emailInputClasses = `form-control${!emailInputIsInvalid ? '' : ' invalid'}`;
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} type='email' id='name'  value={enteredName}/>
        {nameInputIsInvalid && <p className='error-text'>Entered name is not valid</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input onChange={emailInputChangeHandler} onBlur={emailInputBlurHandler} type='text' id='email'  value={enteredEmail}/>
        {emailInputIsInvalid && <p className='error-text'>Entered email is not valid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
