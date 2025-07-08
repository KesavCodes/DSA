const collectStrings = (obj) => {
  const availableStrings = [];
  Object.values(obj).forEach((value) => {
    if (typeof value === "object" && value !== null) {
      const returnedData = collectStrings(value)
      availableStrings.push(...returnedData);
    } else if (typeof value === "string") availableStrings.push(value);
  });
  return availableStrings;
};

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
