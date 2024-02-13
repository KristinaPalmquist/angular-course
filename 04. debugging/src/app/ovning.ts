let s = '';
let a = [1, 4, 6];
let b = [2, 7];
for (let n of a) {
  for (let m of b) {
    if ((n + m) % 2 == 0) {
      s += a[(n + 1) % a.length];
    } else {
      s += b[(m + 1) % b.length];
    }
  }
}
export default  ('url: www.multisoft.se/' + s);
