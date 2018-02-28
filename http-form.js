// jQuery
$(document).ready(function () {

  let errorFirst = false;
  let errorLast = false;
  let errorDate = false;
  let errorEmail = false;
  let errorPhone = false;
  let nonNumber = false;

  $('#contactForm').submit(() => { // SUBMIT button
    errorFirst = false;
    errorLast = false;
    errorDate = false;
    errorEmail = false;
    errorPhone = false;
    nonNumber = false;

    check_firstname(); //fire the function when clicking submit button, the error message shows
    check_lastname(); //fire the function
    check_date(); //fire the function
    check_email(); //fire the function
    check_phone(); //fire the function

    // if(errorFirst == true || errorLast == true || errorDate == true ||   //why this statement is not working?
    //    errorEmail == true || errorPhone == true || nonNumber == true){
    //     event.preventDefault();
    // }
    if (errorFirst == false && errorLast == false && errorDate == false &&
      errorEmail == false && errorPhone == false && nonNumber == false) {
      return true;
    } else {
      return false; // return variable to false so that form will be submitted.
    }
  });

  $('#clearForm').click(() => { // CLEAR button
    $('input').val('');
    event.preventDefault();
  });

  $('#errorFirst').hide();
  $('#errorLast').hide();
  $('#errorDate').hide();
  $('#errorEmail').hide();
  $('#errorPhone').hide();
  $('#nonNumber').hide();

  $('#firstname').focusout(() => {
    check_firstname(); //call(fire) the function
  })
  $('#lastname').focusout(() => {
    check_lastname(); //call the function
  })
  $('#date').focusout(() => {
    check_date(); //call the function
  })
  $('#email').focusout(() => {
    check_email(); //call the function
  })
  $('#phone').focusout(() => {
    check_phone(); //call the function
  })

  function check_firstname() {
    if ($('#firstname').val().length < 1 || $('#firstname').val().length > 20) {
      $('#errorFirst').html('Invalid first name');
      $('#errorFirst').show();
      errorFirst = true;
    } else {
      $('#errorFirst').hide();
    }
  }
  function check_lastname() {
    if ($('#lastname').val().length < 1 || $('#lastname').val().length > 20) {
      $('#errorLast').html('Invalid last name');
      $('#errorLast').show();
      errorLast = true;
    } else {
      $('#errorLast').hide();
    }
  }
  function check_date() {
    if ($('#date').val().length < 1 || $('#date').val().length > 20) {
      $('#errorDate').html('Pick a date, please');
      $('#errorDate').show();
      errorDate = true;
    } else {
      $('#errorDate').hide();
    }
  }
  function check_email() {
    if ($('#email').val().length < 1 || $('#email').val().length > 40) {
      $('#errorEmail').html('Invalid email');
      $('#errorEmail').show();
      errorEmail = true;
    } else {
      $('#errorEmail').hide();
    }
  }
  function check_phone() {
    if ($('#phone').val().length < 1 || $('#phone').val().length > 15) {
      $('#errorPhone').html('Phone must between 1 - 15 numbers');
      $('#errorPhone').show();
      errorPhone = true;
    } else {
      $('#errorPhone').hide();
    }
    if (isNaN($('#phone').val())) {
      $('#nonNumber').html('Please enter numbers');
      $('#nonNumber').show();
      nonNumber = true;
    } else {
      $('#nonNumber').hide();
    }
  }
}) //jQuery ends