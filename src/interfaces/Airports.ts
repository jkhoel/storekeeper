import sql from '../utils/db';

type HandlerCallback = (response: Object) => void
type SqlQueryResult = { error?: Object, rows?: Object[] }

class Airports {

  private makeRequest(query: string, onQueryResult: HandlerCallback) {
    sql(query).then((response: SqlQueryResult) => {
      onQueryResult(response);
    });
  }

  getAll(onQueryResult: HandlerCallback) {
    const query = `SELECT * from list_airfields ORDER BY af_icao DESC`;
    this.makeRequest(query, onQueryResult)
  }

  
  getSome(limit: Number, onQueryResult: HandlerCallback) {
    const query = `SELECT * from list_airfields ORDER BY af_icao DESC LIMIT 0, ${limit}`;
    this.makeRequest(query, onQueryResult)
  }
}

export default Airports