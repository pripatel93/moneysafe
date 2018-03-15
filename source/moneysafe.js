'use strict';

var m$ = function m$() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$centsPerDollar = _ref.centsPerDollar,
      centsPerDollar = _ref$centsPerDollar === undefined ? 100 : _ref$centsPerDollar,
      _ref$decimals = _ref.decimals,
      decimals = _ref$decimals === undefined ? 2 : _ref$decimals,
      _ref$symbol = _ref.symbol,
      symbol = _ref$symbol === undefined ? '$' : _ref$symbol,
      _ref$round = _ref.round,
      _round = _ref$round === undefined ? Math.round : _ref$round;

  function $(dollars) {
    var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref2$cents = _ref2.cents,
        cents = _ref2$cents === undefined ? _round(dollars * centsPerDollar) : _ref2$cents,
        _ref2$in$ = _ref2.in$,
        in$ = _ref2$in$ === undefined ? _round(cents) / centsPerDollar : _ref2$in$;

    var add = function add(a$) {
      return $.of(cents + a$);
    };
    var subtract = function subtract(a$) {
      return $.of(cents - a$);
    };

    return Object.assign(add, {
      valueOf: function valueOf() {
        return cents;
      },

      get cents() {
        return _round(cents);
      },
      get $() {
        return in$;
      },
      round: function round() {
        return $.of(_round(cents));
      },

      add: add,
      subtract: subtract,
      constructor: $,
      toString: function toString() {
        return '' + symbol + this.$.toFixed(decimals);
      }
    });
  }

  $.of = function (cents) {
    return $(undefined, { cents: cents });
  };
  $.cents = function (cents) {
    return $.of(_round(cents));
  };

  return $;
};

var $ = m$();
var in$ = function in$(n) {
  return $.cents(n).$;
};

module.exports = {
  m$: m$,
  $: $,
  in$: in$
};
