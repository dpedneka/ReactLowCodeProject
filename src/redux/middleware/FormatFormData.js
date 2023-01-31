import { InputTypes } from "src/data/input-elements";

export const formatFormData = (data) => {
    let arrayOfForm = []
    data.code.forEach(element => {
        arrayOfForm.push({
            dbFieldName : element[0],
            type : InputTypes[element[1]],
            label : element[2],
            dbValue : element[4],
            inputValues : data[element[0]] ? data[element[0]].result_set : null,
            attributes : {
                name : element[0],
                required : element[5] == "1"
            },
            displayOrder : element[7]
        })
    });
    return arrayOfForm
}

export const formatFormValues = (data) => {
    let arrayOfForm = []
    data.code.forEach(element => {
        arrayOfForm.push({
            dbFieldName : element[0],
            value : null
        })
    });
    return arrayOfForm
}

export const formatStorableValues = ({event, data}) => {
    var apiData = "";
    var separator = "";
    let arrayTypes = [9, 10, 11, 16]
    data.formData.forEach((item, index) => {

        if(arrayTypes.includes(InputTypes.findIndex(x => x === item.type))) {
            let inputArrayData = event.target[item.dbFieldName].value.split(",")
            inputArrayData.forEach(inpArrayItem => {
                apiData += separator + item.dbFieldName + "[]=" + inpArrayItem;
            })

        } else {
            let a = event.target[item.dbFieldName] !== undefined ? event.target[item.dbFieldName].value : ""
    
            apiData += separator + item.dbFieldName + "=" + a;
        }

        if(index !== (data.formValues.length - 1))
            separator = "&";
    })

    return apiData
}