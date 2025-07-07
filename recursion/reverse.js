const reverse = (str) => {
  if (!str) return "";
  let reversedString = "";
  const getReversedString = (index) => {
    reversedString += str[index];
    if (index === 0) return reversedString;
    return getReversedString(--index);
  };
  return getReversedString(str.length - 1);
};

console.log(reverse("awesome")); // 'emosewa'
console.log(reverse("rithmschool")); // 'loohcsmhtir'
