import React from 'react'
import { Link } from 'react-router-dom';

const Post = props => {
    return(
        <section style={styles.container}>
            <h3>{props.title}</h3>
            <h4>{props.content}</h4>
            <p>posted by {props.username} on {props.date}</p>
        </section>
    )
}

export default Post;

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
    },
    title: {
        font: 'tw cen mt',
        fontSize:'2rem'
    }
}