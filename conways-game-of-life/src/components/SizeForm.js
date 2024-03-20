import React, { useState } from 'react';

const SizeForm = ({ onSubmit }) => {
  const [rows, setRows] = useState(20);
  const [cols, setCols] = useState(20);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rows >= 3 && rows <= 40 && cols >= 3 && cols <= 40) {
      onSubmit({ rows, cols });
    } else {
      console.error('Invalid grid size. Please choose values between 3 and 40.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={rows}
        onChange={(e) => setRows(parseInt(e.target.value, 10))}
        placeholder="Rows"
      />
      <input
        type="number"
        value={cols}
        onChange={(e) => setCols(parseInt(e.target.value, 10))}
        placeholder="Cols"
      />
      <button type="submit">Set Size</button>
    </form>
  );
};

export default SizeForm;
