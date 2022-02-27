import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {name: 'database.db', location: 'default'},
  () => console.info('[Database] ✔️ Connect To Database Successfully!'),
  () => console.error('[Database] ❌ Connection To Database Failed!'),
);

type ExecuteSQLType = SQLite.ResultSetRowList & {
  insertId: number;
  rowsAffected: number;
};

/**
 * @param  {string} sql
 * @param  {any=[]} params
 */
export async function executeSql(
  sql: string,
  params: any = [],
): Promise<ExecuteSQLType> {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        sql,
        params,
        (_, result) => {
          resolve({
            ...result.rows,
            insertId: result.insertId,
            rowsAffected: result.rowsAffected,
          });
        },
        err => reject(err),
      );
    });
  });
}
