const RestrictedPage = ({ isLoggedIn, user, Login, Logout }) => {
  let text;
  let buttonText;
  let buttonClick;

  if (isLoggedIn) {
    text = `Bem-vinde, ${user}!`;
    buttonText = "Logout";
    buttonClick = Logout;
  } else {
    text = "Ops, você não pode fazer isso!";
    buttonText = "Login";
    buttonClick = Login;
  }

  return (
    <div className="container">
      <h1 className="texto">{text}</h1>
      <button className="botao" onClick={buttonClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default RestrictedPage;
