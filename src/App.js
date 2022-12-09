import * as React from "react";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// import Paper from '@mui/material/Paper';
import data from "./mock_data.json";
import { nanoid } from "nanoid";
import "./App.css";
import ReadOnly from "./Component/ReadOnly";
import Editable from "./Component/Editable";
import Popup from "./Component/Popup";

function App() {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    name: "",
    DOB: "",
    gender: "",
  });

  const [editFormData, setEditFormData] = useState({
    name: "",
    DOB: "",
    gender: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };
  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  };
  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const newContact = {
      id: nanoid(),
      name: addFormData.name,
      DOB: addFormData.DOB,
      gender: addFormData.gender,
    };
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
    form.reset();
  };
  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const editedContact = {
      id: editContactId,
      name: editFormData.name,
      DOB: editFormData.DOB,
      gender: editFormData.gender,
    };
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === editContactId);
    newContacts[index] = editedContact;
    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      name: contact.name,
      DOB: contact.DOB,
      gender: contact.gender,
    };
    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };
  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className="App">
      <Popup/>
      <TableContainer>
        <form onSubmit={handleEditFormSubmit}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Employee Name</TableCell>
                <TableCell align="right">Employee DOB</TableCell>
                <TableCell align="right">Employee Gender</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contacts.map((contact) => (
                <>
                  {editContactId === contact.id ? (
                    <Editable
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadOnly
                      contact={contact}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                    />
                  )}
                </>
              ))}
            </TableBody>
          </Table>
        </form>
      </TableContainer>
      <h2>Add data into table</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Add Name"
          required
          onChange={handleAddFormChange}
        />
        <input
          type="date"
          name="DOB"
          placeholder="Add Date of birth"
          required
          onChange={handleAddFormChange}
        />
        <input
          type="radio"
          name="gender"
          value="Female"
          required
          onChange={handleAddFormChange}
        />
        <label>Female</label>
        <input
          type="radio"
          name="gender"
          value="Male"
          required
          onChange={handleAddFormChange}
        />
        <label>Male</label>
        <input
          type="radio"
          name="gender"
          value="Other"
          required
          onChange={handleAddFormChange}
        />
        <label>Other</label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;
