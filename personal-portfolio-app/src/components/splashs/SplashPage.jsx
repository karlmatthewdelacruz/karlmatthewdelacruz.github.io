import "./splashpage.css"
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