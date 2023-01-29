import { useState } from 'react'
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {signup} from "../../reducers/user/userSlice";

function Signup({userRole}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {isError, message, isLoading} = useSelector((state) => state.user);

    const [userDetail, setUserDetail] = useState({
        name: '',
        email: '',
        password: '',
        role: userRole,
        error: null
    })

    const {name, email, password, role} = userDetail;

    function handleChange(e) {
        setUserDetail(prevData => ({
             ...prevData,
            [e.target.name]: e.target.value
        }))
     }

    async function handleSignin(e) {
        try{
            e.preventDefault();
            await dispatch(signup({name, email, password, role})).unwrap();
            navigate("/complete-profile");
            
        }catch(error){

        }
    }

    

    return (
        <div className="signup-form">
            <form onSubmit={handleSignin}>
                <label htmlFor="name">Name :</label>
                <input name="name" id="name" value={name} type='text' placeholder='enter your name' onChange={handleChange}/>

                <label htmlFor="email">Email :</label>
                <input name="email" id="email" value={email} type='email' placeholder='enter your email' onChange={handleChange}/>

                <label htmlFor="password">Password :</label>
                <input name="password" id="pass" value={password} type='password' placeholder='enter a strong password' onChange={handleChange}/>

                <label htmlFor="role">Join as client or freelancer:</label>
                    <input type="radio" name="role" value="Client" id="clientRadio" onChange={handleChange} checked={role == "Client" && true}/>
                    <label htmlFor="clientRadio">I'm a Client, hiring for work</label>

                    <input type="radio" name="role" value="Freelancer" id="freelancerRadio" onChange={handleChange} checked={role == "Freelancer" && true}/>
                    <label htmlFor="freelancerRadio">I'm a HouzKeepo, looking for work</label>

                <button type="submit" onSubmit={handleSignin} >Signup</button>
            </form>

            {isError && (
              <div>{message}</div>
            )}

            {
              isLoading && <div>loading....</div>
            }
            
        </div>
    )
}

export default Signup
