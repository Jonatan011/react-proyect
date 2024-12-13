import './Header.css'
const listTitles = ["React fundamentos", "React bases", "React principios"];

function getRandomTitle(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function Header() {
  const titleWinner = listTitles[getRandomTitle(0, 2)];
  return (
    <div className= "header">
      <h1>{titleWinner}</h1>
      <p>Conceptos fundamentales de React</p>
    </div>
  );
}

export default Header;
