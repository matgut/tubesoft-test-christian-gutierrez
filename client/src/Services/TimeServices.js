import axios from 'axios';
const apiHost = process.env.REACT_APP_API_HOST

export const createTime = async (data) => {
    const config = {
        headers:{
            "content-type": "application/json"
        }
    }

    const resp = await axios.post(`${apiHost}/api/v1/times`,data,config);

    return resp;
}


