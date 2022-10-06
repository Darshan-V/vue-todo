
// get tasks from localstorage



export async function getTasks() {

  let response = await fetch('http://localhost:5000/getAll')
  let data = await response.json()
  return data

}

export async function fetchTask(id) {
  return (await fetch(`http://localhost:5000/${id}`))
}

export async function addTask(item) {
  return await fetch('http://localhost:5000/', {
    method: 'POST',
    body: JSON.stringify(item),
    headers: {
      'content-type': 'application/json'
    }
  })
}

export async function deleteTask(id) {
 
  return await fetch(`http://localhost:5000/${id}`, { method: 'DELETE' })

}



export async function clearDoneTasks() {
  
  return await fetch(`http://localhost:5000/todo/done`, { method: 'DELETE' })
}

export async function clearAll() {
  return await fetch(`http://localhost:5000`, { method: 'DELETE' })
}

export async function updateStatus(id, status) {
  return await fetch(`http://localhost:5000/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ status: `${status}` }),
    headers: { 'content-type': 'application/json' }
  })
}
export async function updateTitle(id, title) {
  return await fetch(`http://localhost:5000/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ title: `${title}` }),
    headers: { 'content-type': 'application/json' }
  })
}

export async function updateNote(id, notes) {
  return await fetch(`http://localhost:5000/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ notes: `${notes}` }),
    headers: { 'content-type': 'application/json' }
  })
}
export async function updatePriority(id, priority) {
  return await fetch(`http://localhost:5000/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ priority: `${priority}` }),
    headers: { 'content-type': 'application/json' }
  })
}

export async function updateDuedate(id, duedate) {
  return await fetch(`http://localhost:5000/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ duedate: `${duedate}` }),
    headers: { 'content-type': 'application/json' }
  })
}
