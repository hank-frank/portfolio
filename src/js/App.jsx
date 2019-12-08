import React, { Component } from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaEnvelopeSquare } from 'react-icons/fa';
import { FaWindowClose } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';

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
        this.ref1 = React.createRef();
        this.ref2 = React.createRef();
        this.ref3 = React.createRef();
        this.ref4 = React.createRef();
        this.ref5 = React.createRef();
        this.ref6 = React.createRef();
        this.ref7 = React.createRef();
    }

    componentDidMount () {
        let incr = 0;
        let refArray = [this.ref1, this.ref2, this.ref3, this.ref4, this.ref5, this.ref6, this.ref7];
        projectData.forEach((each) => {
            each.ref = refArray[incr];
            incr++;
        })
        console.log(`peoject Data: `, projectData);
    }

    makeVisible (eachKey, eachRef) {
        let projects = this.state.projectsArray
        for (let i = 0; i < projects.length; i++) {
            if (projects[i].key === eachKey) {
                projects[i].isVisible = true;

            }
            this.setState({
                projectsArray: projects
            })
        }
        window.scrollTo({
            top: eachRef.current,
            left: 0,
            behavior: 'smooth'
        });
        console.log(`eachRef: `, eachRef)
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
                    <div className="each-contact"><a href="mailto:henryfrank@gmail.com" target="_blank" title="email" className="email" ><FaEnvelopeSquare /></a></div>
                    <div className="each-contact"><a href="https://github.com/hank-frank?tab=repositories" target="_blank" title="github-top" className="github-top" ><FaGithubSquare /></a></div>
                    <div className="each-contact"><a href="https://drive.google.com/file/d/1adI01THd55IVlqbxiNmRV--xMshGa4Eq/view?usp=sharing" target="_blank" title="resume" className="resume" >Resume</a></div>
                </div>
                <div className="flex-container-vertical">
                    <img src={ require("../assets/me-face.png") } className="portrait-img"/>
                    <h1 className="name-text">Hello, I'm <span id="henry">Henry</span>. I'm a Fullstack Developer living in San Diego.</h1>
                </div>

                <div className="flex-container-row">
                {
                    this.state.projectsArray.map((each) => {
                    return   <div key={ each.key }>
                                <div className="card" onClick={ () => this.makeVisible(each.key, each.ref) }>
                                    <div className="card-circle">
                                        <p className="title">{ each.title }</p>
                                    </div>
                                </div>
                            </div>
                    })
                }
                </div>
                {
                    this.state.projectsArray.map((each) => {
                    return         <div className={ `project-visibility-container ${ each.key }`} key={ each.key } style={{ display: this.visibilityWatcher(each.isVisible) }} ref={ each.ref }>
                                    <FaWindowClose className="x" onClick={() => this.hideVisibility(each.key) }/>
                                    <div className="project-info-container">
                                        <div className="project-title-container">
                                            <h4 className="project-title" >{ each.title }</h4>
                                            <p className="project-description">{ each.description }</p>
                                            <div className="link-flex">
                                                {each.github ? <a href={ each.github } target="_blank" className="link-button" >Github</a> : "" }
                                                { each.hosted ? <a href={ each.hosted } target="_blank" className="link-button">View Site</a> : "" }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="image-flex-container">
                                        {
                                            each.images.map((image) => {
                                                return <img src={ image } className="each-image"/>
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
