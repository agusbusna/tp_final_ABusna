import { useEffect, useMemo, useRef } from "react";


function useContactOrder({ contacts, setContacts, messages, pinnedIds}) {
    const largos_previos = useRef(null)

    useEffect(()=> {
        const largos_actuales = {}
        for (const [idHilo, hilo] of Object.entries(messages)) {
            largos_actuales [idHilo] = hilo.length
        }

        const previos = largos_previos.current
        largos_previos.current = largos_actuales

        if(!previos) return

        const algo_cambio = Object.keys(largos_actuales).some(
            (id) => previos[id] !== largos_actuales[id]
        )
        if(!algo_cambio) return
        setContacts((prev) =>{
            const ids_a_mover = Object.keys(largos_actuales)
            .filter(
                (id) =>
                    previos[id] === undefined ||
                    largos_actuales[id] > previos[id]
            )
            .map(Number)
            .filter((id) => !pinnedIds.includes(id))
        if(ids_a_mover.length === 0) return prev
        const movidos = ids_a_mover
            .map((id) => prev.find((contacto) => contacto.id === id))
            .filter(Boolean)
        const resto = prev.filter(
            (contacto) => !ids_a_mover.includes(contacto.id)
        )

        return [...movidos, ...resto]
        })
    }, [messages, pinnedIds, setContacts])

    const sorted_contacts = useMemo(()=> {
        const pinned = contacts.filter( (contacts) => pinnedIds.includes(contacts.id))
        const resto = contacts.filter( (contacts)=> !pinnedIds.includes(contacts.id))
        return [...pinned, ...resto]
    }, [contacts, pinnedIds])

    return sorted_contacts
}

export default useContactOrder