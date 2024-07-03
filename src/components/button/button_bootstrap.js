// import "./button.css";
// import styles from "./button.module.css";

const ButtonComponent = (prop) => {
  const buttonStyle = { color: "red", backgroundColor: "green" };

  const { text = "button", bgColor, onPress, height } = prop;
  return (
    <button
      onClick={onPress}
      className="btn btn-primary"
    >
      {text}
    </button>
  );
};
export default ButtonComponent;