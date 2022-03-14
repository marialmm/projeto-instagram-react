export default function Video(props) {
    const src = props.src;
    return (
        <video autoPlay loop muted>
            <source src={`${src}.mp4`} type="video/mp4" />
            <source src={`${src}.ogv`} type="video/ogv" />
        </video>
    )
}