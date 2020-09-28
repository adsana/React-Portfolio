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
                  <Button coloredhref="https://adsana-sayasith.herokuapp.com">Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>


              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Paws Up!</CardTitle>
                <CardText>
                A live chatboard app using MERN stack
                </CardText>
                <CardActions border>
                  <Button colored href="https://github.com/bpr59/Paws_Up-Project3/tree/master">GitHub</Button>
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
                <div className="projects-grid">
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS2PwRQttmK18ZBYWADrccj8tjjsnIWtDFvqQ&usqp=CAU) center / cover'}} >Book Search</CardTitle>
                <CardText>
                Book Search is a webapp that displays the top 10 New York Times best sellers and are able to search for other books by the author or look for similar book titles 
                </CardText>
                <CardActions border>
                  <Button colored href="https://github.com/adsana/Work_Day_Scheduler">GitHub</Button>
                  <Button colored href="https://adsana.github.io/Work_Day_Scheduler/">Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS2PwRQttmK18ZBYWADrccj8tjjsnIWtDFvqQ&usqp=CAU) center / cover'}} >Password Generator</CardTitle>
                <CardText>
                The Password Generator takes user inputs into creating unique passwords.
                </CardText>
                <CardActions border>
                  <Button colored href="https://github.com/adsana/Password_Generator">GitHub</Button>
                  <Button colored href="https://adsana.github.io/Password_Generator/">Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>

              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS2PwRQttmK18ZBYWADrccj8tjjsnIWtDFvqQ&usqp=CAU) center / cover'}} >Workday Scheduler</CardTitle>
                <CardText>
                A real time webapp that lets you schedule your day and stay on task
                </CardText>
                <CardActions border>
                  <Button colored href="https://github.com/adsana/Work_Day_Scheduler">GitHub</Button>
                  <Button colored href="https://adsana.github.io/Work_Day_Scheduler/">Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
         </div>

              
            )
        } else if(this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEUAAAD+/v78/Pz5+fkEBARQUFCnp6cPDw/Z2dnd3d2Dg4P39/d5eXldXV3S0tLs7OzFxcUzMzNmZmYbGxtzc3OZmZnv7++Li4u2tra+vr7l5eVDQ0PJycnPz88vLy8gICBtbW06OjpMTEyurq6IiIhXV1eUlJQ4ODijo6MlJSUdHR1BQUHX1TsWAAAHFUlEQVR4nO2ZC3ejLBCGBUyNMVFj7ubeXJpu////+4ABRI1tk+3u2e+c99k9OSnIwMtlZjBBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPhxwn/Cdtj9fKiLw/BPDvRP853BP6nvfrPwi0daRXaEPzLLnUbCH91un9j6I5vlbXDK83w5G7Vqjgtdc708afmFiSb8IMujlCXye8KnVtFMcJGIhM1kQb1Vkm2XZmSDWgWf95fTgJY46rc7Ks0gomvGLDxX3duDN5nNXY1YjYInjuMLa6O6CNaJ7E3+UU7owfWcCVWZRlqhD1fPxQUpbNVkUz3gqN/uKCPTl9JrobrQy6WUjJo162fWkN9TKK0vjNUbPbjSfwo2Vl03FNLnWbZqKVR1M71OnQovczNJblaSGQksEn9w6nuyePiUdK2hNLOljsVOPTeSHai/Fvq8t1oJ9X/dXkOqG36qsPSLBH0sdU0ifOlk7/T4GraZktvaZWRzY4YhJbKcxL/QOLyJV9/7TmFjWFlkFdY3TKIsX3W5VLbN08St5tAbG0/zvjBtOSueU7h47VW8m7rCjKegLSutl7uqlWDJKJooRhszlLVVWIST/eTXr/1NK+dqzswaxj2/J2Uro92/VL2GF9o4pZIxMYt7Up4gKlK9wPHlqV3aNTEzmrd4skuos4MxT62Snn0wp+qZVeh8/o023skpTGsdKGu0OLktmkrFq7H69kq2lrbmLM/raf/sOawUqhNubahRqVW4LmkpboGvkBmFsuhCVvJKYUgVH3O9vfKawtoQ32iHn22L4HV+pm9TmvyBSygOZfX9UYU6BDaRpsZUK+hwlEFdoXBBOOKMhDTXMIy1P0071lCaG9XX0I4/NH6Zs5UplyXRg+J8hbVUwpslFcGtd0iOtVaCVbs0ol28aikc61DOt07htiEweNcei7N4MHalFNUL7XXk9AzHtTbP7dIydpRDX+KKORbNVnaXhsGadSgc0gotncLE6yjeq55opeS/JEtP1+IY2LxlzGkDy0bZ9rQodr+jsObEF379m3FovPIFQdvTLOkh52ns9h1lOqjwoVMo/AjzS7flOjMw5TzrD6wv3xjptmY7fNzP3I2HNYUUJ+TIRM8zTq3mr/RXdBX00NgqTDeaVAdwoQ+wjfjViBnTCeF4rtXxKrZnZ7L7wZjZqOYLk/vrYYkmdvur6CnUYd8kZVsqqFpx1k8V28QMe9XKaZSTkh9F4Oc03H6KvTY2oozXX9yc+ioSW86txuVT0aKRmV6tDbXjNzoca2aV8fbKq3MUVQo5M6OWwxLTrsx7b2ZxWctKvdzsuBKVQTUQISPWc57mNnQMbP6uMrerP4U9dwdtKlTjml9c5u0OlcrY8g//bhEPPSI7j+vFtpwL21QFpzcziPXM1ZDK+fiOiq8V8rs5TRgc6ahrX8B4GVpH1r5biM2Hqji7AjMtdLEIu+Jh4Hzj5GM0uG1KlcKrAGWiPtUUg5e8FEb/9LcVupxGfsZaGZttaAaXQccalqceNTC7dFEcDleynJihNhWG9iobhn4A6KWk46Uaja1RXl1m6NfnFB5qCi0nZVGwWIYmrr3RMAiq25PgA8qfvWupHy1SMm2OVFdeGnqHXrHLdE+nxnEL9Z3c3TYfVljLvN0Lnylz453RpsuOtXlp720/4hfGQx6bCqux6652q3hXKdxTAJ7ppHGzHVfTMCafe/59hZZxyWwQkPdDrrOrTdWKf6XQ3jjypsI68jIhsupwLegUq90ylJeJrOrjRg6h/a7qOwr5Yu3d2i7krrZ0yVVBIAwO5E9MsNR5Ka8UulWpKVybO3Lh+1L/fvjak5GCzl160I71/URt+D740BMk2KbQNW8nrlPk7D14jHt3fBURQ3vpZSZNXRkPefTmZdTQV1MY6nOs/uqrmig19nyS96WL9lwmQrF9ZOPnbELWlDYGvQQPclehWii6f7p9aW4J0m1GgcsTPt2lat302wmm3d+9iM+znZoF/zUU5QqZ3EXRitawVsXL98cjfvtdm1K4j+nrfG0tmgRVpxvf8jRyH9xokFLIXYX6rcjN7EtPx7zQvuXWmhE27z0qsHMNT9VXgxvi9HsK1UgmmZuVToVB4deooxb3zP1pWjb2dSrPyKPX4NY770QodzI1b6VTFzrCoGfKZMgwre4pVOXG04Qqx9EPsp08h7z10ltIhVpJ6qsYBCbtUBlE7NVshw+K+5t8tbUmh9tK/TpxK5pL9D590TXX0XO/l3S0+sLYJ78OPd6mVRl2Vfy/uf/zXEP5s3q/8wPhU4881uLO+xd6wehlrv/ykv7oIQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOCv8h/BBk3djMKjDAAAAABJRU5ErkJggg==) center / cover'}} >Notetaker</CardTitle>
                <CardText>
                The Notetaker App allows you to record notes and delete them. (Deployed Live Demo, coming soon)
                </CardText>
                <CardActions border>
                  <Button colored href="https://github.com/adsana/note-taker-00">GitHub</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>

         </div>               
            )
        } else if(this.state.activeTab === 3) {
            return (
                <div className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRSmfeqwKnxomICZfZxkyK9WpoSwrlLE1abdw&usqp=CAU) center / cover'}} >Workout Tracker</CardTitle>
                <CardText>
                  The Workout Tracker helps keep track of your work outs and progress
                </CardText>
                <CardActions border>
                  <Button colored href="https://github.com/adsana/Workout_Tracker">GitHub</Button>
                  <Button coloredhref="https://workout-tracker-101.herokuapp.com">Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>


              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRSmfeqwKnxomICZfZxkyK9WpoSwrlLE1abdw&usqp=CAU) center / cover'}} >Online/Offline Budget Tracker</CardTitle>
                <CardText>
               The Budget Tracker helps you keep a calculated log of transactions
                </CardText>
                <CardActions border>
                  <Button colored href="https://github.com/adsana/online-offline_budget_tracker">GitHub</Button>
                  <Button colored href="https://online-offline-budget-tracker2.herokuapp.com">Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>


              </div>                
            )
        } else if(this.state.activeTab === 4) {
            return (
                <div className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.bleepstatic.com/images/news/u/986406/Logos/MySQL-Logo.jpg) center / cover'}} >Burger App</CardTitle>
                <CardText>
                The Burger App is a playful app shows use of the MySQL database recording burgers to be bought and devoured
                </CardText>
                <CardActions border>
                  <Button colored href="https://github.com/adsana/Burger-App">GitHub</Button>
                  <Button coloredhref="https://obscure-scrubland-87051.herokuapp.com/">Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>


              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.bleepstatic.com/images/news/u/986406/Logos/MySQL-Logo.jpg) center / cover'}} >WOW Raid Attendance</CardTitle>
                <CardText>
               The Wow Raid Attendance App allows you to keep track of raid attendance and allows users to see other raiders profile data
                </CardText>
                <CardActions border>
                  <Button colored href="https://github.com/njohnerwin/project-2-uconn">GitHub</Button>
                  <Button colored href="https://wow-raidbuilder.herokuapp.com/">Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>


              </div>                
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