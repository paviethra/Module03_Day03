// Create the questions
let questions = [
    {
      id: 1,
      question: "To display the color black, the defined parametes of the rgb value should be",
      answer: "(255, 255, 255)",
      options: [
        "(0, 0, 0)",
        "(99, 99, 99)",
        "(255, 255, 255)",
        "(1, 1, 1)"
      ]
    },
    { 
      id: 2,
      question:"HTML links are defined with <a>tag and the address is specified by the attribute",
      answer: "href",
      options: [
        "hlink",
        "href",
        "src",
        "src-link"
      ]
    },
    {
      id: 3,
      question: "Extra Linesin the output of the HTML code, Creates",
      answer: "No Changes",
      options: [
        "Changes",
        "Errors",
        "Template",
        "No Changes"
      ]
    },
    {
      id: 4,
      question: "When there is some sensitive data to be sent, never use the method",
      answer: "Get",
      options: [
        "Get",
        "Call",
        "Post",
        "Transparent"
      ]
    },
    {
      id: 5,
      question: "Array elements are accessed using their",
      answer: "Index",
      options: [
        "Length",
        "Pointers",
        "Object",
        "Index"
      ]
    },
    {
      id: 6,
      question: "A HTML element can be assigned a style through the attribute named",
      answer: "Style",
      options: [
        "Design",
        "Theme",
        "Style",
        "Template"
      ]
    },
    {
      id: 7,
      question: "The length of a URL is limited upto _____ characters.",
      answer: "3000",
      options: [
        "2000",
        "3000",
        "4000",
        "6000"
      ]
    },
    {
        id:8,
        question: "In HTML, the visited links are specified in color",
        answer: "Purple",
        options: [
            "Black",
            "White",
            "Red",
            "Purple"
            ]
    }

  ];
  
      let value = JSON.stringify(questions);
       localStorage.setItem("question", value);
      
  
  let question_count = 0;
  let points = 0;
  
  window.onload = function() {
    show(question_count);
  };
  
  function next() {
    // if the question is last then redirect to final page
    if (question_count == questions.length - 1) 
    {
      location.href = "end.html";
    }
    console.log(question_count);
  
    let user_answer = document.querySelector("li.option.active").innerHTML;
    // check the answer is right or wrong
    if (user_answer == questions[question_count].answer) {
      points += 1;
      sessionStorage.setItem("points", points);
    }
    else{
      points += 0;
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
    <h2>${questions[count].question}</h2>
     <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
  </ul> 
    `;
    toggleActive();
  }
  
  function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
      option[i].onclick = function() {
        for (let i = 0; i < option.length; i++) {
          if (option[i].classList.contains("active")) 
          {
            option[i].classList.remove("active");
          }
        }
        option[i].classList.add("active");
      };
    }
  }
  