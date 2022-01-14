import {useRef, useState} from 'react';

const SimpleInput = (props) => {
  const nameInputRef = useRef(); // better if needed once (login)
  const [enteredName, setEnteredName] = useState(''); //better for instant validation, resetting

  const nameChangeHandler = event => {
    setEnteredName(event.target.value);
  }

  const formSubmissionHandler = event => {
    event.preventDefault();

    console.log(enteredName);
    const enteredValue = nameInputRef.current.value;
    // nameInputRef.current.value <-- direct dom manipulation. !!! avoid it !!!
  }
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} onChange={nameChangeHandler} type='text' id='name' />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
