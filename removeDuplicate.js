function removeDuplicate(arr) {
  const noDuplicates = [];
  arr.forEach((e) => {
    if (!noDuplicates.includes(e)) {
      noDuplicates.push(e);
    }
  });
  return noDuplicates;
}

const elements = ["tatum", "brown", "grant", "pritchad", "brown", "tatum"];
const res = removeDuplicate(elements);
console.log(res);
