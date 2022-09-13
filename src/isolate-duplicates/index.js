function isolateDuplicates(text) {
  const num = String(text).split("");
  let incoming = text;
  let str = "";

  if (typeof text != "string") throw "Please enter a valid string";

  for (let i = 0; i <= incoming.length - 1; i++) {
    if (typeof num[i] == "string") {
      let current = String(incoming).charAt(i).toLowerCase();
      let next = String(incoming)
        .charAt(i + 1)
        .toLowerCase();
      if (current != next) {
        str += num[i] + "<";
      } else {
        str += num[i];
      }
    } else {
      throw "Please enter a valid string";
    }
  }
}
let arrayOfChar = str.split("<");
let splitLength = 0;
let forMatStr = "";

arrayOfChar.forEach((ar) => {
  if (ar.length > 2) {
    splitLength += 1;
  }

  let excess = ar.slice(2, ar.length);

  if (excess.length > 0) {
    let first = ar.slice(0, 2);

    return (forMatStr += `${first}[${excess}]`);
  } else {
    return (forMatStr += ar);
  }
});

return [forMatStr, splitLength];

module.exports = isolateDuplicates;
