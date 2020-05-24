const ResourceManager = require("./classes/ResourceManager");

module.exports = () => {
  const pool = new ResourceManager(1);
  console.log("START");

  let timestamp = Date.now();
  pool.borrow((res) => {
    console.log("RES: 1");

    setTimeout(() => {
      res.release();
    }, 500);
  });

  pool.borrow((res) => {
    console.log("RES: 2");
  });

  pool.borrow((res) => {
    console.log("RES: 3");
    console.log("DURATION: " + (Date.now() - timestamp));
  });
};
