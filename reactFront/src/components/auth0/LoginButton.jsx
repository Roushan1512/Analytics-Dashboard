import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      onClick={() => loginWithRedirect()}
      className="h-fit w-fit bg-white text-black border-2 border-neutral-500 hover:border-2 hover:border-black font-bold py-2 px-4 rounded-full transition-colors"
    >
      Log In
    </button>
  );
};

export default LoginButton;
