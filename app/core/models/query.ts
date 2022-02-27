/* Data Normal ----------------
 * ----------------------------
 * ----------------------------
 */

/* Init Database */
export const QueryInitDeliveries = `create table if not exists deliveries (
      id_delivery integer primary key not null,
      code_delivery text,
      name_delivery text,
      description_delivery text,
      url_delivery text,
      active_delivery integer default 0
    );`;

/* Drop Database */
export const QueryDropDeliveries = 'drop table if exists deliveries;';

/* Select Database */
export const QuerySelectAllDeliveries = 'select * from deliveries;';
