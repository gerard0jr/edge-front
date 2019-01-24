import React from 'react'
import { TextField, Fab, Icon } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const NumbersInput = ({number, incrementNumber, decrementNumber}) => {
  return (
    <div className="add-remove-icons"> 
        {/* Decrement number in one */}
        <Fab 
        onClick={decrementNumber}
        size="medium"
        color="secondary"
        aria-label="Dec">
            <Icon>remove_icon</Icon>
        </Fab>
        {/* Controlled input */}
        <TextField
          style={{margin:"0 2em", width:"50px"}}
          id="standard-number"
          label="Número"
          type="number"
          value={number}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
        {/* Increment number in one */}
        <Fab 
        onClick={incrementNumber}
        size="medium"
        color="secondary"
        aria-label="Inc">
            <AddIcon/>
        </Fab>
    </div>
  )
}

export default NumbersInput
