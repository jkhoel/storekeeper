import ISqlDataProvider, {SqlRequester} from './providers/ISqlDataProvider'

type HandlerCallback = (response: Object) => void
type HTMLRequest = { query?: { limit?: number } }

class Airports implements ISqlDataProvider {
  private makeRequest = new SqlRequester().makeRequest

  onGet(request: HTMLRequest, onQueryResult: HandlerCallback) {
    // Default: Get all records
    let query = `SELECT * from airfields ORDER BY icao DESC`;

    // Modify the query if we received any query parameters from the HTML request
    if (request.query) {
      // Get amount of records equal to the supplied limit
      // TODO: This should have a property for DESC or ASC sorting
      if (request.query.limit) query = query = `SELECT * from airfields ORDER BY icao DESC LIMIT 0, ${request.query.limit}`;
    }

    this.makeRequest(query, onQueryResult)
  }
}

export default Airports