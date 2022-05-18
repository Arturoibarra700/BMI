/**
 * Gets the BMI (Body Mass Index) based on the weight and height
 * @param {object} measurements
 * @param {number} measurements.height The person height
 * @param {number} measurements.weight The person weight
 */
const getBmi = measurements => measurements.weight / Math.pow(measurements.height, 2);

module.exports = {
    getBmi
}