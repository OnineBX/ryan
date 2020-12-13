

import React, { Component } from 'react';

import Profile from './Profile';
import Portfolios from './Portfolios';
import Skills from './Skills';
import Educations from './Experiences';
import Experiences from './Educations';
import Navbar from './Navbar';
import About from './About';

const { isCompositeComponent } = require("react-dom/test-utils");


export default class Home extends Component {
    render() {
        return (
            <section>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col s12 m4 l3">
                            <Profile />
                        </div>
                        <div className="col s12 m8 l9">
                            <About />
                            <Skills />
                            <Experiences />
                            <Educations />
                            <Portfolios />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
