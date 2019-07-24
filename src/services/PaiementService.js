import axios from "axios";
import stable from "../const";
import { PaiementFormData } from "../utils/formData"
import {serializeObject} from "../utils/Serializer";

class PaiementService {
    constructor() { }

    add(paiement) {
        delete (paiement.modal);
        delete (paiement.id);
        delete (paiement.date);
        let x = new Date()
        paiement.annee = x.getFullYear();
        paiement.mode == 1 ? paiement.libelle = "cheque" : paiement.libelle = "comptant";
        return axios.post(`${stable.API_URL}/${PaiementFormData.addUrl}&${serializeObject(paiement)}`, {});
    }

    edit(paiement) {
        delete (paiement.modal);
        return axios.post(`${stable.API_URL}/${PaiementFormData.editUrl}`, paiement);
    }
    delete(paiement) {
        delete (paiement.modal);
        return axios.delete(`${stable.API_URL}/${PaiementFormData.deleteUrl}`, paiement);
    }
    async getPaiements(){
        return await axios.get(`${stable.API_URL}/MainServlet?action=getPaiements`);
    }

}

export default PaiementService