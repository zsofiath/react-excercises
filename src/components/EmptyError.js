import React from 'react';
import Card from '../UIElements/Card';
import Dialog from '../UIElements/Dialog';
import Button from '../UIElements/Button';

export default function EmptyError({isError, setisError}) {
    if(isError) return (
        <Dialog>
        <Card className="list-item">
        <>
          You must fill every field!
          <Button  className="mt-5 btn-w" onClick={() => {
              setisError(false);
            }} >Close</Button>
        </>
        </Card>
        </Dialog>
      );
    return <></>
}
