import http from './http_common'

const getAll =()=>{
    return http.get('/juego');
}

const get = id =>{
    return http.get(`/juego/${id}`);
}

const create = data =>{
    return http.post('/juego',data);
}
//juego.create({'id':1234, 'nombre':juego})
const update = (id, data) => {
    return http.put(`/juego/${id}`, data);
};
const remove = id =>{
    return http.delete(`/jugador/${id}`);
}
const JuegoService ={
    getAll,
    get,  
    create,
    update,
    remove
};

export default JuegoService;

