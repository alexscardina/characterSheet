export function calculateMod(score) {
    let num = ~~((score - 10) / 2)
    if (score < 10 && score % 2 !== 0) {
        num -= 1
    }
    if (num > 10) {
        num = 10
    }
    return num;
}

export default calculateMod