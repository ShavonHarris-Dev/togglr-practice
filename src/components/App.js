import Container from './Container'
// import useLocalStorage from 'use-local-storage'
import './index.css'


function App() {
  // const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  const switchTheme = () => {
    // const newTheme = theme === 'light' ? 'dark' : 'light';
    // setTheme(newTheme)
    console.log('hi')
  }
  return (
    <div className="app">
   <Container  onClick={ switchTheme}/>
   
    </div>
  );
}

export default App;
