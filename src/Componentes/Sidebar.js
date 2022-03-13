import Usuario from "./Usuario";
import Sugestoes from "./Sugestoes";

const usuario = {
    usuario: 'catanacomics',
    nome: 'Catana'
}

export default function Sidebar() {
    return (
        <div class="sidebar">
            <Usuario usuario={usuario.usuario} nome={usuario.nome} />

            <Sugestoes />

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}