const RandStringSource = require("./classes/RandStringSource");
const { RandStream } = require("../lib/lib");
const randStringSource = new RandStringSource(new RandStream());

module.exports = Object.freeze(randStringSource);
