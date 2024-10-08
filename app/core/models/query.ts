/* Data Normal ----------------
 * ----------------------------
 * ----------------------------
 */

/* Init Database */
export const QueryInitDeliveries = `create table if not exists deliveries (
      id_delivery integer primary key not null,
      name_delivery text,
      description_delivery text,
      encode_delivery text,
      url_delivery text,
      active_delivery integer default 0,
      ajax_delivery integer default 0,
      captcha_delivery integer default 0
    );`;

export const QueryInitUserDeliveries = `create table if not exists user_deliveries (
      id_tracking integer primary key autoincrement,
      id_delivery integer not null,
      code_delivery text,
      title_delivery text,
      created_at datetime default (datetime('now','localtime')),
      updated_at datetime default (datetime('now','localtime')),
      foreign key(id_delivery) references deliveries(id_delivery)
    );`;

/* Drop Database */
export const QueryDropDeliveries = 'drop table if exists deliveries;';
export const QueryDropUserDeliveries = 'drop table if exists user_deliveries;';

/* Select Database */
export const QuerySelectDeliveries =
  'select * from deliveries order by deliveries.name_delivery;';
export const QuerySelectAllDeliveries =
  'select * from user_deliveries inner join deliveries on deliveries.id_delivery = user_deliveries.id_delivery order by updated_at desc;';
export const QuerySelectDeliveryById =
  'select * from user_deliveries inner join deliveries on deliveries.id_delivery = user_deliveries.id_delivery where id_tracking = ?;';
export const QuerySelectDeliveryByCode =
  'select * from user_deliveries inner join deliveries on deliveries.id_delivery = user_deliveries.id_delivery where code_delivery = ?;';

/* Insert Database */
export const QueryInsertDelivery = `insert into user_deliveries (id_delivery, code_delivery, title_delivery) values (?, ?, (
    select name_delivery from deliveries where id_delivery = ?
  ));`;

/* Delete Database */
export const QueryDeleteDeliveryById =
  'delete from user_deliveries where id_tracking = ?;';

/* Update Database */
export const QueryUpdateDeliveryById =
  "update user_deliveries set title_delivery = ?, updated_at = (datetime('now','localtime')) where id_tracking = ?;";
