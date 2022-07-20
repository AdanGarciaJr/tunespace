import React, { useState } from "react";
import Group from '../objects/Group'
import { Link, useNavigate } from 'react-router-dom'

const UserForm = props => {
    let navigate = useNavigate()
    
    const SaveUser=()=>{
        
        let a = Authenticate();
        if(a){
        const username = document.getElementById('username')
        const email = document.getElementById('email')
        const genre = document.getElementById('genre')
        const password = document.getElementById('password')
        const name = document.getElementById('name')
        const bio = document.getElementById('bio')
        const location = document.getElementById('location')

        const user = {
            groupName: name.value,
            type: "group",
            username: username.value,
            email: email.value,
            password: password.value,
            location: location.value,
            genre: genre.value,
            bio: bio.value
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        }
        console.log(user)
        fetch('http://localhost:3001/groups', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
        
        navigate('/LogIn')
        }
        
    }
    return(
        <div>
            <form style = {styles.form} id="form">
                <h2 style = {styles.container} >Let's Get A Group Account Created For You!</h2>
                <div style = {styles.container}>
                    <label>Username:</label>
                    <input style = {styles.fields} id="username" type="text"></input>
                    <label>Email:</label>
                    <input style = {styles.fields} id="email" type="text"></input>
                </div>
                <div style = {styles.container}>
                    <label>Password:</label>
                    <input style = {styles.fields} id="password" type="text"></input>
                    <label>Re-Enter Password:</label>
                    <input style = {styles.fields} type="text"></input>
                    
                </div>
                <div style = {styles.container}>
                    <label>Group Name:</label>
                    <input style = {styles.fields} id="name" type="text"></input>
                    <label>Location:</label>
                    <input style = {styles.fields} id="location" type="text"></input>
                </div>
                <div style = {styles.container}>    
                    <label>Genre:</label>
                    <select style = {styles.fields} id="genre">
                        <option value="Metal">Metal</option>
                        <option value="Rock">Rock</option>
                        <option value="Hip Hop">Hip Hop</option>
                        <option value="Pop">Pop</option>
                        <option value="Jazz">Jazz</option>
                        <option value="Country">Country</option>
                        <option value="Electronic">Electronic</option>
                        <option value="Punk">Punk</option>
                        <option value="Blues">Blues</option>
                        <option value="Indie">Indie</option>
                        <option value="Classical">Classical</option>
                        <option value="Heavy Metal">Heavy Metal</option>
                    </select>
                    <label>Bio:</label>
                    <textarea id="bio" type="text"></textarea>
                </div>
                <button style = {styles.button} type="button" onClick={SaveUser}>Save</button>
            </form>
        </div> 
    )
}
export default UserForm

function Authenticate(){
    const form = document.getElementById('form')
    const username = document.getElementById('username')
    const email = document.getElementById('email')
    const genre = document.getElementById('genre')
    const password = document.getElementById('password')
    const name = document.getElementById('name')
    const bio = document.getElementById('bio')
    const location = document.getElementById('location')

    if(username.value === '' || password.value === '' || name.value === '' || genre.value === '' || email.value === '' || location.value === '' || bio.value === '')
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
    padding: '1rem',
    borderStyle: 'solid',
    borderWeight: '.5rem',
    boxShadow: '10px 10px 5px gray',
    maxWidth: '700px',
    marginTop: '3rem',
    marginBottom: '3rem'
    },
    button: {
        marginLeft: "1rem",

    },
    fields: {
        marginRight: "2rem"
    }
}