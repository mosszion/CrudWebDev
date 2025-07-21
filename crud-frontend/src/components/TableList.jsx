import React from 'react';      
import axios from 'axios';
import { useState, useEffect } from 'react';
export default function TableList({ handleOpen, searchQuery }) {

    const [clients, setClients] = useState([]);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/clients');
                setClients(response.data);
            } catch (error) {
                console.error("Error fetching clients:", error);
            }
        };
        fetchClients();
    }, []);
    const filteredClients = clients.filter(client => {
        return client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
               client.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
               client.job.toLowerCase().includes(searchQuery.toLowerCase());
    });


    //Handle delete client 
    const handleDelete = async (clientId) => {
        try {
            const confirmDelete = window.confirm("Are you sure you want to delete this client?");
            if (!confirmDelete) return;
            // Make a DELETE request to the server
            await axios.delete(`http://localhost:3000/api/clients/${clientId}`);
            setClients(clients.filter(client => client.id !== clientId));
        } catch (error) {
            console.error("Error deleting client:", error);
        }
    };
  return (
    <>
    <div className="overflow-x-auto mt-10">
        <table className="table">
            {/* head */}
            <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Job</th>
                <th>Rate</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody  className="hover:bg-base-300">
                {filteredClients.map((client) => (
                <tr key={client.id}>
                    <th>{client.id}</th>
                    <td>{client.name}</td>
                    <td>{client.email}</td>
                    <td>{client.job}</td>
                    <td>{client.rate}</td>
                    <td>
                        <span className={`badge ${client.isactive === true ? "badge-success" : "badge-error"}`}>
                            {client.isactive ? 'Active' : 'Inactive'}
                        </span>
                    </td>
                    <td>
                        <button className="btn btn-secondary" onClick={() => handleOpen('edit', client)}>Update</button>
                    </td>
                    <td>
                        <button className="btn btn-error" onClick={() => handleDelete(client.id)}>Delete</button>
                    </td>
                </tr>
                ))}
            
            </tbody>
        </table>
    </div></>
   
  );
}