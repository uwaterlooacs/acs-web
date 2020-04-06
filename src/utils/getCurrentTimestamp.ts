const getCurrentTimestamp = () => {
  return {
    createdOn: new Date(),
    modifiedOn: new Date(),
  };
};

export default getCurrentTimestamp;
