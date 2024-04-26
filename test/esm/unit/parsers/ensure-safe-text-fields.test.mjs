import { describe, assert } from 'poku';
import { describeOptions } from '../../../common.test.cjs';
import TextRowParser from '../../../../lib/parsers/text_parser.js';
import { srcEscape } from '../../../../lib/helpers.js';
import { privateObjectProps } from '../../../../lib/helpers.js';

describe('Text Parser: Block Native Object Props', describeOptions);

const blockedFields = Array.from(privateObjectProps).map((prop) => [
  { name: prop },
]);

blockedFields.forEach((fields) => {
  try {
    TextRowParser(fields, {}, {});
    assert.fail('An error was expected');
  } catch (error) {
    assert.strictEqual(
      error.message,
      `The field name (${srcEscape(fields[0].name)}) can't be the same as an object's private property.`,
      `Ensure safe ${fields[0].name}`,
    );
  }
});
