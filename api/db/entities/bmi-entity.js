const pool = require('../db');
const { getBmi } = require('../../utils'); // The same as require('../utils/index.js')
const BMIBusinessRules = require('../rules'); // The same as require('./rules.js)

function BMIEntity() {

    const table = 'bmi';
    const id = 'bmi_id';

    /**
     * Returns all available bmi records
     */
    this.all = async function () {
        const result = await pool.query(`SELECT * FROM ${table};`);
        return result.rows;
    }

    /**
     * Returns try to found the record by bmi_id
     */
    this.get = async function (bmiId) {
        const result = await pool.query(`SELECT * FROM ${table} WHERE ${bmiId};`);
        return result.rows[0];
    }

    /**
     * Saves the BMI (Body Mass Index) based on the weight and height
     * @param {object} measurements
     * @param {number} measurements.height The person height
     * @param {number} measurements.weight The person weight
     */
    this.save = async function (measurements) {
        const { height, weight } = measurements;
        const bmi = getBmi(measurements);
        
        // Applying business rules
       // BMIBusinessRules.checkHeight(height);
       // const shape = BMIBusinessRules.checkBMI(bmi);

        const result = await pool.query(`INSERT INTO ${table}(weight,height,bmi_total) VALUES(${weight},${height},${bmi}) RETURNING bmi_id;`);
        return result.rows[0][id];
    }
}
BMIEntity.prototype.constructor = BMIEntity;

module.exports = BMIEntity;