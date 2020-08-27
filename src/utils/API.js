//DEPENDENCIES
import  Axios from"axios";

export default {
   //AXIOS to get 20 Random
    search: () => {
        return Axios.get("https://randomuser.me/api/?results=20&nat=us");
    },
};