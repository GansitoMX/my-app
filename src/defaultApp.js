//import './App.css';
import './main.css'


const Li = ({ children }) => {
  return (
    <li className='clase-li'>{children}</li>
  )
}

const App = () => {
  const valor = 'feliz'
  return (
<ul className='clase-css'>
  <Li estado='triste'>Valor de Li</Li>
</ul>
  );
}
export default App;
