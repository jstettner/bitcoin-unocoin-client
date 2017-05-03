var assert = require('assert');

class Address {
  constructor (obj) {
    this._street = obj.street;
    this._city = obj.city;
    this._state = obj.state;
    this._zipcode = obj.zipcode;
    this._country = obj.country;

    this._dirty = false;
  }

  didSave () {
    this._dirty = false;
  }

  get dirty () {
    return this._dirty;
  }

  get readOnly () {
    return this._readOnly;
  }

  set readOnly (val) {
    this._readOnly = val;
  }

  get city () {
    return this._city;
  }

  set city (val) {
    assert(!this.readOnly, 'Ready only');
    if (this._city !== val) {
      this._dirty = true;
    }
    this._city = val;
  }

  get country () {
    return this._country;
  }

  set country (val) {
    assert(!this.readOnly, 'Ready only');
    if (this._country !== val) {
      this._dirty = true;
    }
    this._country = val;
  }

  // TODO: use ISO 3166-2 instead of full name (the part after the dash)
  get state () {
    return this._state;
  }

  set state (val) {
    assert(!this.readOnly, 'Ready only');
    if (this._state !== val) {
      this._dirty = true;
    }
    this._state = val;
  }

  get street () {
    return this._street;
  }

  set street (val) {
    assert(!this.readOnly, 'Ready only');
    if (this._street !== val) {
      this._dirty = true;
    }
    this._street = val;
  }

  get zipcode () {
    return this._zipcode;
  }

  set zipcode (val) {
    assert(!this.readOnly, 'Ready only');
    if (this._zipcode !== val) {
      this._dirty = true;
    }
    this._zipcode = val;
  }
}

module.exports = Address;
