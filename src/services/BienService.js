import axios from "axios";
import stable from "../const";
import  {BienFormData} from "../utils/formData";
import {serializeObject} from "../utils/Serializer";

class BienService{
    constructor(){}
    add(bien){
        delete(bien.modal);
        delete(bien.id);
        return axios.post(`${stable.API_URL}/${BienFormData.addUrl}&${serializeObject(bien)}`,{});
    }

    edit(bien){
        delete(bien.modal);
        serializeObject(bien);
        return axios.post(`${stable.API_URL}/${BienFormData.editUrl}&${serializeObject(bien)}`,bien);
    }
    delete(bien){
        delete(bien.modal);
        return axios.delete(`${stable.API_URL}/${BienFormData.deleteUrl}&${serializeObject(bien)}`,{});
    }

    getBiens(){
        return axios.get(`${stable.API_URL}/MainServlet?action=getBiens`);
    }

    findById(id){
        return axios.get(`${stable.API_URL}/MainServlet?action=getBien&id=${id}`);
    }

}

export default BienService