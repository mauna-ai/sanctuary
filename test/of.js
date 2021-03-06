'use strict';

const Identity = require ('sanctuary-identity');

const S = require ('./internal/sanctuary');

const eq = require ('./internal/eq');


test ('of', () => {

  eq (typeof S.of) ('function');
  eq (S.of.length) (1);
  eq (S.show (S.of)) ('of :: Applicative f => TypeRep f -> a -> f a');

  eq (S.of (Array) (42)) ([42]);
  eq (S.of (Function) (42) (null)) (42);
  eq (S.of (S.Maybe) (42)) (S.Just (42));
  eq (S.of (S.Either) (42)) (S.Right (42));
  eq (S.of (Identity) (42)) (Identity (42));

});
