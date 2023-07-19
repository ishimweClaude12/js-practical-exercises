function reverseInPlace(str) {
  return str.split("").reverse("").join("");
}
const res = reverseInPlace("elements");
console.log(res);
