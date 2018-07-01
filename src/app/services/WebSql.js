import {DB_NAME, DB_VERSION, DB_SIZE} from '../settings';

const connectDB = () => {
  return openDatabase(DB_NAME, DB_VERSION, "My Costs.", DB_SIZE);
};

const WEB_SQL = {
  executeSQL: (query, success, error) => {
    connectDB().transaction((sql) => {
      sql.executeSql(query, null, success, error);
    });
  },
};

export default WEB_SQL;
