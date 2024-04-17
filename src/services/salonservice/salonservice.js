import axios from 'axios';

const URL = " http://localhost:3000/api/v1/salon";
 

export const getSalon = async  () =>{
    try {
        const response = await axios.get(URL)
        return response.data
    
    } catch (error) {
        console.log(error)
        throw new Error("Error during request setup");
    }
}