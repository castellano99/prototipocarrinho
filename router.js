const express = require("express")
const path = require("path")
const db = require("./db")

const app = express()

app.use(express.static('public'))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'))
})

app.post('/comprar/:productId', (req, res) => {
    const productId = req.params.productId;
  
    const sql = 'UPDATE produtos SET qnt_prod = qnt_prod - 1 WHERE id = ?';
  
    db.query(sql, [productId], (error, results) => {
      if (error) {
        console.error('Erro na atualização do estoque:', error);
        return res.status(500).json({ message: 'Erro na compra.' });
      }
  
      console.log(`Produto com id ${productId} foi comprado com sucesso.`);
      return res.status(200).json({ message: 'Compra bem-sucedida.' });
    });
  });
  

app.listen(3000, () => {
    console.log(`Servidor rodando na porta`);
});