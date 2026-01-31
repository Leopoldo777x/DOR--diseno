export interface ICardBase {
    title: string;
    description: string;
}

export interface IProject extends ICardBase {
    link: string;
    repo?: string;
}

export interface ISkill {
    name: string;
    icon: string; // Clase de PrimeIcons
    description: string;
    level: number; // 0 a 100
}

export interface IExperience {
    company: string;
    role: string;
    period: string;
    details: string;
}

export interface IProfileData {
    about: {
        name: string;
        title: string;
        summary: string;
        photo: string;
    };
    projects: IProject[];
    skills: ISkill[];
    experience: IExperience[];
    contact: {
        email: string;
    };
}