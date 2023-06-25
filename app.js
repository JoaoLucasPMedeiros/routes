const express = require('express');
const app = express();
const PORT = 55;
const getRouter = require('./routes/get')



///INCIANDO A PORTA COM EXPRESS
app.listen(PORT, ()=>{
    console.log(`O express está rodando na porta ${PORT}`)
});


///ROTA DE TESTE
app.get('/', (req,res) =>{
    res.send('Teste de rota ok')
});

//USANDO AS ROTAS
app.use('/teste', getRouter)