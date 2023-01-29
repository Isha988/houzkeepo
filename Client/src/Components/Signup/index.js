import { useState } from 'react'
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {signup} from "../../reducers/user/userSlice";
import freelancingImg from '../../assets/images/freelancing49.jpg'
import {FcMoneyTransfer, FcDocument} from 'react-icons/fc'

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
    console.log(userDetail)
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
        <div className='signup-form-container'>
        <div className="signup-form">
            <form onSubmit={handleSignin}>
                <div className='top-form'>
                    <div>
                        <img src={freelancingImg}/>
                    </div>

                    <div>
                    <h2 className='heading'>Start Your Journey with <span className='highlight'>HouzKeepo</span></h2>
                    {/* <label htmlFor="name">Name :</label> */}
                    <input name="name" id="name" value={name} type='text' placeholder='name' onChange={handleChange}/>

                    {/* <label htmlFor="email">Email :</label> */}
                    <input name="email" id="email" value={email} type='email' placeholder='e-mail' onChange={handleChange}/>

                    {/* <label htmlFor="password">Password :</label> */}
                    <input name="password" id="pass" value={password} type='password' placeholder='password' onChange={handleChange}/>
                    </div>    
                </div>
                
                <div className='signup-role'>
                    <label htmlFor="clientRadio" className='role'>
                        <div>
                            <input type="radio" name="role" value="Client" id="clientRadio" onChange={handleChange} checked={role == "Client" && true}/>
                            <FcDocument className='icon' />
                        </div>
                        <p>I'm a Client, hiring for work</p>
                    </label>
                    
                    <label htmlFor="freelancerRadio" className='role'>
                        <div>
                             <input type="radio" name="role" value="Freelancer" id="freelancerRadio" onChange={handleChange} checked={role == "Freelancer" && true}/>
                            <FcMoneyTransfer className='icon'/>
                        </div>
                       <p>I'm a HouzKeepo, looking for work</p>
                    </label>
                </div>
              
                <button type="submit" onSubmit={handleSignin} >Signup</button>
            </form>

            {isError && (
              <div>{message}</div>
            )}

            {
              isLoading && <div>loading....</div>
            }
            
        </div>
    </div>
    )
}

export default Signup