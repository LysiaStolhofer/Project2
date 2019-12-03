//import { ConnectionError } from "sequelize/types";

// The API object contains methods for each kind of request we'll make
// const handleauth = async function(event) {
//   event.preventDefault();
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;
//   const res = await $.ajax({
//     headers: {
//       "Content-Type": "application/json"
//     },
//     type: "POST",
//     url: "/api/auth",
//     data: JSON.stringify({
//       email,
//       password
//     })
//   });
//   if (res === "ok") {
//     window.location.assign("/singleprofile");
//   } else {
//     window.location.assign("/singleprofile");
//   }
//   console.log(res);
// };

// $.get("/profile", async (req, res) => {
//   try {
//     res.render("profile");
//   } catch (error) {
//     res
//       .status(400)
//       .render("400", { error: { name: error.name, msg: error.message } });
//   }
// });
// app.get("/singleprofile", async (req, res) => {
//   try {
//     res.render("singleprofile");
//   } catch (error) {
//     res
//       .status(400)
//       .render("400", { error: { name: error.name, msg: error.message } });
//   }
// });

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
  window.location.href = "/profile";
  // db.primpnplay_db.
});

// Button on index.handlebars directed to existing profiles
$("#memberLogin").click(function() {
  window.location.href = "/profile";
});

// Button on index.handlebars directed to enroll
$("#newMember").click(function() {
  window.location.href = "/enroll";
});

// Enrollment form submit button
$("#submit")
  .click(function() {
    window.location.href = "/profile";
  })
  .then(function() {
    connection.sync({ force: true }).then(function() {
      Client.create({
        clientGender: $("clientGender").val(),
        petName: $("pet_name").val(),
        clientLastname: $("#client_last_name").val(),
        clientFirstname: $("#client_first_name").val(),
        email: $("email").val(),
        phoneNumber: $("#phone").val(),
        password: $("#password").val(),
        petGender: $("#petGender").val(),
        femalePet: $("#pet_female").val(),
        services: $("#services").val(),
        species: $("#species").val(),
        weight: $("#weight").val(),
        petImage: $("pet_image").val(),
        checkIndate: $("#checkin_date").val(),
        checkIntime: $("#checkin_time").val(),
        checkOutdate: $("#checkout_date").val(),
        checkOuttime: $("#checkout_time").val()
      });
    });
  });
