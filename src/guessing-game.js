class GuessingGame {
    constructor() {
        minNumeral: 0;
        maxNumeral: 0;
            midNumeral: 0;
    }

    setRange(min, max) {
        this.minNumeral = min;
        this.maxNumeral = max;
    }

    guess() {
        this.midNumeral = Math.round((this.minNumeral + this.maxNumeral) / 2);
        return this.midNumeral;
    }

    lower() {
        this.maxNumeral = this.midNumeral;
    }

    greater() {
        this.minNumeral = this.midNumeral;
    }
}

module.exports = GuessingGame;
