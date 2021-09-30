import axios from 'axios';

const baseUrl = 'http://127.0.0.1:5000/'

const add_review =   async (id, review) => {

    const request = {'product_id': id, 'review': review}

    await axios.post(baseUrl+'review', request)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}

export default {
    add_review
}