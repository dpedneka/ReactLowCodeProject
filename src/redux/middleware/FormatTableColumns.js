// ** Acceptable format for listview table header will be an object with below values 
// ** ** 1. id
// ** ** 2. label
// ** ** 3. minWidth
// ** ** 4. align
// ** ** 5. format

export const formatTableColumns = (data) => {
    let arrayOfHeaders = []
    data.header.forEach(( item, index ) => {

        // ** New API Data

        arrayOfHeaders.push({
            Id : item[1],
            indexId : item[0],
            label: item[1],
            minWidth : 100,
            align : 'left',
            format : ""
        })


        // ** Old API Data
        // arrayOfHeaders.push({
        //     Id : camelize(item[3]).replaceAll(".",""),
        //     srNo : item[0],
        //     label : item[1],
        //     minWidth : 100,
        //     align : 'left',
        //     format : ""
        // })
    })

    return arrayOfHeaders
}

export const formatTableRows = (trdata) => {

    let arrayOfRows = []
    let labelHeaders = []

    trdata.header.forEach(item => labelHeaders.push(item[1]) )
    trdata.data.forEach(item => {
        arrayOfRows.push({
            [labelHeaders[0]] : item[labelHeaders[0]],
            [labelHeaders[1]] : item[labelHeaders[1]],
            [labelHeaders[2]] : item[labelHeaders[2]],
            [labelHeaders[3]] : item[labelHeaders[3]],
            [labelHeaders[4]] : item[labelHeaders[4]],
            [labelHeaders[5]] : item[labelHeaders[5]],
            [labelHeaders[6]] : item[labelHeaders[6]],
            [labelHeaders[7]] : item[labelHeaders[7]],
            [labelHeaders[8]] : item[labelHeaders[8]],
            editableId : item[labelHeaders[0]]
        })
    })

    return arrayOfRows
}

function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}