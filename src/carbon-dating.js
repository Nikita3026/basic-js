const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    if (sampleActivity === undefined) return false;
    if (typeof(sampleActivity) != "string") return false;
    sampleActivity = parseFloat(sampleActivity);
    if ((sampleActivity > 15) || (sampleActivity <= 0) || (sampleActivity.length == 0) || (isNaN(Number(sampleActivity)))) return false;
    let age;
    age = Math.ceil(Math.log(MODERN_ACTIVITY / +sampleActivity) / (0.693 / HALF_LIFE_PERIOD));
    return age
};