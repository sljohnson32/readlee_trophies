class StoryRecord {
    constructor(title = "Steal This Book", time = 9.5, words = 564, accuracy = .78, student_id = 1234) {
        this.title = title;
        this.readingTime = time;
        this.words = words;
        this.accuracy = accuracy;
    }
}

module.exports = {
    StoryRecord
}
