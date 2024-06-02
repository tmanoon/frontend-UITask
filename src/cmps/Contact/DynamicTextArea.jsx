export function DynamicTextArea({ placeholder, rows = 1, cols = 1 }) {
    return (
        <textarea
            placeholder={placeholder}
            name={placeholder.replaceAll(' ', '').toLowerCase() + 'Input'}
            rows={rows}
            cols={cols}
        ></textarea>
    )
}