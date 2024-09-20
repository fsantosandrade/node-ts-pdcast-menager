import fs from 'fs'
import path from 'path'
import { PodcastModel } from '../models/podcast-model'

const pathData = path.join(__dirname, "../data/podcast.json")

export const dataPodcast = async (podcastName?:string, podcastCategories?: string[]):Promise<PodcastModel[]> => {
    const language = "utf-8"

    const data = fs.readFileSync(pathData, language)
    let jsonFile = JSON.parse(data)

    if(podcastName) {
        jsonFile = jsonFile.filter((result: PodcastModel) => result.podcastName === podcastName)
    }

    if(podcastCategories?.length !== 0) {
        podcastCategories?.forEach(category => {
            jsonFile = jsonFile.filter((result: PodcastModel) => {
                return result.categories?.includes(category)
            })
        })
    }

    return jsonFile
}