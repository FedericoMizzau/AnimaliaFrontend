//const urlServidor = "http://localhost:3000"
//const urlServidor = "https://dds-backend.azurewebsites.net"

//const urlServidor = "https://webapi.pymes.net.ar"
const urlServidor = "http://localhost:4000"

const urlResourceArticulos = urlServidor + "/api/articulos";
const urlResourceArticulosFamilias = urlServidor + "/api/articulosfamilias";
const urlResourceArticulosJWT = urlServidor + "/api/jwt/articulos";

export const config = {
    urlServidor,
    urlResourceArticulos,
    urlResourceArticulosFamilias,
    urlResourceArticulosJWT,
}