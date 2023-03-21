function sort<T>(arr: T[], compareFn: (a: T, b: T) => number): T[] {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (compareFn(arr[i], arr[j]) > 0) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr ;
}


interface Person {
  name: string;
  age: number;
}

const people: Person[] = [
  { name: "Tiến", age: 25 },
  { name: "Hoàng", age: 30 },
  { name: "Nam", age: 20 },
];

sort<Person>(people, (a, b) => b.age - a.age);
console.log(people)