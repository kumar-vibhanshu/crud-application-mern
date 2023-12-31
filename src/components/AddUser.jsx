import styled from "@emotion/styled";
import { FormControl, FormGroup, InputLabel, Input, Typography, Button } from "@mui/material";
import { useState } from "react";


const container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
    & > div {
        margin-top: 20px
    }
`

const defaultValue = {
    name : '',
    username: '',
    email:'',
    phone:''
}

const AddUser = () => {
    const[user, setUser] = useState(defaultValue);

    const onValueChange = (e) => {
        console.log(e.target.name, e.target.value)
        setUser({...user,[e.target.name]: e.target.value})
        console.log(user)
    }

    const addUserDetails = () =>{
        
    }

    return(
        <container>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel >Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name"/>
            </FormControl>
            <FormControl>
                <InputLabel >Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="username"/>
            </FormControl>
            <FormControl>
                <InputLabel >Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email"/>
            </FormControl>
            <FormControl>
                <InputLabel >Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="phone"/>
            </FormControl>
            <FormControl>
                <Button varient="contained" onClick={() =>addUserDetails()}>Add User</Button>
            </FormControl>
        </container>
    )
}

export default AddUser;