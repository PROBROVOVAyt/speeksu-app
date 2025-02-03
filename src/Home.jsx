import { Link } from "react-router-dom";

function App() {
  return (
    <main className="">
      <h1 className="text-3xl font-bold text-center">
        Добро пожаловать в Speeksu
      </h1>
      <p>Speeksu - это месенджер, созданной командой CubeCail.</p>
      <div className="flex flex-col max-w-96 m-auto">
        <Link
          className="bg-slate-800 py-2 text-center font-medium my-2 rounded hover:scale-105 hover:bg-slate-700 transition-all"
          to="/auth/"
        >
          Auth
        </Link>
      </div>
    </main>
  );
}

export default App;
