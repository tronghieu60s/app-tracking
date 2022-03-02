import {executeSql} from '@core/db/sqlite';
import * as Query from './query';

/* Data Normal ----------------
 * ----------------------------
 * ----------------------------
 */

/* Select Database */

export const slDeliveries = async () => {
  const getValue = await executeSql(Query.QuerySelectDeliveries);
  return getValue.raw();
};

export const slAllDeliveries = async () => {
  const getValue = await executeSql(Query.QuerySelectAllDeliveries);
  return getValue.raw();
};

/* Insert Database */

export const insDelivery = async (
  id_delivery: string,
  code_delivery: string,
) => {
  const insertValue = await executeSql(Query.QueryInsertDelivery, [
    id_delivery,
    code_delivery,
    id_delivery,
  ]);
  return insertValue.raw();
};
