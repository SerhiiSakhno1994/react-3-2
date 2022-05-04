import errorImage from './chotki.jpg';

export default function PokemonErrorView({ message }) {
  return (
    <div role="alert">
      <p>{message}</p>
      <img src={errorImage} width="200" alt="sadcat" />
    </div>
  );
}
