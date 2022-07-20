import React, { useState } from "react";
import User from '../objects/User'
import { Link, useNavigate } from "react-router-dom";

const UserForm = props => {
    let navigate = useNavigate()

    const SaveUser=()=>{
        
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

        

        let user = {firstName: firstName.value, lastName: lastName.value, type: type, username: username.value,email: email.value, password: password.value, 
            dob: dob.value,location: location.value, instrument: instrument.value, yearsOfExp: yearsOfExp.value, bio: bio.value }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        }
        console.log(user)
        fetch('http://localhost:3001/users', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
        
        navigate('/LogIn')
    }
        
    }
    return(
        <div>
            <form style = {styles.form} id="form">
                <h2>Let's Get A User Account Created For You!</h2>
                <h3>Password Requirements:</h3>
                <ul>
                    <li>Must Contain 8 - 32 Characters</li>
                </ul>
                <div style = {styles.container}>
                    <label >Username:</label>
                    <input style = {styles.fields} id="username" type="text"></input>
                    <label>Email:</label>
                    <input style = {styles.fields} id="email" type="text"></input>
                </div>
                <div style = {styles.container}>
                    
                    <label>Password:</label>
                    <input style = {styles.fields} id="password" type="text"></input>
                    <label>Re-Enter Password:</label>
                    <input id="passConfirm" style = {styles.fields} type="text"></input>
                </div>
                <div style = {styles.container}>
                    <label>First Name:</label>
                    <input style = {styles.fields} id="nameFirst" type="text"></input>
                    <label>Last Name:</label>
                    <input style = {styles.fields} id="nameLast" type="text"></input>
                </div>
                <div style = {styles.container}>
                    
                    <label>Date of Bith:</label>
                    <input style = {styles.fields} id="age" type="date"></input>
                    <label>Location:</label>
                    <input style = {styles.fields} id="location" type="text"></input>
                </div>
                <div style = {styles.container}>    
                    <label>Instrument:</label>
                    <input style = {styles.fields} id="instrument" type="text"></input>
                    <label>Years of Experience:</label>
                    <select style = {styles.fields} id="exp">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10 or more">10+</option>
                    </select>
                    <label>Bio:</label>
                    <textarea id="bio" type="text"></textarea>
                </div>
                <button type="button" onClick={SaveUser}>Save</button>
            </form>
        </div> 
    )
}
export default UserForm

function Authenticate(){
    let a = false;
    const username = document.getElementById('username')
    const email = document.getElementById('email')
    const password = document.getElementById('password')
    const passConfirm = document.getElementById('passConfirm')
    const firstName = document.getElementById('nameFirst')
    const lastName = document.getElementById('nameLast')
    const dob = document.getElementById('age')
    const instrument = document.getElementById('instrument')
    const location = document.getElementById('location')
    const yearsOfExp = document.getElementById('exp')
    const bio = document.getElementById('bio')

    const form = document.getElementById('form')

    if(username.value === '' || password.value === '' || password.value.length < 8 || password.value.length > 32 || firstName.value === '' || lastName === '' || dob.value === '' || instrument.value === '' || location.value === '' || yearsOfExp === '' || bio === '' || email === '')
    {
        if(document.body.contains(document.getElementById('errorPop'))){
            document.getElementById('errorPop').remove()
        }
        const error = document.createElement("label")
        error.textContent = "Please do not leave any inputs blank. Password must meet requirements."
        error.id = "errorPop"
        error.style.color = "red"

        form.append(error)
    }
    else{
        a = true
    }
    if(passConfirm.value !== password.value){
        if(document.body.contains(document.getElementById('errorPopPass'))){
            document.getElementById('errorPopPass').remove()
        }
        const error = document.createElement("label")
        error.textContent = "Passwords do not match."
        error.id = "errorPopPass"
        error.style.color = "red"

        form.appendChild(error)

        a=false
    }
    
    return a;
}

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
    }
}