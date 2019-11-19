import sql from '../../utils/db';

type HandlerCallback = (response: Object) => void
type SqlQueryResult = { error?: Object, rows?: Object[] }

export class SqlRequester {
  makeRequest(query: string, onQueryResult: HandlerCallback) {
    sql(query).then((response: SqlQueryResult) => {
      onQueryResult(response);
    });
  }
}

interface ISqlDataProvider {
  onGet(request: Object, callback: HandlerCallback): void
}

export default ISqlDataProvider