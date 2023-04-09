
function somar() {
    const numero1 = document.getElementById("numero01").valueAsNumber
    const numero2 = document.getElementById("numero02").valueAsNumber
    let soma = numero1 + numero2
    let elementoHTML = document.getElementById("resultado_conta")
    elementoHTML.innerHTML = soma
    limparNumeros()
}

function limparNumeros() {
    document.getElementById("numero01").value = ""
    document.getElementById("numero02").value = ""    
}

async function buscar() {
        const id_pk = document.getElementById("id_pokemon").valueAsNumber
        const pk = await load_pk(id_pk)
        let imagem = pk["sprites"]["front_default"]
        document.getElementById("imagem_pk").setAttribute("src", imagem)
        let img_pk = "Nome: " + pk["name"][0].toUpperCase() + pk["name"].substring(1)
        document.getElementById("nome_pk").innerHTML = img_pk
        limparPk()
    }

async function load_pk(id) {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}/`
        const response = await fetch(url)
        return response.json()
    }

    function limparPk() {
        document.getElementById("id_pokemon").value = ""    
    }

