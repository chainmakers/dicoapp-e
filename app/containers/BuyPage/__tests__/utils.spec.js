import { getMonth } from '../utils';

describe('containers/BuyPage/utils', () => {
  it('should handle getMonth correctly', async done => {
    const d = 1539375819825;
    expect(getMonth(new Date(d))).toEqual('OCT');
    done();
  });
});
