export type ExternalLink = {
    label: string;
    url: string;
};

export type Project = {
    slug: string;
    title: string;
    cardBlurb: string;
    description: string;
    skills: string[];
    githubUrl: string;
    videoSrc?: string;
    externalLink?: ExternalLink;
};

export const Projects: Project[] = [
    {
        slug: "free-fall",
        title: "Free Fall",
        cardBlurb: "🏆 3rd Place, Level Up Showcase People's Choice Award\n\nA multiplayer Unreal Engine 5 racing game set in a post-apocalyptic world where buildings collapse around the track. Built by a 15+ person cross-disciplinary team and played with an Asetek racing wheel.",
        description:
            "Free Fall is a multiplayer racing game set in a post-apocalyptic world, where buildings collapse around the track using Unreal's Chaos destruction system. It was built in Unreal Engine 5 over four months by a team of 15+ game programming and 3D Animation students, and it won 3rd place for the People's Choice Award at the Level Up Showcase.\n" +
            "\n" +
            "I led the project as Tech Design and Programming lead. I programmed all of the UI, built the checkpoint and respawn logic, and used C++ to generate a spline in code that tracks each player's race progress. I also helped build the networking, including the replication of effects and of resources such as the nitro boost.\n" +
            "\n" +
            "The game is meant to be played with a racing simulator wheel from Asetek. Since Unreal's Enhanced Input system does not support the wheel, the team integrated it through a custom DLL. I worked on the Blueprint side of that integration, connecting the wheel's inputs to the game's features and adding input behaviors such as press-and-hold actions.",
        skills: ["Unreal Engine 5", "C++", "Blueprints", "Replication", "UI", "Splines", "Hardware Input", "Team Lead"],
        githubUrl: "https://github.com/MattPiet/GAME259_2026_WinterA",
        videoSrc: "https://www.youtube.com/embed/DBT8PXQmHnM",
        externalLink: {
            label: "Game website",
            url: "https://freefallhumber.wixsite.com/free-fall",
        },
    },
    {
        slug: "graphics-and-physics-collection",
        title: "Graphics and Physics Collection",
        cardBlurb: "A collection of C++ graphics and physics projects focused on OpenGL rendering pipelines and physics-based calculations such as collisions, movement, and rotation.",
        description:
            "This project is a collection of small projects made during my second semester at Humber, containing a mix of work from the Graphics and Physics classes. It mostly focuses on learning how to use the OpenGL API and its rendering pipeline to display graphics in C++ projects. For the physics portion, the work focuses on applying physics equations in code to calculate collisions, rotations, movement, and other related systems.",
        skills: ["C++", "OpenGL", "SDL2", "Physics", "Rendering", "Collision", "3D Graphics"],
        githubUrl: "https://github.com/Vakarian-S/FirstYearGameProgramming",
        videoSrc: 'https://youtube.com/embed/BNyhRWVlTFI'
    },
    {
        slug: "midstone-team-project",
        title: "Midstone Team Project",
        cardBlurb: "A collaborative C++ game project built with OpenGL and SDL, highlighting teamwork, system integration, and applied graphics and physics concept",
        description:
            "The midstone project highlights collaboration with other students to integrate multiple systems into a single game, using the knowledge gained from the graphics and physics classes. The end result was a C++ project that uses the OpenGL API and the SDL library to create a small 2D game based on collision physics. The main goal of this project is to demonstrate collaboration with other developers in the context of video game programming.",
        skills: ["C++", "OpenGL", "SDL3", "Physics", "Collisions", "Sprite Animations"],
        githubUrl: "https://github.com/MattPiet/Mid-Stone",
        videoSrc: 'https://youtube.com/embed/QmRGF4kQKY0'
    },
    {
        slug: "unreal-skill-tree-research",
        title: "Unreal Skill Tree Research",
        cardBlurb: "A work-in-progress Unreal Engine research project exploring data-driven skill trees, UI integration, and a light roguelike mechanic that introduces randomized skill choices.",
        description:
            "This project is a work in progress. As part of an assignment for our Unreal class, we were tasked with researching a gameplay system and implementing it in Unreal Engine. In this case, I chose to investigate how to develop a skill tree system.\n" +
            "\n" +
            "With a focus on data assets and their connection to UI elements, I created a simple skill tree widget. As an extension of the system, I implemented a small roguelike-style mechanic where a special skill randomly presents three skills from a defined pool of choices. Additionally, I iterated on the implementation with an alternative version that offers more versatility, such as automatically drawn skill trees based on data, at the cost of developing a custom rendering system to correctly organize skills within the canvas.",
        skills: ["Unreal Engine", "Blueprints", "UI Widgets", "Data Assets"],
        githubUrl: "https://github.com/Vakarian-S/Unreal-Skill-Tree",
        videoSrc: 'https://youtube.com/embed/9E0s5IEM8tY'
    },
];
