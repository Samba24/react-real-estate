import axios from "axios";
import API_URL from "../const";

class UserService {

    constructor(){}

    auth(credentials){
        return axios.post(`${API_URL}/auth`,credentials);
    }

    isConnected(){
        return axios.get(`${API_URL}/verify`);
    }

}

export default UserService