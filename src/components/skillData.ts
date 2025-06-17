


const skills = [
    {
        name: "Unity",
        icon: '/assets/unity.png',
        link: 'https://unity.com/'
    },
    {
        name: "C#",
        icon: '/assets/c-sharp.png',
        link: 'https://learn.microsoft.com/en-us/dotnet/csharp/'
    },
    {
        name: "Defold",
        icon: 'assets/defold.png',
        link: 'https://defold.com/'
    },
    {
        name: "Lua",
        icon: '/assets/lua.png',
        link: 'https://www.lua.org/'
    },
    {
        name: "Bootstrap",
        icon: '/assets/bootstrap.png',
        link: 'https://getbootstrap.com/'
    },
    {
        name: "React",
        icon: '/assets/react.svg',
        link: 'https://reactjs.org/'
    },
]

export interface Skill {
    name: string;
    icon: string;
    link: string;
}

export const skillsData: Skill[] = skills;