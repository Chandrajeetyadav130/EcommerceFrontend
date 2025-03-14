import React, {useEffect}from "react"
import MetaData from "../layout/MetaData"
import { useSelector } from "react-redux"
import Loader from "../layout/Loader/Loader"
import { Link, useNavigate} from "react-router-dom"
import "./Profile.css"
const Profile = () => {
    const navigate=useNavigate()
    const { user, isAuthenticated, loading } = useSelector(state => state.userReducer)
    useEffect(()=>{
      if(isAuthenticated===false){
        // <Navigate to={"/login"}/>
         navigate("/")
      }
      else{
        navigate("/account")

      }
    },[loading,navigate,isAuthenticated])
    return (
        <React.Fragment>
            {loading ? <Loader /> : (
                <React.Fragment>
                    <MetaData title={`${user?.name}`} />
                    <div className="profileContainer">
                        <div>
                            <h1>My profile</h1>
                            <img src={user?.avatar?.url} alt={user?.name} />
                            <Link to="/me/update">Edit Profile</Link>
                        </div>
                        <div>
                            <div>
                                <h4>full name</h4>
                                <p>{user?.name}</p>
                            </div>
                            <div>
                                <h4>Email</h4>
                                <p>{user?.email}</p>
                            </div>
                            <div>
                                <h4>Joined on </h4>
                                <p>{String(user?.createdAt).substr(0,10)}</p>
                            </div>
                            <div className="last_child_link">
                                <Link to="/order">My order</Link>
                                <Link to="/password/update">Change Password</Link>
                            </div>
                        </div>


                    </div>
                </React.Fragment>
            )}
        </React.Fragment>
    )
}
export default Profile