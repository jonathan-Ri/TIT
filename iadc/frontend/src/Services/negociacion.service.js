import http from './http_common'

const getAll =()=>{
    return http.get('/negociacion');
}

const get = id =>{
    return http.get(`/negociacion/${id}`);
}

const create = data =>{
    return http.post('/negociacion',data);
}
//juego.create({'id':1234, 'nombre':juego})
const update = (id, data) => {
    return http.put(`/donacion/${id}`, data);
};



const NegociacionService ={
    getAll,
    get,  
    create,
    update
};

export default NegociacionService;