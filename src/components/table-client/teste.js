function currentDate() {
    let nowDate = Date(Date.now()).toString()
    const dateRegExp = /\w{3}\s\d{2}\s\d{4}\s\d{2}:\d{2}:\d{2}/i
    return nowDate.match(dateRegExp)
}

console.log(currentDate()[0])