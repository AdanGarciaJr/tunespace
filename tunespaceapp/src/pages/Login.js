import React, { useState } from 'react'
//let User = require('../objects/User')
import User from '../objects/User'
import Group from '../objects/Group'
import Home from '../pages/Home'
import { Link, useNavigate } from 'react-router-dom'


const Login = props => {
    let foundUser = localStorage.getItem('storedUser')
    let navigate = useNavigate()
    if(foundUser){
        //window.location.replace('/Home')
        navigate('/Home')
    }
    let storedUser = null;
    const submitButton = (e) => {
        console.log('function called')
        let type = document.getElementById('type')
        let username = document.getElementById('username')
        let password = document.getElementById('password')
        console.log(username.value)
        console.log(password.value)
        console.log(User)
        if(type.value === "Artist"){
            fetch('http://localhost:3001/users')
            .then(response => response.json())
            .then(data => {console.log(data)
                data.forEach(user => {
                    if(user.username === username.value && user.password === password.value){
                        storedUser = user;
                    }
                }
        )
            })}
        if(storedUser === null){
            let remove = document.getElementById("errorPop")
            if(document.contains(remove)){
                remove.remove()
            }
            let form = document.getElementById("error")
            let error = document.createElement("label")
            error.id = "errorPop"
            error.textContent = "Invalid Username or Password"
            error.style.color = "red"
            form.append(error)
        }
        console.log(storedUser)
        localStorage.setItem('storedUser', JSON.stringify(storedUser))
        if(storedUser != null){
            navigate('/Home')
        }
        
        
    }

    return(
        <div>
            <form style = {styles.container} id="signIn">
                <h2>Please Sign In</h2>
                <div id="error">
                    <p>What kind of user are you?</p>
                    <select id="type">
                        <option value="Artist">Artist</option>
                        <option value="Group">Group</option>
                    </select>
                </div>
                <div style={styles.fields}>
                    <label for="username">Username:</label>
                    <input id="username" name="user" type="text"></input>
                </div>
                <div style={styles.fields}>
                    <label for="password">Password:</label>
                    <input id="password" name="pass" type="password"></input>
                </div>
                <button style={styles.button} id="submit" type="button" onClick={submitButton}>Sign In</button>
                <Link to="/Create">Create New Account</Link>
            </form>
        </div>
    )
}

export default Login

const styles = {container: {
    marginLeft: '35%',
    backgroundColor: 'white',
    padding: '1rem',
    borderStyle: 'solid',
    borderWeight: '.5rem',
    boxShadow: '10px 10px 5px gray',
    maxWidth: '500px',
    marginTop: '3rem'
}, 
button:{
    marginRight: '1rem'
},
fields: {
    paddingBottom: '1rem'
}}