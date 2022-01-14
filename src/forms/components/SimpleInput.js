import {useState} from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState(''); //better for instant validation, resetting
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  }

  const formSubmissionHandler = event => {
    event.preventDefault();
    setEnteredNameIsTouched(true);
    if(!enteredNameIsValid) return;
    console.log('Boom');
    setEnteredName('');
    setEnteredNameIsTouched(false);
  }

  const nameInputBlurHandler = () => {
    setEnteredNameIsTouched(true);
  }

  const nameInputClasses = `form-control${!nameInputIsInvalid ? '' : ' invalid'}`;
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} type='text' id='name'  value={enteredName}/>
        {nameInputIsInvalid && <p className='error-text'>Entered name is not valid</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
