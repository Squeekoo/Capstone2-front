import axios from "axios";

const REACT_APP_BASE_URL = "http://localhost:3001";

const access_key = process.env.API_ACCESS_KEY;
const secret_key = process.env.API_SECRET_KEY;

const auth_key = Buffer.from(`${access_key}:${secret_key}`).toString('base64');

/** API Class */

class LocInfoApi {
    static async request(endpoint, data = {}, method = "get") {
        console.debug("API Call:", endpoint, data, method);

        //there are multiple ways to pass an authorization token, this is how you pass it in the header.
        //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
        const url = `${REACT_APP_BASE_URL}/${endpoint}`;
        const headers = { Authorization: `Basic ${auth_key}` };
        const params = (method === "get")
            ? data
            : {};

        try {
            return (await axios({ url, method, data, params, headers })).data;
        } catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }
    // Individual API Routes

    static async getLocations(name) {
        let response = await this.request(`locations/${name}`);
        return response.data;
    }

    static async getLocationById(id) {
        let response = await this.request(`location/${id}`);
        return response.data;
    }
}

export default LocInfoApi;