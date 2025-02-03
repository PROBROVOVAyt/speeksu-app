import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <main className="h-full flex justify-center items-center">
      <div className="flex flex-wrap rounded-[16px] bg-slate-800 justify-center">
        <div className="w-[325px] flex flex-col m-[32px]">
          <h1 className="text-xl text-center font-bold text-slate-100">
            Авторизация
          </h1>
          <p className="text-base text-center font-semibold text-slate-300">
            Войдите в аккаунт
          </p>
          <form className="flex flex-col mt-[8px]">
            <div className="grid gap-[8px]">
              <p className="text-base font-semibold text-slate-400">
                Имя пользователя
              </p>
              <input
                className="w-full h-[48px] bg-slate-700 rounded-[8px]"
                type="text"
                id="username"
              />
            </div>
            <div className="grid gap-[8px] mt-[8px]">
              <p className="text-base font-semibold text-slate-400">Пароль</p>
              <input
                className="w-full h-[48px] bg-slate-700 rounded-[8px]"
                type="password"
                id="password"
              />
              <Link
                className="text-sm font-semibold text-sky-500 hover:text-sky-600 transition-all"
                to="/auth/register"
              >
                Забыли пароль?
              </Link>
            </div>
            <button
              className="bg-blue-600 h-[48px] rounded-[8px] hover:bg-blue-700 transition-all text-base font-semibold text-slate-100 mt-[8px]"
              type="submite"
            >
              Вход
            </button>
            <Link
              className="text-sm font-semibold text-sky-500 hover:text-sky-600 transition-all mt-[8px]"
              to="/auth/register"
            >
              Нет аккаунта? Зарегестрироваться
            </Link>
          </form>
        </div>
        {/*  */}
        <div className="w-[325px] flex flex-col m-[32px]">
          <div className="size-[192px] m-auto bg-slate-100 rounded-[8px]"></div>
          <h1 className="text-xl text-center font-bold text-slate-100">
            Войти с помошью QR-кода
          </h1>
          <p className="text-base text-center font-semibold text-slate-300">
            Отсканируйте код в мобильном приложение Speeksu, что бы сразу войти
            в систему
          </p>
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
