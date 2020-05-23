const { asyncOp } = require("../lib/lib");

const doAsync = async (data) => {
  if (data.constructor !== Array) {
    throw "data is not an array!";
  }

  return await _seriesProcessor(data);
};

/**
 * @description Recursive loop for stringed elements
 * @param {array} arrayData
 * @access Private
 */
const _seriesProcessor = async (arrayData) => {
  let _clonedArrayData = arrayData;
  const INDEX = 0;
  const ELEMENT = arrayData[INDEX];

  if (!ELEMENT || ELEMENT === undefined || ELEMENT === null) {
    return;
  }

  if (ELEMENT.length > 1) {
    await _bundledProcessor(ELEMENT);
    _clonedArrayData.shift();
    return await _seriesProcessor(_clonedArrayData);
  }

  await asyncOp(ELEMENT);
  _clonedArrayData.shift();
  return await _seriesProcessor(_clonedArrayData);
};

/**
 * @description mapped bundled elements
 * @param {*array} bundledElement `
 * @returns promise.all() object
 */
const _bundledProcessor = async (bundledElement) => {
  const PROMISES = await bundledElement.map(
    async (element) => await asyncOp(element)
  );

  return (asyncOps = await Promise.all(PROMISES));
};

module.exports = Object.freeze({ doAsync });
