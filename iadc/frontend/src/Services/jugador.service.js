import http from './http_common'

const getAll =()=>{
    return http.get('/jugador');
}

const get = id =>{
    return http.get(`/jugador/${id}`);
}

const getT = id =>{
    return http.get(`/jugador/?id_equipo=${id}`);
}

const create = data=>{
    return http.post('/jugador',data);
}

const update = (id, data) => {
    return http.put(`/jugador/${id}`, data);
};

const remove = id =>{
    return http.delete(`/jugador/${id}`);
}

const JugadorService ={
    getAll,
    get,  
    create,
    update,
    getT,
    remove
};

export default JugadorService;