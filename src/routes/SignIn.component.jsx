/* eslint-disable no-unused-vars */
import SignUpForm from "../components/signUpForm/SignUp-from.component";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../utils/firebase/Firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <>
      {/* PAGE HEADER */}
      <p className="font-semibold text-3xl sm:text-5xl text-sky-900 m-8">
        Sign-In Or Sign-Up
      </p>

      {/* THE FORMS */}
      <div className="max-w-screen-xl justify-center sm:m-auto flex flex-wrap sm:justify-between">
        {/* The Sign-In form */}
        <div className="bg-sky-300">
          <p>Sign In Page</p>
          <button onClick={logGoogleUser}>Sign-In with Google Popup</button>
        </div>

        <SignUpForm />
      </div>
    </>
  );
};

export default SignIn;
