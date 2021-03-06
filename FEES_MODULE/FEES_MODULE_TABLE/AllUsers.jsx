import react, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'
import { getUsers, deleteUser } from '../Service/api';
import { Link } from 'react-router-dom';
//DROP DOWN TABLE 
// import Button from '@material-ui/core/Button';
// import { IconButton } from '@material-ui/core';
// import { faEllipsisV } from '@fortawesome/free-solid-svg-icons/faEllipsisV';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const useStyles = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: 'secondary',
            color: 'black'
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    }
})


const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        getAllUsers();
    }, []);

    const deleteUserData = async(id) => {
        await deleteUser(id);
        getAllUsers();
    }

    const getAllUsers = async() => {
        let response = await getUsers();
        setUsers(response.data);
    }

    return ( <
        Table className = { classes.table } >
        <
        TableHead >
        <
        TableRow className = { classes.thead } >
        <
        TableCell > Id < /TableCell> <
        TableCell > Name < /TableCell> <
        TableCell > Username < /TableCell> <
        TableCell > Email < /TableCell> <
        TableCell > Phone < /TableCell> <
        TableCell > < /TableCell> 

        <
        TableCell > ACTION < /TableCell> <
        TableCell > ACTIONNNN < /TableCell>

        <
        /
        TableRow > <
        /TableHead> <
        TableBody > {
            users.map((user) => ( <
                TableRow className = { classes.row }
                key = { user.id } >
                <
                TableCell > { user.id } < /TableCell> <
                TableCell > { user.name } < /TableCell> <
                TableCell > { user.username } < /TableCell> <
                TableCell > { user.email } < /TableCell> <
                TableCell > { user.phone } < /TableCell> 

                <
                TableCell >
                <
                Button color = "primary"
                variant = "contained"
                style = {
                    { marginRight: 10 }
                }
                component = { Link }
                to = { `/edit/${user.id}` } > Edit < /Button> <
                Button color = "primary"
                variant = "contained"
                onClick = {
                    () => deleteUserData(user.id)
                } > Delete < /Button>  < /
                TableCell >

                <
                TableCell >




                <
                div >
                <
                button style = {
                    { backgroundColor: "black", outline: "none", border: "none" }
                } >
                <
                i className = "far fa-ellipsis-v-alt" > < /i>

                <
                /
                button >

                <
                /
                div >

                <
                /TableCell >


                <
                /TableRow>
            ))
        }


        <
        /TableBody> < /
        Table >
    )
}

export default AllUsers;
// export default AllUsers;