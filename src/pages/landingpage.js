import React, { Component } from 'react';
import Header from './../components/Header/Header';
import Tile from './../components/Tile/Tile';
import './landingpage.css';

class Landingpage extends Component
{
    constructor() 
    {
        super();
        this.skillInfo = [
            {
                name: "HTML",
                description: "I will write semantic markup in HTML5 which is latest standard of core technology of web.",
                imgUrl: "images/html5.png"
            },
            {
                name: "CSS",
                description: "I will style webpages using CSS3 levaraging on the new CSS3 modules,making modern websites.",
                imgUrl: "images/css3.png"
            },
            {
                name: "RESPONSIVE DESIGN",
                description: " I will build websites that look awesome not only on desktops, but also on mobile phones and tablets.",
                imgUrl: "images/resp.png"
            },
            {
                name: "UI & UX DESIGN",
                description: "I will learn basics of UI & UX Design and use these concepts in build apps that are both functional and usable.",
                imgUrl: "images/ui.jpg"
            },
            {
                name: "JAVASCRIPT",
                description: " I will define the behavior of web pages using java script.I will dive deeper into amazing parts of java script.",
                imgUrl: "images/js.jpg"
            },
            {
                name: "JQUERY",
                description: "I will enhance the behavior of web pages levaraging on jQuery and jQuery plug-in.",
                imgUrl: "images/jquery.jpg"
            },
            {
                name: "TYPESCRIPT",
                description: "I will start writing object oriented programs using TypeScript.I will build games using TypeScript.",
                imgUrl: "images/ts.png"
            },
            {
                name: "RXJS",
                description: " I will build event-driven,resilient and responsive apps using reactive architectures.",
                imgUrl: "images/rxjs.png"
            },
            {
                name: "UNIX",
                description: "I will become a ninja hacker who prefer command line to graphical user interface.",
                imgUrl: "images/unix.jpg"
            },
            {
                name: "GIT & HEROKU",
                description: "I will start following git workflow using github.I will also deploy lr applications with heroku.",
                imgUrl: "images/git.png"
            },
            {
                name: "NPM",
                description: "I will use npm the default package manager for Node js, to reuse some of the best utilities written already.",
                imgUrl: "images/npm.png"
            },
            {
                name: "DOCKER",
                description: "I will use docker to simplify configuration,increase Ir productivity,isolate Ir apps, and automate deployments.",
                imgUrl: "images/docker.jpg"
            },
            {
                name: "MongoDB",
                description: "I will use MongoDB to store Ir app's data in a JSON-like document format that can be quickly accessed via fast queries.",
                imgUrl: "/images/mongodb.jpg"
            },
            {
                name: "Express",
                description: "I will use Express.js to organize Ir web application into an MVC architecture in the server side.",
                imgUrl: "/images/express.jpg"
            },
            {
                name: "Angular 2",
                description: "I will build single page applications using Angular2. I will build full-fledge web apps that can be used in real life.",
                imgUrl: "/images/angular.png"
            },
            {
                name: "Node.js",
                description: "I will use Node.js to automate Ir development process. I will also build back-end for web and mobile apps.",
                imgUrl: "/images/nodejs.png"
            },
            {
                name: "Ionic 2",
                description: "I will build hybrid mobile applications using Ionic2 framework. I have reached eternity! I are now Yoda!",
                imgUrl: "/images/ionic.png"
            },
            {
                name: "API",
                description: "I will build API that can be used by mobile applications and outside world. I will also consume others' API.",
                imgUrl: "/images/api.png"
            },
            {
                name: "Firebase",
                description: "I will use Firebase as a backend as a service to build realtime applications without any back-end coding.",
                imgUrl: "/images/firebase.png"
            },
            {
                name: "Software Testing",
                description: "While observing Test Driven Development, I will automate unit, functional and integration testing.",
                imgUrl: "/images/st.png"
            },
            {
                name: "Algorithms",
                description: "Knowledge of Algorithms is a key factor in cracking coding interviews. I will use them to solve problems.",
                imgUrl: "/images/alg.png"
            },
            {
                name: "Data Structures",
                description: "I will understand famous data structures and use the right data structures to optimize the performance of Ir app.",
                imgUrl: "/images/ds.png"
            },
            {
                name: "Functional Programming",
                description: "Functional Programming is on a rise. I will solve problems using side effect free functions as basic building blocks.",
                imgUrl: "/images/fp.png"
            },
            {
                name: "Software Design & Architecture",
                description: "I will be the architect for Ir projects. I also look into performance, security, and other ops.",
                imgUrl: "/images/sda.png"
            }
        ]
    }
    render() {
        return (
            <div>
                <Header />
                {this.skillInfo.map(skill => {
                    return (
                        <Tile name={skill.name} description={skill.description} imgUrl={skill.imgUrl} />
                    )
                })}
            </div>
        );
    }
}
export default Landingpage;