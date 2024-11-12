const saveButton = document.getElementById('save')
const deleteButton = document.getElementById('delete')
const input = document.getElementsByTagName('input')[0]
const key = 'registration-memory'
const dataSaved = document.getElementById('notes')

const savedData = () => {
  localStorage.setItem(key, input.value)
  const Data = localStorage.getItem(key)
  if (Data) {
    const ul = document.getElementsByTagName('ul')[0]
    const li = document.createElement('li')
    li.innerText = Data
    li.classList.add('list-group-item')
    ul.appendChild(li)
    dataSaved.classList.remove('d-none')
  }
}

const deleteData = () => {
  localStorage.clear()
  input.value = ''
  dataSaved.classList.add('d-none')
}

saveButton.addEventListener('click', savedData)
deleteButton.addEventListener('click', deleteData)
