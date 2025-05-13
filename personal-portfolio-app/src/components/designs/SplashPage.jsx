import "./splashpage.css"
{/* 
  Responsible for the intro splashpage 
  word is an object with contents:
  String
  */}
function SplashPage({word}) {
  return (
    <div className="splash-page">
      <div className="paper-container fade-in">
        <h1>{word.name}</h1>
        <div className="border"/>
      </div>
    </div>
  );
}

export default SplashPage;