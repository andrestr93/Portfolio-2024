import { Languaje } from "./languaje.interface"

export interface Job {
    name_cargo: string
    name_company: string
    description: string
    experience: string,
    languajes: Languaje[]
}

