import { useState } from 'react'
import { TodoList } from './components/Todo/TodoList'
import { Todo } from './models/todo'

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, content: 'Comprar pão', isEditing: false },
    { id: 2, content: 'Comprar leite', isEditing: false },
    { id: 3, content: 'Comprar ovos', isEditing: false },
  ])

  return (
    <>
      <div className="dark h-screen flex flex-col items-center bg-slate-700 p-4">
        <div className="max-w-3xl w-full ">
          <header className="bg-slate-800 text-white p-4">
            <h1 className="text-2xl font-bold">Aula CRUD SENAC</h1>
          </header>
          <main className="mt-4">
            <TodoList todos={todos} setTodos={setTodos} />
            <div className="flex  gap-2 mt-14">
              <a
                className="text-white underline"
                href="/aula-crud/assets/aula-crud.pdf"
                download
              >
                Aula Crud PDF
              </a>
              <a
                className="text-white underline"
                href="/aula-crud/assets/aula-crud.pptx"
                download
              >
                Aula Crud PPTX
              </a>
              <a
                className="text-white underline"
                href="/aula-crud/assets/plano-de-aula.pdf"
                download
              >
                Plano de Aula
              </a>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default App
