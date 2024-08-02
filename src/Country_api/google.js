import { useNavigate } from 'react-router-dom';
import {signInWithGooglePopup} from '../firebase'
import image from './google_icon.png'
const SignIn = () => {
    // const image="./google_icon.png"
    const navigate=useNavigate()
    const logGoogleUser = async () => {
            const response = await signInWithGooglePopup();
            console.log(response);
            navigate("/Country")
        }
    return (
            <div style={{display:"flex",flexDirection:"row",justifyContent:"center",alignContent:'center',alignItems:"center",marginTop:"20vw"}}>
                <button onClick={logGoogleUser} className="btn" style={{border:"1px solid ",width:"30vw"}}><img src={image} alt="Google" width={50}/>Continue With Google</button>
            </div>
        )
    }
    export default SignIn;