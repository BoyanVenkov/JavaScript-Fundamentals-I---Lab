function phonebook(array){
    let phonebook = []
for (let element of array){
    let name = element.split(" ")[0]
    let phoneNumber = element.split(" ")[1]
    phonebook[name] = phoneNumber

}
for(let key in phonebook){
    console.log(key + " -> " + phonebook[key])
}
}