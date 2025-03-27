export default class Currency {
    constructor(code, name) {
      this._code = code;
      this._name = name;
    }
  
    // Getter pour _code
    get code() {
      return this._code;
    }
  
    // Setter pour _code
    set code(value) {
      this._code = value;
    }
  
    // Getter pour _name
    get name() {
      return this._name;
    }
  
    // Setter pour _name
    set name(value) {
      this._name = value;
    }
  
    // Méthode pour afficher la devise sous la forme "name (code)"
    displayFullCurrency() {
      return `${this._name} (${this._code})`;
    }
  }
  