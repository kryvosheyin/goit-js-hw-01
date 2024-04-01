const getShippingMessage = (country, price, deliveryFee) => {
    // checking if the arguments are numbers
    if (typeof price !== "number" || typeof deliveryFee !== "number") {
        try {
            price = Number(price);
            deliveryFee = Number(deliveryFee);

            //checking if convertion to number was successful
            if (isNaN(price) || isNaN(deliveryFee)) {
                throw new Error("Price and delivery fee must be a number");
            }
        } catch (error) {
            return `Error: ${error.message}`;
        }
    }
    if (price < 0 || deliveryFee < 0) {
        return "Price and delivery fee can not be negative";
    }

    const totalPrice = price + deliveryFee;
    return `Shipping to ${country} will cost ${totalPrice} credits`;
};

console.log(getShippingMessage("Australia", 120, 50));
console.log(getShippingMessage("Germany", 80, 20));
console.log(getShippingMessage("Sweden", 100, 20));
