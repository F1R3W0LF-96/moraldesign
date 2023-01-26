const StyledButton = (props) => {
  const style = {
    backgroundColor: `${props.active ? "#155bd5" : "#6d6d6d"}`,
    color: `${props.active ? "#6d6d6d" : "#155bd5"}`,
    fontWeight: 600,
    padding: 0,
    marginRight: "20px",
    position: "relative",
    padding: "10px 18px",
    borderRadius: "4px",
    textTransform: "capitalize",
    borderColor: `${props.needBorder ? "#155bd5" : "none"}`,
    backgroundColor: "transparent",
  };

  return (
    <button style={style} onClick={() => props.action()}>
      {props.value}
    </button>
  );
};

export { StyledButton };
