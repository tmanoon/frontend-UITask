export function DynamicExplanationCmp({ shape, header, text }) {
    return (
        <div className="explanation-container">
            <h2> {header} </h2>
            {shape}
            <p> {text} </p>
        </div>
    )
}