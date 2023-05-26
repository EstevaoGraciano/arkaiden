import ApiHandler from "../APIHandler";

interface ReqCreateDescendency {
    name: String
    description: String
}

class DescendencyAPI {

    static create(data: ReqCreateDescendency) {
        return ApiHandler.post('http://localhost:3000/api/descendency/create', data)
    }
    static getAll() {
        return ApiHandler.get('http://localhost:3000/api/descendency/getAll')
    }
    static getById(id: string) {
        return ApiHandler.get(`http://localhost:3000/api/descendency/getById/${id}`)
    }
}

export default DescendencyAPI;