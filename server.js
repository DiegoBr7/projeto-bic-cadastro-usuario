const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.set("view engine" , "ejs");

app.set("views" , __dirname + "/views");

app.get("/" , (req,res) =>{
    res.render("index" , {titulo: "Página Renderizada" , nome: "Diego" , mensagem:null})
})

app.post("/salvar" , (req,res) =>{
    const {nome , email , id} = req.body
    console.log(nome , email , id)

    res.render("index" , {titulo: "Página Renderizada" , nome: "Diego" , mensagem:`Funcionario ${nome} cadastrado com sucesso!`})
})


// Usuários válidos (exemplo)
const usuarios = [
    { email: "admin@empresa.com", senha: "123456" },
    { email: "funcionario@empresa.com", senha: "abcdef" }
];

app.get("/login" ,(req,res) =>{
    res.render("login" , { mensagem: null })
})

app.post("/login" , (req,res) =>{
    const { email , password } = req.body
    console.log("Login : ",email , password)

    const usuarioValido = usuarios.find(user => 
        user.email == email &&
        user.senha == password
    )

    if(usuarioValido){
        res.render("login" , {mensagem: "Logado com sucesso"})
    }else{
        res.render("login" , {mensagem: "Não foi possivel logar"});
    }
});


// ____________________________________________________________________________________

let producoes = [];

app.get("/producao" , (req,res) =>{
    res.render("producao" , {producoes})
})

app.post("/producao" , (req,res) =>{
    const {id , email , custo , tempo  } = req.body
    console.log(" Producao : " , id , email , custo , tempo)

const novaProducao = {id , email , custo , tempo };
producoes.push(novaProducao);

console.log("Producao cadastrada " , novaProducao);

res.render("producao" , {producoes})

})




app.listen(PORT , () =>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})