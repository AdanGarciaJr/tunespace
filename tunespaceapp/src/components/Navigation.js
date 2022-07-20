import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return(
        <nav style = {styles.container}>
            <ul style = {styles.list}>
                <li style = {styles.list}><NavLink style={styles.links} to="/Home">Home</NavLink></li>
                <li style = {styles.list}><NavLink style={styles.links} to="/Profile">Profile</NavLink></li>
                <li style = {styles.list}><NavLink style={styles.links} to="/UserAccount">Account</NavLink></li>
                <li style = {styles.list}><NavLink style={styles.links} to="/About">About</NavLink></li>
                <li style = {styles.list}><NavLink style={styles.links} onClick={LogOut} to="/LogIn">Logout</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navigation;

function LogOut(){
    localStorage.clear()
}

const styles = {
    container: {
        
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#DADAD9', //gainsboro
        paddingTop: '1.6rem',
        paddingBottom: '1.6rem'
    },
    list: {
        margin: 'auto',
        listStyleType: 'none',
        display: 'inline-block', 
        paddingLeft: '1rem',
        paddingRight: '3rem',
    },
    links: {
        textDecoration: 'none',
        color: 'black',
        fontSize: '1rem'
    }
}