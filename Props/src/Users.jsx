import { Component } from "react";

class Users extends Component{

    constructor(props){
        super();
        console.log(props);
    }

    render(){
        return(
            <>
              <h1>Users</h1>
            {
                this.props.yash.map((user,i)=>{
                    const{id,name,age}=user;

                    return(
                        <>
                         <h2>{user.id}</h2>
                         <h2>{user.name}</h2>
                         <h2>{user.age}</h2>
                    </>
                             );
                })
            }
            </>
          
        )
    }
}

export default Users;