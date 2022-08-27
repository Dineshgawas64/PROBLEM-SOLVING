const s = 'saveChangesInTheEditor'


function camelcase(s) {
    const result = s.split(/(?=[A-Z])/)
    return result.length

}

console.log(camelcase(s))