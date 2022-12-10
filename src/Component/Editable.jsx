import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { border } from "@mui/system";

const Editable = ({idx,editFormData,handleEditFormChange,handleCancelClick}) => {
  return (
    <TableRow>
      <TableCell
        align="center"
        style={{
          font: "600 1rem sans-serif",
          backgroundColor: "rgb(124, 207, 245, 0.3)",
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
          backgroundColor: "rgb(124, 207, 245, 0.3)",
          border: "1px solid rgb(0,0,0,0.2)",
          padding: "0",
        }}
      >
        <input
          type="text"
          name="name"
          value={editFormData.name}
          placeholder="Add Name"
          required
          onChange={handleEditFormChange}
        ></input>
      </TableCell>
      <TableCell
        align="center"
        style={{
          font: "600 1rem sans-serif",
          backgroundColor: "rgb(124, 207, 245, 0.3)",
          border: "1px solid rgb(0,0,0,0.2)",
          padding: "0",
        }}
      >
        <input
          type="date"
          name="DOB"
          value={editFormData.DOB}
          placeholder="Add Date of birth"
          required
          onChange={handleEditFormChange}
        ></input>
      </TableCell>
      <TableCell
        align="center"
        style={{
          font: "600 1rem sans-serif",
          backgroundColor: "rgb(124, 207, 245, 0.3)",
          border: "1px solid rgb(0,0,0,0.2)",
          padding: "0",
        }}
      >
        {" "}
        <input
          type="text"
          name="gender"
          placeholder="Add Gender"
          value={editFormData.gender}
          required
          onChange={handleEditFormChange}
        />
      </TableCell>
      <TableCell
        align="center"
        style={{
          font: "600 1rem sans-serif",
          backgroundColor: "rgb(124, 207, 245, 0.3)",
          border: "1px solid rgb(0,0,0,0.2)",
          padding: "0",
        }}
      >
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </TableCell>
    </TableRow>
  );
};

export default Editable;