import React, { useState } from 'react';
import { socket } from '../socket';

export function MyForm() {
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    // Emitting an event to the server
    socket.emit('create-something', value, (response) => {
      clearTimeout(timeoutId); // Clear the timeout upon receiving a response
      setIsLoading(false);
      console.log(response); // Handle the response
    });

    // Set a timeout to handle the case when a response is not received
    const timeoutId = setTimeout(() => {
      console.log('Request timed out');
      setIsLoading(false);
    }, 5000);
  }

  return (
    <form onSubmit={onSubmit}>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button type="submit" disabled={isLoading}>Submit</button>
    </form>
  );
}
