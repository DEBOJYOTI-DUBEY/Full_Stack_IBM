let str="Swami Vivekananda";
console.log(str.length);
console.log(str.length-1);
console.log(str[2]);
console.log(str[str.length-1]);

let arr=[1,2,3, "DUBEY",1.12,true,false,null,undefined];
console.log(arr[arr,length-2]);
console.log(arr[3]);

//arr.push("DEBOJYOTI")

arr[4]="DEBOJYOTI"
console.log(arr)
arr.pop();
console.log(arr)

let obj = {
    DEBOJYOTI:{className:"B.Tech",rollno:338,subjects:["DBMS","numerical methods","Research Methodology","Computer Netwoks"]},
    Sousnav :{className:"B.Tech",rollno:169,subjects:["DBMS","numerical methods","Research Methodology","Computer Netwoks"]},
    1:undefined
}
console.log(obj)
console.log(obj.DEBOJYOTI)
//console.log(obj.["DEBOJYOTI"])

Object.DEBOJYOTI="My Name"
console.log(obj)
//delete obj(obj);
obj.Debnath={rollno:167,hobbies:["reading","writting","singing"]}
console.log(obj)

// let Name:"Jeet";
// let class :"B.Tech";
// let hobbies:["Games","gardening"]

// let newobj={
//     Name,class,hobbies
// }
// console.log(newobj);

let ans = [1,2,3,[9,4,6,[5,1,9]]];
console.log(ans[3][3][0]);

let superHeroes = {
    1: {
        name: 'Batman',
        power: ['intelligence', 'money'],
        health: 45,
        villains: [
            { name: 'Redhood', health: 34 },
            { name: 'Twoface', health: 64 }
        ],
        metadata: { favouriteColor: 'red', age: 15 }
    },
    2: {
        name: 'Ironman',
        power: ['jarvis', 'money'],
        health: 33,
        villains: [
            { name: 'Manderin', health: 44 },
            { name: 'Titanium Man', health: 56 }
        ],
        metadata: { favouriteColor: 'red', age: 13 }
    }
}

console.log(superHeroes[1].villains[1].name);
console.log(superHeroes[2].power[1]);
console.log(superHeroes[2].metadata.favouriteColor);
console.log(superHeroes[1].health)
console.log(superHeroes[2].villains[0].health)
console.lo