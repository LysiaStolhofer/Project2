// // Get references to page elements
// var $newMember = $("#submitForm");
// var $memberLogin = $("#memberLogin");
// var $allProfiles = $("#submit");
// var $singleProfile = $("#example-list");
// var $bill = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  newProfile: function(profile) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "/api/profile",
      data: JSON.stringify(profile)
    });
  },
  getAllProfiles: function() {
    return $.ajax({
      url: "/api/profile",
      type: "GET"
    });
  },
  getOneProfile: function() {
    return $.ajax({
      url: "/api/profile/:id",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "/api/profile/" + id,
      type: "DELETE"
    });
  }
};

// Buttons

// Enrollment form submit button
$("#submit").click(function() {
  window.location.href = "/profiles";
  // db.primpnplay_db.
});

// Button on index.handlebars directed to existing profiles
$("#memberLogin").click(function() {
  window.location.href = "/profiles";
});

// Button on index.handlebars directed to enroll
$("#newMember").click(function() {
  window.location.href = "/enroll";
});

function loadProfiles() {
  window.location.href = "/api/profiles";
}

// // Submit New Enrollment
// var $submit = $("#submit");
// // var $memberLogin = $("#memberLogin");
// var $firstName = $("#first_name");
// var $lastName = $("#last_name");
// var $petName = $("#pet_name");
// var $gender = $("#gender");
// var $email = $("#email");
// var $phone = $("#phonenumber");
// var $checkIndate = $("#checkin_date");
// var $checkIntime = $("#checkin_time");
// var $checkOutdate = $("#checkout_date");
// var $checkOuttime = $("#checkout_time");
// var $services = $("#service");

// $submit
//   .on("click", function() {
//     var newMembers = {
//       firstName: $firstName.val(),
//       lastName: $lastName.val(),
//       petName: $petName.val(),
//       gender: $gender.val(),
//       email: $email.val(),
//       phone: $phone.val(),
//       checkIndate: $checkIndate.val(),
//       checkIntime: $checkIntime.val(),
//       checkOutdate: $checkOutdate.val(),
//       checkOuttime: $checkOuttime.val(),
//       services: $services.val()
//     };

//     $.ajax({
//       type: "POST",
//       url: "api/profile/:id",
//       data: newMembers
//     });
//   })
//   .then(function() {
//     loadProfiles();
//   });

// refreshExamples gets new examples from the db and repopulates the list
// var refreshExamples = function () {
//   API.getExamples().then(function (data) {
//     var $examples = data.map(function (example) {
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $exampleList.empty();
//     $exampleList.append($examples);
//   });

// // handleFormSubmit is called whenever we submit a new example
// // Save the new example to the db and refresh the list
// var handleFormSubmit = function (event) {
//   event.preventDefault();

//   var example = {
//     text: $exampleText.val().trim(),
//     description: $exampleDescription.val().trim()
//   };

//   if (!(example.text && example.description)) {
//     alert("You must enter an example text and description!");
//     return;
//   }

//   API.saveExample(example).then(function () {
//     refreshExamples();
//   });

//   $exampleText.val("");
//   $exampleDescription.val("");
// };


const handleauth = async function(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const res = await $.ajax({
    headers: {
      "Content-Type": "application/json"
    },
    type: "POST",
    url: "/api/auth",
    data: JSON.stringify({
      email,
      password
    })
  });
  if (res === "ok") {
    window.location.assign("/singleprofile");
  } else {
    window.location.assign("/singleprofile");
  }
  console.log(res);
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list

var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons

 $submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);


$submit.on("click", loadProfiles);


