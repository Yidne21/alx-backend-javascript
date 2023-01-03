export default function updateStudentGradeByCity(
  listOfStudent,
  city,
  newGrades,
) {
  return listOfStudent
    .filter((student) => student.location === city)
    .map((student) => {
      const grade = newGrades
        .filter((newstudent) => newstudent.studentId === student.id)
        .map((x) => x.grade)[0];
      const gradeOfStudent = grade || 'N/A';
      return { ...student, gradeOfStudent };
    });
}
