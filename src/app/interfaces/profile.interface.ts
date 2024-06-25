import { Job } from './job.interface';
export interface Profile {

    name: string,
    surname: string,
    city: string,
    telephone: number,
    jobs: Job[]
}