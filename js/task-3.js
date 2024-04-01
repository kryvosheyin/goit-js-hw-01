const getElementWidth = (content, padding, border) => {
    // Parse the inputs to floats
    const numContent = Number.parseFloat(content);
    const numPadding = Number.parseFloat(padding);
    const numBorder = Number.parseFloat(border);

    // Check for NaN values and negative values together
    if (
        isNaN(numContent) ||
        isNaN(numPadding) ||
        isNaN(numBorder) ||
        numContent < 0 ||
        numPadding < 0 ||
        numBorder < 0
    ) {
        return "Error: Content, padding, and border must be non-negative numbers.";
    }

    return numContent + 2 * numPadding + 2 * numBorder;
};

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));
