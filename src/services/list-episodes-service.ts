import { dataPodcast } from "../data/podcasts-data"
import { PodcastTransferModel } from "../models/podcast-transfer-model"
import { StatusCode } from "../utils/status-code"

export const servicesListEpisodes = async ():Promise<PodcastTransferModel> => {

    // Definindo formato
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: []
    }

    //Buscando dados
    const data = await dataPodcast()

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