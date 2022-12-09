import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const Editable = ({editFormData,handleEditFormChange,handleCancelClick}) => {
  return (
    <TableRow>
      <TableCell>
        <input
          type="text"
          name="name"
          value={editFormData.name}
          placeholder="Add Name"
          required
          onChange={handleEditFormChange}
        ></input>
      </TableCell>
      <TableCell align="right">
        <input
          type="date"
          name="DOB"
          value={editFormData.DOB}
          placeholder="Add Date of birth"
          required
          onChange={handleEditFormChange}
        ></input>
      </TableCell>
      <TableCell align="right">
        {" "}
        <input
          type="text"
          name="gender"
          placeholder="Add Gender"
          value={editFormData.gender}
          required
          onChange={handleEditFormChange}
        />
        {/* <label>Female</label>
        <input
          type="radio"
          name="gender"
          value={editFormData.gender}
          required
          onChange={handleEditFormChange}
        />
        <label>Male</label>
        <input
          type="radio"
          name="gender"
          value={editFormData.gender}
          required
          onChange={handleEditFormChange}
        />
        <label>Other</label> */}
      </TableCell>
      <TableCell align="right">
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </TableCell>
    </TableRow>
  );
};

export default Editable;
