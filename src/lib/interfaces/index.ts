export interface LoginResponse {
    status: "error" | "success" | "empty";
    message: string;
}

export interface Post {
    id: string;
    publicName: string;
    problem: string | null;
    vision: string | null;
    aboutMe: string | null;
    lookingFor: string | null;
    offer: string | null;
    team: string | null;
    location: string | null;
    projectPhase: string | null;
    linkedin: string | null;
    instagram: string | null;
    twitter: string | null;
    contactEmail: string | null;
    profilePhoto: string | null;
    createdAt: Date;
    authorId: string;
}