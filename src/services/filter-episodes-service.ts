import { dataPodcast } from "../data/podcasts-data"
import { PodcastTransferModel } from "../models/podcast-transfer-model"
import { StatusCode } from "../utils/status-code"

export const servicesFilterPodcasts = async (podcastName: string | undefined): Promise<PodcastTransferModel> => {

    // Definindo formato
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: []
    }

    //Buscando dados
    const params = new URLSearchParams(podcastName?.split('?')[1]);

    const name = params.get("name") || ""
    const category = params.getAll("category") || ""

    const data = await dataPodcast(name, category)

    //verifico sem tem conteúdo
    if(data){
        if(data.length !== 0) {
            responseFormat.statusCode = StatusCode.OK
        }else {
            responseFormat.statusCode = StatusCode.NO_CONTENT
        }
    }else {
        responseFormat.statusCode = StatusCode.INTERNAL_SERVER_ERROR
        console.log("ERROR")
    }

    responseFormat.body = data

    return responseFormat
}