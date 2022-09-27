const obj = {
	characterUrl: 'character',
	loactionUrl: 'location',
	episodeUrl: 'episode',
}

async function load() {
	const URL = `https://rickandmortyapi.com/api/${obj.characterUrl}?page=1`
	const res = await fetch(`${URL}`)
	const data = await res.json()

	outRow.innerHTML = ''
	data.results.forEach(el => {
		let div = document.createElement('div')
		div.className = 'out__col'
		div.innerHTML = `
            <div class="person">
                <div class="person__image">
                    <img src="${el.image}" alt="">
                </div>
                <div class="person__info">
                    <h3 class="person__title">Информация о персонаже</h3>
                    <div class="person__name person-info"><span>Name: </span> ${el.name}</div>
                    <div class="person__status person-info"><span>Status: </span>${el.status}</div>
                    <div class="person__type person-info"><span>Species: </span>${el.species}</div>
                    <div class="person__gender person-info"><span>Gender: </span>${el.gender}</div>
                    <div class="person__gender person-info"><span>Location: </span>${el.location.name}</div>
                </div>  
            </div>
        `
		outRow.append(div)
	})
}
load()

const content = document.querySelector('.content')
const outRow = document.querySelector('.out__row')
const search = document.querySelector('#search')
const text = document.querySelector('#text')
const form = document.querySelector('#form')

async function showInfo(name) {
	const URL = `https://rickandmortyapi.com/api/character/?name=${name}`
	const res = await fetch(`${URL}`)
	const data = await res.json()

	outRow.innerHTML = ''
	data.results.forEach(el => {
		let div = document.createElement('div')
		div.className = 'out__col'
		div.innerHTML = `
            <div class="person">
                <div class="person__image">
                    <img src="${el.image}" alt="">
                </div>
                <div class="person__info">
                    <h3 class="person__title">Информация о персонаже</h3>
                    <div class="person__name person-info"><span>Name: </span> ${el.name}</div>
                    <div class="person__status person-info"><span>Status: </span>${el.status}</div>
                    <div class="person__type person-info"><span>Species: </span>${el.species}</div>
                    <div class="person__gender person-info"><span>Gender: </span>${el.gender}</div>
                    <div class="person__gender person-info"><span>Location: </span>${el.location.name}</div>
                </div>  
            </div>
        `
		outRow.append(div)
		text.value = ''
	})
}

form.addEventListener('submit', event => {
	event.preventDefault()
	showInfo(text.value)
})

//Pagination

const next = document.querySelector('#next')
let counter = 1
next.addEventListener('click', async event => {
	try {
		const URL = `https://rickandmortyapi.com/api/${
			obj.characterUrl
		}?page=${++counter}`
		const res = await fetch(`${URL}`)
		const data = await res.json()

		outRow.innerHTML = ''
		data.results.forEach(el => {
			let div = document.createElement('div')
			div.className = 'out__col'
			div.innerHTML = `
                <div class="person">
                    <div class="person__image">
                        <img src="${el.image}" alt="">
                    </div>
                    <div class="person__info">
                        <h3 class="person__title">Информация о персонаже</h3>
                        <div class="person__name person-info"><span>Name: </span> ${el.name}</div>
                        <div class="person__status person-info"><span>Status: </span>${el.status}</div>
                        <div class="person__type person-info"><span>Species: </span>${el.species}</div>
                        <div class="person__gender person-info"><span>Gender: </span>${el.gender}</div>
                        <div class="person__gender person-info"><span>Location: </span>${el.location.name}</div>
                    </div>  
                </div>
            `
			outRow.append(div)
		})
	} catch (err) {
		console.log('Error')
	}
})

const prev = document.querySelector('#prev')
prev.addEventListener('click', async event => {
	try {
		const URL = `https://rickandmortyapi.com/api/${
			obj.characterUrl
		}?page=${--counter}`
		const res = await fetch(`${URL}`)
		const data = await res.json()

		outRow.innerHTML = ''
		data.results.forEach(el => {
			let div = document.createElement('div')
			div.className = 'out__col'
			div.innerHTML = `
                <div class="person">
                    <div class="person__image">
                        <img src="${el.image}" alt="">
                    </div>
                    <div class="person__info">
                        <h3 class="person__title">Информация о персонаже</h3>
                        <div class="person__name person-info"><span>Name: </span> ${el.name}</div>
                        <div class="person__status person-info"><span>Status: </span>${el.status}</div>
                        <div class="person__type person-info"><span>Species: </span>${el.species}</div>
                        <div class="person__gender person-info"><span>Gender: </span>${el.gender}</div>
                        <div class="person__gender person-info"><span>Location: </span>${el.location.name}</div>
                    </div>  
                </div>
            `
			outRow.append(div)
		})
	} catch (err) {
		console.log('Error')
	}
})
