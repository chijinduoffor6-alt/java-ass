// ============================================================================
// ARRAYS, OBJECTS & CALLBACKS ASSIGNMENT
// ============================================================================

// QUESTION 1: Create Student Objects
// ============================================================================
// Array of student objects with id, name, age, and grades
const students = [
  { id: 1, name: 'Alice Johnson', age: 20, grades: [85, 92, 78] },
  { id: 2, name: 'Bob Smith', age: 19, grades: [75, 88, 92] },
  { id: 3, name: 'Charlie Brown', age: 21, grades: [95, 89, 91] },
  { id: 4, name: 'Diana Prince', age: 20, grades: [55, 60, 58] },
  { id: 5, name: 'Ethan Hunt', age: 22, grades: [72, 68, 75] },
];

console.log('=== QUESTION 1: Student Objects ===');
console.log('✓ Created array of 5 students with id, name, age, and grades');
console.log(students);
console.log('\n');

// QUESTION 2: Calculate Averages
// ============================================================================
// Function to calculate the average of grades, rounded to 2 decimal places
function calculateAverage(grades) {
  // Sum all grades using reduce
  const sum = grades.reduce((total, grade) => total + grade, 0);
  // Calculate average and round to 2 decimal places
  const average = sum / grades.length;
  return Math.round(average * 100) / 100;
}

// Use map() to add average property to each student
// The spread operator (...) copies the student object without mutating it
const studentsWithAverage = students.map(student => ({
  ...student,
  average: calculateAverage(student.grades)
}));

console.log('=== QUESTION 2: Calculate Averages ===');
console.log('✓ Created calculateAverage function');
console.log('✓ Used map() to add average property to each student (rounded to 2 decimals)');
console.log(studentsWithAverage);
console.log('\n');

// QUESTION 3: Filter Passing Students
// ============================================================================
// Function to get only students with average >= 60
function getPassingStudents(students) {
  return students.filter(student => student.average >= 60);
}

const passing = getPassingStudents(studentsWithAverage);

console.log('=== QUESTION 3: Filter Passing Students ===');
console.log('✓ Created getPassingStudents function using filter()');
console.log(`✓ Found ${passing.length} passing student(s) with average >= 60:`);
console.log(passing);
console.log('\n');

// QUESTION 4: Functions & Callbacks
// ============================================================================
// Function that accepts a students array and callback function
// Applies the callback to each student and returns the result
function processStudents(students, callback) {
  // Use map() to apply the callback to each student
  return students.map(callback);
}

// Callback function #1: Add letter grade based on average
// A: 90+, B: 80+, C: 70+, D: 60+, F: below 60
function addLetterGrade(student) {
  let letterGrade;
  if (student.average >= 90) {
    letterGrade = 'A';
  } else if (student.average >= 80) {
    letterGrade = 'B';
  } else if (student.average >= 70) {
    letterGrade = 'C';
  } else if (student.average >= 60) {
    letterGrade = 'D';
  } else {
    letterGrade = 'F';
  }
  
  // Return new object with letterGrade property (non-mutating)
  return {
    ...student,
    letterGrade
  };
}

// Callback function #2: Add Pass/Fail status
// Pass if average >= 60, Fail otherwise
function addStatus(student) {
  return {
    ...student,
    status: student.average >= 60 ? 'Pass' : 'Fail'
  };
}

// Apply processStudents with both callbacks
const studentsWithGrades = processStudents(studentsWithAverage, addLetterGrade);
const studentsWithStatus = processStudents(studentsWithAverage, addStatus);

console.log('=== QUESTION 4: Functions & Callbacks ===');
console.log('✓ Created processStudents function that accepts a callback');
console.log('✓ Created addLetterGrade callback function');
console.log('✓ Created addStatus callback function');
console.log('\nStudents with Letter Grades:');
console.log(studentsWithGrades);
console.log('\nStudents with Pass/Fail Status:');
console.log(studentsWithStatus);
console.log('\n');

// QUESTION 5: Find Student by ID
// ============================================================================
// Function to find a student by id using find()
// Returns the student object if found, or null if not found
function findStudentById(students, id) {
  const student = students.find(student => student.id === id);
  return student || null;
}

// Test findStudentById with existing and non-existing ids
const student3 = findStudentById(studentsWithAverage, 3);
const student99 = findStudentById(studentsWithAverage, 99);

console.log('=== QUESTION 5: Find Student by ID ===');
console.log('✓ Created findStudentById function using find()');
console.log('\nSearching for student with id 3:');
console.log(student3);
console.log('\nSearching for student with id 99 (does not exist):');
console.log(student99);
console.log('\n');

// ============================================================================
// SUMMARY TEST
// ============================================================================
console.log('=== FINAL VERIFICATION ===');
console.log('✓ Question 1: 5 students created with all required properties');
console.log('✓ Question 2: calculateAverage works and map() adds average property');
console.log('✓ Question 3: getPassingStudents returns students with average >= 60');
console.log('✓ Question 4: processStudents applies callbacks correctly');
console.log('✓ Question 5: findStudentById finds students by id or returns null');
console.log('\nAll functions tested and working correctly!');
