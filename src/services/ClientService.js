import axios from "axios";
import stable from "../const";
import  {ClientFormData} from "../utils/formData";
import {serializeObject} from "../utils/Serializer";

class ClientService{
    constructor(){}
    add(client){
        delete(client.modal);
        delete(client.id);
        return axios.post(`${stable.API_URL}/${ClientFormData.addUrl}&${serializeObject(client)}`,{});
    }

    edit(client){
        delete(client.modal);
        return axios.post(`${stable.API_URL}/${ClientFormData.editUrl}&${serializeObject(client)}`,client);
    }
    delete(client){
        delete(client.modal);
        return axios.delete(`${stable.API_URL}/${ClientFormData.deleteUrl}&${serializeObject(client)}`,client);
    }

    getClients(){
        return axios.get(`${stable.API_URL}/MainServlet?action=getClients`);
    }

}

export default ClientService