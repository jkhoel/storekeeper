import sql from '../utils/db';

type HandlerCallback = (response: Object) => void
type SqlQueryResult = { error?: Object, rows?: Object[] }

class SqlRequester {
  protected makeRequest(query: string, onQueryResult: HandlerCallback) {
    sql(query).then((response: SqlQueryResult) => {
      onQueryResult(response);
    });
  }
}

export default SqlRequester