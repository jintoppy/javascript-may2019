const students = [
    {
        name: 'Ajai',
        mark: 10
    },
    {
        name: 'Arun',
        mark: 45
    },
    {
        name: 'Lakshmi',
        mark: 35
    }
];

class Student{
    constructor(name, mark){
        this.name = name;
        this.mark = mark;
    }
    isStudentPassed(){
        return this.mark > 25;
    }
}

const result = students.map(item => {
    const stu = new Student(item.name, item.mark);
    return {
        name: item.name,
        isPassed: stu.isStudentPassed()
    };
});
console.log(result);

// [
//     {name: 'Ajai', isPassed: false}, 
//     {name: 'Arun', isPassed: true}, 
//     {name: 'Lakshmi', isPassed: true}
// ]



