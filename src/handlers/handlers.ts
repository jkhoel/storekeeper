type RouteCallback = (error?: Object, result?: Object) => void
type QueryResult = { error?: Object, rows?: Object[] }

const getHandler = (Model: any) => (request: Object, callback: RouteCallback) => {
  Model.onGet(request, (result: QueryResult) => {
    if (result.error) return callback(result.error)
    callback(null, { status: 200, responseJson: { rows: result.rows } })
  })
}

export default getHandler;