import Story from "./Story";

const usuarioStories=["9gag", "meowed", "barked", "nathanwpylestrangeplanet", "wawawicomics", "respondeai", "filomoderna", "memeriagourmet"];

export default function Stories() {
    return (
        <div class="stories">
            {usuarioStories.map((usuario) => (
                <Story usuario= {usuario} />
            ))}
            
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}