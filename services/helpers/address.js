const checkAddressDuplicate = (address, allAddresses) => {
  console.log("In address function");
  console.log(address);
  console.log(allAddresses);
  const checkAdd = allAddresses.some((el) => {
    const { id, isDefault, addressType, ...rest } = el;
    console.log({ ...rest });
    return Object.keys({ ...rest }).every((elx) => {
      return el[elx].toLowerCase().trim() === address[elx].toLowerCase().trim();
    });
  });
  console.log(checkAdd);
  return checkAdd;
};

export default checkAddressDuplicate;
