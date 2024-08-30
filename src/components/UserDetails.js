import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const UserDetails = () => {
    const [users,setUsers] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8080/api/users/all')
          .then(response => {
            setUsers(response.data);
           console.log(response.data);
          })
          .catch(error => {
            console.error("There was an error fetching the users",error);
          })
      },[]);
  return (
    <div>
      <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Password</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {users.map(user=>(
          <TableRow>
               <TableCell id={user.id}>{user.id}</TableCell>
               <TableCell>{user.username}</TableCell>
               <TableCell>{user.password}</TableCell>
               <TableCell>{user.email}</TableCell>
               <TableCell>{user.role === null ? '' : user.role.roleName}</TableCell>
          </TableRow>
           ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default UserDetails
