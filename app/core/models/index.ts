import {executeSql} from '@core/db/sqlite';
import * as Query from './query';

/* Data Normal ----------------
 * ----------------------------
 * ----------------------------
 */

/* Select Database */

export const slAllDeliveries = async () => {
  const getValue = await executeSql(Query.QuerySelectAllDeliveries);
  return getValue.raw();
};
