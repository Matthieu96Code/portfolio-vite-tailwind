import projectList from "./projetsList";

const projectsPopulation = () => {
    projectList.forEach((project) => {
        const projectContainer = document.createElement('div');
        projectContainer.classList.add('project-container');
        projectContainer.setAttribute('id', project.id);
        projectContainer.setAttribute('data-aos', 'fade-up');
        projectContainer.setAttribute('data-aos-duration', '1000');
        projectContainer.setAttribute('data-aos-delay', '300');
        projectContainer.setAttribute('data-aos-once', 'true');
        projectContainer.setAttribute('data-aos-anchor-placement', 'top-bottom');
    
        const projectTitle = document.createElement('h4');
        projectTitle.classList.add('project-title');
        projectTitle.textContent = project.title;
    
        const projectDescription = document.createElement('p');
        projectDescription.classList.add('project-description');
        projectDescription.textContent = project.description;
    
        const projectTechnologies = document.createElement('div');
        projectTechnologies.classList.add('project-technologies');
    
        project.technologies.forEach((technology) => {
            const technologyLink = document.createElement('a');
            technologyLink.classList.add('technology-link');
            technologyLink.setAttribute('href', technology.link);
            technologyLink.setAttribute('target', '_blank');
            const technologyLogo = document.createElement('img');
            technologyLogo.setAttribute('src', technology.logo)
            technologyLogo.setAttribute('alt', technology.name)
            const technologyName = document.createElement('p');
            // technologyName.textContent = technology.name;
            technologyLink.appendChild(technologyLogo)
            technologyLink.appendChild(technologyName)
            projectTechnologies.appendChild(technologyLink);
        })
    
        const projectDemo = document.createElement('a');
        projectDemo.classList.add('project-demo');
        projectDemo.setAttribute('href', project.link);
        projectDemo.setAttribute('target', '_blank');
        projectDemo.textContent = 'Live Demo';
        const projectDemoBtn = document.createElement('button');
        projectDemoBtn.classList.add('project-demo-btn');
        projectDemo.setAttribute('type', 'button');
        projectDemoBtn.appendChild(projectDemo);
        
        const projectSource = document.createElement('a');
        projectSource.classList.add('project-source');
        projectSource.setAttribute('href', project.source);
        projectSource.setAttribute('target', '_blank');
        projectSource.textContent = 'View Source';
        const projectSourceBtn = document.createElement('button');
        projectSourceBtn.classList.add('project-source-btn');
        projectSource.setAttribute('type', 'button');
        projectSourceBtn.appendChild(projectSource);
        
        const projectLinks = document.createElement('div');
        projectLinks.classList.add('project-links');
        projectLinks.appendChild(projectDemoBtn);
        projectLinks.appendChild(projectSourceBtn);
        
        const projectImage = document.createElement('img');
        projectImage.classList.add('project-image');
        projectImage.setAttribute('src', project.img);
        projectImage.setAttribute('alt', project.alt);
    
        
        projectContainer.appendChild(projectTitle);
        projectContainer.appendChild(projectImage);
        projectContainer.appendChild(projectDescription);
        projectContainer.appendChild(projectTechnologies);
        projectContainer.appendChild(projectLinks);
    
        document.querySelector('.projects').appendChild(projectContainer);
    })
}

export default projectsPopulation;