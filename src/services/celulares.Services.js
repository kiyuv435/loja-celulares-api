class celularesService {
    async getAll(){
        const res = await pool.query("SELECT * FROM celulares");
        return res.rows;
    }

    async creats(dados){
    const res = await pool.query("INSERT INTO... RETURNING *", [dados]);
    return res.rows(0);
    }
}