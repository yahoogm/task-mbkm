// {text, onClick} merupakan props yang diambil dari setiap component yang menggunakan componen button ini
const Button = ({ text, onClick, mode }) => {
  return (
    <button onClick={onClick} className={mode}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  mode: "p-3 bg-blue-500 rounded-md",
};

export default Button;
