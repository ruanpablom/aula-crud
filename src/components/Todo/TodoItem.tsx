import { MdDelete, MdModeEdit, MdSave } from 'react-icons/md'
import { Todo } from '../../models/todo'
import { useState } from 'react'
import { TextInput } from 'flowbite-react'

type TodoItemProps = {
  todo: Todo
  onEdit: (id: number, newContent: string) => void
  onDelete: (id: number) => void
}

export function TodoItem({ todo, onEdit, onDelete }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState<boolean>(todo.isEditing)
  const [todoContent, setTodoContent] = useState<string>(todo.content)

  const onSave = () => {
    onEdit(todo.id, todoContent)
    setIsEditing(false)
  }

  return (
    <li
      className="w-full rounded-lg flex items-center bg-slate-500 p-4"
      key={todo.id}
    >
      <p className="w-1/12">{todo.id}</p>
      <div className="w-7/12 md:w-9/12">
        {isEditing ? (
          <TextInput
            className="w-full"
            value={todoContent}
            onChange={(event) => setTodoContent(event.target.value)}
          />
        ) : (
          <p className="w-full">{todo.content}</p>
        )}
      </div>

      <div className="w-4/12 md:w-2/12 flex justify-end gap-4">
        {isEditing ? (
          <button className="rounded bg-emerald-400 p-2" onClick={onSave}>
            <MdSave />
          </button>
        ) : (
          <button
            className="rounded bg-emerald-400 p-2"
            onClick={() => setIsEditing(true)}
          >
            <MdModeEdit />
          </button>
        )}

        <button
          className="rounded bg-red-400 p-2"
          onClick={() => onDelete(todo.id)}
        >
          <MdDelete />
        </button>
      </div>
    </li>
  )
}
