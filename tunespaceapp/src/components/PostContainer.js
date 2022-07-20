import React, { useState, useEffect } from 'react'
import Post from '../components/Post'
import Comment from '../components/Comment'
import { Link, useNavigate } from 'react-router-dom'

const PostContainer = props => {

    let navigate = useNavigate()
    let foundUser = localStorage.getItem('storedUser');
    if(foundUser === null){
        navigate('/Login')
    }
    let user = JSON.parse(foundUser)
    const [ fetchedData, dataFetched ] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/posts')
        .then(response => response.json())
        .then(data => dataFetched(data));
    })

    return(
        <section>
            {fetchedData.slice(0).reverse().map((post) => {
                return(
                <Post title={post.title} content={post.content} username={post.username} date={post.createdAt} />
            )})}
            
        </section>
    )
}
export default PostContainer

const styles = {container: {
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
    },
    body: {
        marginLeft: '15rem',
        marginRight: '15rem'
    }
}
