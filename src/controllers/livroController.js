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
        const { title, author, publisher, isbn, category, year, description } = req.body;

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

    update = async (req, res) => {
        const { id } = req.params;
        const { title, author, publisher, isbn, category, year, description } = req.body;

        try {
            const livroAtualizado = await livroModel.update(
                Number(id),
                title,
                author,
                publisher,
                isbn,
                category,
                year,
                description
            );

            if (!livroAtualizado) {
                return res.status(404).json({ erro: "Livro não encontrado!" });
            }

            res.json(livroAtualizado);
        } catch (error) {
            console.error(error);
            res.status(500).json({ erro: "Erro ao atualizar livro!" });
        }
    };

    delete = async (req, res) => {
        const { id } = req.params;

        try {
            const sucesso = await livroModel.delete(Number(id));

            if (!sucesso) {
                return res.status(404).json({ erro: "Livro não encontrado" });
            }

            res.status(200).send({ message: "Livro deletado com sucesso!" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Erro ao excluir livro!" });
        }
    };

    getById = async (req, res) => {
        const { id } = req.params;

        try {
            const livros = await livroModel.getById(parseInt(id));

            if (!livros) {
                return res.status(404).json({ erro: "Livro não encontrado" });
            }

            res.json(livros);
        } catch (error) {
            console.error(error);
            res.status(500).json({ erro: "Erro ao buscar o livro" });
        }
    };

}

export default new livroController();
