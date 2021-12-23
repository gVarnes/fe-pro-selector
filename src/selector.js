const selector = (obj, path) => {
    let result = obj;
    let test;
    path.forEach(item => {
        test = item;
        if (Object.values(result)[0] !== undefined && Object.keys(result)[0] === item) {
            result = result[test];
        } else {
            return '';
        }
    });
    return result;
};

module.exports = selector;
