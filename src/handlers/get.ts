type RouteCallback = (error?: Object, result?: Object) => void
type QueryResult = { error?: Object, rows?: Object[] }

const getAllHandler = (Model: any) => (request: Object, callback: RouteCallback) => {
  Model.getAll((result: QueryResult) => {
    const { error, rows } = result;

    if (error) return callback(error)
    callback(null, { status: 200, responseJson: { rows } })
  })
}

export const getSomeHandler = (Model: any) => (request: Object, callback: RouteCallback) => {
  Model.getSome((result: QueryResult) => {
    const { error, rows } = result;

    if (error) return callback(error)
    callback(null, { status: 200, responseJson: { rows } })
  })
}

export default getAllHandler;