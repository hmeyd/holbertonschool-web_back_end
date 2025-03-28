/* eslint-disable */
export default class Building {
    constructor(sqft) {
      if (this.constructor === Building) {
        throw new Error('Cannot instantiate an abstract class');
      }
      this._sqft = sqft;
    }
  
    // Getter for sqft
    get sqft() {
      return this._sqft;
    }
  
    // Abstract method: Subclasses must implement this
    evacuationWarningMessage() {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
  