# Rotas em pastas diferentes

### A pasta "routes" terá todos os arquivos de rotas do nosso projeto. Para usar em arquivos separados deveremos informar alguns paramentros para o express.
<br>

## Definir uma porta para o express, no meu exemplo usarei a porta 55
    const express = require('express');
    const app = express();
    const PORT = 55;

    ///INCIANDO A PORTA COM EXPRESS
    app.listen(PORT, ()=>{
    console.log("O express está rodando na porta "+PORTA)
    });

## Acessando a url http://localhost:55, veremos a mensagem "Teste de rota ok" no navegador.
    ///ROTA DE TESTE
    app.get('/', (req,res) =>{
    res.send('Teste de rota ok')
    });

##  Na arquivo "get.js", usaremos o Express e Router
    const express = require('express');
    const router = express.Router();

##  Criaremos então a rota "/get" e vamos exporta-las
    router.get('/get', (req,res)=>{
    res.send('ROTAS FUNCIONANDO');
    });
    module.exports = router;
## Agora no arquivo principal vamos criar uma variavel chamada "getRouter" contendo o endereço da rota, e usaremos objeto "Use" do express para usar as rotas do nosso arquivo "get.js"
    //USANDO AS ROTAS
    app.use('/teste', getRouter);

## Agora quando criarmos alguma outra rota, acessamos atraves da URL /teste/NOME DA NOVA ROTA
