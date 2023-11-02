import './App.css'
import { useDispatch, useSelector } from 'react-redux'

type UseSelectorType = {
  email: string,
}

function App() {
  const email = useSelector((state: UseSelectorType) => state.email);
  const dispatch = useDispatch();
  console.log(email);
  console.log(dispatch);
  
  

  return (
    <>
      <h1>Hello World</h1>
    </>
  )
}

export default App
