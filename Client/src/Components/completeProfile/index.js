import ClientProfileForm from "./client";
import FreelancerProfileForm from "./freelancer";
import {useDispatch, useSelector} from "react-redux";
import {completeProfile} from "../../reducers/user/userSlice";

function CompleteProfile() {
  const dispatch = useDispatch();
  const {isError, message, isLoading, user} = useSelector((state) => state.user);

  const onSubmit = () => {

  }

  return (
    <div>
      {
          user?.role == "Client" ? <ClientProfileForm onSubmit={onSubmit}/> : <FreelancerProfileForm onSubmit={onSubmit}/>
      }
    </div>
  )
}

export default CompleteProfile
