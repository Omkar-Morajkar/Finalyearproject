import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate, useParams } from 'react-router-dom';


function Verify (){
    const navigate = useNavigate();

    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []); 

    
   
    function getUsers() {
        axios.get('http://localhost/FinalYearProject/verify.php').then(function(response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }
    return(
        <> 
        <div className="container"> 
            <h1>Verify</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">amount</th>
                        <th scope="col">stage</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, key) =>
                        <tr key={key}>
                            <td>{user.name}</td>
                            <td>{user.amount}</td>
                            <td>{user.stage}</td>

                            <td>
                                <Link to={`user/${user.id}/edit`}  style={{marginRight: "10px" ,width:'200px'}} className="btn btn-info">Check record</Link>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
        </>
    )
}
export default Verify;