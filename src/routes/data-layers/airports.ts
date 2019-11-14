import sql from '../../utils/db';

class Airports {
  getAll(callback: any) {
    const query = `SELECT * from list_airfields ORDER BY af_icao DESC`;
    sql(query).then((data: { error: any; rows: any; }) => {
      //   if (data.error) res.json(data);
      //   res.json(data.rows);
      if (data.error) callback(data)
      callback(data.rows);
    });
  }

  getSome(limit: number, callback: any) {
    const query = `SELECT * from list_airfields ORDER BY af_icao DESC LIMIT 0, ${limit}`;
    sql(query).then((data: { error: any; rows: any; }) => {
      if (data.error) callback(data)
      callback(data.rows);
    });
  }
}

export default Airports