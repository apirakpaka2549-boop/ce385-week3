// 1. Arrow Function: คำนวณคะแนนรวม
const calculateTotalScore = (lab, midterm, final) => lab + midterm + final;

// 2. Function Expression: ตัดเกรด
const assignGrade = function (totalScore) {
    if (totalScore >= 80) return 'A';
    if (totalScore >= 70) return 'B';
    if (totalScore >= 60) return 'C';
    if (totalScore >= 50) return 'D';
    return 'F';
};

// 3. Function Statement: สร้างข้อความสรุปผล
function createStudentReport(name, lab, midterm, final) {
    const totalScore = calculateTotalScore(lab, midterm, final);
    const grade = assignGrade(totalScore);
    const isPassed = totalScore >= 50;

    return `${name} — คะแนนรวม: ${totalScore} (เกรด ${grade}) — ${isPassed ? 'ผ่าน' : 'ไม่ผ่าน'}`;
}

// 4. ทดสอบเรียกใช้งาน
console.log(createStudentReport('ฟลุค', 25, 30, 30));
console.log(createStudentReport('ฟลุคงับ', 10, 15, 15));
console.log(createStudentReport('อภิรักษ์', 20, 25, 25));
