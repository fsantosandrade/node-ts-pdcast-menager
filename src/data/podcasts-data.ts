import fs from 'fs'
import path from 'path'
import { PodcastModel } from '../models/podcast-model'

const pathData = path.join(__dirname, "../data/podcast.json")

export const dataPodcast = async (podcastName?:string):Promise<PodcastModel[]> => {
    const language = "utf-8"

    const data = fs.readFileSync(pathData, language)
    let jsonFile = JSON.parse(data)

    if(podcastName) {
        jsonFile = jsonFile.filter((result: PodcastModel) => result.podcastName === podcastName)
    }

    return jsonFile
}