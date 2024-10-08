import {DeliveryType} from '@const/types';
import {
  QueryDropDeliveries,
  QueryInitDeliveries,
  QueryInitUserDeliveries,
} from '../models/query';
import {executeSql} from './sqlite';

const deliveries = require('@assets/resources/deliveries.json');

export const initDBTable = async () => {
  // User
  await executeSql(QueryInitDeliveries);
  await executeSql(QueryInitUserDeliveries);
};

export const loadDataDBTable = async () => {
  await loadNewDataDBTable();
};

export const loadNewDataDBTable = async () => {
  await executeSql(QueryDropDeliveries);
  await initDBTable();
  await loadDataDeliveriesFromResources();
};

const loadDataDeliveriesFromResources = async () => {
  let sqlValue = `insert into deliveries
        (id_delivery, name_delivery, description_delivery, encode_delivery,
          url_delivery, active_delivery, ajax_delivery, captcha_delivery)
        values`;
  deliveries.forEach((delivery: DeliveryType, index: number) => {
    // Loop add sql value
    sqlValue += `(${delivery.id_delivery}, "${delivery.name_delivery}",
      "${delivery.description_delivery}", "${delivery.encode_delivery}",
      "${delivery.url_delivery}", ${delivery.active_delivery ? 1 : 0},
      ${delivery.ajax_delivery ? 1 : 0}, ${delivery.captcha_delivery ? 1 : 0})`;
    sqlValue += index === deliveries.length - 1 ? ';' : ',';
  });
  await executeSql(sqlValue);
};
