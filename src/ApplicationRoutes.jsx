/*npm i nanoid
npm i phosphor-react
npm i react-icons
*/
//export default ApplicationRoutes

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Menu from './componentes/Menu/Menu'
import Rodape from './componentes/Rodape/Rodape'
import Inicio from './pages/Inicio/Inicio'
import Sobre from './pages/Sobre/Sobre'
import Comentarios from './pages/Comentarios/Comentarios'
import Contatos from './pages/Contatos/Contatos'
import Loja from './pages/Loja/Loja'


function ApplicationRoutes() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<Inicio />}/>
        <Route path="/loja" element={<Loja />}/>
        <Route path="/sobre" element={<Sobre/>} />
        <Route path="/comentarios" element={<Comentarios/>}/>
        <Route path="/contatos" element={<Contatos/>}/>
      </Routes>
      <Rodape/>
    </BrowserRouter>
  )
}

export default ApplicationRoutes