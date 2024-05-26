export function DynamicExplanationCmp({ shape, header, text }) {
    return (
        <div className="explanation-container flex align-center">
            {shape}
            <div className="text flex column">
                <h2> {header} </h2>
                <p> {text} </p>
            </div>
        </div>
    )
}