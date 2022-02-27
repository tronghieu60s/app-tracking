import {DeliveryType} from '@const/types';
import {QueryDropDeliveries, QueryInitDeliveries} from '../models/query';
import {executeSql} from './sqlite';

const deliveries = require('@assets/resources/tracking-delivery.json');

export const initDBTable = async () => {
  // Root
  await executeSql(QueryInitDeliveries);
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
        (id_delivery, code_delivery, name_delivery, description_delivery, url_delivery, active_delivery)
        values`;
  deliveries.forEach((delivery: DeliveryType, index: number) => {
    // Loop add sql value
    sqlValue += `(${delivery.id_delivery}, "${delivery.code_delivery}",
            "${delivery.name_delivery}", "${delivery.description_delivery}",
            "${delivery.url_delivery}", ${delivery.active_delivery ? 1 : 0})`;
    sqlValue += index === deliveries.length - 1 ? ';' : ',';
  });
  await executeSql(sqlValue);
};
