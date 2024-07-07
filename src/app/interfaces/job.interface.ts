import { Technologies } from "./technologies.interface"

export interface Job {
    name_cargo: string
    name_company: string
    functions: string[]
    experience: string,
    technology: Technologies[]
}

