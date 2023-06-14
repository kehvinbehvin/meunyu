/* eslint-disable */
import { intialiseDB } from "../../clients/supabase"

const supabase = intialiseDB()

export const saveImages = async (files: Array<any>) => {
    const payload = files.map((file) => {
        return {
            "url": file.location,
            "likes": [],
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
    const { pageLimit, page } = filters
    const to = pageLimit * page
    const from = to - pageLimit

    // Exlcude last item
    const adjustedTo = to - 1

    try {
        const { data } = await supabase.rpc('load_sorted_images').select("*").range(from, adjustedTo);
        return data
    } catch(error) {
        console.error(error)
    }
}