import { Response, Request } from "express"
import Contact from "../models/contacts"
import { BaseController } from "./base_controller"

// const getTodos = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const todos: ITodo[] = await Todo.find()
//     res.status(200).json({ todos })
//   } catch (error) {
//     throw error
//   }
// }
class ContactsHandler extends BaseController {

    public getContacts = (req: Request, res: Response) => {
        const contacts: Contact = {
            name: "lucas",
            phone_number: 123456
        }
        this.requestResponse(res, 200, contacts)
    }
}

export { ContactsHandler }
