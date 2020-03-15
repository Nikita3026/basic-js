const chainMaker = {
    chain: [],
    getLength() {
        if (("chain" in chainMaker) == false) return 0;
        else return this.chain.length;
    },
    addLink(value) {
        if (value === undefined) this.chain.push(" ");
        else this.chain.push(value);
        return this;
    },
    removeLink(position) {
        if (typeof(position) != "number" || position % 1 != 0 || (position - 1) < 0 || position > this.getLength()) {
            this.chain = [];
            throw Error();
        }
        this.chain.splice((position - 1), 1);
        return this;
    },
    reverseChain() {
        this.chain.reverse();
        return this;
    },
    finishChain() {
        let str = "";
        while (this.getLength() != 0) {
            str += "( " + this.chain.shift() + " )";
            if (this.getLength() >= 1) str += "~~";
        }
        return str;
    }
};

module.exports = chainMaker;