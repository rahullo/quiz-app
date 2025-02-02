import React from 'react';

import AppCard from '../apps/apps.component';

import './home.style.css'

const apps = [
    {
        title: 'NEET Testline',
        description: 'Practice & Revision Tests for Neet',
        link: 'https://github.com/rahullo/FileMorpher'
    },
    {
        title: 'REET Testline',
        description: 'राजस्थान शिक्षक भर्ती - Grade I, II, III',
        link: 'https://github.com/rahullo/FileMorpher'
    },
    {
        title: 'Current Affairs',
        description: 'Daily Current Affairs for Competitive Exams',
        link: 'https://github.com/rahullo/FileMorpher'
    },
    {
        title: 'TNPSC',
        description: 'Group 2 & 4',
        link: 'https://github.com/rahullo/FileMorpher'
    },
    {
        title: 'BANK Testline',
        description: 'IBPS, RBI, SBI',
        link: 'https://github.com/rahullo/FileMorpher'
    },
    {
        title: 'SSC Testline',
        description: 'SSC CGL, SSC CHSL, SSC MTS, SSC CPO, SSC GD, SSC JE, SSC Stenographer',
        link: 'https://github.com/rahullo/FileMorpher'
    }
];

const Home = () => {
    return (
        <div className='home_section'>
            <div className='about'>
                <h1>Welcome to Testline</h1>
                <p>Testline is redefining how students prepare for competitive exams like REET, NEET, and State PSCs. With daily test targets, smart revision, and gamified routines, we make learning interactive, interesting, and impactful. Join Testline to build habits, retain concepts, and
                ace your confidence!</p>  
            </div>
            <div className="our_apps">
                <h1>Our Learning Apps</h1>
                <div className="apps">
                    {
                        apps.map((app, index) => (
                            <AppCard
                            app={app}
                            />
                        ))
                    }
                </div>

                {/* {apps.map((app, index) => (
                    <div key={index} className="app-card">
                        <h3>{app.title}</h3>
                        <p>{app.description}</p>
                        <a href={app.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                ))} */}
            </div>
        </div>
    );
};

export default Home;