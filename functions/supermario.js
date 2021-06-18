exports.handler = async () => {
  const guides = [
    { titel: "fromt end developer at elnuor", auther: "mohamed" },
  ];
  console.log("hi");
  return {
    status: 200,
    body: JSON.stringify(guides),
  };
};
