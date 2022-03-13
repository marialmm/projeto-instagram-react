export default function Post(props) {
    const {usuario, img, usuarioCurtidas, curtidas} = props;
    const imgUsuario = `./assets/img/${usuario}.svg`;
    const imgCurtidas = `./assets/img/${usuarioCurtidas}.svg`;
    const icones = ["heart-outline", "chatbubble-outline", "paper-plane-outline"];

    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={imgUsuario} />
                    {props.usuario}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={img} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        {icones.map((icone) => (
                            <ion-icon name={icone}></ion-icon>
                        ))}
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={imgCurtidas} />
                    <div class="texto">
                        Curtido por <strong>{usuarioCurtidas}</strong> e <strong>outras {curtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}