import React from 'react';
import User from '../objects/User'
import Navigation from "../components/Navigation";

const Profile = props => {
    
    const foundUser = localStorage.getItem('storedUser');
    if(foundUser === null){
        window.location.replace('/Login')
    }
    const user = JSON.parse(foundUser)
    
    
    return(
        <div>
            <Navigation/>
            <section style={styles.container}>
                <h1>Hello { user.firstName }</h1>
                <h2>Age: { user.dob }</h2>
                <h2>Instrument: { user.instrument }</h2>
                <p>{user.firstName} has { user.yearsOfExp } years of experience on { user.instrument }</p>
                <section>
                    <h2>Bio:</h2>
                    <p>{user.bio}</p>
                </section>
            </section>
        </div>
    )
}

export default Profile;

const styles = {container: {
    backgroundColor: 'white',
    marginLeft: '30%',
    marginRight: '30%',
    paddingLeft: '1rem',
    paddingRight:  '1rem',
    paddingTop: '.5rem',
    paddingBottom: '.5rem'
}}