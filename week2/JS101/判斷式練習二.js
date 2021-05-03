var height = 1.55
var weight = 80

var BMI = weight / (height * height)

if (BMI < 15) {
    console.log('過輕')
} else if (BMI >= 15 && BMI < 24) {
    console.log('正常範圍')
} else if (BMI >= 24 && BMI < 27) {
    console.log('過重')
} else if (BMI >= 27 && BMI < 30) {
    console.log('輕度肥胖')
} else if (BMI >= 30 && BMI < 35) {
    console.log('中度肥胖')
} else {
    console.log('重度肥胖')
}