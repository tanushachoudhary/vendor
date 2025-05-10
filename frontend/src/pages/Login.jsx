function Login() {
  return (
    <div className="bg-blue-200 min-h-screen flex flex-col items-center justify-center space-y-4">
      <div className="bg-white p-12 space-y-4 rounded-lg shadow-md w-96 flex flex-col items-center">
        <h2 className="font-semibold text-3xl">Login</h2>
        <a href="https://vendor-hyhx.onrender.com/auth/google">
          <div className="flex bg-gray-100 shadow-md w-56 items-center justify-center rounded-lg mt-8 ">
            <img
              src="https://imgs.search.brave.com/cMeR-TEzSzc3L_T_t4c0ZKSZu5B4BxkMPGrZ48urikE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvZ29vZ2xlLXMt/bG9nby8xNTAvR29v/Z2xlX0ljb25zLTA5/LTUxMi5wbmc"
              alt=""
              className="w-10"
            />
            <button className="text-xl">Login with Google</button>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Login;
