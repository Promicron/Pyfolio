import {getRecords} from "./base.js"

const records = getRecords()
console.log(records)

records.then((data) => {
    document.querySelectorAll('.userName').forEach(item => {
        item.innerText = data[0]?.fields?.Username;
    });
    document.querySelectorAll('.profession').forEach(item => {
        item.innerText = data[0]?.fields?.Profession;
    });
    document.querySelector('.userAbout').innerText = data[0]?.fields?.About;
})