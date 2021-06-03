console.log('Bugs List:', bugs);

const bugsList = document.querySelector('#bugs-list')

function appendBugToList(bug) {
  const li = document.createElement('li')
  const h3 = document.createElement('h3')
  const img = document.createElement('img')

  h3.innerText = bug.name
  img.src = bug.url

  li.append(h3)
  li.append(img)
  bugsList.append(li)
}

bugs.forEach(appendBugToList);
