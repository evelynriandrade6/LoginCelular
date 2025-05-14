import axios  from "axios";
import * as SecureStore from 'expo-secure-store';

const api = axios.create({
    baseURL:"http://10.89.240.67:5000/api/v1/",
    headers:{
        'accept':'application/json'
    }
});

api.interceptors.request.use(
    async (config) =>{
        const token = await SecureStore.getItemAsync('token');
        console.log(token)
        if(token){
            config.headers.Authorization = `${token}`;
        }
        return config;
    },(error) => Promise.reject(error)
);

const sheets = {
    postLogin:(user)=>api.post("user/login",user),
    postCadastro:(user)=>api.post("user/",user),
    postCadastroOrganizador:(organizador)=>api.post("/organizador", organizador),
    postCadastroIngresso:(ingresso)=>api.post("/ingresso/", ingresso),
    postCadastroEvento:(evento)=>api.post("/evento/", evento),
    getIngressos: () => api.get("ingresso"),
    getEventos: () => api.get("evento"),
    getIngressosPorEvento: (idEvento) => api.get(`ingresso/evento/${idEvento}`),
    createIngresso: (dados) => api.post("/ingresso", dados)

}

export default sheets;