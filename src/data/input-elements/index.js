export const InputItems = [{
    type: "text",
    id: 'email',
    label: 'Email',
    variant: 'filled',
    defaultValue: 'darshan'
}, {
    type: "checkbox",
    checkboxdata : [{
        id: 'checkbox1',
        label: 'CheckBox One',
        variant: 'filled',
        name: "color-success",
        color: 'success',
        defaultChecked: true
    },{
        id: 'checkbox2',
        label: 'CheckBox Two',
        variant: 'filled',
        name: "color-success",
        color: 'success',
        defaultChecked: true
    }]
}, {
    type: "radio",
    id: 'radio',
    label: 'Radio',
    variant: 'filled',
    name: "color-radio",
    defaultChecked: true
}]

export const InputTypes = [
    "hidden", // ** 0 - Comment links to the value from DB
    "text", // ** 1
    "dropdownSelect", // ** 2
    "textarea", // ** 3
    "radio", // ** 4
    "dropdownSelect", // ** 5 from DB
    "date", // ** 6
    "number", // ** 7
    "email", // ** 8
    "checkbox", // ** 9
    "multiSelectDropdown", // ** 10 from DB - Obselete
    "multiSelectSearchDropdown", // ** 11 from DB
    "singleMediaUpload", // ** 12
    "multiMediaUpload", // ** 13
    "grid", // ** 14
    "radio", // ** 15 from DB
    "checkboxDump" // ** 16
]

//Array Types 
// [9, 10, 11, 16]