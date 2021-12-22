const selector = (obj, keys) => {
    // Ваше решение должно быть здесь
    //Написать ф-цию которая идет по пути и возвращает значение, если такого пути нет вернуть пустую строку.
    //Всё что сейчас написано под сомнением.
    let result = obj;
    let test;
    for (let i = 0; i < keys.length; i++) {
        test = keys[i];
        if (typeof result[test] === 'undefined') {
            return ''
        }

        if (Object.keys(result)[0] === keys[i]) {
            // нужено реализовать здесь условие как выше,а именно присвоить резалт и возможно обновлять тест
            if ((i === keys.length - 1) && typeof result[test] !== 'object') {
                return result[test]
            }
            result = obj[test];
        }
    }
    //Попробовать использовать обычный перебор или методы массивов.
    return '';
};

module.exports = selector;
