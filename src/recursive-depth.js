module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let depth = 1;
        if (!Array.isArray(arr)) return 0;
        for (let i = 0; i < arr.length; i++) depth = Math.max(this.calculateDepth(arr[i]) + 1, depth);
        return depth;
    };
};