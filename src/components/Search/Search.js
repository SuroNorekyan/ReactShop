import { useState } from "react";
import "./Search.css";
import {Users} from "./users";
import {Table} from "./Table"

function Search(){
    const[query,setQuery] = useState("");
    const userData = ["name","surname","job"];

    const search = (data) =>{
        return data.filter(item => item.name.toLowerCase().includes(query)
        || item.surname.toLowerCase().includes(query)
        || item.job.toLowerCase().includes(query));
    }
    const searchEfficient = (data) =>{
        return data.filter(
            (item) => 
            userData.some(key => item[key].toLowerCase().includes(query))
        );
    }
    return(
        <div class = "searchDiv">
            <input type="text" placeholder="Search..."
            onChange={e => setQuery(e.target.value)}>
            </input>

        <Table data={searchEfficient(Users)}/>
           
        </div>
    )

     /* <ul className="list">
               {Users.filter((user) => 
               user.name.toLowerCase().includes(query)
               ).map(user => 
               <li key={user.id} className="listItem">
                    {user.name}
                </li>
               )}
                
               
            </ul> */
}


export default Search;