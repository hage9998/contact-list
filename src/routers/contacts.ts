import { Router } from "express"
import { ContactsHandler } from "../controllers/contacts"

const router: Router = Router();
const contacts = new ContactsHandler();

router.get("/contacts", contacts.getContacts)

export default router
