$(function() {
  // const validation = function() {
  const validateForm = function() {
    let isValid = true;

    $("input").each(function() {
      if (!$(this).val()) {
        isValid = false;
      }
    });

    $(".custom-select").each(function(i, element) {
      if (!$(this).val()) {
        isValid = false;
      }
    });

    return isValid;
  };

  const displayModal = function(data) {
    console.log("modal");
    $("#match-name").text(data.name);
    $("#match-img").attr("src", data.photo);

    $("#results-modal").modal("toggle");
  };

  const answers = [];

  // const e = document.getElementById("select");
  // const strUser = e.options[e.selectedIndex].value;

  const results = function() {
    answers.push(document.getElementById("strUser").value);
    employeeSelection.push(`${newEmployee}`);
  };

  const submit = function(event) {
    event.preventDefault();
    console.log("submit");
    if (validateForm()) {
      console.log("valid");
      const strUser = {
        name: $("#name").val(),
        photo: $("#link").val(),
        scores: [
          $("#question1").val(),
          $("#question2").val(),
          $("#question3").val(),
          $("#question4").val(),
          $("#question5").val(),
          $("#question6").val(),
          $("#question7").val(),
          $("#question8").val(),
          $("#question9").val(),
          $("#question10").val()
        ]
      };
      $.post("/api/employees", strUser, displayModal);
    } else {
      $("#error").text("All fields are required");
      console.log("error");
    }
    // $("#submit").on("click", submit);
  };

  // $("#myModal").on("shown.bs.modal", function() {
  //   $("#myInput").trigger("focus");
  // });

  // const employeeSelection = function(selection, submit) {};

  // const employeeEquation = function() {
  //   const reducer = (accumulator, currentValue) => accumulator + currentValue;

  //   const sum = function(strUser) {
  //     let scores = strUser.scores;
  //     let reducedScores = scores.map(Number);
  //     let userSum = reducedScores.reduce(reducer);
  //     return userSum;

  //     // let userSum = sum(strUser);
  //     let lowestDifference = 100;
  //     let employeeRank = 100;
  //     let employeeSelection;
  //     let employeeSum = 0;

  //     for (let i = 0; i < employeeList.length; i++) {
  //       employeeSum = employeesList[i].scores.reduce(reducer);
  //       employeeRank = Math.abs(parseInt(userSum) - parseInt(employeeSum));

  //       if (employeeRank <= lowestDifference) {
  //         lowestDifference = employeeRank;
  //         employeeSelection = i;
  //       }
  //     }
  //     const selection = {
  //       name: employeesList[employeeSelection].name,
  //       photo: employeesList[employeeSelection].link,
  //       rank: employeeRank
  //     };
  //   };
  // };

  $("#submit").on("click", submit);
});
