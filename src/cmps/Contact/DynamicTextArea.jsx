export function DynamicTextArea({ placeholder, rows, cols }) {
    return (
        <textarea
            placeholder={placeholder}
            name={placeholder.replaceAll(' ', '').toLowerCase()}
            rows={rows}
            cols={cols}
        ></textarea>
    )
}