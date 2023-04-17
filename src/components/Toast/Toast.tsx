import React from "react";

type ToastProps = {
    message: string;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
    return (
      <div>
        {message}
      </div>
    );
  }
