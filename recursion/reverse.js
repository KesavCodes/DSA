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


// example: revApp2(abc)
// revApp2(bc) + a => cba
// revApp2(c) + b => cb
const reverseApproach2 = (str) => {
  if (str.length <= 1) return str;
  return reverseApproach2(str.slice(1)) + str[0];
};



console.log(reverseApproach2("awesome")); // 'emosewa'
console.log(reverseApproach2("rithmschool")); // 'loohcsmhtir'
