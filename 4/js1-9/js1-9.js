let storage = localStorage.getItem("statistika");
if (storage === null) {
    storage = "[]";
}
let storageParsed = JSON.parse(storage);
let urlExist = false;
for (let key in storageParsed) {
    let statRow = storageParsed[key];
    if (statRow["url"] == location.href && statRow["browser"] == navigator.userAgent) {
        statRow["visits"]++;
        urlExist = true;
    }
}
if (!urlExist) {
    storageParsed.push({
        url: location.href,
        visits: 1,
        browser: navigator.userAgent
    });
}

localStorage.setItem('statistika', JSON.stringify(storageParsed));