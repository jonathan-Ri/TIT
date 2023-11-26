import http from './http_common'

const getAll =()=>{
    return http.get('/donacion');
}

const get = id =>{
    return http.get(`/donacion/${id}`);
}

const create = data =>{
    return http.post('/donacion',data);
}
//juego.create({'id':1234, 'nombre':juego})
const update = (id, data) => {
    return http.put(`/donacion/${id}`, data);
};



const DonacionService ={
    getAll,
    get,  
    create,
    update
};

export default DonacionService;