import { client } from "../client";

export const getAllProducts = (afterComplete) => {
    client.get('cards/')
    .then(response => {
        afterComplete(response.data.cards);
    });
};

const getProduct = (afterComplete, id) => {
    client.get(`cards/${id}`)
    .then(response => {
        afterComplete(response.data.card);
    })
    .catch(function (error) {
        if (error.response.status === 404) {
            afterComplete(404);
        }
    })
}

const deleteProduct = (id) => {
    client.delete(`cards/${id}`)
    .then(response => {
        console.log(response.status);
    })
    .catch(function (error) {
        console.log(error);
    })
}

const updateProduct = (productDetail, id) => {
    console.log('updateProduct proddetail:' + productDetail.url);
    client.post(`cards/${id}`, {
        name: productDetail.title,
        description: productDetail.description,
        image_url: productDetail.url
    })
    .then(response => {
        console.log(response.data.card);
    })
    .catch(function (error) {
        console.log(error);
    })
}

const addProduct = (productDetail) => {
    client.post(`cards/`, {
        name: productDetail.title,
        description: productDetail.description,
        image_url: productDetail.url
    })
    .then(response => {
        console.log(response.data.card);
    })
    .catch(function (error) {
        console.log(error);
    })
}

const api = {
    getAllProducts: getAllProducts,
    getProduct: getProduct,
    deleteProduct: deleteProduct,
    updateProduct: updateProduct,
    addProduct: addProduct
}
export default api;