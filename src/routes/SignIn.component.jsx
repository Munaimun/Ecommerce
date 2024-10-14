import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../utils/firebase/Firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = createUserDocumentFromAuth(user);
  };

  return (
    <>
      <p>Hello from signin</p>
      <button onClick={logGoogleUser}>sign in with google</button>
    </>
  );
};

export default SignIn;
