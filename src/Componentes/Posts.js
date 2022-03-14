import Post from "./Post";

const posts = [
    {
        usuario: "meowed",
        src: "./assets/img/gato-telefone.svg",
        usuarioCurtidas: "respondeai",
        curtidas: "101.523",
        tipo: "Imagem"
    },
    {
        usuario: "barked",
        src: "./assets/img/dog.svg",
        usuarioCurtidas: "adorable_animals",
        curtidas: "99.159",
        tipo: "Imagem"
    },
    {
        usuario: "meowed",
        src: "./assets/video/video",
        usuarioCurtidas: "barked",
        curtidas: "1.242",
        tipo: "video"
    }]

export default function Posts() {
    return (
        <div class="posts">
            {posts.map((post) => (
                <Post usuario={post.usuario} src={post.src} usuarioCurtidas={post.usuarioCurtidas} curtidas={post.curtidas} tipo={post.tipo}/>))}
        </div>
    )
}