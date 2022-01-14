import {useState} from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState(''); //better for instant validation, resetting
  const [enteredEmail, setEnteredEmail] = useState(''); //better for instant validation, resetting
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);
  const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;

  const enteredEmailIsValid = enteredEmail.trim() !== '' && enteredEmail.indexOf('@') > -1 && enteredEmail.indexOf('.') > enteredEmail.indexOf('@');
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailIsTouched;

  let formIsValid = false;
  if(enteredNameIsValid && enteredEmailIsValid) formIsValid = true;

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  }

  const nameInputBlurHandler = () => {
    setEnteredNameIsTouched(true);
  }

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  }
  const emailInputBlurHandler = () => {
    setEnteredEmailIsTouched(true);
  }

  const formSubmissionHandler = event => {
    event.preventDefault();
    setEnteredNameIsTouched(true);
    setEnteredEmailIsTouched(true);
    if(!enteredNameIsValid || !enteredEmailIsValid) return;
    console.log('Boom');
    setEnteredName('');
    setEnteredNameIsTouched(false);
    setEnteredEmailIsTouched(false);
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
