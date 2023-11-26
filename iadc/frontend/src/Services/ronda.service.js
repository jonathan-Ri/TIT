import http from './http_common'

const getAll =()=>{
    return http.get('/ronda');
}

const get = id =>{
    return http.get(`/ronda/${id}`);
}

const create = data =>{
    return http.post('/ronda',data);
}
//juego.create({'id':1234, 'nombre':juego})
const update = (id, data) => {
    return http.put(`/donacion/${id}`, data);
};


const RondaService ={
    getAll,
    get,  
    create,
    update
};

export default RondaService;