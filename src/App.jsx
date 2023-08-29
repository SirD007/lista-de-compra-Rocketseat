import React, { useState, useEffect } from 'react';

import { AiOutlineApple, AiFillCloseCircle } from "react-icons/ai";
import { GiSlicedBread, GiTomato, GiCoffeeCup, GiHotMeal } from "react-icons/gi";

import { Switch } from '@headlessui/react'

export default function App() {

  function changeTheme() {
    document.documentElement.classList.toggle('dark')
  }
  
  const [enabled, setEnabled] = useState(false)

  const [newItem, setNewItem] = useState("")
  const [newQtd, setNewQtd] = useState("")
  const [newUn, setNewUn] = useState("")
  const [newCat, setNewCat] = useState("")
  const [itensArray, setItensArray] = useState([])
  const dataKey = 'itemsArray';

  useEffect(() => {
    function getArrayFromLocalStorage(key) {
      const storedData = localStorage.getItem(key);
      return storedData ? JSON.parse(storedData) : [];
    }

    const storedItems = getArrayFromLocalStorage(dataKey);
    setItensArray(storedItems);
  }, []);

  function addItem() {

    const addItemError = document.getElementById('addItemError')
    const addQuantError = document.getElementById('addQuantError')

    if (!newItem) {
      addItemError.innerText = 'Adicione a descrição';
      return;
    } else {
      addItemError.innerText = '';
    }

    if (!newQtd) {
      addQuantError.innerText = 'Adicione a quantidade';
      return;
    } else {
      addQuantError.innerText = '';
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      item: newItem,
      Qtd: newQtd,
      Unity: newUn,
      Category: newCat
    };

    function getArrayFromLocalStorage(key) {
      const storedData = localStorage.getItem(key);
      return storedData ? JSON.parse(storedData) : [];
    }

    function saveArrayToLocalStorage(key, array) {
      localStorage.setItem(key, JSON.stringify(array));
    }
    
    // Carrega a array do localStorage ou cria uma nova se não existir
    const existingItems = getArrayFromLocalStorage(dataKey);
    const updatedItems = [...existingItems, item];
    
    saveArrayToLocalStorage(dataKey, updatedItems);
    setItensArray(updatedItems)

    setNewQtd("");
    setNewItem("");
    addItemError.innerText = '';
    addQuantError.innerText = '';
  }
  
  const deleteItem = (id) => {
    const updatedArray = itensArray.filter(item => item.id !== id);
    setItensArray(updatedArray);
    function saveArrayToLocalStorage(key, array) {
      localStorage.setItem(key, JSON.stringify(array));
    }
    saveArrayToLocalStorage(dataKey, updatedArray);
  };

  return (
    <div className="bg-slate-100 dark:bg-slate-950 h-[100vh] flex flex-col items-center overflow-hidden relative">
      <span className="absolute bottom-2 text-xs text-zinc-400">Feito por <a className="text-purple-500" href="https://github.com/sird007">David Morais</a></span>

      <div className="max-w-[720px] w-full p-5 sm:p-10 flex flex-col gap-8 sm:mt-16 sm-16">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-gray-500 dark:text-gray-200 leading-normal tracking-wide">Lista de Compras</span>
          <div className="flex items-center text-xs gap-2 text-zinc-400">
            <span>darkmode</span>
            <Switch
            onClick={changeTheme}
            checked={enabled}
            onChange={setEnabled}
            className={`${
              enabled ? 'bg-purple-600' : 'bg-gray-300'
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className="sr-only">Change theme</span>
            <span
              className={`${
                enabled ? 'translate-x-6' : 'translate-x-1'
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
            </Switch> 
          </div>
       
        </div>

        <div className="flex">
          <div className="max-md:grid max-md:grid-cols-2 flex gap-3 items-end w-full">
            <div className="flex flex-col w-full relative max-md:col-span-2">
              <label className="text-zinc-400 text-xs mb-2" htmlFor="item">Item</label>
              <input className="dark:text-slate-200 dark:bg-gray-900 dark:border-gray-800 h-10 p-2 border border-slate-200 rounded-lg bg-slate-50 focus:outline-none focus:border-purple-400 text-zinc-600 text-sm" type="text" value={newItem} onChange={e => setNewItem(e.target.value)}/>
              <span id="addItemError" className="text-xs text-red-500 absolute top-16"></span>
            </div>
            <div className="flex flex-col w-full relative">
              <label className="text-zinc-400 text-xs mb-2" htmlFor="quant">Quantidade</label>
              <div className="flex w-fit">
                <input className="w-full dark:text-slate-200 dark:bg-gray-900 dark:border-gray-800 h-10 p-2 border border-slate-200 rounded-l-lg bg-slate-50 focus:outline-none focus:border-purple-400 text-zinc-600 text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" type="number" value={newQtd} onChange={e => setNewQtd(e.target.value)}/>
                <select className="dark:text-slate-200 dark:bg-gray-900 dark:border-gray-800 w-full min-w-fit h-10 p-2 border border-slate-200 rounded-r-lg bg-gray-100 focus:outline-none focus:border-purple-400 text-zinc-600 text-sm" name="unity" id="unity" onChange={e => setNewUn(e.target.value)}>
                  <option value="selecione">Selecione</option>
                  <option value="un">Unidades</option>
                  <option value="l">Litros</option>
                  <option value="kg">Quilos</option>
                </select>
              </div>
              <span id="addQuantError" className="text-xs text-red-500 absolute top-16"></span>

            </div>
            <div className="flex flex-col md:min-w-[168px]">
              <label className="text-zinc-400 text-xs mb-2" htmlFor="category">Categoria</label>
              <select className="dark:text-slate-200 dark:bg-gray-900 dark:border-gray-800 h-10 p-2 border border-slate-200 rounded-lg bg-slate-50 focus:outline-none focus:border-purple-400 text-zinc-600 text-sm w-full min-w-fit" name="category" id="category" value={newCat} onInput={e => setNewCat(e.target.value)}>
                <option value="selecione">Selecione</option>
                <option value="fruta">Fruta</option>
                <option value="padaria">Padaria</option>
                <option value="legume">Legume</option>
                <option value="bebida">Bebida</option>
                <option value="carne">Carne</option>
              </select>
            </div>
            <button onClick={addItem} className="text-xs text-white rounded-md justify-center items-center hover:bg-purple-500 bg-purple-600 transition py-2 px-4 h-10 col-span-2">Adicionar</button>
          </div>
        </div>

        <div className="flex flex-col gap-2 overflow-y-scroll h-[400px]">
          {itensArray.map(item => {
            return (

              <div key={item.id} className="dark:text-slate-200 dark:bg-gray-900 dark:border-gray-800 group w-full flex justify-between bg-slate-50 border border-slate-200 rounded-lg p-4 peer-checked:bg-red-500">
                <div className="flex items-center gap-4">
                    <input className="peer w-4 h-4 accent-purple-500 bg-slate-100 border-slate-200 rounded focus:ring-none dark:focus:ring-none focus:ring-none dark:bg-gray-700 dark:border-gray-600 checked:bg-purple-400" type="checkbox" name="itemCheck" id="itemCheck" />
                    <div className="flex flex-col">
                        <span className="text-sm text-slate-600 font-bold group-checked:text-red-500">{item.item}</span>
                        <span className="text-xs text-zinc-400">{item.Qtd}{item.Unity}</span>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                  {item.Category === 'fruta' &&                     
                    <div className="rounded-full bg-red-200 px-2 py-2 dark:opacity-90">
                        <div className="flex justify-center items-center">
                        <span className="text-red-500 text-xs flex items-center gap-1"><AiOutlineApple className="text-base"/>{item.Category}</span></div>
                    </div>
                  }
                  {item.Category === 'padaria' &&                     
                    <div className="rounded-full bg-yellow-200 px-2 py-2 dark:opacity-90">
                        <div className="flex justify-center items-center">
                        <span className="text-yellow-500 text-xs flex items-center gap-1"><GiSlicedBread className="text-base"/>{item.Category}</span></div>
                    </div>
                  }
                  {item.Category === 'legume' &&                     
                    <div className="rounded-full bg-green-200 px-2 py-2 dark:opacity-90">
                        <div className="flex justify-center items-center">
                        <span className="text-green-500 text-xs flex items-center gap-1"><GiTomato className="text-base"/>{item.Category}</span></div>
                    </div>
                  }
                  {item.Category === 'bebida' &&                     
                    <div className="rounded-full bg-blue-200 px-2 py-2 dark:opacity-90">
                        <div className="flex justify-center items-center">
                        <span className="text-blue-500 text-xs flex items-center gap-1"><GiCoffeeCup className="text-base"/>{item.Category}</span></div>
                    </div>
                  }
                  {item.Category === 'carne' &&                     
                    <div className="rounded-full bg-orange-200 px-2 py-2 dark:opacity-90">
                        <div className="flex justify-center items-center">
                        <span className="text-orange-500 text-xs flex items-center gap-1"><GiHotMeal className="text-base"/>{item.Category}</span></div>
                    </div>
                  }
                    <div>
                        <AiFillCloseCircle onClick={() => deleteItem(item.id)} className="cursor-pointer text-zinc-200 group-hover:text-red-400 transition-all"/>
                    </div>
                </div>
              </div>
              
            )
          })}
        </div>
      </div>

    </div>
  )
}

