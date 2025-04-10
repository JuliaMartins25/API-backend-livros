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

    create = async (req, res) => {
        const { title, author, publisher, isbn, category, year, description} = req.body;
    
        try {
            if (!title) {
                return res.status(400).json({ erro: "Titulo é obrigatório" });
            }
            if (!author) {
                return res.status(400).json({ erro: "Autor é obrigatório" });
            }
            if (!publisher) {
                return res.status(400).json({ erro: "Descrição é obrigatório" });
            }
            if (!isbn) {
                return res.status(400).json({ erro: "Código ISBN do livro é obrigatório" });
            }
            if (!category) {
                return res.status(400).json({ erro: "Categoria é obrigatório" });
            }

            const novoLivro = await livroModel.create(title, author, publisher, isbn, category, year, description);
            res.status(201).json(novoLivro);
        } catch (error) {
            console.error(error);
            res.status(500).json({ erro: "Erro ao criar livro" });
        }
    };

}

export default new livroController();
