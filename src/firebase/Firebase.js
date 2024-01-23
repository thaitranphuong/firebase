import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

//Khi gửi quá nhiều lần sẽ bị block => tạo project firebase mới
function Firebase() {
  const config = {
    apiKey: "AIzaSyADaZjpmuXpQXCcxpdnvfeGCihBK6Hjek8",
    authDomain: "test1-4a913.firebaseapp.com",
    projectId: "test1-4a913",
    storageBucket: "test1-4a913.appspot.com",
    messagingSenderId: "1073623289245",
    appId: "1:1073623289245:web:d3489ca0162bbd256df374",
    measurementId: "G-G6EJPY3MBS",
  };

  firebase.initializeApp(config);

  const handleClick = () => {
    let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha");
    let number = "+84843215643";
    firebase
      .auth()
      .signInWithPhoneNumber(number, recaptcha)
      .then((e) => {
        let code = prompt("Enter the otp", "");
        e.confirm(code)
          .then((result) => {
            console.log(result.user, "user");
            console.log(result.user.phoneNumber + " OK");
            console.log(recaptcha);
          })
          .catch(() => {
            console.log("Invalid otp");
          });
      });
  };
  return (
    <div>
      <div id="recaptcha"></div>
      <button onClick={handleClick}>Click here!</button>
    </div>
  );
}

export default Firebase;
