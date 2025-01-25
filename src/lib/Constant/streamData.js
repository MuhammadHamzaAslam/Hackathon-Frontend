const studentStream = [
  {
    id: 1,
    studentName: "John Doe",
    studentImage: "https://randomuser.me/api/portraits/men/1.jpg",
    issueDate: "2024-12-14",
    assignmentDescription: "Math Homework - Trigonometry",
    assignmentLink: "https://example.com/assignment1.pdf",
    assignmentScreenshot:
      "https://forumstatic.oneplusmobile.com/opforum-gl/upload/image/app/thread/20231112/4318020878898572541/1462181598320394244/1462181598320394244.jpeg?x-ocs-process=image/format,webp/resize,w_1584", // Trigonometry screenshot
  },
  {
    id: 2,
    studentName: "Jane Smith",
    studentImage: "https://randomuser.me/api/portraits/women/2.jpg",
    issueDate: "2024-12-13",
    assignmentDescription: "Science Project - Solar System",
    assignmentLink: "https://example.com/project1.pdf",
    assignmentScreenshot:
      "https://static.vecteezy.com/system/resources/thumbnails/023/192/562/small_2x/sport-car-running-on-the-road-in-future-city-created-with-generative-ai-free-photo.jpg", // Solar system screenshot
  },
  {
    id: 3,
    studentName: "Michael Brown",
    studentImage: "https://randomuser.me/api/portraits/men/3.jpg",
    issueDate: "2024-12-12",
    assignmentDescription: "History Essay - World War II",
    assignmentLink: "https://example.com/essay1.pdf",
    assignmentScreenshot: "https://media.graphassets.com/bo37wyPmQYqJqyNUBsRx",
  },
  {
    id: 4,
    studentName: "Michael Brown",
    studentImage: "https://randomuser.me/api/portraits/men/3.jpg",
    issueDate: "2024-12-12",
    assignmentDescription: "History Essay - World War II",
    assignmentLink: "https://example.com/essay1.pdf",
    assignmentScreenshot: "https://media.graphassets.com/bo37wyPmQYqJqyNUBsRx",
  },
];

const teacherAssignments = [
  {
    id: 1,
    title: "Math Homework - Quadratic Equations",
    issueDate: "2024-12-14",
    dueDate: "2025-1-4",
    image:
      "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&height=900&width=1600&fit=bounds", // Replace with a real image URL
  },
  {
    id: 2,
    title: "Science Project - Space Exploration",
    issueDate: "2024-12-13",
    dueDate: "2025-1-4",
    image:
      "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/notes/n-10-media-hd.jpg", // Replace with a real image URL
  },
  {
    id: 3,
    title: "History Quiz - Renaissance Period",
    issueDate: "2024-12-12",
    dueDate: "2025-1-4",
    image:
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/M5-2025/11821/1719462197562/front-left-side-47.jpg?impolicy=resize&imwidth=480", // Replace with a real image URL
  },
];

const classroomPeople = [
  {
    id: 1,
    name: "Ahmed Ali",
    role: "teacher",
  },
  {
    id: 2,
    name: "Omar Hassan",
    role: "student",
  },
  {
    id: 3,
    name: "Ibrahim Khan",
    role: "student",
  },
  {
    id: 4,
    name: "Yusuf Abdullah",
    role: "teacher",
  },
  {
    id: 5,
    name: "Zayd Farhan",
    role: "student",
  },
  {
    id: 6,
    name: "Bilal Ahmed",
    role: "student",
  },
  {
    id: 7,
    name: "Usman Saeed",
    role: "teacher",
  },
  {
    id: 8,
    name: "Abdullah Rashid",
    role: "student",
  },
  {
    id: 9,
    name: "Musa Rehman",
    role: "student",
  },
  {
    id: 10,
    name: "Hassan Tariq",
    role: "teacher",
  },
  {
    id: 11,
    name: "Khalid Mansoor",
    role: "student",
  },
  {
    id: 12,
    name: "Suleiman Shah",
    role: "student",
  },
  {
    id: 13,
    name: "Salman Javed",
    role: "teacher",
  },
  {
    id: 14,
    name: "Tariq Nadeem",
    role: "student",
  },
  {
    id: 15,
    name: "Rashid Ahmed",
    role: "student",
  },
];

export { studentStream, teacherAssignments, classroomPeople };
