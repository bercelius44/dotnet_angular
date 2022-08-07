import { Photo } from "./photo";

export interface Member {
    // id: number | null;
    username: string | null;
    // photoUrl: string | null;
    // age: number | null;
    knownAs: string | null;
    created: string | null;
    lastActive: string | null;
    gender: string | null;
    introduction: string | null;
    lookingFor: string | null;
    interests: string | null;
    city: string | null;
    country: string | null;
    // photos: Photo[] | null;
}