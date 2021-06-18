exports.handler = async (event, context) => {
  const guides = [
    { titel: "fromt end developer at elnuor", auther: "mohamed" },
    { titel: "fromt end developer at teknolgey", auther: "ahmed" },
    { titel: "fromt end developer at maruo", auther: "ali" },
  ];
  console.log("hi");
  return {
    status: 200,
    body: JSON.stringify(guides),
  };
};
