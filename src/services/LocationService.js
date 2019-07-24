import axios from "axios";
import stable from "../const";
import {serializeObject} from "../utils/Serializer"
import  {LocationFormData} from "../utils/formData"

class LocationService{
    constructor(){}

    add(location){
        delete(location.modal);
        delete(location.id);
        delete(location.prix_bien);
        delete(location.adresse);
        return axios.post(`${stable.API_URL}/${LocationFormData.addUrl}&${serializeObject(location)}`,{});
    }

    edit(location){
        delete(location.modal);
        return axios.post(`${stable.API_URL}/${LocationFormData.editUrl}`,location);
    }
    delete(location){
        delete(location.modal);
        return axios.delete(`${stable.API_URL}/${LocationFormData.deleteUrl}`,location);
    }

}

export default LocationService