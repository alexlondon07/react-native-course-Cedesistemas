import { BASE_API, HTTP_USER } from './../config';
import httpBase from '../http-base';

class HttpUser {

    async getUsers(){
        try {
            const url  = `${ BASE_API }${ HTTP_USER.getUsers }`
            const data = await httpBase.baseGet(url, {});
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    async getUserByToken(){
        try {
            
            const url  = `${ BASE_API }${ HTTP_USER.getUser }`
            let TOKEN = "csEu82q6HgtdRdewWHS1";
            const config = {
                headers: {
                    Authorization: `Bearer: ${ TOKEN }`
                }
            }
            const data = await httpBase.baseGet(url, config);
            return data;

        } catch (error) {
            console.log(error);
        }
    }


}

export default new HttpUser;