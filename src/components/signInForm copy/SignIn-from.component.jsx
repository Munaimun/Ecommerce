import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/Firebase.utils";
import FormInput from "../form-input/FormInput.component";
import Button from "../Button/Button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => setFormFields(defaultFormFields);

  const signInWithGoggle = async () => {
    const { user } = await signInWithGooglePopup();
    const createUserDocumentFromAuth = await createUserDocumentFromAuth(user);
  };

  //   Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signInAuthUserWithEmailAndPassword(email, password);
      console.log(res);
      resetFormFields();
      toast.success("Sign-In succesful");
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        toast.error("Invalid Password or Email");
      }
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="w-2/4 mt-4">
      <p className="sm:text-4xl text-yellow-300">Already have an Account!</p>
      <p className="font-light sm:text-2xl mt-2">
        Sign-In with your Email & Password
      </p>

      <form className="w-3/5 sm:w-4/5 m-auto text-left" onSubmit={handleSubmit}>
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

        <Button
          className="before:ease relative sm:h-12 sm:w-40 overflow-hidden border border-green-500 bg-green-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40 mt-2"
          type="submit"
        >
          <span className="relative z-10">Sign In</span>
        </Button>

        <p className="mt-3 mb-3 text-xl text-gray-400">OR !!</p>

        <Button
          className="relative flex sm:h-12 sm:w-40 items-center justify-center overflow-hidden text-black shadow-2xl transition-all border-2 border-orange-400 before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56"
          onClick={signInWithGoggle}
        >
          <span type="button" className="relative z-10">
            Sign In with Goggle
          </span>
        </Button>
      </form>
    </div>
  );
};

export default SignInForm;
