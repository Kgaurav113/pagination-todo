import { useContext } from "react"
import { Link} from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export const RequiredAuth = ({children})=>{
const {isAuth}=useContext(AuthContext);
return isAuth?(
    <div>
        {children}
    </div>
):
//   get the token from auth context and if token exists return the children otherwise return the follwoing
 <h3>Please <Link to = "/login">login</Link> to access this page</h3>
}