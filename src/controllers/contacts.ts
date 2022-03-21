import { Column } from 'typeorm';
import { Response, Request } from "express"
import Contact from "../models/contacts"
import { BaseController } from "./base_controller"
import { Contacts } from "../models/entities/contacts_db"



class ContactsHandler extends BaseController {

    public getContacts = (_: Request, res: Response) => {
        const contacts: Contact = {
            name: "lucas",
            phone_number: 123456
        }
        this.requestResponse(res, 200, contacts)
    }

    async persistContacts(req: Request, res: Response) {
        const { name, phone_number } = req.body;
        try{
            const contact = new Contacts();
            contact.name = name;
            contact.phone = phone_number;

            await contact.save();

            return res.status(201).json(contact);
        } catch (err) {
            if (err instanceof Error) return res.status(400).send(JSON.stringify({"Error": err.message}))
            res.status(400).send(`${typeof(err)}`) }
    }
}

export { ContactsHandler }

