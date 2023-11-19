import http from './http_common'

const getAll =()=>{
    return http.get('/team');
}

const get = id =>{
    return http.get(`/team/${id}`);
}

const create = data=()=>{
    return http.post('/team',data);
}

const update = (id, data) => {
    return http.put(`/team/${id}`, data);
};

const TeamService ={
    getAll,
    get,  
    create,
    update
};

export default TeamService;