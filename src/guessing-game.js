class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.mid = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.mid = Math.ceil((this.min + this.max) / 2);
    }

    guess() {
        return this.mid;
    }

    lower() {
        this.max = this.mid;
        this.mid = Math.ceil((this.min + this.max) / 2);
    }

    greater() {
        this.min = this.mid;
        this.mid = Math.ceil((this.min + this.max) / 2);
    }
}

module.exports = GuessingGame;
