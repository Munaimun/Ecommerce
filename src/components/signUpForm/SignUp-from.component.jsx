import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/Firebase.utils";
import FormInput from "../form-input/FormInput.component";
import Button from "../Button/Button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => setFormFields(defaultFormFields);

  //   Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Checking the password & confirm password is matched
    if (password !== confirmPassword) {
      toast.error("Password and confirm password don't match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      //   Creating the user with email& pass
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
      toast.success("Sign-up succesful");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("Email aleady exist");
      } else {
        console.error("Sign up error:", error);
        toast.error(error.message);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="w-2/4 mt-4">
      <p className="sm:text-4xl text-sky-300">Don&apos;t have an Account?</p>
      <p className="font-light sm:text-2xl mt-2">
        Sign-Up with your Email & Password
      </p>

      <form className="w-3/5 sm:w-4/5 m-auto text-left" onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button
          className="before:ease relative sm:h-12 sm:w-40 overflow-hidden border border-black shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180 mt-2"
          type="submit"
        >
          <span className="relative z-10">Sign Up</span>
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
