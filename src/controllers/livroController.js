import livroModel from "../models/livroModel.js";

class livroController {
    getAll = async (req, res) => {
        try {
            const livros = await livroModel.getAll();
            res.json(livros);
        } catch (error) {
            console.error(error);
            res.status(500).json({ erro: "Erro ao buscar os livros" });
        }
    };
}

export default new livroController();
