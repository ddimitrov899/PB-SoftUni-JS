const greating = require('./hello')
const expression = require('./expression')
const nums1to10 = require('./nums1to10')
const rectangleArea = require('./rectangleArea')
module.exports = {
  run: () => {
    console.log('01')
    greating.hello()
    console.log('\n02')
    expression.sum()
    console.log('\n03')
    nums1to10.print()
    console.log('\n04')
    rectangleArea.calculate([7, 8])
  }
}
