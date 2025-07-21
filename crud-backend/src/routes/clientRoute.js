import express from "express";
import { searchClients } from "../controllers/clientController.js"; // Import searchClients function
import { deleteClient, getClients } from "../controllers/clientController.js";
import { createClient } from "../controllers/clientController.js"; // Import createClient function
import { updateClient } from "../controllers/clientController.js"; // Import updateClient function
const router = express.Router();

router.get("/", getClients);
router.post("/", createClient);
router.put("/:id", updateClient);
router.delete("/:id", deleteClient);
router.get("/search", searchClients);
export default router;
