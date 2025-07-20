export default function TableList({ handleOpen }) {

    const clients = [{name: "John Doe", email: "john@example.com", job: "Developer", rate: "100", status: "Active"},
               {name: "Jane Smith", email: "jane@example.com", job: "Designer", rate: "120", status: "Inactive"},
               {name: "Sam Johnson", email: "sam@example.com", job: "Manager", rate: "150", status: "Active"}];
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
                {clients.map((client, index) => (
                <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{client.name}</td>
                    <td>{client.email}</td>
                    <td>{client.job}</td>
                    <td>{client.rate}</td>
                    <td>
                        <span className={`badge ${client.status === "Active" ? "badge-success" : "badge-error"}`}>
                            {client.status}
                        </span>
                    </td>
                    <td>
                        <button className="btn btn-secondary" onClick={() => handleOpen('edit')}>Update</button>
                    </td>
                    <td>
                        <button className="btn btn-error">Delete</button>
                    </td>
                </tr>
                ))}
            
            </tbody>
        </table>
    </div></>
   
  );
}