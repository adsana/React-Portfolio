import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/119003235_10220102241759681_4646740287047526961_o.jpg?_nc_cat=111&_nc_sid=84a396&_nc_ohc=gnsby_rMTH4AX-9qUq8&_nc_ht=scontent-lga3-1.xx&oh=87f1211d38c2432476ea05273ed97c1a&oe=5F990B9A"
                alt="me"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Adsana Sayasith</h2>
            <h4 style={{color: 'grey'}}>Quality Assurance Specialist and Aspiring Junior Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Recent Graduate from the UConn School of Engineering's Full Stack Coding Bootcamp</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Torrington, CT</p>
            <h5>Phone</h5>
            <p>(860) 866-7194</p>
            <h5>Email</h5>
            <p>adsanasayasith@gmail.com</p>
            <h5>Web</h5>
            <p>https://adsana-sayasith.herokuapp.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2020}
              endYear={2020}
              schoolName="Uconn School of Engineering"
              schoolDescription="Full Stack Coding Boot Camp"
               />

               <Education
                 startYear={2008}
                 endYear={2009}
                 schoolName="Porter and Chester Technical Institute"
                 schoolDescription="Electrical Wiring"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2017}
              endYear={2020}
              jobName="Quality Assurance Specialist"
              jobDescription="Approve parts for first production (PPAP) and create quality inspection plans"
              />

              <Experience
                startYear={2016}
                endYear={2017}
                jobName="Document Control Specialist"
                jobDescription="Maintained all Quality Records and process engineering changes"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={85}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={85}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={70}
                    />
                    <Skills
                      skill="React"
                      progress={70}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;