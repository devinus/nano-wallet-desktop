import { expect } from 'chai';
import { describe, it } from 'mocha';
import validateSeed from '@nanocurrency/nano-desktop/validators/seed';

describe('Unit | Validator | seed', () => {
  // Replace this with your real tests.
  it('exists', () => {
    const result = validateSeed();
    expect(result).to.be.ok;
  });
});
