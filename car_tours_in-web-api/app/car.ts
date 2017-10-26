export interface Sedan { sedan: boolean; }
export interface Hatchback { hatchback: boolean; }
export interface Vagon { vagon: boolean; }
export class Car {
    id: number;
    sedan: boolean;
    vagon: boolean;
    hatchback: boolean;
    name: string;
    src: string;
    desc: string;
}