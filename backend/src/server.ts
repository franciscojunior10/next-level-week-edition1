import express from 'express';

const app = express();

app.get('/users', (req, res) => {
    res.send('kkk')
});

app.listen(3333, () => {
    console.log('Servidor Executando! ... http://localhost:3333');
});