import {ToastAndroid} from 'react-native';

/* Common Functions -----------
 * ----------------------------
 * ----------------------------
 */

/**
 * @param  {number} ms
 */
export const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

const DELAY_TIMER = 800;
export const delayLoading = () => delay(DELAY_TIMER);

/**
 * @param  {string|undefined=''} str
 */
export const capitalizeFirstLetter = (str: string | undefined = '') => {
  return str.trim().charAt(0).toUpperCase() + str.slice(1);
};

/**
 * @param  {string} query
 * @param  {T[]} items
 * @param  {keyofT} key?
 */
export const searchQueryArr = <T>(query: string, items: T[], key?: keyof T) => {
  return items.filter(
    item =>
      `${key ? item[key] : item}`.toLowerCase().indexOf(query.toLowerCase()) !==
      -1,
  );
};

/**
 * @param  {string} source
 * @param  {number} size
 */
export const truncate = (source: string, size: number) => {
  return source.length > size ? source.slice(0, size - 1) + '…' : source;
};

/**
 * @param  {any[]} a
 */
export const shuffleArr = (arr: any[]) => {
  let currentIndex = arr.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
    ];
  }

  return arr;
};

/**
 * @param  {any} obj
 */
export const objToArrByKey = (obj: any, nameKey: string = 'key') => {
  return Object.keys(obj).map(key => ({[nameKey]: key, ...obj[key]}));
};

/**
 * @param  {number} min
 * @param  {number} max
 */
export const randomIntFromInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * @param  {T} anEnum
 * @returns number
 */
export const randomEnumIndexTypescript = <T>(anEnum: T): number => {
  const enumValues = Object.values(anEnum) as unknown as T[keyof T][];
  const randomIndex = Math.floor(Math.random() * (enumValues.length / 2));
  return randomIndex;
};

/**
 * @param  {any={}} obj
 */
export const removeUndefinedObject = (obj: any = {}) => {
  return Object.keys(obj).reduce((acc, key) => {
    if (obj[key] === undefined) {
      return acc;
    }
    return {...acc, [key]: obj[key]};
  }, {});
};

const intervals = [
  {label: 'year', seconds: 31536000},
  {label: 'month', seconds: 2592000},
  {label: 'day', seconds: 86400},
  {label: 'hour', seconds: 3600},
  {label: 'minute', seconds: 60},
  {label: 'second', seconds: 1},
];

/**
 * @param  {Date} date
 */
export const getTimeSince = (date: Date) => {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
  const interval = intervals.find(i => i.seconds < seconds);
  const count = Math.floor(seconds / (interval?.seconds || 0));
  return `${count} ${interval?.label}${count !== 1 ? 's' : ''} ago`;
};

/**
 * @param  {string} date
 */
export const getDateTimeFromSql = (datetime: string) => {
  const [date, time] = datetime.split(' ');
  const [year, month, day] = date.split('-').map(o => parseInt(o, 10));
  const [hour, minute, second] = time.split(':').map(o => parseInt(o, 10));
  return new Date(year, month, day, hour, minute, second);
};

/* React Native ---------------
 * ----------------------------
 * ----------------------------
 */

/**
 * @param  {string} message
 * @param  {number} duration?
 */
export const toast = (message: string, duration?: number) => {
  return ToastAndroid.show(message, duration || ToastAndroid.LONG);
};

/**
 * @param  {string} message
 * @param  {number} duration?
 * @param  {number} gravity?
 */
export const toastWithGravity = (
  message: string,
  duration?: number,
  gravity?: number,
) => {
  return ToastAndroid.showWithGravity(
    message,
    duration || ToastAndroid.CENTER,
    gravity || ToastAndroid.BOTTOM,
  );
};
