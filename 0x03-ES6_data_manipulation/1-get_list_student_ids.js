export default function getListStudentIds(listOfStudent) {
  if (!Array.isArray(listOfStudent)) return [];
  return listOfStudent.map((student) => student.id);
}
