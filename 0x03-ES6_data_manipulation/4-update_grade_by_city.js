export default function updateStudentGradeByCity(
  listOfStudent,
  city,
  newGrades,
) {
  return listOfStudent
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeOfStudent = newGrades
        .filter((newstudent) => newstudent.studentId === student.id)
        .map((x) => x.grade)[0];
      const grade = gradeOfStudent || 'N/A';
      return { ...student, grade };
    });
}
