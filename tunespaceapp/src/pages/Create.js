import React, { setState } from 'react'
import ReactDOM from 'react-dom'
import { Link, useNavigate } from 'react-router-dom'



const Create = props => {
    let navigate = useNavigate()
    console.log(props)
    function Continue(){
        
        const select = document.getElementById('user_type');
        const form = document.createElement('div')
        if(select.value === "Artist"){
            navigate('/UserForm')
        }
        else if(select.value === "Group"){
            navigate('/GroupForm')
        }
    }
    return(
        <div>
            <form id="create_form" style={styles.container}>
                <h2>Welcome to TuneSpace! Lets create your account!</h2>
                <p>What kind of user are YOU?</p>
                <select id="user_type">
                    <option value="Artist">Artist</option>
                    <option value="Group">Group</option>
                </select>
                <button id="continue_button" type="button" onClick={Continue}>Continue</button>
            </form>
        </div>
    )
}
export default Create

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