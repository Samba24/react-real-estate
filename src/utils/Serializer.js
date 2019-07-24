function serializeObject(object) { 
    let output = ""; 
    let value; 
    Object.keys(object).forEach((key, index) => { 
        value = eval(`object.${key}`); 
        index == 0 ? output += `${key}=${value}` : output += `&${key}=${value}` ; 
    }); 
    return output; 
}

function deserializeObject(text){
    let textArray = text.split('&');
    let outputObject = Object;
    let someArray = []
    textArray.forEach((value)=>{
        someArray = value.split('=');
        eval(`outputObject.${someArray[0]} = '${someArray[1]}'`);
    })

    return outputObject;
}

export {
    serializeObject,
    deserializeObject
};