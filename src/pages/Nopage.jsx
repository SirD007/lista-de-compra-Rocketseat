import { Link } from "react-router-dom"

export default function Nopage() {
    return(
        <div className="bg-slate-100 w-screen h-screen flex items-center justify-center px-52 max-md:px-20 max-sm:flex-col-reverse max-sm:px-10">
            <div className="flex flex-col w-1/2 max-sm:w-full max-sm:items-center">
                <span className="text-3xl font-bold text-purple-600 max-sm:text-center">Ops, página não encontrada</span>
                <span className="text-sm text-zinc-500 max-sm:text-center">Você deve ter se perdido ao navegar em nosso site, que tal voltar um passo?</span>
                <Link to="/"><button className="bg-purple-600 px-4 py-2 rounded-sm text-white hover:bg-purple-500 transition-all w-20 mt-4">Voltar</button></Link>
            </div>
            <div>
                <img src="./src/assets/404.png" alt="" />
            </div>
        </div>
    )
}