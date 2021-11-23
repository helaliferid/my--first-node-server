//ES6

// Context :  HR Management

class Person{

    fullName;
    birthDate;
    address;

  constructor(_fullname,_birthDate,_address){
      this.fullName=_fullname;
      this.birthDate=_birthDate;
      this.address=_address;     
  }

  toString(){
      return `
        Full Name : ${this.fullName}
        Birth Date : ${this.birthDate}
        Address : ${this.address}
      `
  }

}

class Student extends Person{
  note;
  level;
    constructor(fullName,birthDate,address){
        super(fullName,birthDate,address)
    }
  

  get Note(){
      return this.note;
  }

  set Note(newNote){
      if(newNote>0 || newNote<20){
          this.note=newNote;
      }
  }

}


class Teacher extends Person{
    section;
    constructor(fullName,birthDate,address){
        super(fullName,birthDate,address)
    }

    teach(month){
        console.log(`${this.fullName} has worked all the ${month}`);
    }
}

const mohamed= new Teacher('Mohamed Camara','5/5/1993','Matam Sénégal');
const elhadji= new Teacher('Mohamed El HADJI','22/01/1995','Dakar Sénégal');

const magamou = new Student('Magamou GUEYE','26/5/1994','Dakar Sénégal')
const lathyr = new Student('Mohamed Latyr','26/5/1994','Dakar Sénégal')
const fatou = new Student('Fatou NDiaye','5/8/2000','Dakar Sénégal')

const teachers = [mohamed,elhadji];
const  students = [magamou,lathyr,fatou]

console.log('--------------Teachers ---------------------')
teachers.map(teacher=>console.log(teacher.toString()))
console.log('------------------------------------------')
console.log('-----------------Students----------------')
students.map(student=>console.log(student.toString()))
console.log('fin');