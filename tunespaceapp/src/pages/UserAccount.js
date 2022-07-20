import React, { setState } from 'react'
import ReactDOM, { render } from 'react-dom'
import { Link, useNavigate } from 'react-router-dom'
import Navigation from "../components/Navigation";

const UserAccount = props => {
    let navigate = useNavigate()
    let foundUser = localStorage.getItem('storedUser');
    
    if(foundUser === null){
        navigate('/Login')
    }
    
    let user = JSON.parse(foundUser)
    console.log(user.id)
    const DeleteUser = () => {
        let alert = window.confirm("Are you sure you want to delete this account?")

        if(alert){
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }
        fetch('http://localhost:3001/users/' + user.id + '/delete', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
        localStorage.clear()
        
        navigate("/login")
    }
    }
    const SaveUser=()=>{
        let storedUser = null;    
        let a = Authenticate();

        if(a){
        const username = document.getElementById('username')
        const email = document.getElementById('email')
        const password = document.getElementById('password')
        const firstName = document.getElementById('nameFirst')
        const lastName = document.getElementById('nameLast')
        const dob = document.getElementById('age')
        const instrument = document.getElementById('instrument')
        const location = document.getElementById('location')
        const yearsOfExp = document.getElementById('exp')
        const bio = document.getElementById('bio')
        const type = "user"

        username.setAttribute()

        let updateUser = {id: user.id,firstName: firstName.value, lastName: lastName.value, type: type, username: username.value,email: email.value, password: password.value, 
            dob: dob.value,location: location.value, instrument: instrument.value, yearsOfExp: yearsOfExp.value, bio: bio.value }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateUser)
        }
        console.log(user)
        fetch('http://localhost:3001/users/' + user.id, requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
        
        storedUser = updateUser

        localStorage.setItem('storedUser', JSON.stringify(storedUser))

        navigate('/Home')
    }
        
    }

    return(
        <section>
            <Navigation/>
            <h2 style={styles.fonts}>Edit {user.firstName}'s Account</h2>
            <form style = {styles.form} id="form">
                <h2>Let's Get A User Account Created For You!</h2>
                <div style = {styles.container}>
                    <label >Username:</label>
                    <input style = {styles.fields}  id="username" type="text" placeholder={user.username} contentEditable="true"/>
                    <label>Email:</label>
                    <input style = {styles.fields} placeholder={user.email} id="email" type="text"></input>
                </div>
                <div style = {styles.container}>
                    
                    <label>Password:</label>
                    <input style = {styles.fields} placeholder={user.password} id="password" type="password"></input>
                    <label>Re-Enter Password:</label>
                    <input style = {styles.fields} placeholder={user.password} type="password"></input>
                </div>
                <div style = {styles.container}>
                    <label>First Name:</label>
                    <input style = {styles.fields} placeholder={user.firstName} id="nameFirst" type="text"></input>
                    <label>Last Name:</label>
                    <input style = {styles.fields} placeholder={user.lastName} id="nameLast" type="text"></input>
                </div>
                <div style = {styles.container}>
                    
                    <label>Date of Bith:</label>
                    <input style = {styles.fields} placeholder={user.dob} id="age" type="date"></input>
                    <label>Location:</label>
                    <input style = {styles.fields} placeholder={user.location} id="location" type="text"></input>
                </div>
                <div style = {styles.container}>    
                    <label>Instrument:</label>
                    <input style = {styles.fields} placeholder={user.instrument} id="instrument" type="text"></input>
                    <label>Years of Experience:</label>
                    <select style = {styles.fields} placeholder={user.yearsOfExp} id="exp">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10+</option>
                    </select>
                    <label>Bio:</label>
                    <textarea id="bio" placeholder={foundUser.bio} type="text"></textarea>
                </div>
                <button type="button" onClick={SaveUser}>Save</button>
                <button type="button" onClick={DeleteUser}>Delete User</button>
            </form>
        </section>
    )

}

export default UserAccount

const styles = {
    container: {
        width: "100%",
        padding: "12px 20px",
        margin: "8px 0",
        boxSizing: "border-box"
    },
    form: {
        marginLeft: '35%',
    backgroundColor: 'white',
    paddingLeft: '1rem',
    borderStyle: 'solid',
    borderWeight: '.5rem',
    boxShadow: '10px 10px 5px gray',
    maxWidth: '800px',
    marginTop: '3rem',
    marginBottom: '3rem'
    },
    button: {
        marginLeft: "1rem",
        marginBottom: "1rem"

    },
    fields: {
        marginRight: "1rem"
    },
    fonts: {
        font: 'tw cen mt',
        marginLeft: '3rem'
    }
}

function Authenticate(){
    let a = false;
    const username = document.getElementById('username')
    const email = document.getElementById('email')
    const password = document.getElementById('password')
    const firstName = document.getElementById('nameFirst')
    const lastName = document.getElementById('nameLast')
    const dob = document.getElementById('age')
    const instrument = document.getElementById('instrument')
    const location = document.getElementById('location')
    const yearsOfExp = document.getElementById('exp')
    const bio = document.getElementById('bio')

    const form = document.getElementById('form')
    fetch('http://localhost:3001/users/')
        .then(response => response.json())
        .then(data => console.log(data));

    if(username.value === '' || password.value === '' || firstName.value === '' || lastName === '' || dob.value === '' || instrument.value === '' || location.value === '' || yearsOfExp === '' || bio === '' || email === '')
    {
        if(document.body.contains(document.getElementById('errorPop'))){
            document.getElementById('errorPop').remove()
        }
        const error = document.createElement("label")
        error.textContent = "Please do not leave any inputs blank."
        error.id = "errorPop"
        error.style.color = "red"

        form.append(error)
    }
    else{
        a = true
    }
    return a;
}

