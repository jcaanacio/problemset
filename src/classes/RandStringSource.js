const { RandStream } = require("../../lib/lib");

class RandStringSource {
  #randStream;
  constructor(randStream) {
    if (!(randStream instanceof RandStream)) {
      throw TypeError(
        `Must inject an instance of RandStream object`,
        "RandStringSource.js",
        7
      );
    }

    this.#randStream = randStream;
  }
}

module.exports = RandStringSource;
