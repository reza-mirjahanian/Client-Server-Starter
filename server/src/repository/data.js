const _ = require('lodash');
const got = require('got');
const { EXTERNAL_REPO } = require('../constants');

/**
 * Get Data
 *  @param {number} id - Identifier
 * @return {Promise<object>} -
 */
exports.findProduct = async (id = -1) => {
  try {
    let idFilter = '';
    if (id > 0) {
      idFilter = `/${id}`;
    }
    const data = await got
      .get(`${EXTERNAL_REPO.API_URL}/products${idFilter}`, {})
      .json();

    return {
      data,
      error: false,
    };
  } catch (e) {
    console.log(e);
    return {
      data: [],
      error: true,
    };
  }
};

// const data = await got
//     .post(`${EXTERNAL_REPO.API_URL}/products`, {
//       json: {
//         message,
//       },
//       headers: {
//
//       },
//     })
//     .json();
