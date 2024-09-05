//MongoDB Task


//1)Find all the topics and tasks which are thought in the month of October

db.Topics.find(
    { 
        date: {
            $gte: "2020-10-01T00:00:00Z", 
            $lt: "2020-11-01T00:00:00Z" 
        } 
    }, 
    { _id: 0 }
)

db.Tasks.find(
    { 
        date: { 
            $gte: "2020-10-01T00:00:00Z", 
            $lt: "2020-11-01T00:00:00Z" 
        } 
    }, 
    { _id: 0 }
)

//2) Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020

db.Company_Drive.find(
    { date: { 
        $gte: "2020-10-15T00:00:00Z", $lt: "2020-10-31T00:00:00Z" 
        } 
    }, 
    { _id: 0 }
)

//3)Find all the company drives and students who are appeared for the placement

db.Company_Drive.aggregate([
    { 
        $lookup: { 
            from: "Users", 
            localField: "students_appeared", 
            foreignField: "_id", as: "Students" 
            } 
        }, 
        { $project: 
            { company_name: 1, 
                date: 1, "Students.name": 1 
            } 
        }
    ])

//4) Find the number of problems solved by the user in codekata

db.CodeKata.find({},{_id:0});

//5) Find all the mentors with who has the mentee's count more than 15

db.Mentors.find({"mentees.15":{$exists:true}})

//6) Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020

db.Attendance.find({
    date:{
        $gte:"2020-10-15T00:00:00Z",
        $lt:"2020-11-01T00:00:00Z"
        },
    status:"absent"
})
