import client from "../db.js";

export const getClients = async (req, res) => {
  try {
    const result = await client.query("SELECT * FROM clients_table");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching clients:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


export const createClient = async (req, res) => {
    const {name, email, job, rate, isactive} = req.body;
    try {
        const result = await client.query(
            "INSERT INTO clients_table (name, email, job, rate, isactive) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [name, email, job, rate, isactive]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error("Error creating client:", error);
        res.status(500).json({ error: "Internal server error" });
    }   
}

export const updateClient = async (req, res) => {
    const clientId = req.params.id;
    const {name, email, job, rate, isactive} = req.body;
    try {
        const result = await client.query(
            "UPDATE clients_table SET name = $1, email = $2, job = $3, rate = $4, isactive = $5 WHERE id = $6 RETURNING *",
            [name, email, job, rate, isactive, clientId]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Client not found" });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error("Error updating client:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}
export const deleteClient = async (req, res) => {
    const clientId = req.params.id;
    try {
        const result = await client.query(
            "DELETE FROM clients_table WHERE id = $1 RETURNING *",
            [clientId]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Client not found" });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error("Error deleting client:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}


  /// search query controller
export const searchClients = async (req, res) => {
    const { query } = req.query; // Extract the search query from the request
    try {
        const result = await client.query(
            "SELECT * FROM clients_table WHERE name ILIKE $1 OR email ILIKE $1 OR job ILIKE $1",
            [`%${query}%`] // Use ILIKE for case-insensitive search
        );
        res.json(result.rows);
    } catch (error) {
        console.error("Error searching clients:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}