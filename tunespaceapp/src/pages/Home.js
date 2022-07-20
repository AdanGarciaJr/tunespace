import React from "react";
import Post from '../components/Post';
import Comment from '../components/Comment';
import Navigation from "../components/Navigation";
import { Link, useNavigate } from 'react-router-dom'
import PostContainer from "../components/PostContainer";


const Home = props => {
    let navigate = useNavigate()
    let foundUser = localStorage.getItem('storedUser');
    if(foundUser === null){
        navigate('/Login')
    }
    let user = JSON.parse(foundUser)

    const Post = (e) => {
        

        let a = Authenticate();

        if(a){
            const title = document.getElementById('title')
        const content = document.getElementById('postContent')
        let post = {title: title.value, content: content.value, username: user.username}

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(post)
        }
        fetch('http://localhost:3001/posts/', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));

        // const postContainer = document.getElementById('postContainer')
        // const current = new Date()
    
        // const div = document.createElement('div')
        // div.style = style.posts
        
        // div.innerHTML = `
        // <h3>${post.title}</h3>
        // <h4>${post.content}</h4>
        // <p>posted by ${post.username} on ${current.getDate()}</p>`
        
        // postContainer.prepend(div)
    }
    }

    console.log(foundUser)
    return(
        <section style = {styles.container}>
            <Navigation/>
            <h1 style = {styles.fonts}>Welcome To Your Home Page, {user.firstName}!</h1>
            <p style = {styles.fonts}>Write a post and let people know what is going on! This is a place for us to grow together as MUSICIANS!</p>
            <section style={style.container}>
                
                <form id="postForm">
                    <h2>Write a post now</h2>
                    <div style={style.fields}>
                        <label>Post Title: </label>
                        <input id="title"></input>
                    </div>
                    <div style={style.fields}>
                        <label>Post Content: </label>
                        <textarea id="postContent"></textarea>
                    </div>
                    <button id="post" type="button" onClick={Post}>Post</button>
                </form>
            </section>
            <section style={style.container} id="postContainer">
                <PostContainer />
            </section>
        </section>
    )
}

export default Home;

const styles = {container: {
    display: 'flex',
    flexDirection: 'column',
    boderStyle: 'solid',
    backgroundColor: 'white',  
    borderRadius: '.4rem'
    },
    
}
const style = {container: {
    marginLeft: '20%',
    backgroundColor: 'white',
    padding: '1rem',
    borderStyle: 'solid',
    borderWeight: '.5rem',
    borderRadius: '.4rem',
    boxShadow: '10px 10px 5px gray',
    maxWidth: '1000px',
    marginTop: '3rem'
}, 
button:{
    marginRight: '1rem'
},
fields: {
    paddingBottom: '1rem'
},
posts: {
    display: 'flex',
    flexDirection: 'column',
    
    margin: '1rem',
    padding: '1.5rem',
    borderRadius: '.3rem',
    marginLeft: '15%',
    marginRight: '20%',
    boxShadow: '10px 10px 5px gray',
    backgroundColor: '#f7f7f7',
    borderStyle: 'solid'
    },}

function Authenticate(){
    let a = false;
    const title = document.getElementById('title')
    const postContent = document.getElementById('postContent')

    const form = document.getElementById('postForm')

    if(title.value === '' || postContent.value === '')
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
