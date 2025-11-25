import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'SocioMate - Social Media APP',
      description: `Designed and developed a React-based social media platform with features including user authentication, post creation, image uploads, real-time chat, and interactive post interactions. Prioritized security with Bcrypt and JWT-based authentication. Achieved seamless user experience and efficient data handling through Redux. Demonstrated proficiency in a diverse tech stack, emphasizing user-centric design and real-time interactions.`,
      image: 'https://github.com/DeepanshuGoel1122/SocioMate-SocialMedia/blob/main/screenshots/Capture5.PNG?raw=true',
      alt: "Screenshot of the SocioMate - Social Media APP",
      technologies: ['Axios', 'MongoDB', 'Socket.IO', 'Bcrypt', 'Redux', 'Express'],
      liveDemo: '#',
      github: 'https://github.com/DeepanshuGoel1122/SocioMate-SocialMedia'
    },
    {
      id: 2,
      title: 'YouTube Clone App',
      description: `Built a YouTube clone application using React. It incorporates key features such as Google Authentication sign-in, search functionality, video playback, commenting, single-page navigation, lazy loading with pagination, dedicated channel and video pages, and suggested video recommendations. It fetches videos from authenticated Google accounts, providing a personalized user experience akin to the official YouTube platform.`,
      image: 'https://github.com/DeepanshuGoel1122/YoutubeClone/blob/main/screenshots/ss2.PNG?raw=true',
      alt: 'Screenshot of the YouTube Clone App',
      technologies: ['Firebase', 'Bootstrap', 'Redux', 'Google Authentication', 'Youtube API'],
      liveDemo: '#',
      github: 'https://github.com/DeepanshuGoel1122/YoutubeClone'
    }
  ];

  return (
    <section className="section bordered" id="projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="cards">
        {projects.map((project) => (
          <div key={project.id} className="card">
            <div 
              className="card-media" 
              alt={project.alt}
              style={{ backgroundImage: `url("${project.image}")` }}
            ></div>
            <div className="card-body">
              <h3 style={{ fontSize: 20, fontWeight: 700, margin: '0 0 8px' }}>{project.title}</h3>
              <p className="muted" style={{ fontSize: 14, margin: '0 0 16px' }}>{project.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
                {project.technologies.map((tech, index) => (
                  <span key={index} className="badge">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="actions">
                {/* <a className="link" href={project.liveDemo}>
                  Live Demo <span className="material-symbols-outlined text-base">arrow_outward</span>
                </a> */}
                <a className="link" href={project.github}>
                  GitHub <span className="material-symbols-outlined text-base">code</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

