import { Column } from "typeorm";
import { Response, Request } from "express";
import Contact from "../models/contacts";
import { BaseController } from "./base_controller";
import { Contacts } from "../models/entities/contacts_db";

class ContactsHandler extends BaseController {
  public getContacts = async (_: Request, res: Response) => {
    const contacts = await Contacts.find();
    this.requestResponse(res, 200, contacts);
  };

  async persistContacts(req: Request, res: Response) {
    const { name, phone } = req.body;
    try {
      const contact = new Contacts();
      contact.name = name;
      contact.phone = phone;
      await contact.save();

      return res.status(201).json(contact);
    } catch (err) {
      if (err instanceof Error)
        return res.status(400).send(JSON.stringify({ Error: err.message }));
      res.status(400).send(`${typeof err}`);
    }
  }
}

export { ContactsHandler };
