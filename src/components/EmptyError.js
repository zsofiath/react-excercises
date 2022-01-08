import React from 'react';
import Card from '../UIElements/Card';
import Dialog from '../UIElements/Dialog';


export default function EmptyError({isError, setisError}) {
    if(isError) return (
        <Dialog>
        <Card className="list-item">
        <>
          You must fill every field!
          <button
          className='btn mt-5 btn-w'
            onClick={() => {
              setisError(false);
            }}
          >
            Close
          </button>
        </>
        </Card>
        </Dialog>
      );
    return <></>
}
