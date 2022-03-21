import { Router } from "express"
import { ContactsHandler } from "../controllers/contacts"

const router: Router = Router();
const contacts = new ContactsHandler();

router.get("/contacts", contacts.getContacts)
router.post("/contacts", contacts.persistContacts)

export default router
