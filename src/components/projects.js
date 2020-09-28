import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >My Portfolio</CardTitle>
                <CardText>
                  My Portfolio rendered in React
                </CardText>
                <CardActions border>
                  <Button colored href="https://github.com/adsana/React-Portfolio">GitHub</Button>
                  <Button coloredhref="https:///React-Portfolio">Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>


              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >My Portfolio</CardTitle>
                <CardText>
                  My Portfolio rendered in React
                </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>


              </div>
              
        )
        } else if(this.state.activeTab === 1) {
            return (
                <div><h1>This is Javascript</h1></div>
            )
        } else if(this.state.activeTab === 2) {
            return (
                <div><h1>This is Express</h1></div>                
            )
        } else if(this.state.activeTab === 3) {
            return (
                <div><h1>This is MongoDB</h1></div>                
            )
        } else if(this.state.activeTab === 4) {
            return (
                <div><h1>This is MySQL</h1></div>                
            )    

            }
    }

    

    render() {
        return(
        <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
        <Tab>React</Tab>
        <Tab>Javascript</Tab>
        <Tab>Express</Tab>
        <Tab>MongoDB</Tab>
        <Tab>MySQL</Tab>
        </Tabs>


            <Grid>
                <Cell col={12}>
                <div className="content">{this.toggleCategories()}</div>
                </Cell>    
            </Grid>
    </div>
        )
    }
}

    export default Projects