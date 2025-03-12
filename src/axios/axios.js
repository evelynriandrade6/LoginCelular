import axios  from "axios";

const api = axios.create({
    baseURL:"http://10.89.240.67:5000/api/v1/",
    headers:{
        'accept':'application/json'
    }
});

const sheets = {
    postLogin:(user)=>api.post("user/login",user),
    postCadastro:(user)=>api.post("user/",user),
    postCadastroOrganizador:(organizador)=>api.post("/organizador", organizador),
    postCadastroIngresso:(ingresso)=>api.post("/ingresso/", ingresso),
    postCadastroEvento:(evento)=>api.post("/evento/", evento)

}

export default sheets;