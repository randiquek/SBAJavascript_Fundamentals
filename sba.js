// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];
//   Checking if CourseID matches the Assignment group
  function validAssignmentGroup(CourseInfo, AssignmentGroup) {
    if (CourseInfo.id === AssignmentGroup.course_id) {
    return true }
    else {
        console.log("Error: Course info does not match.");
    }
  }
//   Check if assignment is overdue
  function overdueAssignment(dueDate, dateSubmit) {
    const dueDate = assignments.due_at;
    const dateSubmit = submission.submitted_at;

    if(dateSubmit > dueDate) {
        
    }
    // this where I'm at right now. i'm struggling a bit because it's difficult right now for me to take data and implement it into everything learned for Javascript. So far I've tried just organizing what the program will look like but honestly I'm just really struggling and trying my best. Just trying to make sense of the logic of it before I start coding.

  }

  function validSubmission(assignmentScore, submissionTotal) {
    let points = assignmentScore.submission.score;
    let possiblePoints = submissionTotal.possible_points;
    try {
        if (possiblePoints === 0 || isNaN(points) || points !== "a number") {
            throw new Error("Invalid input");
        }
    }
  }

  function calculateWeightedAverage() {
    // Calculate weighted average score
  }
  
  function getLearnerData(course, ag, submissions) {
    // Main function to process data and return formatted result
  }
  
  // Main Execution
  const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  console.log(result);
  



  