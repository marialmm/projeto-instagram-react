import Post from "./Post";

const posts = [
    {
        usuario: "meowed",
        img: "./assets/img/gato-telefone.svg",
        usuarioCurtidas: "respondeai",
        curtidas: "101.523"
    },
    {
        usuario: "barked",
        img: "./assets/img/dog.svg", 
        usuarioCurtidas: "adorable_animals",
        curtidas: "99.159"
    }]

export default function Posts() {
    return (
        <div class="posts">
            {posts.map((post) =>(
            <Post usuario={post.usuario} img={post.img} usuarioCurtidas={post.usuarioCurtidas}  curtidas={post.curtidas} />))}
        </div>
    )
}