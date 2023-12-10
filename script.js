document.addEventListener("DOMContentLoaded", function () {
    const projects = [
        {
            "url": "https://sports.sajidbanday.in",
            "fname": "SportStream",
            "lname": "live sports streaming",
            "description": "SportStream uses open third-party dash and HLS streams to play encrypted live streams for free."
        },
        {
            "url": "https://github.com/BandaySajid/chatgpt-node",
            "description": "A Node.js library / wrapper over chatgpt web api. This library allows developers to authenticate/login via the web API and initiate conversations with the ChatGPT model. Its purpose is to enable developers to integrate chatbot functionality into their applications for testing and development purposes.",
            "fname": "chatgpt-node",
            "lname": "nodejs library"
        },
        {
            "url": "https://github.com/BandaySajid/collaborator",
            "fname": "collaborator",
            "lname": "realtime code editor",
            "description": "A code-collaborator where a user could invite other user to edit code in reatime."
        },
        {
            "url": "https://github.com/BandaySajid/data-processing-ratelimiting",
            "fname": "data-processing-ratelimiting",
            "description": "processing large amounts of data by implementing node js streams and rate-limiting strategy."
        },
        {
            "url": "https://github.com/BandaySajid/load-balancing-using-nginx",
            "fname": "load-balancing-using-nginx",
            "lname": "round robin implementation",
            "description": "This project demonstrates load balancing using NGINX and implementation of the `Round Robin algorithm` for load balancing by utilizing a node js server."
        },
        {
            "url": "https://github.com/BandaySajid/node-file-watcher",
            "fname": "node-file-watcher",
            "description": "A simple tool that watches a file and executes commands written in that file by a user."
        },
        {
            "url": "https://github.com/BandaySajid/portfolio",
            "fname": "personal-portfolio",
            "description": "My Personal Portfolio"
        },
        {
            "url": "https://github.com/BandaySajid/scalable-chat-application",
            "fname": "scalable-chat-app",
            "lname": "realtime chat application",
            "description": "This project is a demonstration of backend solution focused on efficient real-time chat communication and load balancing. Uses cutting-edge technologies such as WebSockets, Redis Pub/Sub, authentication, security measures, and caching."
        },
        {
            "url": "https://github.com/BandaySajid/global-chat",
            "fname": "global-chat",
            "lname": "Chat Globally",
            "description": "This application allows users to create accounts and chat with other global users anonymously. Users are not required to provide an email or password; they simply need to choose a username to get started. The application is built using React, Node.js, Express, and Websockets to facilitate real-time communication."
        }
    ];

    function createProjectElement(project) {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");

        const title = document.createElement("h3");
        title.textContent = `${project.fname} ${project.lname ? '- ' + project.lname : ''}`;
        projectDiv.appendChild(title);

        const link = document.createElement("a");
        link.href = project.url;
        link.textContent = "Visit Project";
        link.setAttribute('target', '_blank')
        projectDiv.appendChild(link);

        const description = document.createElement("p");
        description.textContent = project.description;
        projectDiv.appendChild(description);

        return projectDiv;
    }

    const projectsSection = document.getElementById("projects-container");
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');

    let curr = 0;

    const projectElement = createProjectElement(projects[curr]);
    projectsSection.appendChild(projectElement);

    prev.addEventListener('click', () => {
        curr = Math.max(0, curr - 1);
        const projectElement = createProjectElement(projects[curr]);
        projectsSection.removeChild(projectsSection.children.item(0))
        projectsSection.appendChild(projectElement, projectElement);
    });
    
    next.addEventListener('click', () => {
        curr = Math.min(projects.length - 1, curr + 1);
        const projectElement = createProjectElement(projects[curr]);
        projectsSection.removeChild(projectsSection.children.item(0))
        projectsSection.appendChild(projectElement, projectElement);
    });
});