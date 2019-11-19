type RouteCallback = (error?: Object, result?: Object) => void
type QueryResult = { error?: Object, rows?: Object[] }

const getHandler = (Operator: any) => (request: Object, callback: RouteCallback) => {
  Operator.onGet(request, (result: QueryResult) => {
    if (result.error) return callback(result.error)
    callback(null, { status: 200, responseJson: { rows: result.rows } })
  })
}

export default getHandler;