const Resource = require("./Resource");

class ResourceManager {
  #count;
  constructor(count) {
    if (!Number.isInteger(count)) {
      throw TypeError(`Must inject an int (${count})`, "RourceManager.js", 5);
    }
    this.#count = count;
  }

  /**
   * @access public
   * @description must implement this function
   * @param callback function
   * @return void
   */
  borrow = async (callback) => {
    if (typeof callback !== "function") {
      throw TypeError(`Must inject a function type`, "RourceManager.js", 20);
    }

    if (!this.#isCanCreateResource) {
      throw new RangeError(`Resource capacity reached`);
    }

    this.#decrementCount();
    return callback(this.#createResource());
  };

  /**
   * @access Private
   * @description Increment Resouce Count
   * @return Void
   */
  #incrementCount = () => {
    this.#count = this.#count + 1;
  };

  /**
   * @access Private
   * @description Decrement Resource Count
   * @return Void
   */
  #decrementCount = () => {
    this.#count = this.#count - 1;
  };

  /**
   * @access Private
   * @description Creation of resource
   * @return Resource Obj
   */
  #createResource = () => {
    return new Resource();
  };

  /**
   * @access Private
   * @description Check if the current resouce manager can create more resource
   * @return Bool
   */
  #isCanCreateResource = () => {
    return this.#count > 0;
  };
}

module.exports = ResourceManager;
