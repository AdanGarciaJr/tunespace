import React from 'react';
import Logo from '../images/logo.png'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
    return(
        <div style = {styles.container}>
            <h1>
                <Link to='/Home'><img src={Logo} alt="Logo TuneSpace" width="400px"></img></Link>
            </h1>
        </div>
    )
}

export default Header;

const styles = { container: {
    paddingTop: '.5rem',
    paddingBottom: '.5rem',
    paddingLeft: '1rem',
    backgroundColor:'black'
}
}