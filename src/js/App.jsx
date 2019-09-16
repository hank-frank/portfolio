import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

let projectData = require('./projects.json')

class App extends Component {
    constructor() {
        super();

        this.state = {
            projectsArray: projectData,
        };

        this.visibilityWatcher = this.visibilityWatcher.bind(this);
        this.makeVisible = this.makeVisible.bind(this);
    }

    makeVisible (eachKey) {
        console.log(`each key: `, eachKey)
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
                        return   <div key={ each.key } onClick={() => this.hideVisibility(each.key)}>
                                    <div className="project-info-container" style={{ display: this.visibilityWatcher(each.isVisible)}}>
                                        <img className="project-image" src={ require( each.image ) }/>
                                        <div className="project-title-container">
                                            <h4 className="project-title">{ each.title }</h4>
                                            <p className="project-description">{ each.description }</p>
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
