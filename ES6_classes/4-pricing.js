/* eslint-disable */
import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // Getter pour _amount
  get amount() {
    return this._amount;
  }

  // Setter pour _amount
  set amount(value) {
    this._amount = value;
  }

  // Getter pour _currency
  get currency() {
    return this._currency;
  }

  // Setter pour _currency
  set currency(value) {
    this._currency = value;
  }

  // Méthode pour afficher le prix complet sous la forme amount currency_name (currency_code)
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Méthode statique pour convertir le prix avec un taux de conversion
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
