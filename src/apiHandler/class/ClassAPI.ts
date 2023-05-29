import ApiHandler from "../APIHandler";

interface ReqCreateClass {
    id?: number;
    name: string;
    description: string;
    baseStr: number;
    baseRes: number;
    baseInt: number;
    baseAgi: number;
    baseKnw: number;
    baseCon: number;
    baseHealth: number;
    baseGuard: number;
    baseLowGuard: number;
    baseDeathTurn: number;
}

class ClassAPI {

    static create(data: ReqCreateClass) {
        return ApiHandler.post('http://localhost:3000/api/class/create', data)
    }
    static getAll() {
        return ApiHandler.get('http://localhost:3000/api/class/getAll')
    }
    static getById(id: string) {
        return ApiHandler.get(`http://localhost:3000/api/class/getById/${id}`)
    }
}

export default ClassAPI;