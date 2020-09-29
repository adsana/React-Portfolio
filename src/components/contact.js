import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={5}>
            <h2>Adsana Sayasith</h2>
            <img
              src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/119003235_10220102241759681_4646740287047526961_o.jpg?_nc_cat=111&_nc_sid=84a396&_nc_ohc=gnsby_rMTH4AX-9qUq8&_nc_ht=scontent-lga3-1.xx&oh=87f1211d38c2432476ea05273ed97c1a&oe=5F990B9A"
              alt="me"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Recent Graduate from the UConn School of Engineering's Full Stack Coding Bootcamp</p>

          </Cell>
          <Cell col={7}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (860) 866 7194
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-fax" aria-hidden="true"/>
                    N/A
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    adsanasayasith@gmail.com
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;