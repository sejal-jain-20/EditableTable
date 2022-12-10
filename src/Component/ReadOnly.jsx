import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { height, width } from "@mui/system";

const ReadOnly = ({ idx,contact, handleEditClick, handleDeleteClick }) => {
  return (
    <TableRow>
      <TableCell
        align="center"
        style={{
          font: "600 1rem sans-serif",
          backgroundColor: "rgb(124, 207, 245, 0.5)",
          border: "1px solid rgb(0,0,0,0.2)",
          padding: "0",
        }}
      >
        {`${idx}.`}
      </TableCell>
      <TableCell
        align="center"
        style={{
          font: "600 1rem sans-serif",
          backgroundColor: "rgb(124, 207, 245, 0.5)",
          border: "1px solid rgb(0,0,0,0.2)",
          padding: "0",
        }}
      >
        {contact.name}
      </TableCell>
      <TableCell
        align="center"
        style={{
          font: "600 1rem sans-serif",
          backgroundColor: "rgb(124, 207, 245, 0.5)",

          border: "1px solid rgb(0,0,0,0.2)",
          padding: "0",
        }}
      >
        {contact.DOB}
      </TableCell>
      <TableCell
        align="center"
        style={{
          font: "600 1rem sans-serif",
          backgroundColor: "rgb(124, 207, 245, 0.5)",

          border: "1px solid rgb(0,0,0,0.2)",
          padding: "0",
        }}
      >
        {contact.gender}
      </TableCell>
      <TableCell
        align="center"
        style={{
          font: "600 1rem sans-serif",
          backgroundColor: "rgb(124, 207, 245, 0.5)",

          border: "1px solid rgb(0,0,0,0.2)",
          padding: "0",
        }}
      >
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </TableCell>
    </TableRow>
  );
};

export default ReadOnly