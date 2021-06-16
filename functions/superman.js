exports.handel = async () => {
  const data = { name: "mohamd", age: 22, job: "fron-end " };
  console.log("function is run");
  return {
    status: 200,
    data: JSON.stringify(data),
  };
};
