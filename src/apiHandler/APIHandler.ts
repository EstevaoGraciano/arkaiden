import axios from "axios";

class ApiHandler {
    

    static post(url: string, data: any) {
        return axios.post(url, data);
    }

    static get(url, config?) {
        return axios.get(url, config);
    }
}

export default ApiHandler