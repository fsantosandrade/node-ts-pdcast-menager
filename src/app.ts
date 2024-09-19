import * as http from "http"
import { getListEpisodes, getFilterEpisodes } from "./controllers/podcasts-controller"
import { Routes } from "./routes/routes";
import { HttpMethods } from "./utils/http-methods";

export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {

    // QueryString
    const baseUrl = request.url?.split("?")[0]
    ?? ["", ""]

    if(request.method === HttpMethods.GET && baseUrl === Routes.LIST) {
        await getListEpisodes(request, response)
    }else if (request.method === HttpMethods.GET && baseUrl === Routes.EPISODE) {
        await getFilterEpisodes(request, response)
    }
}