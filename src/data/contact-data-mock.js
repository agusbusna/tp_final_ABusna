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
        name: 'Susanta Thenon', 
        last_connection: 'hoy 08:21',      
        image: 'https://www.cultura.gob.ar/media/uploads/d_pi3w4uiawsxov.jpg' 
    },
    { 
        id: 3,
        type: "contact", 
        name: 'Edgar P',        
        last_connection: 'ayer 12:15',     
        image: 'https://cdn.zendalibros.com/wp-content/uploads/2018/01/el-cuervo-poe-e1516083315209.jpg' 
    },
    { 
        id: 4,
        type: "contact", 
        name: 'Walt Whitman',   
        last_connection: 'hace unos días', 
        image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/Walt_Whitman_-_George_Collins_Cox.jpg/960px-Walt_Whitman_-_George_Collins_Cox.jpg?utm_source=es.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail' 
    },
    { 
        id: 5,
        type: "contact", 
        name: 'Clarice Lispector', 
        last_connection: 'hace unos días', 
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/%281920-1977%29_Clarice_Lispector_6zxkp_please_credit%28palette.fm%29_%28cropped%29.png?utm_source=es.wikipedia.org&utm_campaign=imageinfo&utm_content=original' 
    },
    {
        name: "Familia",
        id: 6,
        type: "group"
    }
];

const contact_list_server = base_contacts.map((contacto) => ({
    ...contacto,
    ...resumirHilo(MOCK_MESSAGES[contacto.id]),
}));

export default contact_list_server;
