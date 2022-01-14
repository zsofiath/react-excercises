import {useRef, useState} from 'react';

const SimpleInput = (props) => {
  const nameInputRef = useRef(); // better if needed once (login)
  const [enteredName, setEnteredName] = useState(''); //better for instant validation, resetting
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

  const nameChangeHandler = event => {
    setEnteredName(event.target.value);
  }

  const formSubmissionHandler = event => {
    event.preventDefault();

    console.log(enteredName);
    const enteredValue = nameInputRef.current.value;
    // nameInputRef.current.value <-- direct dom manipulation. !!! avoid it !!!

    setEnteredNameIsTouched(true);
    
    if(enteredName.trim()==='') {
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);
    console.log('Boom');
  }

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;
  const nameInputClasses = `form-control${!nameInputIsInvalid ? '' : ' invalid'}`;
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} onChange={nameChangeHandler} type='text' id='name' />
        {nameInputIsInvalid && <p className='error-text'>Entered name is not valid</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
