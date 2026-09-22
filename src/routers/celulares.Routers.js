import { Router } from "express";
import { celularesService } from "../services/celulares.Services.js";
export const celularesRouter = Router()
    
 class celularesRoutes.get("/". async (req, res) => {
        const celulares = await celularesService.getAll();
    });

    celulares.post("/", async (req, res) => {
        const celulares = await celularesService.create(req, body);
        return res.status(201).json(celulares):
    });