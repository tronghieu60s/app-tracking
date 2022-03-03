/* Data Normal ----------------
 * ----------------------------
 * ----------------------------
 */

/* Init Database */
export const QueryInitDeliveries = `create table if not exists deliveries (
      id_delivery integer primary key not null,
      name_delivery text,
      description_delivery text,
      url_delivery text,
      active_delivery integer default 0,
      captcha_delivery integer default 0
    );`;

export const QueryInitUserDeliveries = `create table if not exists user_deliveries (
      id_tracking integer primary key autoincrement,
      id_delivery integer not null,
      code_delivery text,
      title_delivery text,
      foreign key(id_delivery) references deliveries(id_delivery)
    );`;

/* Drop Database */
export const QueryDropDeliveries = 'drop table if exists deliveries;';

/* Select Database */
export const QuerySelectDeliveries = 'select * from deliveries;';
export const QuerySelectAllDeliveries =
  'select * from user_deliveries inner join deliveries on deliveries.id_delivery = user_deliveries.id_delivery;';

/* Insert Database */
export const QueryInsertDelivery = `insert into user_deliveries (id_delivery, code_delivery, title_delivery) values (?, ?, (
    select name_delivery from deliveries where id_delivery = ?
  ));`;

/* Delete Database */
export const QueryDeleteDeliveryById =
  'delete from user_deliveries where id_tracking = ?;';

/* Update Database */
export const QueryUpdateDeliveryById =
  'update user_deliveries set title_delivery = ? where id_tracking = ?;';
