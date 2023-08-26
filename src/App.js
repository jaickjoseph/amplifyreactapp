import logo from './logo.svg';
import TextField from "@mui/material/TextField";
import './App.css';
import { useState } from 'react';

function App() {
  let x = 0;
  const savevalue = (event) => {
    x = event.target.value
    console.log(x)
  }
  return (
    <div>
      <TextField label="note name" onChange={savevalue}> </TextField>
      <TextField label="note description" onChange={savevalue}> </TextField>
    </div>
  );
}

export default App;
