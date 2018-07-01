import WEB_SQL from '../services/WebSql';
import {createNewRow, createTable, getRow, getRows, deleteRowById, updateTableRow, getCost} from '../models/costs';

export function onCreateCost (data) {
  return new Promise((res, rej) => {
    WEB_SQL.executeSQL(
      createNewRow(data),
      (sql, data) => {
        WEB_SQL.executeSQL(getRow(data.insertId),
          (tx, dt) => res(dt.rows[0]),
          (sql, error) => rej(error)
        );
      },
      (sql, error) => rej(error)
    );
  });
}

export function onUpdateCost (data) {
  return new Promise((res, rej) => {
    WEB_SQL.executeSQL(
      updateTableRow(data.id, data),
      () => {
        WEB_SQL.executeSQL(getCost(data.id),
          (tx, dt) => res(dt.rows[0]),
          (sql, error) => rej(error)
        );
      },
      (sql, error) => rej(error)
    );
  });
}

export function onRemoveCost (id) {
  return new Promise((res, rej) => {
    WEB_SQL.executeSQL(
      deleteRowById(id),
      (sql, data) => res(data),
      (sql, error) => rej(error)
    );
  });
}

export function onGetCosts () {
  return new Promise((res, rej) => {
    WEB_SQL.executeSQL(
      getRows(),
      (sql, data) => res(Array.from(data.rows)),
      (sql, error) => {
        if (error.code !== 5) {
          return rej(error.message);
        }
        WEB_SQL.executeSQL(
          createTable(),
          () => res([]),
          (sql, error) => rej(error.message)
        );
      }
    );
  });
}