import Interface from './Interface'

type HandlerCallback = (response: Object) => void

class Airports extends Interface {
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