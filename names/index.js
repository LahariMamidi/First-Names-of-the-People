const peopleName = require("../country/state/city/index");
const FirstNames = require("../utilities/utils/index");

const getPeopleInCity = (peopleName) => {
  return FirstNames(peopleName);
};

module.exports = getPeopleInCity;
