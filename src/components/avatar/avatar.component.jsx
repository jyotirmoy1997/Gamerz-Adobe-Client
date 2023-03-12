import "./avatar.styles.css"
import defaultDp from "../../../assets/dp.jpg"

const Avatar = ({allUsers, id}) => {
    if (Object.keys(allUsers).length === 0){
        return <h5>Loading...</h5>
    }
    return(
    <div className="avatar-wrapper">
        <img 
            src={allUsers[`${id}`].profilePicture.length > 1 ?  
                allUsers[`${id}`].profilePicture : defaultDp} 
            alt="" srcSet="" 
            height={50} 
            width={50}
        /> 
        <span>
            {allUsers[`${id}`].name}
        </span>
    </div>
    )
}

export default Avatar