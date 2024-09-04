import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const InsertionForm: React.FC<{ onInsert: (size: string) => void }> = ({ onInsert }) => {
  const [size, setSize] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (size) {
      onInsert(size);
      setSize('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        label="Taille"
        variant="outlined"
        value={size} 
        onChange={(e) => setSize(e.target.value)}
      />
      <Button type="submit" variant="contained">
        Ajouter
      </Button>
    </form>
  );
};

export default InsertionForm;
