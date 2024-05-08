import axiosClient from "./axiosClient"


const getOneProduct = (selectedProduct: string) => axiosClient.get(`/products/${selectedProduct}`)

export default {
    getOneProduct
}