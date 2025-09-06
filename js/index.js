const projectsData = {
    "Observability": {
    "zenith": {
        desc: "Centralized observability platform supporting real-time insights, anomaly detection, and root cause analysis across distributed systems",
        link: ""
    }
    },
    "Streaming": {
    "connectx": {
        desc: "Peer-to-peer file sharing and media streaming platform ensuring privacy and performance with Rust and Tauri.",
        link: ""
    }
    },
    "Networking": {
    "ipman": {
        desc: "Network diagnostic tool.",
        link: ""
    }
    },
    "Search Engine": {
    "foogle": {
        desc: "Local search engine which helps searching across files just like web.",
        link: ""
    }
    },
    "PyPi": {
    "pyfort": {
        desc: "Python package for quick encryption utilities.",
        link: "https://pypi.org/project/pyfort/"
    },
    "launchenv": {
        desc: "Automates Python environment setup.",
        link: "https://pypi.org/project/launchenv/"
    },
    "typeprint": {
        desc: "Styled terminal printing for Python.",
        link: "https://pypi.org/project/typeprint/"
    }
    },
    "Games": {
    "Bugged up": {
        desc: "A 2D puzzle game on Itch.io.",
        link: "https://nusuta-studio.itch.io/bugged-up"
    },
    "Dimensional jump": {
        desc: "Platformer built with Pygame.",
        link: "https://github.com/a-tharva/Dimentional-jump"
    },
    "Flappy Bird": {
        desc: "Classic flappy bird clone.",
        link: "https://github.com/a-tharva/flappy-bird"
    }
    },
    "Applications": {
    "Way Home": {
        desc: "Navigation-focused Android app.",
        link: "https://github.com/a-tharva/Apps/tree/master/way%20home"
    },
    "Calculator": {
        desc: "Basic calculator in Java.",
        link: "https://github.com/a-tharva/Apps/tree/master/calculator"
    },
    "SHA256": {
        desc: "Tool to compute SHA256 hashes.",
        link: "https://github.com/a-tharva/Apps/tree/master/sha256"
    }
    }
  // … extend with ML/DA, Bots, etc. same structure
};

function renderProjects() {
  const container = document.createElement("div");
  container.className = "projects-section";

  // Left: project list
  const listDiv = document.createElement("div");
  listDiv.className = "projects-list";

  Object.keys(projectsData).forEach(category => {
    const h3 = document.createElement("h3");
    h3.innerText = category;

    const ul = document.createElement("ul");
    Object.keys(projectsData[category]).forEach(proj => {
      const li = document.createElement("li");
      li.innerText = proj;
      li.addEventListener("click", () => {
        showProjectDetails(proj, projectsData[category][proj]);
      });
      ul.appendChild(li);
    });

    h3.addEventListener("click", () => {
      ul.style.display = ul.style.display === "block" ? "none" : "block";
    });

    listDiv.appendChild(h3);
    listDiv.appendChild(ul);
  });

  // Right: project details
  const detailDiv = document.createElement("div");
  detailDiv.className = "projects-details";
  detailDiv.id = "project-details";
  detailDiv.innerHTML = "<p>Select a project to see details.</p>";

  container.appendChild(listDiv);
  container.appendChild(detailDiv);

  document.getElementById("content").innerHTML = "";
  document.getElementById("content").appendChild(container);
}

function showProjectDetails(name, data) {
  const detailBox = document.getElementById("project-details");
  detailBox.innerHTML = `
    <h2>${name}</h2>
    <p>${data.desc}</p>
    ${data.link ? `<p><a href="${data.link}" target="_blank">View Project ↗</a></p>` : ""}
  `;
}

// Hook into nav
const sections = {
  home: `
    <div id="home" class="content-box">
    <h2>Atharva Bhandvalkar</h2>
    <p class="subtitle">Senior DevOps Engineer | SDE · Creating things</p>

    <div class="stats">
        <div><strong>3+ yrs</strong><br>Multi-cloud Experience</div>
        <div><strong>10+</strong><br>Enterprise/Startup Engagements</div>
        <div><strong>5+</strong><br>Cross-functional Projects/Teams Led</div>
    </div>

    <p class="tagline">
        I engineer scalable, secure, and cost-optimized cloud infrastructures, blending multi-cloud mastery,</br>
        automation, and DevSecOps to empower teams with rapid, reliable delivery.
    </p>
    </div>
  `,
  about: `
    <div id="about" class="content-box">
    <h2>About Me</h2>
    <p>
        Hi, I’m <strong>Atharva Bhandvalkar</strong>, a Senior DevOps Engineer passionate about
        building scalable, secure, and cost-efficient cloud solutions across AWS, Azure, and GCP.
        I focus on <em>Infrastructure as Code</em>, <em>CI/CD automation</em>, and
        <em>container orchestration</em>.
         
    </p>

    <p class="personal-flair">
        Beyond cloud engineering, I’m curious about Robotics, IoT, Cyber Security, Machine Learning,
        and Computer Vision. I also enjoy exploring side projects that push the boundaries of
        technology — and photography is one of my creative outlets.
    </p>

    <div class="skills-contact">
        <div class="skills">
        <h3>Skills</h3>
        <ul>
            <li>Cloud: AWS, Azure, GCP</li>
            <li>Infra as Code: Terraform, CloudFormation</li>
            <li>CI/CD: Jenkins, Azure DevOps, GitHub Actions</li>
            <li>Containers: Kubernetes, Docker</li>
            <li>Observability: Prometheus, Grafana, OpenTelemetry, Elasticsearch</li>
            <li>Networking & Security: DevSecOps practices</li>
            <li>Programming: C#, Python, Golang, Rust</li>
        </ul>
        </div>
    </div>

    <p class="belief">
        I believe automation, observability, and security form the backbone of
        modern software delivery — and I love enabling teams to deliver faster
        with confidence.
    </p>

    <div class="contact">
        <p>
            Interested in the full journey?  
            <a href="https://drive.google.com/file/d/1JMOx7BV0Pel5lZTG3Z1bG6DO8J4JiXjW/view?usp=drive_link" target="_blank">View my Resume →</a>
        </p>
        <p>
            Open to DevOps or SDE opportunities.  
            Reach out at
            <a href="mailto:atharv.bhandvalkar@gmail.com">atharv.bhandvalkar@gmail.com</a>.
        </p>
        </div>
    </div>
  `,
  projects: renderProjects
};

document.querySelectorAll(".sidebar li[data-section]").forEach(item => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".sidebar li").forEach(li => li.classList.remove("active"));
    item.classList.add("active");

    const section = item.getAttribute("data-section");
    if (typeof sections[section] === "function") {
      sections[section]();
    } else {
      document.getElementById("content").innerHTML = sections[section] || "<p>Coming soon...</p>";
    }
  });
});

// Default load
document.getElementById("content").innerHTML = sections.home;
