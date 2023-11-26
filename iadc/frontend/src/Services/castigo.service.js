import http from './http_common'

const getAll =()=>{
    return http.get('/castigo');
}

const get = id =>{
    return http.get(`/castigo/${id}`);
}

const create = data =>{
    return http.post('/castigo',data);
}
//juego.create({'id':1234, 'nombre':juego})
const update = (id, data) => {
    return http.put(`/castigo/${id}`, data);
};



const CastigoService ={
    getAll,
    get,  
    create,
    update
};

export default CastigoService;