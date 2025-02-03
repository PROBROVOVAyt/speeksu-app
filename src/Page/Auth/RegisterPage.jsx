import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <main className="h-full flex justify-center items-center">
      <div className="flex flex-wrap rounded-[16px] bg-slate-800 justify-center">
        <div className="w-[325px] flex flex-col m-[32px]">
          <h1 className="text-xl text-center font-bold text-slate-100">
            Создание учетной записи
          </h1>
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
              <p className="text-base font-semibold text-slate-400">E-Mail</p>
              <input
                className="w-full h-[48px] bg-slate-700 rounded-[8px]"
                type="email"
                id="email"
              />
            </div>
            <div className="grid gap-[8px] mt-[8px]">
              <p className="text-base font-semibold text-slate-400">Пароль</p>
              <input
                className="w-full h-[48px] bg-slate-700 rounded-[8px]"
                type="password"
                id="password"
              />
            </div>
            <div className="grid gap-[8px] mt-[8px]">
              <p className="text-base font-semibold text-slate-400">
                Повторите пароль
              </p>
              <input
                className="w-full h-[48px] bg-slate-700 rounded-[8px]"
                type="password"
                id="password2"
              />
            </div>
            <div className="grid gap-[8px] mt-[8px]">
              <p className="text-base font-semibold text-slate-400">
                Дата рождения
              </p>
              <input
                className="w-full h-[48px] bg-slate-700 rounded-[8px] px-2"
                type="date"
                id="age"
              />
            </div>
            <button
              className="bg-blue-600 h-[48px] rounded-[8px] hover:bg-blue-700 transition-all text-base font-semibold text-slate-100 mt-[8px]"
              type="submite"
            >
              Продолжить
            </button>
            <p className="text-[12px]">
              Нажав на кнопку “Продолжить”, вы подтверждаете что ознокомились и
              согласны с{" "}
              <a className="text-sky-500 hover:text-sky-600" href="">
                Условиями использования
              </a>{" "}
              и{" "}
              <a className="text-sky-500 hover:text-sky-600" href="">
                Политиеой конфедициальности
              </a>
              Speeksu
            </p>
            <Link
              className="text-sm font-semibold text-sky-500 hover:text-sky-600 transition-all mt-[8px]"
              to="/auth/login"
            >
              Уже есть аккаунт? Войти
            </Link>
          </form>
        </div>
      </div>
    </main>
  );
}

export default RegisterPage;
