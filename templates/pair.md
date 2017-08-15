Takes two arguments, `fst` and `snd`, and returns `[fst, snd]`.

@func
@memberOf R
@since v0.18.0
@category List
@sig a -> b -> (a,b)
@param {*} fst
@param {*} snd
@return {Array}
@see R.objOf, R.of
@example

     R.pair('foo', 'bar'); //=> ['foo', 'bar']