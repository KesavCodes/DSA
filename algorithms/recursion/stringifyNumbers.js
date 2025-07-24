const stringifyNumbers = (obj) => {
  const newObj = Object.assign({}, obj);
  Object.entries(newObj).forEach(([key, value]) => {
    if (typeof value === "object" && value !== null && Object.keys(value).length > 0) {
      newObj[key] = stringifyNumbers(value);
    } else if (typeof value === "number") {
      newObj[key] = value.toString();
    }
  });
  return newObj;
};

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj));

/*
Output: 
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
