import React, { setState } from 'react'
import Navigation from "../components/Navigation";

const About = props => {
    return(
        <section>
            <Navigation/>
            <section style={styles.container}>
            <section >
                <h2>What is TuneSpace?</h2>
                <p>TuneSpace is a website that is meant for musicians created by musicians. The plan for this site is for musicians, businesses, 
                    and musical groups to be able to create an account that can be used as a way to network.</p>
            </section>
            <section>
                <h2>Musician/Artist Account Future Features</h2>
                <ul>
                    <li>Post and comment on a public news feed in order to reach out to local groups looking for artists or businesses looking for an act.</li>
                    <li>Post videos and photos showcasing abilities on their profile. </li>
                    <li>Join existing groups or ceate a group/band.</li>
                    <li>Reply to gig posts on a gig board.</li>
                </ul>
            </section>
            <section>
                <h2>Group/Band Account Future Features</h2>
                <ul>
                    <li>Will require someone to take the role of an Admin.</li>
                    <li>Post and comment on a public news feed in order to reach out to local artists looking for a group or businesses looking for an act.</li>
                    <li>Post videos and photos showcasing abilities on their profile.</li>
                    <li>Add artists to the group and list what their role is.</li>
                    <li>Reply to gig posts on a gig board.</li>
                </ul>
            </section>
            <section>
                <h2>Business Account (Implemented at a later time)</h2>
                <ul>
                    <li>Will require someone to take the role of an Admin.</li>
                    <li>Post and comment on a public news feed in order to reach out to local talent</li>
                    <li>Create gig posts on a gig board.</li>
                    <li>Create events and list the groups that will be there</li>
                </ul>
                <i>All accounts will have a profile that will list their posts and their about section.</i>
            </section>
            </section>
        </section>
    )
}
export default About;

const styles = {
    container: {
        width: "100%",
        padding: "12px 6rem",
        margin: "3rem 0",
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