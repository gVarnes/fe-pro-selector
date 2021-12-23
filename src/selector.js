const selector = (obj, path) => {
    // Ваше решение должно быть здесь
    //Написать ф-цию которая идет по пути и возвращает значение, если такого пути нет вернуть пустую строку.
    //Всё что сейчас написано под сомнением.
    let result = obj;
    let test;
    for (let i = 0; i < path.length; i++) {
        test = path[i];
        console.log(test);
        if (Object.values(result)[0] !== undefined && Object.keys(result)[0] === path[i]) {
            console.log(Object.keys(result)[0])
            // console.log(Object.keys(obj)[0])
            result = result[test];
        } else {
            return '';
        }
        //Попробовать использовать обычный перебор или методы массивов.
    }
    return result;
};

module.exports = selector;
