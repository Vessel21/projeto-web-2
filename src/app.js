const { SuggestionsController } =  require("./controllers/SuggestionsController"); 

const suggestionsController = new SuggestionsController(); 

const express = require("express"); 

const app = express(); 

app.use(express.json()); 

app.use(express.static('public')); 

app.get('/suggestions', suggestionsController.index) 

app.post('/suggestions', suggestionsController.create); 

app.delete('/suggestions/:id', suggestionsController.delete )

app.listen(3000, () => console.log('Server is listening on port 3000'));