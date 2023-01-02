export default function getStudentsByLocation(listOfStudent, city) {
  return listOfStudent.filter((student) => student.location === city);
}
