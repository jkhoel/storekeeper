const getAllAirports = (Airports: any) => (req: any, callback: any) => {
  Airports.getAll((err: any, airports: any) => {
    if (err) return callback(err)

    callback(null, { status: 200, responseJson: { airports } })
  })
}

export default getAllAirports;