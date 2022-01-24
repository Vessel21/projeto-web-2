const { prisma } =  require("../database");

class SuggestionsController{

    async index(request, response) { 
        const suggestions = await prisma.suggestion.findMany(); 

        return response.json(suggestions);
    }

    async  create(request, response) {
        const {text} = request.body;

        const suggestion = await prisma.suggestion.create({data: {text}})

        return response.status(201).json(suggestion); 
    }

    async delete(request, response){
        const {id} = request.params; 

        const suggestion = await prisma.suggestion.findFirst({where: {id: Number(id)}}); 

        if(!suggestion){ 
            return response.status(404).json({message: 'Suggestion does not exists'}); 
        }

        await prisma.suggestion.delete({where: {id: Number(id)}}); 

        return response.status(204).send();

    }
}

module.exports = {SuggestionsController};