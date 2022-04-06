// 类的访问类型，private，protected，public

class Person{
  name!: string;
}

const person = new Person();
person.name = 'mingzhu';

console.log(person.name);
