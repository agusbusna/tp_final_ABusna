
import contact_list_server from "../data/contact-data-mock";
import { createContext, useState } from "react";
import { Outlet, useParams } from "react-router";

export const ContactContext = createContext()

export function ContactContextProvider() {
    const [contacts, setContacts] = useState(contact_list_server)
    const { contact_id } = useParams()

    const contacto_seleccionado = contact_id
        ? contacts.find((contacto) => contacto.id === Number(contact_id)) || null
        : null

    function getContactById(id) {
        return contacts.find((contacto) => contacto.id === Number(id)) || null
    }

    const provider_values = {
        contacts: contacts,
        setContacts: setContacts,
        contact_id: contact_id,
        contacto_seleccionado: contacto_seleccionado,
        selected_contact: contacto_seleccionado,
        getContactById: getContactById,
    } 

    return (
        <ContactContext.Provider
            value={provider_values}
        >
            <Outlet/>
        </ContactContext.Provider>
    )
}