import { Router } from "express";
import { celularesService } from "../services/celulares.Services.js";
export const celularesRouter = Router()

celularesRouter.get("/", async (req, res) => {
    try{
        const celulares = await celularesService.listarCelulares()
        res.json(celulares);
    } catch (error){
        console.error(error);
    }
})