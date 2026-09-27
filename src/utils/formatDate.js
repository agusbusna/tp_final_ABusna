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