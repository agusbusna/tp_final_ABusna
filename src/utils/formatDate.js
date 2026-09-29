export function formatearFechaSidebar(fechaMensaje) {
    if (!fechaMensaje) return "";

    const fecha = fechaMensaje instanceof Date ? fechaMensaje : new Date(fechaMensaje);


    if (isNaN(fecha.getTime())) {
        return String(fechaMensaje);
    }

    const ahora = new Date();
    const esHoy =
        fecha.getDate() === ahora.getDate() &&
        fecha.getMonth() === ahora.getMonth() &&
        fecha.getFullYear() === ahora.getFullYear();

    if (esHoy) {
        const horas = String(fecha.getHours()).padStart(2, "0");
        const minutos = String(fecha.getMinutes()).padStart(2, "0");
        return `${horas}:${minutos}`;
    }

    const ayer = new Date(ahora);
    ayer.setDate(ahora.getDate() - 1);

    const esAyer =
        fecha.getDate() === ayer.getDate() &&
        fecha.getMonth() === ayer.getMonth() &&
        fecha.getFullYear() === ayer.getFullYear();

    if (esAyer) {
        return "Ayer";
    }

    const dia = String(fecha.getDate()).padStart(2, "0");
    const mes = String(fecha.getMonth() + 1).padStart(2, "0");
    const anio = fecha.getFullYear();

    return `${dia}/${mes}/${anio}`;
}

export default formatearFechaSidebar;

export function formatearHora (fecha) {
    if (!fecha)
        return "";
    const fechaDate = fecha instanceof Date ? fecha : new Date (fecha);
    if (isNaN (fechaDate.getTime())) 
        return "";
    const horas = String(fechaDate.getHours()).padStart(2, "0");
    const minutos = String(fechaDate.getMinutes()).padStart(2, "0");

    return `${horas}:${minutos}`;
}

function soloFecha(d) {
    return new Date(d.getFullYear(), d.getMonth(), d.getDate())
}

export function claveDia(iso){
    const f = new Date(iso)
    return `${f.getFullYear()}-${String(f.getMonth() + 1).padStart(2, "0")}-${String(f.getDate()).padStart(2, "0")}`
}

export function etiquetaDia(iso) {
    const fecha = soloFecha(new Date(iso))
    const hoy = soloFecha(new Date())
    const dias = Math.round((hoy - fecha)/ 86400000)

    if (dias <= 0) return "hoy"
    if (dias === 1) return "ayer"
    if (dias < 7) return new Intl.DateTimeFormat ("es-Ar", { weekday: "long"}).format(fecha)

    const dd = String(fecha.getDate()).padStart(2, "0")
    const mm = String(fecha.getMonth() + 1).padStart(2,"0")
    return `${dd}/${mm}/${fecha.getFullYear()}`
}