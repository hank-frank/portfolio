import React, { Component } from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaEnvelopeSquare } from 'react-icons/fa';
import { FaWindowClose } from 'react-icons/fa';

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
                <div className="contact-container">
                    <div className="each-contact"><a href="https://www.linkedin.com" target="_blank" title="LinkedIn" className="linkedin" ><FaLinkedinIn /></a></div>
                    <div className="each-contact"><a href="https://www.linkedin.com" target="_blank" title="email" className="email" ><FaEnvelopeSquare /></a></div>
                    <div className="each-contact"></div>
                    <div className="each-contact"></div>
                    <div className="each-contact"></div>
                </div>
                <div className="flex-container-vertical">
                    <img src={require("../assets/me-face.png")} className="portrait-img"/>
                    <h1 className="name-text">Hello, I'm <span id="henry">Henry</span>. I'm a Fullstack Developer living in San Diego.</h1>
                </div>

                <div className="flex-container-row">
                {
                    this.state.projectsArray.map((each) => {
                   return   <div key={ each.key } >
                                <div className="card" onClick={() => this.makeVisible(each.key)}>
                                    <div className="card-circle">
                                        <p className="title">{each.title}</p>
                                    </div>
                                </div>
                            </div>
                    })
                }
                </div>
                {
                    this.state.projectsArray.map((each) => {
                    return         <div className="project-visibility-container" key={ each.key } style={{ display: this.visibilityWatcher(each.isVisible)}}>
                                    <FaWindowClose className="x" onClick={() => this.hideVisibility(each.key)}/>
                                    <div className="project-info-container">
                                        <div className="project-title-container">
                                            <h4 className="project-title" >{ each.title }</h4>
                                            <p className="project-description">{ each.description }</p>
                                            <div className="link-flex">
                                                <a className="link-button">Github</a>
                                                <a className="link-button">Heroku</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="image-flex-container">
                                        {
                                            each.images.map((image) => {
                                               return <img src={image} className="each-image"/>
                                            })
                                        }
                                        </div>
                                    </div>
                    })
                }
            </>
        );
    }
}

export default App;
