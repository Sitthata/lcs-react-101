export default function People() {
  const getImageUrl = (imageId: string) => {
    return `https://i.imgur.com/${imageId}s.jpg`;
  };
  return (
    // TODO: Render a list of "chemists" profession people using Profile component
    <ul>
      <li>Creola Katherine Johnson: mathematician</li>
      <li>Mario José Molina-Pasquel Henríquez: chemist</li>
      <li>Mohammad Abdus Salam: physicist</li>
      <li>Percy Lavon Julian: chemist</li>
      <li>Subrahmanyan Chandrasekhar: astrophysicist</li>
    </ul>
  );
}
