
let questions = [
    {
      id: 1,
      question: "Pakistan is located in Asia and borders the country of India. What is the capital city of Pakistan?",
      answer: "Islamabad",
      options: [
        "Karachi",
        "Islamabad",
        "Lahore",
        "Indus River Plain"
      ]
    },
    {
      id: 2,
      question: "What river valley was home to an ancient civilization in what is now known as the country of Pakistan?",
      answer: "Indus",
      options: [
        "Nile",
        "Ganges",
        "Indus",
        "Khyber Pass"
      ]
    },
    {
      id: 3,
      question: "Religion is an important part of life in Pakistan. What religion do most citizens of Pakistan practice?",
      answer: "Islam",
      options: [
        "Hinduism",
        "Islam",
        "Judaism",
        "Buddhism"
      ]
    }
    ,
    {
      id: 4,
      question: "Pakistan is located in the",
      answer: "South Asia",
      options: [
        "East Asia",
        "West Asia",
        "South Asia",
        "Central Asia"
      ]
    }

    ,

    {
      id: 5,
      question: "Pakistan has a 1046 kilometer coastline in Sindh and Baluchistan. The coastline is located along the",
      answer: "Gulf Sea",
      options: [
        "Arabian Sea",
        "Gwadar Coast",
        "Iranian Sea",
        "Gulf Sea"
      ]
    }
    ,

    {
      id: 6,
      question: "Which from the following countries is not bordered by Pakistan?",
      answer: "Bangladesh",
      options: [
        "India",
        "Afghanistan",
        "China",
        "Bangladesh"
      ]
    }

    ,

    {
      id: 7,
      question: " K2 the second highest mountain in the world is located along the border of Pakistan and",
      answer: "China",
      options: [
        "India",
        "Afghanistan",
        "China",
        "Iran"
      ]
    }

    ,


    {
      id: 8,
      question: "The National Flag of Pakistan was designed by",
      answer: "Amiruddin Kidwai",
      options: [
        "Malika Pukhraj",
        "Ahmed Ghulamali Chagla",
        "Amiruddin Kidwai",
        "Hafeez Jullundhri"
      ]
    }

    ,

    {
      id: 9,
      question: " Which one of these is also known as the Father of the Nation?",
      answer: "Muhammad Ali Jinnah",
      options: [
        "Muhammad Ali Jinnah",
        "Maulana Shaukat Ali",
        "Mohammad Ali Jouhar",
        "Muhammad Iqbal"
      ]
    }

    ,  {
      id: 10,
      question: "The Pakistan Movement was led by which political Party?",
      answer: "All-India Muslim League",
      options: [
        "Pakistan Muslim League",
        "Pakistan Peoples Party",
        "All-India People's Party",
        "All-India Muslim League"
      ]
    }


  ];
  
  let question_count = 0;
  let points = 0;
  
  window.onload = function() {
    show(question_count);
  
  };
  
  function next() {
  
     
    // if the question is last then redirect to final page
    if (question_count == questions.length - 1) {
      sessionStorage.setItem("time", time);
      clearInterval(mytime);
      location.href = "points.html";
    }
    // console.log(question_count);
  
    let user_answer = document.querySelector("li.option.active").innerHTML;
    // check if the answer is right or wrong
    if (user_answer == questions[question_count].answer) {
        console.log("Right Answer")
      points += 10;
      sessionStorage.setItem("points", points);
    }
    console.log(points);
  
    question_count++;
    show(question_count);
  }
  
  function show(count) {
    let question = document.getElementById("questions");
    let [first, second, third, fourth] = questions[count].options;
  
    question.innerHTML = `
    <h2>Q${count + 1}. ${questions[count].question}</h2>
     <ul class="list-group list-group-flush main-ul">
    <li class="list-group-item option">${first}</li>
    <li class="list-group-item option">${second}</li>
    <li class="list-group-item option">${third}</li>
    <li class="list-group-item option">${fourth}</li>
  </ul> 
    `;
    toggleActive();
  }
  
  function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
      option[i].onclick = function() {
        for (let i = 0; i < option.length; i++) {
          if (option[i].classList.contains("active")) {
            option[i].classList.remove("active");
          }
        }
        option[i].classList.add("active");
      };
    }
  }
  