console.log('Bugs List:', bugs);

const bugsList = document.querySelector('bugs-list')

bugs.forEach(appendBugToList(bug));

const appendBugToList = bug => {
  const li = createElement('li')
  const h3 = createElement('h3')
  const img = createElement('img')

  h3.text = bug
  img.src = bug

  li.append(img)
  bugsList.append(li)
}
