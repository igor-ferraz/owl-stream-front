export interface Movie {
    id: string;
    active?: true;
    title: string;
    durationInMinutes: number;
    synopsis?: string;
    launchDate?: Date;
    creationDate?: Date;
}