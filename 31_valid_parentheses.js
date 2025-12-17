function isValid(s) {
  let st = [], map = {')':'(', '}':'{', ']':'['};
  for (let c of s) {
    if (map[c]) {
      if (st.pop() !== map[c]) return false;
    } else st.push(c);
  }
  return st.length === 0;
}
module.exports = isValid;
