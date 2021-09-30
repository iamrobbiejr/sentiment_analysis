import axios from 'axios';

const baseUrl = 'http://127.0.0.1:5000/'

const add_review =   async (id, review) => {

    const request = {'productId': id, 'review': review}
    let response;
    await axios.post(baseUrl+'review', request)
        .then(res => {
            console.log(res)
            response = res;
        })
        .catch(err => {
            console.log(err)
            response = err
        })

    return response
}

const get_reviews = async () => {
    let response;
    await axios.get(baseUrl+'reviews')
        .then(res => {
            console.log(res)
            response = res;
        })
        .catch(err => {
            console.log(err)
            response = err
        })

    return response
}

const get_product_reviews = async (id) => {
    const req = {"id": id}
    let response;
    await axios.post(baseUrl+'product_reviews',req)
        .then(res => {
            console.log(res)
            response = res;
        })
        .catch(err => {
            console.log(err)
            response = err
        })

    return response
}

const get_product = async (id) => {
    const req = {"id": id}
    let response;
    await axios.post(baseUrl+'product',req)
        .then(res => {
            console.log(res)
            response = res;
        })
        .catch(err => {
            console.log(err)
            response = err
        })

    return response
}

const get_products = async () => {
    let response;
    await axios.get(baseUrl+'products')
        .then(res => {
            console.log(res)
            response = res;
        })
        .catch(err => {
            console.log(err)
            response = err
        })

    return response
}

export default {
    add_review , get_reviews, get_products, get_product_reviews, get_product
}