import axios from "axios";
import stable from "../const";
import {serializeObject} from "../utils/Serializer";
import  {BailleurFormData} from "../utils/formData"

class BailleurService{
    constructor(){}
    add(bailleur){
        delete(bailleur.modal);
        delete(bailleur.id);
        return axios.post(`${stable.API_URL}/${BailleurFormData.addUrl}&${serializeObject(bailleur)}`,{});
    }

    edit(bailleur){
        delete(bailleur.modal);
        bailleur.type == "particulier" ? bailleur.type = 1 : bailleur.type = 2;
        return axios.post(`${stable.API_URL}/${BailleurFormData.editUrl}&${serializeObject(bailleur)}`,{});
    }
    delete(bailleur){
        delete(bailleur.modal);
        return axios.delete(`${stable.API_URL}/${BailleurFormData.deleteUrl}`,bailleur);
    }

    getBailleurs(){
        return axios.get(`${stable.API_URL}/MainServlet?action=getBailleurs`);
    }

    getTypes(){
        return axios.get(`${stable.API_URL}/MainServlet?action=getTypes`);
    }

}

export default BailleurService