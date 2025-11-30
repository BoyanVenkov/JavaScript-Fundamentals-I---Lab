function meetings(array) {
    let outputArr = {};

    for (let element of array) {
        let day = element.split(" ")[0];
        let name = element.split(" ")[1];

        if (outputArr.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            outputArr[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (let day in outputArr) {
        console.log(`${day} -> ${outputArr[day]}`);
    }
}