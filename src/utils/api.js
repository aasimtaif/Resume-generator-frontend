import axios from "axios";
const API = axios.create({
    baseURL: "http://localhost:2000/",
});

API.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        console.log(` ${token}`)

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

const login = async(input) =>{
const response = await API.post("login",input)
console.log(response.data)
return response.data
}


const signup = async(input) =>{
    console.log(input)
    const response = await API.post("signup",input)
    console.log(response.data)
    return response.data
    }
    const postResume = async(input) =>{
        console.log(input)
        const response = await API.post("form",input)
        console.log(response)
        return response
    }

    const getUserResume = async(userId) =>{
        const response = await API.get(`resume/user/${userId}`)
        console.log(response.data)
        return response.data
    }
    const getUserResumeByResumeId = async(resumeId) =>{
        const response = await API.get(`resume/${resumeId}`)
        console.log(response.data[0])
        return response.data[0]
    }

export default {login,getUserResume,signup,postResume,getUserResumeByResumeId}