
 const firebaseConfig = {
  apiKey: "AIzaSyC_51XlVt6IUWoWkVasbagUhOX2n60fb_I",
  authDomain: "contact-form-aa960.firebaseapp.com",
  databaseURL: "https://contact-form-aa960-default-rtdb.firebaseio.com",
  projectId: "contact-form-aa960",
  storageBucket: "contact-form-aa960.appspot.com",
  messagingSenderId: "257049128869",
  appId: "1:257049128869:web:f3eebcea757cda8f75c24c",
  measurementId: "G-PS4GKD5XZ5"
};

firebase.initializeApp(firebaseConfig);
const contactFormDB= firebase.database().ref('contactForm');

document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getElementVal('name');
  var email = getElementVal('email');
  var phone = getElementVal('phone');
  var subject = getElementVal('subject');
  var text = getElementVal('text');
  
  console.log(name,email);
  // Save message
  saveMessage(name,email,phone,subject,text);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}


function saveMessage(name,email,phone,subject,text){
    var newContactForm = contactFormDB.push();
    newContactForm.set({
      name: name,
      email:email,
      phone:phone,
      subject:subject,
      text:text
    });
  }

const getElementVal = (id) => {
  return document.getElementById(id).value;
};