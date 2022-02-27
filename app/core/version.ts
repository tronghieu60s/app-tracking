/**
 * Check update 2 versions
 * @param  {string} currentVersion
 * @param  {string} latestVersion
 */
export const checkUpdate = (currentVersion: string, latestVersion: string) => {
  if (compareVersion(currentVersion, latestVersion) < 0) {
    return true;
  }
  return false;
};

/**
 * Compare 2 versions https://stackoverflow.com/a/6832721/9724078
 * @param  {any} version1
 * @param  {any} version2
 * @param  {any} options?
 */
export const compareVersion = (version1: any, version2: any, options?: any) => {
  var lexicographical = options && options.lexicographical,
    zeroExtend = options && options.zeroExtend,
    v1parts = version1.split('.'),
    v2parts = version2.split('.');

  function isValidPart(x: any) {
    return (lexicographical ? /^\d+[A-Za-z]*$/ : /^\d+$/).test(x);
  }

  if (!v1parts.every(isValidPart) || !v2parts.every(isValidPart)) {
    return NaN;
  }

  if (zeroExtend) {
    while (v1parts.length < v2parts.length) {
      v1parts.push('0');
    }
    while (v2parts.length < v1parts.length) {
      v2parts.push('0');
    }
  }

  if (!lexicographical) {
    v1parts = v1parts.map(Number);
    v2parts = v2parts.map(Number);
  }

  for (var i = 0; i < v1parts.length; ++i) {
    if (v2parts.length === i) {
      return 1;
    }

    if (v1parts[i] === v2parts[i]) {
      continue;
    } else if (v1parts[i] > v2parts[i]) {
      return 1;
    } else {
      return -1;
    }
  }

  if (v1parts.length !== v2parts.length) {
    return -1;
  }

  return 0;
};
