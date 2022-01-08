import React from "react";
import Card from "./Card";
import Dialog from "./Dialog";
import Button from "./Button";

export default function ErrorModal({ message, onConfirm }) {
  return (
    <Dialog>
      <Card className="list-item">
        <>
          {message}
          <Button
            className="mt-5 btn-w"
            onClick={onConfirm}
          >
            Close
          </Button>
        </>
      </Card>
    </Dialog>
  );
}
