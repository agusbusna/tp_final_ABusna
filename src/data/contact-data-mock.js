import { MOCK_MESSAGES } from "./message-data-mock";

export function resumirHilo(mensajes) {
    if (!mensajes || mensajes.length === 0) {
        return {
            last_message: "",
            last_message_time: null,
            unread_messages: null,
        };
    }

    const ultimo = mensajes[mensajes.length - 1];
    const sinLeer = mensajes.filter((mensaje) => mensaje.status === 'unseen').length;
    return {
        last_message: ultimo.text,
        last_message_time: ultimo.created_at,
        unread_messages: sinLeer > 0 ? sinLeer : null,
    };
}

const base_contacts = [
    { 
        id: 1,
        type: "contact", 
        name: 'Sofi P',         
        last_connection: 'hoy 14:30',      
        image: '/fotos/sofip.jpeg' 
    },
    { 
        id: 2,
        type: "contact", 
        name: 'Julia Dorothea', 
        last_connection: 'hoy 08:21',      
        image: '/fotos/contact2.jpg' 
    },
    { 
        id: 3,
        type: "contact", 
        name: 'R. Bolaño',        
        last_connection: 'ayer 12:15',     
        image: '/fotos/contact3.jpg' 
    },
    { 
        id: 4,
        type: "contact", 
        name: 'Marta A',   
        last_connection: 'hace unos días', 
        image: '/fotos/contact4.jpg' 
    },
    { 
        id: 5,
        type: "contact", 
        name: 'Ludmila Brenstein', 
        last_connection: 'hace unos días', 
        image: '/fotos/contact5.jpg' 
    },
    {
        name: "Familia",
        id: 6,
        type: "group",
        last_connection: "hace unos días",
        image: "/fotos/contact6.svg" 
    },
    { 
        id: 7,
        type: "contact", 
        name: 'N. Simone', 
        last_connection: 'hace unos días', 
        image: '/fotos/contact7.jpg' 
    },
    { 
        id: 8,
        type: "contact", 
        name: 'Jose Schwarz', 
        last_connection: 'hace unos días', 
        image: '/fotos/contact8.jpg' 
    },
    { 
        id: 9,
        type: "contact", 
        name: 'Esteban J', 
        last_connection: 'hace unos días', 
        image: '/fotos/contact9.jpg' 
    },
    { 
        id: 10,
        type: "contact", 
        name: 'Juan K.', 
        last_connection: 'hace unos días', 
        image: '/fotos/contact10.jpg' 
    },
    { 
        id: 11,
        type: "contact", 
        name: 'M. Rosenberg', 
        last_connection: 'hace unos días', 
        image: '/fotos/contact11.jpg' 
    },
    { 
        id: 12,
        type: "contact", 
        name: 'Jean L. G.', 
        last_connection: 'hace unos días', 
        image: '/fotos/contact12.jpg' 
    },
    { 
        id: 13,
        type: "contact", 
        name: 'H. Farocki', 
        last_connection: 'hace unos días', 
        image: '/fotos/contact13.jpg' 
    },
    { 
        id: 14,
        type: "contact", 
        name: 'Diana Pérez', 
        last_connection: 'hace unos días', 
        image: '/fotos/contact14.jpg' 
    },
    { 
        id: 15,
        type: "contact", 
        name: 'Mia Fatore', 
        last_connection: 'hace unos días', 
        image: '/fotos/contact15.jpg' 
    },
    { 
        id: 16,
        type: "contact", 
        name: 'Vir Hussey', 
        last_connection: 'hace unos días', 
        image: '/fotos/contact16.jpg' 
    },
    { 
        id: 17,
        type: "contact", 
        name: 'Mario Paz', 
        last_connection: 'hace unos días', 
        image: '/fotos/contact17.jpg' 
    },
    { 
        id: 18,
        type: "contact", 
        name: 'Luciano Pareto', 
        last_connection: 'hace unos días', 
        image: '/fotos/contact18.jpg' 
    },
    { 
        id: 19,
        type: "contact", 
        name: 'Hito', 
        last_connection: 'hace unos días', 
        image: '/fotos/contact19.jpg' 
    },
    { 
        id: 20,
        type: "contact", 
        name: 'Jose B', 
        last_connection: 'hace unos días', 
        image: '/fotos/contact20.jpg' 
    },
    { 
        id: 21,
        type: "contact", 
        name: 'Gera Soto', 
        last_connection: 'hace unos días', 
        image: '/fotos/contact21.jpg' 
    },
    { 
        id: 22,
        type: "contact", 
        name: 'Fia Loredo', 
        last_connection: 'hace unos días', 
        image: '/fotos/contact22.jpg' 
    },
    { 
        id: 23,
        type: "contact", 
        name: 'Nati Lima', 
        last_connection: 'hace unos días', 
        image: '/fotos/contact23.jpg' 
    },
    { 
        id: 24,
        type: "contact", 
        name: 'Tomi R', 
        last_connection: 'hace unos días', 
        image: '/fotos/contact24.jpg' 
    },
    { 
        id: 25,
        type: "group", 
        name: 'Qatar2022', 
        last_connection: 'hace unos días', 
        image: '/fotos/contact25.jpg' 
    },
    { 
        id: 26,
        type: "contact", 
        name: 'Elina Alonso ', 
        last_connection: 'hace unos días', 
        image: '/fotos/contact26.jpg' 
    },
    { 
        id: 27,
        type: "contact", 
        name: 'Delma Otero', 
        last_connection: 'hace unos días', 
        image: '/fotos/contact27.jpg' 
    },
    { 
        id: 28,
        type: "contact", 
        name: 'Yo (Tú)', 
        last_connection: 'hace unos días', 
        image: '/fotos/contact00_me.jpeg' 
    },


];

const contact_list_server = base_contacts.map((contacto) => ({
    ...contacto,
    ...resumirHilo(MOCK_MESSAGES[contacto.id]),
}));

export default contact_list_server;
