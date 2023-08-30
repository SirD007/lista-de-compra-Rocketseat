import { Link } from "react-router-dom"

export default function Welcome() {
    return (
        <div className="bg-slate-100 w-screen h-screen flex items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-3 max-w-[250px]">
                <img className="max-w-[150px]" src="../src/assets/welcomeimg.png" alt="Lista de compra" />
                <span className="font-bold text-sm text-zinc-500">Lista de Compra - Projeto Rocketseat</span>
                <Link className="w-full" to="/buylist"><button className="px-4 py-2 bg-purple-600 rounded text-white text-sm w-full">Continuar</button></Link>
                <span className="text-center text-xs text-zinc-400">Esse projeto foi feito por <a className="text-purple-500" href="https://github.com/sird007" target="blank_">David Morais</a> dentro do projeto da <a className="text-purple-500" href="https://github.com/sird007" target="blank_"> Rocketseat</a> #boracodar, seguindo meu atual conhecimento em React, e com auxilio de algumas ferramentas como Tailwindcss e HeadlessUI</span>
            </div>

        </div>
    )
}