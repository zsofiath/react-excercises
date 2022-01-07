import React from 'react';
import Card from '../UIElements/Card';
import Dialog from '../UIElements/Dialog';


export default function EmptyError({isError, setisError}) {
    if(isError) return (
        <Dialog>
        <Card className="list-item">
        <div>
          You must fill every field!
          <button
          className='btn'
            onClick={() => {
              setisError(false);
            }}
          >
            Close
          </button>
        </div>
        </Card>
        </Dialog>
      );
    return <></>
}
