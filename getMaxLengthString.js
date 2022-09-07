const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
    let max = 0
    if (arrayOfString === undefined || arrayOfString === null) return undefined
    arrayOfString.forEach(str => {
      if (str.length >= max) max = str.length 
    })
    return arrayOfString.filter(str => str.length >= max)
}
console.log(getMaxLengthString(["Hello","World","Hi","find"]))
module.exports = getMaxLengthString
