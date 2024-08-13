export interface Album {
    id: string;
    ref: string;
    name: string;
    title: string;
    description: string;
    duration: number;
    url: string;
    like?: string;
    tags?: string[];
    status: string;
}
