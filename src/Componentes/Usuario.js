export default function Usuario(props){
    const {usuario, nome} = props;
    const img = `assets/img/${usuario}.svg`
    return(
        <div class="usuario">
                <img src={img} />
                <div class="texto">
                    <strong>{usuario}</strong>
                    {nome}
                </div>
            </div>
    )
}