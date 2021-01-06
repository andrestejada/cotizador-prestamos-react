import React ,{Fragment , useState}  from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import Mensaje from './components/Mensaje'
import Resultado from './components/Resultado'



function App() {

  const [cantidad,guardarCantidad] = useState(0)
  const [plazo,guardarPlazo] = useState('')
  const [total,guardarTotal] = useState(0);

  let componente;
  if(total===0){
    componente=<Mensaje/>
  }else{
    componente=<Resultado
                total={total}
                cantidad={cantidad}
                plazo={plazo}
              />
  }

  return (
    <Fragment>

      <Header
        titulo='Cotizador de Prestamos'
      />

      <div className='container' >
        <Formulario
          cantidad={cantidad}
          guardarCantidad={guardarCantidad}
          plazo={plazo}
          guardarPlazo={guardarPlazo}
          guardarTotal={guardarTotal}
        />
        <div className='mensajes'> 
            {componente}
        </div>
      </div>

    </Fragment>
    
  );
}

export default App;
