export default function Sugestao(props) {
    const {usuario, razao} = props;
    const img = `./assets/img/${usuario}.svg`

    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={img} />
                <div class="texto">
                    <div class="nome">{usuario}</div>
                    <div class="razao">{razao}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}