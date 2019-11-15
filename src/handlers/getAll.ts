const getAll = (Model: any) => (req: any, callback: any) => {
  Model.getAll((err: any, items: any) => {
    if (err) return callback(err)

    callback(null, { status: 200, responseJson: { items } })
  })
}

export default getAll;