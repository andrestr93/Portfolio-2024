import { Job } from './job.interface';
export interface Profile {

    subtitule: string
    introduction: string
    name: string,
    surname: string,
    city: string,
    telephone: number,
    jobs?: Job[]
    img: string
}