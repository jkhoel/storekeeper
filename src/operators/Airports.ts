import ISqlDataProvider, {SqlRequester} from './providers/ISqlDataProvider'

type HandlerCallback = (response: Object) => void
type HTMLRequest = { query: { limit: number, offset: number } }

class Airports implements ISqlDataProvider {
  private makeRequest = new SqlRequester().makeRequest

  onGet(request: HTMLRequest, onQueryResult: HandlerCallback) {
    // Default: Get all records
    let sqlQuery = `SELECT * from airfields ORDER BY icao ASC`;

    // Modify the query if we received any query parameters from the HTML request
    if (request.query) {
      // If 'query.limit' or 'query.offset is passed, get amount of records equal to 'limit', offset by 'offset' records.
      if (request.query.limit || request.query.offset) {
        let offset = request.query.offset || 0
        let limit = request.query.limit || 0

        sqlQuery = `SELECT * from airfields ORDER BY icao ASC LIMIT ${offset}, ${limit}`;
      } 
    }

    this.makeRequest(sqlQuery, onQueryResult)
  }
}

export default Airports