import { Response } from "express"

export enum Status {
    OK = 200,
    CREATED = 201,
    NO_CONTENT = 204,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    NOT_FOUND = 404,
}

export class BaseController {

    requestResponse<T>(res: Response, status: Status, payload_response?: T): void{
        payload_response ? res.status(status).json(payload_response) : res.status(status).send("Not found")
    }

}
