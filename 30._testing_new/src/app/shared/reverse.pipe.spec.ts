/*...*/

import { ReversePipe } from "./reverse.pipe";

describe('ReversePipe', () => {

  it('should create a backwards string from entered string', () => {
  let reversePipe = new ReversePipe();
    expect(reversePipe.transform('hello')).toEqual('olleh');
  });
});
