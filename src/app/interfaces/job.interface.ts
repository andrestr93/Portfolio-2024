import { Technologies } from "./technologies.interface"

export interface Job {
    name_cargo: string
    name_company: string
    description: string
    experience: string,
    technology: Technologies[]
}

