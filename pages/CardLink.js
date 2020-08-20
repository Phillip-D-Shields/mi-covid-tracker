
export default function CardLink(props) {
    return(
        <a href={props.url}>
            <h2>{props.description}</h2>
            <h3>{props.url}</h3>
        </a>
    )
}