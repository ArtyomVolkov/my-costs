import {getObjectKeyValues} from '../utils/commons';

const TABLE_NAME = 'costs';
const COLUMNS = [
  ['id', 'int'],
  ['date', 'int'],
  ['food', 'number'],
  ['drink', 'number'],
  ['health', 'number'],
  ['mobile', 'number'],
  ['internet', 'number'],
  ['home', 'number'],
  ['restaurant', 'number'],
  ['transport', 'number'],
  ['other', 'number'],
  ['notes', 'text'],
];

export const createTable = () => {
  const columns = [];

  COLUMNS.forEach((item) => {
    columns.push(`${item[0]} ${item[1]}`);
  });

  return `create table ${TABLE_NAME} (${columns.join(', ')})`;
};

export const createNewRow = (data) => {
  const {keys, values} = getObjectKeyValues(data);
  const id = (Math.random() * 10000000).toFixed(0);

  return `insert into ${TABLE_NAME} (id, ${keys.join(', ')}) values (${id}, ${values.join(', ')})`;
};

export const getRow = (rowId) => {
  return `select * from ${TABLE_NAME} where rowid = ${rowId}`;
};

export const getCost = (id) => {
  return `select * from ${TABLE_NAME} where id = ${id}`;
};

export const deleteRowById =(id) => {
  return `delete from ${TABLE_NAME} where id = ${id}`;
};

export const updateTableRow = (id, data) => {
  let statement = [];
  Object.keys(data).forEach((key) => {
    if (typeof data[key] === 'string') {
      statement.push(`${key}='${data[key]}'`);
    } else {
      statement.push(`${key}=${data[key]}`);
    }
  });
  return `update ${TABLE_NAME} set ${statement.join(',')} where id = ${id}`;
};

export const getRows = () => {
  return `select * from ${TABLE_NAME} order by date desc`;
};



