/* eslint-disable */
import { intialiseDB } from "../../clients/supabase"

const supabase = intialiseDB()

export const saveImages = async (files: Array<any>) => {
    const payload = files.map((file) => {
        return {
            "url": file.location
        }
    })

    try {
        const { data } = await supabase.from('Image').insert(payload).select('*');
        console.log("Images saved")
        return data
    } catch (error) {
        console.error(error)
    }
}

export const loadImages = async (filters: any) => {
    const range = filters.range

    try {
        const { data } = await supabase.from('Image').select("*");
        console.log("Images loaded")
        return data
    } catch(error) {
        console.error(error)
    }
}