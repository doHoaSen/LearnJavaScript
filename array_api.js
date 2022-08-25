// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join(', ');
  console.log(result);
}


// Q2. make an array out of a string
{
  const fruits2 = '🍎, 🥝, 🍌, 🍒';
  const result2 = fruits2.split(',');
  console.log(result2);
}


// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result3 = array.reverse();
  console.log(result3);
}


// Q4. make new array without the first two elements
{
  const array2 = [1, 2, 3, 4, 5];
  const result4 = array2.slice(2);
  console.log(result4);
}




class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];

//  Q5. find a student with the score 90
{
  console.log(students);
  students.forEach((student, index, array) => {
      if (student['score'] === 90){
          console.log(student);
      }
  });
}


// Q6. make an array of enrolled students
{
  let enrolledstd = [];
  students.forEach((student) => {
      if (student['enrolled'] === true){
          enrolledstd.push(student);}
  });
  console.log(enrolledstd);
}


// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]

{
  let stdScore = [];
  students.forEach((student) => stdScore.push(student['score']));
  console.log(stdScore);
}


// Q8. check if there is a student with the score lower than 50
{
  console.log(students.every((student) => student['score'] >= 50));
  const result8 = students.some((student) => student['score'] < 50);
  console.log(result8);
}


// Q9. compute students' average score
{
  // let avgScore = 0;
  // students.forEach((student) => avgScore += student['score']);
  // avgScore = avgScore / students.length;
  // console.log(avgScore);

  const sumScore = students.reduce((accumulator, student) => accumulator + student['score'], 0);
  const result9 = sumScore / students.length;
  console.log(result9);
}


// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  // const stringScore = stdScore.toString();
  // console.log(stringScore);

  const result10 = students.map((student) => student.score)
  .join(', ');
  console.log(result10);
}


// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result11 = students.map((student) => student.score).sort((a, b) => a - b).join(', ');
  console.log(result11);
}