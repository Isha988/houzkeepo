import React, {useState} from 'react'
// import {ClientSignupLink} from '../Signup/Client'
// import {FreelancerSignupLink} from '../Signup/Freelancer'
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../reducers/user/userSlice";


// const FreelancerSignin = () => (
//   <div className='freelancer-sign-in-page-container'>
//    <div className='sign-in-page-left'>
//     <SigninForm />
//    </div>
//    <div className='sign-in-page-right'>   
//     <FreelancerSignupLink />
//    </div>
// </div>
// )
// const ClientSignin = () => (
//   <div className='client-sign-in-page-container'>
//    <div className='sign-in-page-left'>
//     <SigninForm />
//    </div>
//    <div className='sign-in-page-right'>   
//     <ClientSignupLink />
//    </div>
// </div>
// )

// const SigninPage = () => (
//     <div className='sign-in-page-container'>
//         <div className='sign-in-page-left'>
//          <SigninForm />
//           {/* <ForgetPasswordLink /> */}
//         </div>
//         <div className='sign-in-page-right'>   
//           <SignupLink />
//         </div>
//     </div>
// )

const SigninForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {isError, message, isLoading} = useSelector((state) => state.user);

    const [userDetail, setUserDetail] = useState({
        email: '',
        password: '',
        error: null
    })

const {email, password, error} = userDetail

function handleDetailsChange(e) {
    setUserDetail(prevDetail => ({...prevDetail, [e.target.name]: e.target.value}))
}
async function handleSignin(e) {
   try{
      e.preventDefault()
      const response = await dispatch(login({email, password})).unwrap();
      console.log(response);
      if(!response.user.isCompleted){
        navigate("/complete-profile");
      }
      
   }catch(error){

   }
}

const invalidSignIn = email === '' || password === ''

  return (
    <div className='signin-form-container'>
          <h2 className='m-heading'>Sign In</h2>
            <form className='sign-in-form' onSubmit={handleSignin}>
                <input 
                  type="email"
                  name="email"
                  placeholder='Email Address'
                  onChange={handleDetailsChange}
                  value={email} />

                <input type="password"
                  name="password"
                  placeholder='Password'
                  onChange={handleDetailsChange}
                  value={password} />

                  <button disabled={invalidSignIn} type="submit" onSubmit={handleSignin}>Sign In</button>
                  {error && <p>{error.message}</p>}
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


// export {FreelancerSignin}
// export {ClientSignin}

export default SigninForm