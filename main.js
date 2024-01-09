
const baseApi = 'https://api.genderize.io'
const showData = (name, gender, probability) => {
    const prediksiElement = document.getElementById('prediksi');
    const probabilityPersentase = probability * 100
    const genderDecode = gender === 'male' ? 'Laki-laki' : 'Perempuan'
    const warnaGenderlaki = document.getElementById('laki')
    const warnaGenderPerempuan = document.getElementById('perempuan')
    if (gender === 'male') {
        warnaGenderlaki.style.backgroundColor = 'blue'

    } else {
        warnaGenderPerempuan.style.backgroundColor = 'yellow'
    }


    let prediksiText = `Hallo ${name} anda berjenis ${genderDecode} dengan tingkat kepercayaan ${probabilityPersentase} %`;
    prediksiElement.textContent = prediksiText
}
const prediksi = async (event) => {
    if (event.key === 'Enter') {
        const firsName = event.target.value
        const queryUrl = `${baseApi}/?name=${firsName}&country_id=ID`
        const response = await fetch(queryUrl)
        const data = await response.json()
        console.log(data)
        showData(data.name, data.gender, data.probability)
    }
}

function refresh() {
    location.reload()
}

