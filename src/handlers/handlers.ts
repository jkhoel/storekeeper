type RouteCallback = (error?: Object, result?: Object) => void
type QueryResult = { error?: Object, rows?: Object[] }

const getHandler = (Model: any) => (request: Object, callback: RouteCallback) => {
  Model.onGet(request, (result: QueryResult) => {
    const { error, rows } = result;

    if (error) return callback(error)
    callback(null, { status: 200, responseJson: { rows } })
  })
}

export default getHandler;