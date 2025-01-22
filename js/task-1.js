function slugify(title) {
  let slug = title.toLowerCase();
  slug = slug.replace(/[^a-z0-9]+/g, "-");
  return slug;
}

console.log(slugify("Arrays for beginners"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));
