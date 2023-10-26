export function load({ params }) {
    return {
        cols: parseInt(params.cols),
        rows: parseInt(params.rows)
    }
}