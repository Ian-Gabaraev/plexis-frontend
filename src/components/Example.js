export default function ExampleSentence (props) {

    return (
        <blockquote className="blockquote mb-0">
            <p>{props.sentence}</p>
            <footer className="blockquote-footer">{props.author}
                <cite title="Source Title">&nbsp;in&nbsp;{props.source}</cite>
            </footer>
        </blockquote>
    )
}
