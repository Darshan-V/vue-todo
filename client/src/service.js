
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

export async function deleteTask(id, index) {
 
  return await fetch(`http://localhost:5000/${id}`, { method: 'DELETE' })

}



export async function clearDoneTasks() {
  for (let i = taskList.length - 1; i >= 0; --i) {
    if (taskList[i].done === true) {
      taskList.splice(i, 1);
    }
  }
  return await fetch(`${mainUrl}/deletedone`, { method: 'DELETE' })
}

export async function clearAll() {
  taskList.length = 0
  return await fetch(`http://localhost:5000`, { method: 'DELETE' })
}

export async function updateTodo(id, status) {
  return await fetch(`http://localhost:5000/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ status: `${status}` }),
    headers: { 'content-type': 'application/json' }
  })
}
