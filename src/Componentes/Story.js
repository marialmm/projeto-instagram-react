export default function Story(props){
    const {usuario} = props;
    const img = `./assets/img/${usuario}.svg`

    return(
        <div class="story">
                <div class="imagem">
                    <img src={img} />
                </div>
                <div class="usuario">
                    {usuario}
                </div>
            </div>
    )
}