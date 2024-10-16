import SignInForm from "../components/signInForm copy/SignIn-from.component";
import SignUpForm from "../components/signUpForm/SignUp-from.component";

const Authentication = () => {
  return (
    <div className="animate__animated animate__backInLeft mt-20">
      {/* THE FORMS */}
      <div className="max-w-screen-xl flex flex-col sm:flex-row justify-center items-center m-auto">
        {/* The Sign-In form */}
        <SignInForm />

        <SignUpForm />
      </div>
    </div>
  );
};

export default Authentication;
