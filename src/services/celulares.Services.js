import { pool } from "../database/db.js"

class CelularesService {
    async listarCelulares(){
        const res = await pool.query("SELECT * FROM celulares")
        return res.rows
    }
}

export const celularesService = new CelularesService()