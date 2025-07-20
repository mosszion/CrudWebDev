import React, { useState } from 'react'
import './App.css'
import ModalForm from './components/Modalform'
import NavBar from './components/Navbar'
import TableList from './components/Tablelist'



function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add'); // 'add' or 'update'



  const handleOpen = (mode) => {
    setModalMode(mode);
    setIsOpen(true);
  };
   
const handleSubmit = ()=> {
  // Handle form submission logic here
  if(modalMode === 'add') {
    // Logic for adding a new client
    console.log("modal mode add");
  } else{
    // Logic for updating an existing client
    console.log("modal mode edit");

  }
};

  return (
    <>
          <NavBar  onOpen={() => handleOpen('add')}/> 
        <TableList 
          handleOpen={handleOpen}
        />
        <ModalForm
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          mode={modalMode}
          onSubmit={handleSubmit}
        />
    </>
  )
}

export default App
