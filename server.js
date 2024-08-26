const mongoose = require('mongoose');

// เชื่อมต่อกับ MongoDB
mongoose.connect('mongodb+srv://localthaistores:Pd83fQnU1p8jItX6@cluster0.sr1js.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {

    serverSelectionTimeoutMS: 50000 // เพิ่มเวลาในการรอการเชื่อมต่อ
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(err => console.error('Error connecting to MongoDB Atlas:', err.message));


const dataActivitySchema = new mongoose.Schema({
    ActivityName: { type: String, required: true },
    ActivityDescription: { type: String },
    TotalParticipants: { type: Number, default: 0 },
    Participants: [
        {
            ParticipantId: { type: mongoose.Schema.Types.ObjectId, ref: 'DataParticipant' },
            JoinedAt: { type: Date, default: Date.now }
        }
    ]
});

const DataActivity = mongoose.model('DataActivity', dataActivitySchema);

// Seed data ภาษาไทย
const seedActivities = [
    { ActivityName: 'คลาสโยคะ', ActivityDescription: 'คลาสโยคะที่ผ่อนคลายสำหรับทุกระดับ.', TotalParticipants: 0 },
    { ActivityName: 'เวิร์กช็อปทำอาหาร', ActivityDescription: 'เรียนรู้การทำอาหารจานอร่อย.', TotalParticipants: 0 },
    { ActivityName: 'งานสัมมนาเทคโนโลยี', ActivityDescription: 'งานสัมมนาสำหรับผู้ที่สนใจด้านเทคโนโลยี.', TotalParticipants: 0 },
    { ActivityName: 'การฝึกอบรมการตลาดดิจิทัล', ActivityDescription: 'เรียนรู้กลยุทธ์การตลาดดิจิทัลใหม่ๆ.', TotalParticipants: 0 },
    { ActivityName: 'คอร์สการถ่ายภาพ', ActivityDescription: 'ฝึกฝนทักษะการถ่ายภาพอย่างมืออาชีพ.', TotalParticipants: 0 },
    { ActivityName: 'การเรียนรู้การเขียนโปรแกรม', ActivityDescription: 'เรียนรู้พื้นฐานการเขียนโปรแกรม.', TotalParticipants: 0 },
    { ActivityName: 'การทำงานฝีมือ', ActivityDescription: 'สนุกกับการทำงานฝีมือและสร้างสรรค์.', TotalParticipants: 0 },
    { ActivityName: 'การเรียนรู้การทำเครื่องดื่ม', ActivityDescription: 'เรียนรู้วิธีการทำเครื่องดื่มที่คุณชื่นชอบ.', TotalParticipants: 0 },
    { ActivityName: 'การอบรมการบริหารจัดการ', ActivityDescription: 'เรียนรู้ทักษะการบริหารจัดการที่มีประสิทธิภาพ.', TotalParticipants: 0 },
    { ActivityName: 'งานแข่งขันกีฬา', ActivityDescription: 'เข้าร่วมการแข่งขันกีฬาและสนุกไปกับมัน.', TotalParticipants: 0 }
];

async function seedDatabase() {
    await DataActivity.deleteMany(); // ลบข้อมูลเดิมทั้งหมดก่อน
    await DataActivity.insertMany(seedActivities);
    console.log('เพิ่มข้อมูลกิจกรรมตัวอย่างภาษาไทย 10 รายการเรียบร้อยแล้ว');
    mongoose.disconnect();
}

seedDatabase();
