import { Button } from 'flowbite-react'
import { Todo } from '../../models/todo'
import { TodoItem } from './TodoItem'
import { useState } from 'react'

type TodoListProps = {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export function TodoList({ todos, setTodos }: TodoListProps) {
  const [countTodos, setCountTodos] = useState<number>(todos.length)

  const handleEditTodo = (id: number, newContent: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          content: newContent,
          isEditing: false,
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const handleDeleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const createTodo = () => {
    const newTodo: Todo = {
      id: countTodos + 1,
      content: 'Nova tarefa',
      isEditing: true,
    }
    setTodos([...todos, newTodo])
    setCountTodos((prevCountTodos) => prevCountTodos + 1)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-full rounded-lg flex items-center  pr-4 pl-4 text-white">
        <p className="w-1/12">Id</p>
        <div className="w-9/12">Conteúdo</div>
      </div>

      <ul className="flex flex-col gap-4 text-white">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onEdit={handleEditTodo}
            onDelete={handleDeleteTodo}
          />
        ))}
      </ul>
      <Button onClick={createTodo}>Adicionar</Button>
    </div>
  )
}
