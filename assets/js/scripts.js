document.getElementById("contact-form").addEventListener("submit", submitForm);
let way, name, from, to, date, time, number, secname, secfrom, secpackage, secnumber, body, amt;
function submitForm(e) {
  e.preventDefault();
  function radioValue() {
    var ele = document.querySelectorAll(".form-check-input");

    for (i = 0; i < ele.length; i++) {
      if (ele[i].checked) {
        var selectedWay = ele[i].value;
        return selectedWay;
      }
    }
  }

  way = radioValue();
  name = document.getElementById("name").value;
  from = document.getElementById("from").value;
  to = document.getElementById("to").value;
  date = document.getElementById("date").value;
  time = document.getElementById("time").value;
  number = document.getElementById("phno").value;
  $('#selectCarModal').modal('show');
  body = `Name : ${name} <br/> Phone Number : ${number} <br/>  From : ${from}  <br/>  To : ${to} <br/>  Date : ${date} <br/>  Way : ${way} <br/>  Time : ${time} `;
}


const carSelectHandle = car => {
  body += `<br/>  Car : ${car} `;
  $('#selectCarModal').modal('hide');
  if (way === "One-Way Drop") {
    if (car === 'Picco Mini') {
      if (kms < 130) {
        amt = (130 * 16) + 300;
      }
      if (kms >= 130) {
        amt = (kms * 16) + 300
      }
    }
    if (car === 'Picco Sedan') {
      if (kms < 130) {
        amt = (130 * 18) + 300;
      }
      if (kms >= 130) {
        amt = (kms * 18) + 300
      }
    }
    if (car === 'Picco SUV') {
      if (kms < 130) {
        amt = (130 * 23) + 300;
      }
      if (kms >= 130) {
        amt = (kms * 23) + 300
      }
    }
  } else {
    if (car === 'Picco Mini') {
      if (kms < 130) {
        amt = (130 * 16) + 300;
      }
      if (kms >= 130) {
        amt = (kms * 16) + 300
      }
    }
    if (car === 'Picco Sedan') {
      if (kms < 130) {
        amt = (130 * 18) + 300;
      }
      if (kms >= 130) {
        amt = (kms * 18) + 300
      }
    }
    if (car === 'Picco SUV') {
      if (kms < 130) {
        amt = (130 * 23) + 300;
      }
      if (kms >= 130) {
        amt = (kms * 23) + 300
      }
    }
  }
  body += `<br/>  Amount : ${amt} `;
  console.table([{kms, amt, car, }])
  alert(amt)
  // sendEmail();
}

function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "pradeepmsblogspot@gmail.com",
    Password: "ibxdnieqkadegcua",
    From: "pradeepmsblogspot@gmail.com",
    To: "piccocabs@gmail.com",
    Subject: `${name} Sent you a message`,
    Body: body || `Name : ${name} <br/> Phone Number : ${number} <br/>  From : ${from}  <br/>  To : ${to} <br/>  Date : ${date} <br/>  Way : ${way} `,
  }).then(() => $('#exampleModalCenter').modal('show'));
}

document
  .getElementById("contact-form2")
  .addEventListener("submit", submitForm2);

function submitForm2(e) {
  e.preventDefault();
  name = document.getElementById("secname").value;
  secfrom = document.getElementById("secfrom").value;
  secpackage = document.getElementById("secpackage").value;
  secnumber = document.getElementById("secphno").value;
  body = `Name : ${name} <br/>  From : ${secfrom}  <br/>Phone Number : ${secnumber} <br/>  Package : ${secpackage} `;
  $('#selectCarModal').modal('show');
}

function sendEmail2() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "pradeepmsblogspot@gmail.com",
    Password: "ibxdnieqkadegcua",
    From: "pradeepmsblogspot@gmail.com",
    To: "piccocabs@gmail.com",
    Subject: `${secname} Sent you a message`,
    Body: body || `Name : ${secname} <br/>  From : ${secfrom}  <br/>Phone Number : ${secnumber} <br/>  Package : ${secpackage} `,
  }).then(() => $('#exampleModalCenter').modal('show'));
}
