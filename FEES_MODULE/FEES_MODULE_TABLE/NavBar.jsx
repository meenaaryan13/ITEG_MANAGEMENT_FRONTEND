import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyle = makeStyles({
    header: {
        background: 'primary'
    },
    tabs: {
        color: '#FFFFFF',
        marginRight: 20,
        textDecoration: 'none',
        fontSize: 20
    }
})

const NavBar = () => {
    const classes = useStyle();
    return ( <
        AppBar position = "static"
        colo className = { classes.header } >
        <
        Toolbar >
        <
        NavLink className = { classes.tabs }
        to = "./"
        exact > Home < /NavLink> <
        NavLink className = { classes.tabs }
        to = "all"
        exact > All Users < /NavLink> <
        NavLink className = { classes.tabs }
        to = "add"
        index > Add User < /NavLink> < /
        Toolbar > <
        /AppBar>
    )
}

export default NavBar;