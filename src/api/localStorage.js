const ls = require('local-storage');
const { StoryRecord } = require('./DataObjects');

const TABLE_KEY = "reading_data"

if (!ls(TABLE_KEY)) {
    ls.set(TABLE_KEY, {});
}

function getTimestamp() {
    return Date.now()
}

export function logNewReadingRecord(record) {
    const data = ls.get(TABLE_KEY);
    const id = getTimestamp();

    data[id] = new StoryRecord();
    console.log(data);
    ls.set(TABLE_KEY, data);
}

export function removeReadingRecord() {
    const data = ls.get(TABLE_KEY);
    const id = Object.keys(data).pop();
    delete data[id];
    ls.set(TABLE_KEY, data);
}

export function getReadingTime() {
    const data = ls.get(TABLE_KEY);
    const readingTime = Object.values(data).reduce((acc, obj) => {
        return acc += obj.readingTime;
    }, 0)
    return readingTime;
}

export function getBooksRead() {
    const data = ls.get(TABLE_KEY);
    return Object.keys(data).length;
}

export function localStorageListener(func) {
    return ls.on(TABLE_KEY, () => func);
}
