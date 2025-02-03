import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <main className="">
      <h1 className="text-4xl font-bold text-center">Вход</h1>
      <div className="flex flex-col max-w-96 m-auto">
        <Link
          className="bg-slate-800 py-2 text-center font-medium my-2 rounded hover:scale-105 hover:bg-slate-700 transition-all"
          to="/auth/"
        >
          Назад
        </Link>
        <Link
          className="bg-slate-800 py-2 text-center font-medium my-2 rounded hover:scale-105 hover:bg-slate-700 transition-all"
          to="/auth/register"
        >
          Регистрация
        </Link>
      </div>
    </main>
  );
}

export default LoginPage;
