import React from 'react'
import profile from './media/images/IMG_0916_sm.jpg'
import TypeWriterEffect from 'react-typewriter-effect';

const myName = 'Paul Goble'
const title = 'JavaScript Engineer'
const stack = 'React | Node.js'


const ProfileBanner = () => (
    <div className="profile-banner banner-left">
    <h1>{myName}</h1>
    <h2>
      <TypeWriterEffect
        startDelay={300}
        typeSpeed={100}
        text={title}
        textStyle={{
          fontFamily: 'monospace',
          fontSize: '1.25em'
        }}
        cursorColor="#e7e5e4"
      />
    </h2>
    <h3><code>{stack}</code></h3>
    <h4><code>contact: epaulgoble@gmail.com <br/>
    https://github.com/paulgoble</code></h4>
  </div>
)

const AboutMe = () => (
  <div className="card banner-right">
    <h2><code>&lt;About_me /&gt;</code></h2>
    <p>I am a Project Manager with a background in building construction looking for challenge and growth as a full-time JavaScript developer. I have experience working with designers, architects, and engineers on small, collaborative teams with a history of solving problems and getting things done.</p>
      <ul>
        <li>I am proficient in modern front-end, client-side web development languages like HTML, CSS, JavaScript, and JSX.</li>
        <li>I am learning to do back-end, server-side development using JavaScript with Node.js, Express.js, and MongoDB.</li>
        <li>I am also interested in learning Gatsby/GraphQL, Vue.js, Typescript, PostgreSQL, Python 3, and Django.</li>
        <li>I also have extensive experience using AutoCAD and Excel.</li>
      </ul>
    
    <p></p>
  </div>
)

const Projects = () => (
  <div className="card banner-left">
    <h2><code>&lt;Featured_projects /&gt;</code></h2>
    <div className="project-container">

    </div>
  </div>
)

function App() {
  return (
    <div className="App">
      <div className="image-container">
        <img id="profile" alt="profile" src={profile} />
      </div>
      <ProfileBanner />
      <AboutMe />
      <Projects />

    </div>
  );
}

export default App;
