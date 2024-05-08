import { default as axios } from "axios"
const apikey = process.env.NEXT_PUBLIC_REST_API_KEY
const apiUrl = 'https://competition-e-commerce-backend-1.vercel.app/'
const axiosClient = axios.create({ baseURL: apiUrl })

export default axiosClient