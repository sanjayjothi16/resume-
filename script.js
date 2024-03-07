const resumeData = {
    name: "Sanjay J",
    contact: {
      email: "sanjayjothi16@gmail.com",
      phone: "7993505960",
      address: "Chittoor, India"
    },
    profile: {
      summary: "A passionate Fresher looking for an opportunity to enhance and explore my knowledge and skills, eager to get into a work environment to put my communicational and technical skills to good use for me and the firm's success, always looking forward to facing a challenging situation for me to be a better version of myself."
    },
    education: [
      {
        degree: "Inter",
        school: "Sri Chaitanya Jr College",
        location: "Chittoor, India",
        year: "2016 to 2018",
        percentage: "60%"
      },
      {
        degree: "SSC",
        school: "Camford English High School",
        location: "Chittoor, India",
        year: "2015 to 2016",
        percentage: "77%"
      },
      {
        degree: "B.Tech",
        school: "SITAMS",
        location: "Chittoor, India",
        year: "2018 to 2022",
        percentage: "65%"
      }
    ],
    languages: ["Tamil", "Telugu", "Kannada", "English", "Hindi"],
    skills: [
      "Effective communication",
      "Time Management",
      "Leadership Skills",
      "Quick Learning",
      "Stress Handling"
    ],
    certificates: [
      "MS Office",
      "C Program",
      "HTML",
      "Python",
      "JavaScript",
      "Digital Marketing"
    ],
    projects: [
      {
        title: "Designing of Residential Buildings",
        description: "For fieldwork, acted as the project leader for a team of 5."
      }
    ],
    declaration: "I hereby solemnly declare that the above-furnished details are absolute and true to the best of my knowledge and belief."
  };
  
  console.log(resumeData);
  // for loop 

  for (let i = 0; i < resumeData.education.length; i++) {
    const educationItem = resumeData.education[i];
    console.log(`Education ${i + 1}:`);
    for (const key in educationItem) {
      if (educationItem.hasOwnProperty(key)) {
        console.log(`  ${key}:`, educationItem[key]);
      }
    }
  }
  // for in loop
  for (const key in resumeData) {
    if (resumeData.hasOwnProperty(key)) {
      console.log(`${key}:`);
    }
  };
// for of loop 
for (const educationItem of resumeData.education) {
    console.log("Education:");
    for (const key in educationItem) {
      if (educationItem.hasOwnProperty(key)) {
        console.log(`  ${key}: ${educationItem[key]}`);
      }
    }
  };
  //for each loop 
  resumeData.education.forEach((educationItem, index) => {
    console.log(`Education ${index + 1}:`);
    for (const key in educationItem) {
      if (educationItem.hasOwnProperty(key)) {
        console.log(`  ${key}: ${educationItem[key]}`);
      }
    }
  });