const projectDetails = {
    // PyPi
    "pyfort": {
        desc: "Pyfort is a Python package for quick encryption utilities.",
        link: "https://pypi.org/project/pyfort/"
    },
    "launchenv": {
        desc: "LaunchEnv helps automate Python environment setup.",
        link: "https://pypi.org/project/launchenv/"
    },
    "typeprint": {
        desc: "TypePrint provides styled terminal printing for Python.",
        link: "https://pypi.org/project/typeprint/"
    },

    // Games
    "bugged-up": {
        desc: "A 2D puzzle game published on Itch.io.",
        link: "https://nusuta-studio.itch.io/bugged-up"
    },
    "dimensional-jump": {
        desc: "Platformer game built with Python/Pygame.",
        link: "https://github.com/a-tharva/Dimentional-jump"
    },
    "flappy-bird": {
        desc: "Classic flappy bird clone built in Python.",
        link: "https://github.com/a-tharva/flappy-bird"
    },

    // Applications
    "way-home": {
        desc: "Navigation-focused Android app.",
        link: "https://github.com/a-tharva/Apps/tree/master/way%20home"
    },
    "calculator": {
        desc: "Basic calculator app built with Java.",
        link: "https://github.com/a-tharva/Apps/tree/master/calculator"
    },
    "sha256": {
        desc: "Tool to compute SHA256 cryptographic hashes.",
        link: "https://github.com/a-tharva/Apps/tree/master/sha256"
    },

    // ML/DA
    "trends": {
        desc: "Analyzing Google Trends data with Python.",
        link: "https://github.com/a-tharva/trends"
    },
    "digits": {
        desc: "Handwritten digit recognition using Keras + MNIST.",
        link: "https://github.com/a-tharva/Neural-Network-Keras-Mnist"
    },
    "happiness": {
        desc: "Predicting World Happiness Index with ML.",
        link: "https://github.com/a-tharva/World-Happiness-Prediction"
    },

    // Bots
    "reddit-bot": {
        desc: "Automation bot for Reddit.",
        link: "https://github.com/a-tharva/skeleton/tree/master/reddit"
    },
    "discord-bot": {
        desc: "Discord bot with commands and utilities.",
        link: "https://github.com/a-tharva/skeleton/tree/master/discord"
    },
    "telegram-bot": {
        desc: "Telegram bot automation.",
        link: "https://github.com/a-tharva/skeleton/tree/master/telegram"
    },

    // Open Source
    "sauce": {
        desc: "Open-source contributions and experiments.",
        link: "https://github.com/a-tharva/sauce"
    },
    "weird-codes": {
        desc: "Collection of unusual but fun codes.",
        link: "https://github.com/a-tharva/Weird-codes"
    },

    // Scripts
    "algo-comparison": {
        desc: "Comparing algorithm performance.",
        link: "https://github.com/a-tharva/algorithm-comparison"
    },
    "spotify": {
        desc: "Scripts to interact with Spotify APIs.",
        link: "https://github.com/a-tharva/spotify"
    },

    // Tools
    "ip-master": {
        desc: "IP Master tool for IP analysis and lookup.",
        link: "https://github.com/a-tharva/IP_master"
    },
    "shedmessage": {
        desc: "SHEDMessage communication tool.",
        link: "https://github.com/a-tharva/SHEDMessage"
    },
    "hkt": {
        desc: "HKT (Not Linked).",
        link: ""
    },

    // IoT
    "adv-sensing": {
        desc: "Advanced Sensing (Not Linked).",
        link: ""
    },

    // Working On
    "proximity": { desc: "Proximity (Not Linked).", link: "" },
    "super-script": { desc: "Super Script (Not Linked).", link: "" },
    "ocveditor": { desc: "OCVEditor (Not Linked).", link: "" },
    "health": { desc: "Health (Not Linked).", link: "" }
};

document.querySelectorAll(".projects-list li").forEach(item => {
    item.addEventListener("click", () => {
        const key = item.getAttribute("data-project");
        const detailBox = document.getElementById("project-details");
        const data = projectDetails[key];
        if (data) {
            let linkHtml = data.link ? `<p><a href="${data.link}" target="_blank">View Project</a></p>` : "<p>No link available</p>";
            detailBox.innerHTML = `<h2>${item.innerText}</h2><p>${data.desc}</p>${linkHtml}`;
        } else {
            detailBox.innerHTML = `<h2>${item.innerText}</h2><p>Details coming soon.</p>`;
        }
    });
});
