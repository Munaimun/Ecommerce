import SignInForm from "../components/signInForm copy/SignIn-from.component";
import SignUpForm from "../components/signUpForm/SignUp-from.component";

const Authentication = () => {
  return (
    <div className="animate__animated animate__backInLeft mt-8">
      {/* THE FORMS */}
      <div className="max-w-screen-xl sm:m-auto sm:flex sm:flex-wrap sm:justify-between">
        {/* The Sign-In form */}
        <SignInForm />

        <SignUpForm />
      </div>
    </div>
  );
};

export default Authentication;
