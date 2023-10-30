const dataSet = {
  INR: 71,
  EUR: 0.89,
  GBP: 0.75,
  HKD: 7.79
};

export default currency => {
  if (dataSet[currency]) {
    return Promise.resolve(dataSet[currency]);
  } else {
    return Promise.reject();
  }
};
