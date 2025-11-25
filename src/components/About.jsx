import React from 'react';

const About = () => {
  const skills = [
    'React',
    'Node.js',
    'JavaScript',
    'HTML5',
    'CSS3',
    'SQL',
    'Mongo DB',
    'Express',
    'Socket.IO',
    'Bcrypt',
    'Redux',
    'JWT',
    'Firebase',
    'Bootstrap',
    'Python',
  ];

  return (
    <section className="section bordered" id="about">
      <h2 className="section-title">About Me</h2>
      <div className="grid-3">
        <div>
          <p className="muted" style={{ lineHeight: 1.8, marginBottom: 16 }}>
          I’m Deepanshu Goel, a passionate Full-Stack Developer skilled in ReactJS, Node.js, Django, HTML, CSS, and JavaScript. I love building scalable, user-friendly web applications that blend powerful functionality with modern design. With experience in backend development, API integration, and AWS cloud implementation, I focus on creating efficient, secure, and reliable solutions.
          </p>
          <p className="muted" style={{ lineHeight: 1.8 }}>
          I’m constantly exploring new technologies like Generative AI and cloud-based automation to stay ahead in the tech world. I aim to contribute to innovative projects that make an impact while growing as a developer who turns ideas into seamless digital experiences.
          </p>
        </div>
        <div>
          <h3 style={{ fontSize: 20, fontWeight: 700, margin: '0 0 8px' }}>My Skills</h3>
          <div className="chips">
            {skills.map((skill, index) => (
              <div key={index} className="chip">
                <p style={{ margin: 0 }}>{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

