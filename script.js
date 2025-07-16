const changeURL = document.getElementById('url');
const GraduatedYear = document.getElementById('year');
const Name = document.getElementById('name');
const URL = 'https://localhost:8080/?';


document.getElementbyId('button').addEventListener('click', () => {
	const passName = Name.value.trim();
	const passYear = GraduatedYear.value.trim();

	let queryArray = [];

	if(passName){
		queryArray.push(`name=${encodeURIComponent(passName)}`)
	}
	if(passYear){
		queryArray.push(`year=${encodeURIComponent(passYear)}`)
	}

	if(queryArray.length > 0){
		changeURL.textContent = `${URL}${queryArray.join('&')}`;
	}else{
	changeURL.textContent = `Please Enter The Details`
		}
})