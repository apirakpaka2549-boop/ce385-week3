const students = [
    { id: '6501', name: 'ฟลุค', score: 85 },
    { id: '6502', name: 'ฟลุคงับ', score: 72 },
    { id: '6503', name: 'อภิรักษ์', score: 48 },
    { id: '6504', name: 'Sompong', score: 64 },
    { id: '6505', name: 'Somying', score: 53 }
];

const passingStudents = students.filter(student => student.score >= 50);
const passedReport = passingStudents.map(student => `${student.name} (${student.id}) — Pass`);
const isAllPassed = students.every(student => student.score >= 50);
const hasVeryLowScore = students.some(student => student.score < 40);

console.log('รายชื่อคนผ่าน:', passedReport);
console.log('ทุกคนผ่านทั้งหมดหรือไม่:', isAllPassed);
console.log('มีคนได้คะแนนต่ำกว่า 40 หรือไม่:', hasVeryLowScore);
