// Array ข้อมูลนักศึกษา
const students = [
    { id: '6501', name: 'ฟลุค', score: 85 },
    { id: '6502', name: 'ฟลุคงับ', score: 72 },
    { id: '6503', name: 'อภิรักษ์', score: 48 },
    { id: '6504', name: 'Sompong', score: 64 },
    { id: '6505', name: 'Somying', score: 53 }
];

function addStudent(studentList, newStudent) {
    return [...studentList, newStudent];
}

function findStudentById(studentList, id) {
    return studentList.find(student => student.id === id) || null;
}

function updateScore(studentList, id, newScore) {
    return studentList.map(student => {
        if (student.id === id) {
            return { ...student, score: newScore };
        }
        return student;
    });
}

// ทดสอบการใช้งาน
const updatedList = addStudent(students, { id: '6506', name: 'Sommaid', score: 90 });
console.log('เพิ่มนักศึกษาใหม่:', updatedList);
console.log('ค้นหา ID 6502 (ฟลุคงับ):', findStudentById(updatedList, '6502'));

const listAfterUpdate = updateScore(updatedList, '6503', 55);
console.log('อัปเดตคะแนน ID 6503 (อภิรักษ์):', listAfterUpdate);
