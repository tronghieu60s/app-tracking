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

export const slDeliveryById = async (id_tracking: string) => {
  const getValue = await executeSql(Query.QuerySelectDeliveryById, [
    id_tracking,
  ]);
  return getValue.raw()?.[0];
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
  return insertValue;
};

/* Delete Database */
export const delDeliveryById = async (id_tracking: string) => {
  const deleteValue = await executeSql(Query.QueryDeleteDeliveryById, [
    id_tracking,
  ]);
  return deleteValue.rowsAffected > 0;
};

/* Update Database */
export const udDeliveryById = async (
  {title_delivery}: {title_delivery: string},
  id_tracking: string,
) => {
  const updateValue = await executeSql(Query.QueryUpdateDeliveryById, [
    title_delivery,
    id_tracking,
  ]);
  return updateValue.rowsAffected > 0;
};
