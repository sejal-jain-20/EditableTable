import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const ReadOnly = ({contact, handleEditClick,handleDeleteClick}) => {
  return (
    <TableRow>
    <TableCell>{contact.name}</TableCell>
    <TableCell align="right">{contact.DOB}</TableCell>
    <TableCell align="right">{contact.gender}</TableCell>
    <TableCell align="right"><button type='button' onClick={(event)=>handleEditClick(event,contact)}>Edit</button>
    <button type='button'onClick={()=>handleDeleteClick(contact.id)}>Delete</button>
    </TableCell>
   
  </TableRow>
  )
}

export default ReadOnly
