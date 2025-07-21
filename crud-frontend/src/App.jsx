import React, { useState } from 'react'
import './App.css'
import ModalForm from './components/Modalform'
import NavBar from './components/Navbar'
import TableList from './components/Tablelist'
import axios from 'axios';



function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add'); // 'add' or 'update'
  const [searchQuery, setSearchQuery] = useState('');   
  const [clientData, setClientData] = useState(null); // State to hold client data for update


  //Function handle search

  



  const handleOpen = (mode,client) => {
  setClientData(client ); // Set client data if provided for edit mode
    setModalMode(mode);
    setIsOpen(true);
  };
   
const handleSubmit = async (newClientData)=> {
  // Handle form submission logic here
  if(modalMode === 'add') {
    // Logic for adding a new client
    try {
      const response = await axios.post('http://localhost:3000/api/clients', newClientData);
      console.log("Client added successfully", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
      
    }
    console.log("modal mode add");
  } else{
    try {
      const response = await axios.put(`http://localhost:3000/api/clients/${clientData.id}`, newClientData);
      console.log("Client updated successfully", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    // Logic for updating an existing client
    console.log("modal mode edit");

  }
};

  return (
    <>
          <NavBar  onOpen={() => handleOpen('add')} onSearch={setSearchQuery} /> 
        <TableList 
          handleOpen={handleOpen}
          searchQuery={searchQuery}  // Pass the search query to TableList
        />
        <ModalForm
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          mode={modalMode}
          onSubmit={handleSubmit}
          clientData={clientData} // Pass client data for update
        />
    </>
  )
}

export default App
