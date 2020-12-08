const plus = (x, y) => {
    if (x === null || y === null) return null;
    if (x === undefined || y === undefined) return NaN;
    if (typeof x === 'string' || typeof y === 'string') return NaN;

    let result = 0;
    result = x + y
    return result;
};

module.exports = plus;