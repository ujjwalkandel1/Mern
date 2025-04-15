const students = [
    {
      "name": "Sita Gurung",
      "email": "sitagurung@example.com",
      "address": "KTM-12, Kathmandu, Nepal",
      "phone": "9812345678",
      "obtMarks": 339
    },
    {
      "name": "Ramesh Thapa",
      "email": "ramesthapa@example.com",
      "address": "Lalitpur-5, Lalitpur, Nepal",
      "phone": "987654321",
      "obtMarks": 299
    },
    {
      "name": "Puja Sharma",
      "email": "pujasharma@example.com",
      "address": "Bhaktapur-9, Bhaktapur, Nepal",
      "phone": "976543210",
      "obtMarks": 319
    },
    {
      "name": "Samir Rai",
      "email": "samirrai@example.com",
      "address": "KTM-3, Kathmandu, Nepal",
      "phone": "9801234567",
      "obtMarks": 300
    },
    {
      "name": "Nisha Khadka",
      "email": "nishakhadka@example.com",
      "address": "KTM-8, Kathmandu, Nepal",
      "phone": "9812345678",
      "obtMarks": 305
    },
    {
      "name": "Prakash Bhatta",
      "email": "prakashbhatta@example.com",
      "address": "KTM-15, Kathmandu, Nepal",
      "phone": "9781234567",
      "obtMarks": 323
    },
    {
      "name": "Sanjay Adhikari",
      "email": "sanjayadhikari@example.com",
      "address": "Lalitpur-10, Lalitpur, Nepal",
      "phone": "987654321",
      "obtMarks": 316
    },
    {
      "name": "Anita Magar",
      "email": "anitamagar@example.com",
      "address": "Bhaktapur-2, Bhaktapur, Nepal",
      "phone": "9875432150",
      "obtMarks": 310
    },
    {
      "name": "Ravi Koirala",
      "email": "ravikoirala@example.com",
      "address": "KTM-18, Kathmandu, Nepal",
      "phone": "9809876543",
      "obtMarks": 330
    },
    {
      "name": "Deepa Poudel", 
      "email": "deepapoudel@example.com", 
      "address": "KTM-23, Kathmandu, Nepal",
      "phone": "9812340987",
      "obtMarks": 290
    }
  ]

  // const size = students.length;

  // for (let i=0; i < size; i++){
  //   students[i].percent = students[i].obtMarks/5;

  for (let std of students){
    std.percent = std.obtMarks/5;
  console.log("Student Name: ", std.name)
  console.log("student Email: ", std.email)
  console.log("student Address: ", std.address)
  console.log("student Phone: ", std.phone)
  //percent
  console.log("Students Percents", obtMarks/5)
  // divi
  console.log("") // empty line
  }
  
 