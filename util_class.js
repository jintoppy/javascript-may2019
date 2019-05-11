class StringUtil {
    constructor(){
        this.list = [];
    }

    addItem(val) {
        this.list.push(val);
    }

    getItems(){
        return this.list;
    }
    combineAllString(){
        console.log(this.list.join(',')); 
    }
}
class NumberUtil{
    constructor(){
        this.list = [];
    }

    addItem(val) {
        this.list.push(val);
    }

    getItems(){
        return this.list;
    }

    printSum(){
        let sum = 0;
        this.list.forEach(item => sum = sum+item);
        console.log('sum is ',sum);
    }
}
