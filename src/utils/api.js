const BASE_API = 'https://shoppingproducts.herokuapp.com';

class Api {

    /**
     * Método para obtener todos los registros de los Usuarios del servicio
     */
    getProfile(){
        let promise = new Promise( (resolve, reject) => {
            fetch(`${BASE_API}/users`)
            .then( response => response.json())
            .then( data => resolve(data) )
            .catch (error =>{
                reject(error);
            })
            .catch( error => reject(error) );
        });
        return promise;
    }
    /**
     * Método para obtener todos los registros de los Usuarios del servicio
     * Utilizando async await
     */
    async getProfileWait(){
        try {
            const query = await fetch(`${BASE_API}/users`)
            const data  = await query.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    }
}

export default new Api();