import axios from 'axios';

async function getData(url){
    const data = await axios.get(url)
    return data.data
}

export default {
    getData
}