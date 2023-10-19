const mysql = require("mysql2")

const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"",
    database:"testecarrinho"
})

db.connect((err) => {
    if (err){
        console.log("Erro ao conectar ao banco de dados")
        return
    }
    console.log('Conexão bem sucedida')
})

module.exports = db