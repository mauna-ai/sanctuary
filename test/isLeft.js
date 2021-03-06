'use strict';

const S = require ('..');

const eq = require ('./internal/eq');


test ('isLeft', () => {

  eq (typeof S.isLeft) ('function');
  eq (S.isLeft.length) (1);
  eq (S.show (S.isLeft)) ('isLeft :: Either a b -> Boolean');

  eq (S.isLeft (S.Left (42))) (true);
  eq (S.isLeft (S.Right (42))) (false);

});
