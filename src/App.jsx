import { useState } from 'react'
import { formatearDinero } from './helpers';
function App() {
 
  const [salario, setSalario ] = useState(1420000);
  const MIN = 1420000;
  const MAX = 12000000;
  const STEP = 1000;

  function handelChange(e){
    setSalario(Number(e.target.value))
  }

  return (
    <div>
      <div className="rounded-full md:w-24 md:h-24 bg-gray-400/70 absolute top-24 left-24"></div>
      <div className="rounded-full md:w-32 md:h-32 bg-fuchsia-800/40 absolute top-1 left-16"></div>
      <div className="rounded-full md:w-32 md:h-32 bg-fuchsia-800/40 absolute top-14 left-1"></div>
      <div className="rounded-full md:w-32 md:h-32 bg-fuchsia-800/40 absolute top-36 left-8"></div>


      <div className='top-3'>
        <h1 className="text-center my-10 font-bold text-3xl">AdminAssit</h1>
          <div className="bg-black/40 w-3/4 md:w-6/12 mx-auto p-7 rounded-2xl mt-5 text-white flex flex-col gap-7 ">
            <div>
              <p className='mb-1'>Salario</p>
              <input 
                type="range"
                className="w-full h-6 bg-fuchsia-50 accent-fuchsia-800 hover:accent-fuchsia-700"
                onChange={handelChange}
                min={MIN}
                max={MAX}
                step={STEP}
                value={salario}
                />
              <p className='text-xl md:text-3xl font-bold text-center'>{formatearDinero(salario)}</p>
            </div>
            <div>
              <p className='mb-2'>Tipo de contrato</p>
              <select className='w-full border border-fuchsia-700 focus:outline-none focus:ring focus:ring-fuchsia-700 rounded-lg py-1'>
                <option disabled>--Selecciona el contrato--</option>
                <option value="indefinido" className='text-black'>Termino Indefinido</option>
                <option value="fijo" className='text-black'>Termino fijo</option>
                <option value="servicios" className='text-black'>Termino servicios</option>
              </select>
            </div>
            <div>
              <button className='w-full bg-fuchsia-800 font-semibold hover:bg-fuchsia-700  rounded-lg p-1'>Consultar</button>
            </div>
            <div className='bg-gray-400/40 p-5 rounded-lg'>
              <h2 className='text-center text-2xl font-semibold mb-5'>Resumen</h2>
              <p className='mb-2 font-bold'>Tipo de contrato: </p>
              <p className='mb-2 font-bold'>Descuentos obligatorios: </p>
              <p className='mb-2 font-bold'>Neto: </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default App
