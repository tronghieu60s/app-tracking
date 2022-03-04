import {DeliveryType} from '@const/types';
import {
  QueryDropDeliveries,
  QueryDropUserDeliveries,
  QueryInitDeliveries,
  QueryInitUserDeliveries,
} from '../models/query';
import {executeSql} from './sqlite';

const deliveries = require('@assets/resources/tracking-delivery.json');

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
        (id_delivery, name_delivery, description_delivery, url_delivery,
          ajax_delivery, active_delivery, captcha_delivery, scripts_delivery)
        values`;
  deliveries.forEach((delivery: DeliveryType, index: number) => {
    // Loop add sql value
    sqlValue += `(${delivery.id_delivery}, "${delivery.name_delivery}",
      "${delivery.description_delivery}", "${delivery.url_delivery}",
      ${delivery.ajax_delivery ? 1 : 0}, ${delivery.active_delivery ? 1 : 0},
      ${delivery.captcha_delivery ? 1 : 0}, "${delivery.scripts_delivery}")`;
    sqlValue += index === deliveries.length - 1 ? ';' : ',';
  });
  await executeSql(sqlValue);
};
