import Sugestao from "./Sugestao"

const sugestoes = [
    {
        usuario: "bad.vibes.memes",
        razao: "Segue você"
    },
    {
        usuario: "chibirdart",
        razao: "Segue você"
    },
    {
        usuario: "razoesparaacreditar",
        razao: "Novo no Instagram"
    },
    {
        usuario: "adorable_animals",
        razao: "Segue você"
    },
    {
        usuario: "smallcutecats",
        razao: "Segue você"
    }
];

export default function Sugestoes() {
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sugestoes.map((sugestao) => (
                <Sugestao usuario={sugestao.usuario} razao={sugestao.razao} />
            ))}

        </div>
    )
}