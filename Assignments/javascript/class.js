class person {
    constructor(fname,lname){
        this.fname=fname
        this.lname=lname;
    }
    getFullname (){
        return `${this.fname} ${this.lname} `
    }
}

const p1 =new person("vinay","kumar");
const p2 =new person("ravi","kumar");

console.log(p1.getFullname());
console.log(p2.getFullname());