import { useRef, useState } from 'react';
// import {Prompt} from 'react-router-dom';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();
  const [isEntering, setIsEntering] = useState(false);

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }


  const finisEnteringHandler = () => {
    // must be separated from submission because of the async behavior of setState.
    // in submitHandler it would not be fast enough to allow navigation
    setIsEntering(false);

  }
  const formFocusHandler = () => {
    setIsEntering(true);
  }

  return (
    <>
    {/* <Prompt when={isEntering} message={(location)=>'Are you sure you want to leave?'}/> */}
    {/* :( no such thing in v6 */}
    <Card>
      <form className={classes.form} onSubmit={submitFormHandler} onFocus={formFocusHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor='author'>Author</label>
          <input type='text' id='author' ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='text'>Text</label>
          <textarea id='text' rows='5' ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button className='btn' onClick={finisEnteringHandler}>Add Quote</button>
        </div>
      </form>
    </Card></>
  );
};

export default QuoteForm;
