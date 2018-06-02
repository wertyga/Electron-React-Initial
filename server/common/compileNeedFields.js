export default (needFieldsArr, model) => { // Collect model result with need fields
    return needFieldsArr.reduce((obj, item) => {
        if(model[item] || model[item] === false) obj[item] = model[item];

        return obj;
    }, {});
};