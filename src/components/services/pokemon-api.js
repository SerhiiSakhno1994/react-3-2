export function FetchPokemon(name) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(r => {
    if (r.ok) {
      return r.json();
    }
    return Promise.reject(new Error(`немає покемона з імям ${name}`));
  });
}
