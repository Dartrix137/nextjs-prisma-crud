"use client"
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
function NewPage({ params }) {

  const router = useRouter()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  useEffect(() => {
    if (params.id) {
      fetch(`/api/task/${params.id}`).then(res => res.json()).then(data => {
        setTitle(data.title)
        setDescription(data.description)
      })
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (params.id) {
      const res = await fetch(`/api/task/${params.id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, description }),
        headers: {
          'Content-Type': 'application/JSON'
        }
      })
      const data = await res.json()
    } else {
      const res = await fetch('api/task', {
        method: 'POST',
        body: JSON.stringify({ title, description }),
        headers: {
          'Content-Type': 'application/JSON'
        }
      })
      const data = await res.json()
    }
    router.push("/")
    router.refresh()
  }

  const handleDelete = async (e) => {
    e.preventDefault()
    const res = await fetch(`/api/task/${params.id}`, {
      method: 'DELETE'
    })
    const data = await res.json()
    router.refresh()
    router.push("/")
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <form className="bg-slate-800 p-10 md:w-1/4 w-full"
        onSubmit={handleSubmit}>
        <label htmlFor="title"
          className="font-bold text-sm">Task title</label>
        <input type="text"
          id="title"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title} />
        <label htmlFor="description"
          className="font-bold text-sm">Description</label>
        <textarea rows="3"
          id="description"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="Describe your task"
          onChange={(e) => setDescription(e.target.value)}
          value={description}></textarea>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type='submit'>{params.id ? "Actualizar" : "Crear"}</button>
        {params.id && (
          <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4' type='button' onClick={handleDelete}>
            Delete
          </button>
        )}
      </form>
    </div>
  )
}

export default NewPage