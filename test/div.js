'use strict';

const S = require ('..');

const eq = require ('./internal/eq');


test ('div', () => {

  eq (typeof S.div) ('function');
  eq (S.div.length) (1);
  eq (S.show (S.div)) ('div :: NonZeroFiniteNumber -> FiniteNumber -> FiniteNumber');

  eq (S.map (S.div (2)) ([0, 1, 2, 3])) ([0, 0.5, 1, 1.5]);

});
