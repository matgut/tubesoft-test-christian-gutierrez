import axios from 'axios';


export const createTime = async (data) => {
    const config = {
        headers:{
            "content-type": "application/json"
        }
    }

    const resp = await axios.post('http://localhost:4000/api/v1/times',data,config);

    return resp;
}


