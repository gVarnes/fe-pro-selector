const selector = (obj, path) => {
    // Ваше решение должно быть здесь
    let result = obj;
    let test;
    for (let i = 0; i < path.length; i++) {
        test = path[i];
        if (Object.values(result)[0] !== undefined && Object.keys(result)[0] === path[i]) {
            result = result[test];
        } else {
            return '';
        }
    }
    return result;
};

module.exports = selector;
