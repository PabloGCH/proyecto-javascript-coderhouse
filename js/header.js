export default class header {
	constructor(header) {
		window.addEventListener("scroll",()=> { 
			header.classList.toggle("header-alt",window.scrollY > 20)
		})
	}

}
