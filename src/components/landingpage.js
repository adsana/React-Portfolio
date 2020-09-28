import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landingpage extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/119003235_10220102241759681_4646740287047526961_o.jpg?_nc_cat=111&_nc_sid=84a396&_nc_ohc=gnsby_rMTH4AX-9qUq8&_nc_ht=scontent-lga3-1.xx&oh=87f1211d38c2432476ea05273ed97c1a&oe=5F990B9A"
                            alt="me"
                            className="me-img"
                        />
                        <div className="banner-text">
                            <h1>Junior Full Stack Web Developer</h1>
                            
                            <hr/>
                        <p>HTML/CSS | Bootstrap | Javascript | React | NodeJS | Express | MongoDB</p>  
                        <div className="social-links">
                            {/* LinkedIn */}
                            <a href="http://www.linkedin.com/in/adsana-sayasith" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square"  aria-hidden="true" />
                            </a>
                            {/* Github */}
                            <a href="https://github.com/adsana" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github-square"  aria-hidden="true" />
                            </a>
                            </div>                             
                        </div>
                    </Cell>
                </Grid>

            </div>
        )
    }
}

    export default Landingpage