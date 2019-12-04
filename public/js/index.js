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

// Button on index.handlebars directed to existing profiles
$("#memberLogin").click(function() {
  window.location.href = "/profile";
});

// Button on index.handlebars directed to enroll
$("#newMember").click(function() {
  window.location.href = "/enroll";
});

// Enrollment form submit button
$("#submit").click(function() {
  const profileObj = {
    clientGender: $("#clientGender").val(),
    petName: $("#pet_name").val(),
    clientLastname: $("#client_last_name").val(),
    clientFirstname: $("#client_first_name").val(),
    email: $("#email").val(),
    phoneNumber: $("#phone").val(),
    password: $("#password").val(),
    petGender: $("#petGender").val(),
    femalePet: $("#pet_female").val(),
    services: $("#services").val(),
    species: $("#species").val(),
    weight: $("#weight").val(),
    petImage: $("#pet_image").val(),
    checkIndate: $("#checkin_date").val(),
    checkIntime: $("#checkin_time").val(),
    checkOutdate: $("#checkout_date").val(),
    checkOuttime: $("#checkout_time").val(),
    grooming: $("#grooming").val(),
    playCare: $("#playCare").val(),
    boarding: $("#boarding").val()
  };
  return API.newProfile(profileObj).then(function() {
    window.location.href = "/profile";
  });
});
