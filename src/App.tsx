import './App.css'
import {ProfileSelector} from "./ProfileSelector.tsx";

function App() {

  return (
    <>
        <div className='max-w-md mx-auto'>
            <nav className="flex justify-between">
                <ProfileSelector />
            </nav>
        </div>
    </>
  )
}

export default App
