const testData = require("./testData.json")


class JsonDataReader {
  static getTestData(key) {
    return testData[key];
  }
}

module.exports = JsonDataReader;