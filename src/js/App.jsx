import React, { Component } from 'react';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Carousel from './carousel.jsx'

// let images = require('../assets/site-images/CCC-1.png')
// let images1 = require('../assets/site-images/CCC-2.png')
let projectData = require('./projects.json')

class App extends Component {
    constructor() {
        super();

        this.state = {
            projectsArray: projectData,
            modalIsOpen: false
        };

        this.visibilityWatcher = this.visibilityWatcher.bind(this);
        this.makeVisible = this.makeVisible.bind(this);
    }


    makeVisible (eachKey) {
        let projects = this.state.projectsArray
        for (let i = 0; i < projects.length; i++) {
            if (projects[i].key === eachKey) {
                projects[i].isVisible = true
            }
            this.setState({
                projectsArray: projects
            })
        }
    }

    hideVisibility(eachKey) {
        let projects = this.state.projectsArray
        for (let i = 0; i < projects.length; i++) {
            if (projects[i].key === eachKey) {
                projects[i].isVisible = false
            }
            this.setState({
                projectsArray: projects
            })
        }
    }

    visibilityWatcher (status) {
        if (status === false) {
            return "none"
        } else if (status === true) {
            return "block"
        }

    }


    render () {
        return (
            <>
                <div className="flex-container-vertical">
                    <img src={require("../assets/me-face.png")} className="portrait-img"/>
                    <h1 className="name-text">Hello, I'm <span id="henry">Henry</span>. I'm a Fullstack Developer living in San Diego.</h1>
                </div>

                <div className="flex-container-row">
                {
                    this.state.projectsArray.map((each) => {
                   return   <div key={ each.key }>
                                <div className="card" onClick={() => this.makeVisible(each.key)}>
                                    <div className="card-circle">
                                        <p className="title">{each.title}</p>
                                    </div>
                                </div>
                            </div>
                    })
                }
                </div>
                <div>
                {
                    this.state.projectsArray.map((each) => {
                    return      <div key={ each.key } >
                                    <div className="project-visibility-container" style={{ display: this.visibilityWatcher(each.isVisible)}}>
                                    <div className="project-info-container">
                                        {/* <div className="image-container"> */}
                                       <Carousel 
                                       images={ each.images }
                                       />
                                        {/* </div> */}
                                        <div className="project-title-container">
                                            <h4 className="project-title" onClick={() => this.hideVisibility(each.key)}>{ each.title }</h4>
                                            <p className="project-description">{ each.description }</p>
                                            <div className="link-flex">
                                                <a className="link-button">Github</a>
                                                <a className="link-button">Heroku</a>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                    })
                }
                </div>
            </>
        );
    }
}

export default App;
