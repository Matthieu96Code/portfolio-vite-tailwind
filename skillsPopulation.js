import skillsList from "./skillsList";

const skillsPopulation = () => {
    const skills = document.querySelector('.skills');
    skillsList.forEach((skill) => {
        const skillContainer = document.createElement('div');
        skillContainer.classList.add('skill-container');
        
        const skillIcon = document.createElement('img');
        skillIcon.src = skill.icon;
        skillIcon.alt = skill.name;
        skillIcon.classList.add('skill-image');
        // const skillLogo = document.createElement('img');
        // skillLogo.src = skill.logo;
        // skillLogo.alt = skill.name;
        // skillLogo.classList.add('skill-image');
        
        const skillName = document.createElement('h4');
        skillName.classList.add('skill-name');
        skillName.textContent = skill.name;
        const skillInfo = document.createElement('p');
        skillInfo.classList.add('skill-info');
        skillInfo.textContent = skill.info;
        skillContainer.appendChild(skillIcon);
        // skillContainer.appendChild(skillLogo);
        skillContainer.appendChild(skillName);
        skillContainer.appendChild(skillInfo);
        skills.appendChild(skillContainer);
    });
};

export default skillsPopulation;