function addressBook(input) {
    let book = {}

    for (let line of input) {
        let [name, address] = line.split(":")
        book[name] = address
    }

    let sortedNames = Object.keys(book).sort();

    for (let name of sortedNames) {
        console.log(`${name} -> ${book[name]}`)
    }
}