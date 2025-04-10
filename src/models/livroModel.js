import prisma from "../../prisma/client.js";

class LivroModel {
    getAll = async () => {
        return await prisma.livro.findMany();

    };

    create = async (title, author, publisher, isbn, category, year, description) => {
        return await prisma.livro.create({
            data: {
                title,
                author,
                publisher,
                isbn,
                category,
                year,
                description,

            },
        });
    };

    update = async (id, title, author, publisher, isbn, category, year, description) => {
        try {
            const livro = await prisma.livro.update({
                where: { id },
                data: {
                    title,
                    author,
                    publisher,
                    isbn,
                    category,
                    year,
                    description,

                },
            });

            return livro;
        } catch (error) {
            console.log("Error", error);
            throw error;
        }
    };

    delete = async (id) => {
        try {
            const livroDeletado = await prisma.livro.delete({
                where: { id },
            });

            return livroDeletado;
        } catch (error) {
            console.log("Erro ao deletar o livro!", error);
            throw error;
        }
    };

}

export default new LivroModel();