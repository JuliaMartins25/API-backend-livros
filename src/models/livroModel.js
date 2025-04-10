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
}

export default new LivroModel();