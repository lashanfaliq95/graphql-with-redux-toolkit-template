import "./App.css"
import { useGetBooksQuery } from "./services/books"

function App() {
  const { data, isLoading } = useGetBooksQuery("")
  return <div className="App">{data} </div>
}

export default App
