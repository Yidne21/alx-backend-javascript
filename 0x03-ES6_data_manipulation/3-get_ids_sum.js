export default function getStudentIdsSum(listOfStudent) {
  return listOfStudent.reduce(
    (accumulator, student) => accumulator + student.id,
    0,
  );
}
