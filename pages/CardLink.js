
export default function CardLink(props) {
    return(
        <a href={props.url}>
            <h2 className="my-1 text-3xl">{props.description}</h2>
        </a>
    )
}