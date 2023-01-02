export default function getListStudentIds(listOfStudent) {
  if (!Array.isArray(listOfStudent)) {
    return [];
  } else {
    return listOfStudent.map((student) => student.id);
  }
}
