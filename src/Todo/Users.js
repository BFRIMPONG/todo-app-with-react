import React from "react"

const Users = (props)=>{
  
   
const customStyle = {
    backgroundColor:props.colorStyle,
    color:"white"
}

    return(
        <div  className="userIcon" style={customStyle}>
             <h4>{props.userInitial}</h4>
        </div>
    )
}

export default Users;