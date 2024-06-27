import { Job } from './job.interface';
import { Training } from './training.interface';
export interface Profile {

    subtitule: string
    aboutme: string
    introduction: string
    name: string,
    surname: string,
    city: string,
    telephone: number,
    jobs: Job[]
    training: Training[]
    img: string
}