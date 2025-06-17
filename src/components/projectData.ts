const loadTextFile = async (file: string) => {
    const response = await fetch('/descriptions/' + file);
    const text = await response.text();
    return text.split(/\n\s*\n/);
};

const projects = [
    {
        index: 0,
        title: "Rankle",
        smallDescription: "A game where you answer the top 10 answers to the daily question",
        bigDescription: loadTextFile("rankleDescription.txt"),
        coverImage: '/assets/rankle.png',
        images:[],
        websites: [],
        enabled: false,
        link: '',
        skills: ['Defold', 'Lua'],
        badge: 'In development',
    },
    {
        index: 1,
        title: "Escape the gator",
        smallDescription: "A local Pvp racing survival game",
        bigDescription: loadTextFile("gatorDescription.txt"),
        coverImage: '/assets/escapeTheGator.png',
        images:['/assets/escapeTheGator1.gif','/assets/escapeTheGator2.png','/assets/escapeTheGator2.png'],
        websites: ['https://youtu.be/gNn5Zu6yQ_Y'],
        enabled: true,
        link: '/projects/escape_the_gator',
        skills: ['Unity', 'C#', 'VR'],
        badge: '',
    },
    {
        index: 2,
        title: "Scarlet Escape",
        smallDescription: "A VR escape room game",
        bigDescription: loadTextFile("scarletDescription.txt"),
        coverImage: '/assets/ScarletEscape_Logo.png',
        images:['/assets/scarletEscape1.gif','/assets/scarletEscape2.gif','/assets/scarletEscape3.gif"'],
        link: '/projects/scarlet_escape',
        websites: [],
        enabled: true,
        skills: ['Unity', 'C#', 'VR'],
        badge: '',
    },
]

export interface Project {
    index: number;
    title: string;
    smallDescription: string;
    bigDescription: Promise<string[]>;
    coverImage: string;
    images?: string[];
    websites?: string[];
    link: string;
    enabled?: boolean;
    skills: string[];
    badge: string;
}

export const projectData: Project[] = projects;