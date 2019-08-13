import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization : 'Client-ID 881bc9617872b31b7e31aa9a5a0befee5ad196abde479fe2a2fde87167b09ec7'
    }
})