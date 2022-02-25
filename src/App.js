import { Routes, Route } from 'react-router-dom'
import { Home, MultipleInputPage } from './pages'

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="multiple-input" element={<MultipleInputPage />} />
            </Routes>
        </div>
    )
}

export default App
