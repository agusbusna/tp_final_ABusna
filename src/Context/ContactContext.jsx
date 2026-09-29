
import contact_list_server from "../data/contact-data-mock";
import { createContext, useState, useCallback, useMemo } from "react";
import { Outlet, useParams } from "react-router";
import { MOCK_MESSAGES } from "../data/message-data-mock";
import { resumirHilo } from "../data/contact-data-mock";
import useContactOrder from "../hooks/useContactOrder";



export const ContactContext = createContext()

export function ContactContextProvider() {
    const [contacts, setContacts] = useState(contact_list_server)
    const [messages, setMessages] = useState(MOCK_MESSAGES)
    const [pinnedIds, setPinneedIds] = useState([])

    const togglePin = useCallback((id)=> {
        const idFijo = Number(id)
        setPinneedIds((prev)=>
            prev.includes(idFijo) ? prev.filter((x) => x !== idFijo) : [...prev, idFijo]
        )
    }, [])
    const sorted_contacts = useContactOrder({
        contacts: contacts,
        setContacts,
        messages: messages,
        pinnedIds: pinnedIds
    })

    const { contact_id } = useParams()

    const contacto_seleccionado = contact_id
        ? contacts.find((contacto) => contacto.id === Number(contact_id)) || null
        : null

    function getContactById(id) {
        return contacts.find((contacto) => contacto.id === Number(id)) || null
    }

    const contacts_resumidos = useMemo(()=> {
        return sorted_contacts.map((contacto) => ({
            ...contacto,
            ...resumirHilo(messages[contacto.id])
        }))
    }, [sorted_contacts, messages])

    const getMessagesByContact = useCallback((id)=> {
        if (id === undefined || id === null) return []
        return messages [Number(id)] ?? []
    }, [messages])

    const markAsRead = useCallback((id) => {
        const idHilo = Number(id)

        setMessages ((prev) => {
            const hilo = prev[idHilo]
            if (!hilo) return prev
            if (hilo.every((messages)=>messages.status === "seen")) return prev

            return {
                ...prev,
                [idHilo]: hilo.map ((messages)=>
                    messages.status === "seen" ? messages : {...messages, status: "seen"}
                ),
            }
        })
    }, [])

    const sendMessage = useCallback((id, texto) => {
        const contenido = texto.trim()
        if (!contenido) return
        
        const idHilo = Number(id)
        setMessages((prev) => {
            const hilo = prev[idHilo] ?? []
            const nextId = hilo.length
                ? Math.max(...hilo.map((messages)=>messages.id)) + 1
                : 1
            return {
                ...prev,
                [idHilo]: [
                    ...hilo,
                    {
                        id: nextId,
                        text: contenido,
                        author: "YO",
                        isOutgoing: true,
                        created_at: new Date(). toISOString(),
                        status: "sent",
                    }
                ],
            }
        })
    }, [])

    const provider_values = {
        contacts: contacts_resumidos,
        setContacts: setContacts,
        pinnedIds: pinnedIds,
        togglePin: togglePin,
        contact_id: contact_id,
        contacto_seleccionado: contacto_seleccionado,
        selected_contact: contacto_seleccionado,
        getContactById: getContactById,
        messages: messages,
        getMessagesByContact: getMessagesByContact,
        markAsRead: markAsRead,
        sendMessage: sendMessage,
    } 

    return (
        <ContactContext.Provider
            value={provider_values}
        >
            <Outlet/>
        </ContactContext.Provider>
    )
}