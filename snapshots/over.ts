import { ManualLens, PseudoLens } from '../ramda/dist/src/$types';
import R_over = require('../ramda/dist/src/over');

declare const menual_lens_number_object: ManualLens<number, object>;
declare const pseudo_lens_a: PseudoLens<'a'>;
declare const pseudo_lens_1: PseudoLens<1>;

declare const number_to_number: (x: number) => number;
declare const object: object;
declare const a_1_b_2_c_3: { a: 1; b: 2; c: 3 };
declare const number_array: number[];
declare const string_number_tuple: [string, number];

// @dts-jest:pass:snap -> (target: object) => object
R_over(menual_lens_number_object, number_to_number);
// @dts-jest:pass:snap -> object
R_over(menual_lens_number_object)(number_to_number)(object);
// @dts-jest:pass:snap -> object
R_over(menual_lens_number_object, number_to_number, object);

// @dts-jest:pass:snap -> (target: Record<"a", any>) => Record<"a", any>
R_over(pseudo_lens_a, number_to_number);
// @dts-jest:pass:snap -> Record<"a", any>
R_over(pseudo_lens_a)(number_to_number)(a_1_b_2_c_3);
// @dts-jest:pass:snap -> { a: 1; b: 2; c: 3; }
R_over(pseudo_lens_a, number_to_number, a_1_b_2_c_3);

// @dts-jest:pass:snap -> (target: {}) => {}
R_over(pseudo_lens_1, number_to_number);
// @dts-jest:pass:snap -> {}
R_over(pseudo_lens_1)(number_to_number)(string_number_tuple);
// @dts-jest:pass:snap -> [string, number]
R_over(pseudo_lens_1, number_to_number, string_number_tuple);
// @dts-jest:pass:snap -> {}
R_over(pseudo_lens_1)(number_to_number)(number_array);
// @dts-jest:pass:snap -> number[]
R_over(pseudo_lens_1, number_to_number, number_array);
