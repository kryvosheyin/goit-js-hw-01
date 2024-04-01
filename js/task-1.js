const makeTransaction = (quantity, pricePerDroid) => {
  // checking if the arguments are numbers
  if (typeof quantity !== "number" || typeof pricePerDroid !== "number") {
    try {
      quantity = Number(quantity);
      pricePerDroid = Number(pricePerDroid);

      //checking if convertion to number was successful
      if (isNaN(quantity) || isNaN(pricePerDroid)) {
        throw new Error("Quantity and price per droid must be a number");
      }
    } catch (error) {
      return `Error: ${error.message}`;
    }
  }
  if (quantity < 0 || pricePerDroid < 0) {
    return "Quantity and price per droid can not be negative";
  }

  const totalPrice = quantity * pricePerDroid;
  return `You ordered ${quantity} droids worth ${totalPrice} credits`;
};

console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));
