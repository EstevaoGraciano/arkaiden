import ApiHandler from "../APIHandler";

interface ReqCreatePlayer {
    name: String
    description: String
}

class PlayerAPI {

    static create(data: ReqCreatePlayer) {
        return ApiHandler.post('http://localhost:3000/api/player/create', data)
    }
}

export default PlayerAPI;