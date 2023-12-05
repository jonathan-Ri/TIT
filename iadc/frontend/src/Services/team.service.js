import http from './http_common'

const getAll =()=>{
    return http.get('/equipo');
}

const get = id =>{
    return http.get(`/equipo/${id}`);
}

const create = data=>{
    return http.post('/equipo',data);
}

const update = (id, data) => {
    return http.put(`/equipo/${id}`, data);
};

const TeamService ={
    getAll,
    get,  
    create,
    update
};

export default TeamService;