import http from './http_common'

const getAll =()=>{
    return http.get('/prestigio');
}

const get = id =>{
    return http.get(`/prestigio/${id}`);
}

const create = data =>{
    return http.post('/prestigio',data);
}
//juego.create({'id':1234, 'nombre':juego})
const update = (id, data) => {
    return http.put(`/donacion/${id}`, data);
};



const PrestigioService ={
    getAll,
    get,  
    create,
    update
};

export default PrestigioService;