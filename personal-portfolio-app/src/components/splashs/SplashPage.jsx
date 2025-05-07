import "./splashpage.css"
function SplashPage({word}) {
  return (
    <div className="splash-page">
        <h1 className="fade-in">{word.name}</h1>
    </div>
  );
}

export default SplashPage;