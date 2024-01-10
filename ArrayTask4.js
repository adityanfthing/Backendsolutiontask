
const calculateTotalSales = (dailySales) => dailySales.reduce((total, sales) => total + sales, 0);


const calculateAverageDailySales = (dailySales) => {
    const totalSales = calculateTotalSales(dailySales);
    return totalSales / dailySales.length;
};


const findBestSellingDay = dailySales => {
    const maxSales = Math.max(...dailySales);
    const bestSellingDay = dailySales.indexOf(maxSales) + 1; // Adding 1 to index since days are usually 1-indexed
    return bestSellingDay;
};


const sampleDailySales = [1200, 1500, 1, 2000, 1600, 2200, 2500];


console.log("Sample Daily Sales Data:");
console.log(sampleDailySales);

const totalSales = calculateTotalSales(sampleDailySales);
console.log(`Total Sales for the Month: $${totalSales}`);

const averageDailySales = calculateAverageDailySales(sampleDailySales);
console.log(`Average Daily Sales: $${averageDailySales.toFixed(2)}`);


const bestSellingDay = findBestSellingDay(sampleDailySales);
console.log(`Best Selling Day: Day ${bestSellingDay}`);