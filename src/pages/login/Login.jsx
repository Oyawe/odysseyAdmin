import { useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // console.log(user);
        dispatch({ type: "LOGIN", payload: user });
        navigate("/");
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        setError(true);
      });
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-tr from-blue-300 to-blue-500 login">
      <form
        onSubmit={handleLogin}
        className="flex flex-col items-center py-10 bg-white border-2 rounded-lg shadow-md px-7 sm:p-20 shadow-gray-500"
      >
        <h3 className="mt-3 mb-5 text-xl font-bold text-transparent sm:mb-8 sm:text-2xl bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text">
          Welcome to Odyssey Admin
        </h3>
        <input
          type="email"
          placeholder="email"
          className="h-8 p-2 m-4 border-b-2 outline-none w-60 sm:w-[360px]"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          className="h-8 p-2 m-4 border-b-2 outline-none w-60 sm:w-[360px]"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="h-8 mt-10 font-semibold text-white bg-blue-600 border-none cursor-pointer w-52"
        >
          Login
        </button>
        {error && (
          <span className="mt-3 text-red-500">Wrong email or password!</span>
        )}
      </form>
    </div>
  );
};

export default Login;
