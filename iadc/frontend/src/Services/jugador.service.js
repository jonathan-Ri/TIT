import http from './http_common'

const getAll =()=>{
    return http.get('/jugador');
}

const get = id =>{
    return http.get(`/jugador/${id}`);
}

const create = data=()=>{
    return http.post('/jugador',data);
}

const update = (id, data) => {
    return http.put(`/jugador/${id}`, data);
};

const JugadorService ={
    getAll,
    get,  
    create,
    update
};

export default JugadorService;