import axios from "axios";

const BASE_URL = `${process.env.REACT_APP_SERVER_BASE_URL}/user`
const config = (token) => {
    return {
        headers: {
              'Authorization': 'Bearer ' + token
            }      
    }
}

//signup
export const userSignup = async(user) => {
    const {data} = await axios.post(`${BASE_URL}/signup`, {...user})
    if(data) localStorage.setItem("user", JSON.stringify(data));

    return data;
}

//Login
export const userLogin = async(user) => {
    const {data} = await axios.post(`${BASE_URL}/login`, {...user})

    if(data) localStorage.setItem("user", JSON.stringify(data));

    return data;
}

//Logout
export const userLogout = ()=> {
    localStorage.removeItem("user");
}

//profile completion
export const userCompletion = async(userdata, role, token) => {
    const {data} = await axios.put(`${BASE_URL}/complete${role}`, {...userdata}, config(token));

    if(data){
        let user = JSON.parse(localStorage.getItem('user'));
        user = {...user, isCompleted: true};
        localStorage.setItem("user", JSON.stringify(user));
    }

    return data;
}

//email verification
export const userVerification = async(token) => {
    const {data} = await axios.put(`${BASE_URL}/verify`, config(token))
    return data;
}
