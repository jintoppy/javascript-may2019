class Util {
    constructor(){
        this.list = [];
    }

    addItem(val) {
        this.list.push(val);
    }

    getItems(){
        return this.list;
    }
}
class StringUtil extends Util {
    constructor(){
        super();
    }
    combineAllString(){
        console.log(this.list.join(',')); 
    }
}
class NumberUtil extends Util {
    constructor(){
        super();
    }
    printSum(){
        let sum = 0;
        this.list.forEach(item => sum = sum+item);
        console.log('sum is ',sum);
    }
}

const strUtil = new StringUtil();
strUtil.addItem('abc');
strUtil.addItem('def');
strUtil.combineAllString();


