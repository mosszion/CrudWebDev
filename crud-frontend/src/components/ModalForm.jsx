import React, { useState,useEffect } from 'react';
import { use } from 'react';
export default function ModalForm({ isOpen, onClose , mode, onSubmit, clientData }) {

    const [rate, setRate] = useState('');
    const [status, setStatus] = useState(false);     
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [job, setJob] = useState('');

    //Handle status changes
    const handleStatusChange = (e) => {
        setStatus(e.target.value === 'Active');
    }

    // Handle form submission
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const clientData = {
                name,
                email,
                job,
                rate: Number(rate),
                isactive: status
            };
            await onSubmit(clientData); // Call the onSubmit function passed from the parent component

        } catch (error) {
            console.error("Error submitting form:", error);
            
        }
      
        onClose();
    };

    useEffect(() => {
        if (mode === 'edit' && clientData) {
            setName(clientData.name || '');
            setEmail(clientData.email || '');
            setJob(clientData.job || '');
            setRate(clientData.rate || '');
            setStatus(clientData.isactive || false);
        }
    }, [mode, clientData]);

    return (
        <>
                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
            
            <dialog id="my_modal_3" className="modal" open ={isOpen}>
            <div className="modal-box">
                <h3 className="font-bold text-lg py-4">{mode === 'edit' ? 'Edit Client' : 'Client Details'}</h3>
                <form method="dialog" onSubmit={handleFormSubmit} className="flex flex-col">

                   <label className="input input-bordered my-4 flex items-center gap-2">
                        Name
                        <input type="text" className="grow" value={name} onChange={(e) => setName(e.target.value)} />
                   </label>
                   <label className="input input-bordered my-4 flex items-center gap-2">
                        Email
                        <input type="text" className="grow" value={email} onChange={(e) => setEmail(e.target.value)} />
                   </label>
                   <label className="input input-bordered my-4 flex items-center gap-2">
                        Job
                        <input type="text" className="grow" value={job} onChange={(e) => setJob(e.target.value)}     />
                   </label>
                   <div className="flex ab-4 justify-between my-4">

                    <label className="input input-bordered mr-4 flex items-center gap-2">
                            Rate
                            <input type="number" className="grow" value={rate} onChange={(e) => setRate(e.target.value)} />
                    </label>
                            <select value={status ? 'Active' : 'Inactive'} onChange={handleStatusChange} className="select select-bordered w-full max-w-xs">

                                    <option>Inactive</option>
                                    <option>Active</option>
                            </select>
                   </div>
                   
                  







                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onClose}>✕</button>
                <button className="btn btn-success" onClick={onSubmit}>{mode === 'edit' ? 'Save changes' : 'Add Client'}</button>
                </form>
                
            </div>
            </dialog>
        </>
    )
      
}
 