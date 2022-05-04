export default function PokemonDataView({ pokemon: { sprites, name, stats } }) {
  return (
    <div>
      <img
        src={sprites.other['official-artwork'].front_default}
        width="150"
        height="150"
        alt={name}
      />
      <h2>{name}</h2>
      <ul>
        {stats.map(entry => (
          <li key={entry.stat.name}>
            {entry.stat.name}: {entry.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
}
