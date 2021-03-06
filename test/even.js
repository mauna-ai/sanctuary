'use strict';

const S = require ('..');

const eq = require ('./internal/eq');


test ('even', () => {

  eq (typeof S.even) ('function');
  eq (S.even.length) (1);
  eq (S.show (S.even)) ('even :: Integer -> Boolean');

  eq (S.even (0)) (true);
  eq (S.even (2)) (true);
  eq (S.even (-2)) (true);

  eq (S.even (1)) (false);
  eq (S.even (-1)) (false);

});
