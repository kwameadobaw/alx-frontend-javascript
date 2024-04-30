export default function getListStudentIds(students) {
    // Check if the input is an array
    if (!Array.isArray(students)) {
        return []; // Return an empty array if input is not an array
    }

    // Use map function to extract ids from the array of objects
    return students.map(student => student.id);
}