import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate, useParams } from 'react-router-dom';
import VerifyPerson from "./VerifyPerson";

function Verify (){
    const navigate = useNavigate();

    const [id, setId] = useState(null);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []); 
   
    function getUsers() {
        axios.get('http://localhost/FinalYearProject/verify.php').then(function(response) {
            console.log(response.data);
            setUsers(response.data);
            setId(response.data.id);
        });
    }
    return(
        <> 
        <div className="container"> 
        <form>
            <br/>
            <div style={{display: 'inline-block' ,width:'100%'}}>
            
                <input type='number' name='uid' placeholder="Enter User ID" style={{ width: '90%',background:'#e9ecef'}}/><span> </span>
                <button style={{ width:'9%', borderRadius:'10px' }}>Submit</button>
            </div>
        </form>
        <div className='divTable' style={{ background:'#e9ecef',padding: '30px', borderRadius: '20px', border: '1px solid #ccc', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)'}}>
            <h1>Verify</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">amount</th>
                        <th scope="col">stage</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, key) =>
                        <tr key={key}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.amount}</td>
                            <td>{user.stage}</td>

                            {/* <td>
                                <Link to={`pverify/${user.id}`}  style={{marginRight: "10px" ,width:'200px'}} className="btn btn-info">Check record</Link>
                            </td> */}
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </div>
        </>
    )
}
export default Verify;