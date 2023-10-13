export async function listPokemon() {
    const apiUrl = 'https://ex.traction.one/pokedex/pokemon'

    let response = await fetch(apiUrl)
    response = await response.json()

    return response
}