import React from 'react';
import Card from './Card';
import Dialog from './Dialog';
import Button from './Button';

export default function ErrorModal({isError, setisError, text}) {
    if(isError) return (
        <Dialog>
        <Card className="list-item">
        <>
          {text}
          <Button  className="mt-5 btn-w" onClick={() => {
              setisError(false);
            }} >Close</Button>
        </>
        </Card>
        </Dialog>
      );
    return <></>
}