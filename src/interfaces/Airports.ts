import Interface from './Interface'

type HandlerCallback = (response: Object) => void
type HTMLRequest = { query?: { limit?: number } }

class Airports extends Interface {
  onGet(request: HTMLRequest, onQueryResult: HandlerCallback) {
    // Default: Get all records
    let query = `SELECT * from list_airfields ORDER BY af_icao DESC`;

    // Modify the query if we recieved any query parameters from the HTML request
    if (request.query) {
      // Get ammount of records equal to the supplied limit
      if (request.query.limit) query = query = `SELECT * from list_airfields ORDER BY af_icao DESC LIMIT 0, ${request.query.limit}`;
    }

    this.makeRequest(query, onQueryResult)
  }
}

export default Airports