import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const addContact = createAction("item/addContact", (newContact) => ({
  payload: {
    ...newContact,
    id: uuidv4(),
  },
}));

const removeContact = createAction("item/removeContact");

const changeFilter = createAction("item/changeFilter");
export default { addContact, removeContact, changeFilter };
