import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllBooksPage from "../AllBooksPage";
import SingleBookPage from "../SingleBookPage";


const App: React.FC = () => {
    
    return (
        <>
            <BrowserRouter basename={`/e_library/`}>
                <div>
                    <Routes>
                            <Route 
                                path="/"
                                element={<AllBooksPage />}
                            />
                            <Route 
                                path="/:id"
                                element={<SingleBookPage />}
                            />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
};

export default App;
