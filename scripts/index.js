console.log('Bugs List:', bugs);

const bugsList = document.querySelector('bugs-list')

bugs.forEach(appendBugToList(bug));

const appendBugToList = bug => {
  const li = document.createElement('li')
  const h3 = document.createElement('h3')
  const img = document.createElement('img')

  li.innerText = bug
  h3.innerText = bug
  img.src = bug

  li.append(h3)
  li.append(img)
  bugsList.append(li)
}
