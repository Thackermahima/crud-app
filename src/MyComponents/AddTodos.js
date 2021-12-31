import React, { useState } from 'react'

export const AddTodos = ({ addTodo }) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        } else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }

    }
    return (
        <div className="container my-3">
            <h1 className = "text-center"> Todo Application</h1>
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" class="form-label">Todo Title</label>
                    <input type="text" class="form-control" value={title} onChange={(e) => { setTitle(e.target.value) }} id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" class="form-label">Todo Desc</label>
                    <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="text" />
                </div>

                <button type="submit" class="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}
