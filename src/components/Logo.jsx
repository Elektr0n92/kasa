function Logo(props) {
  return (
    <li>
      <img src={props.src} alt="Logo" className={props.class} />
    </li>
  );
}

export default Logo;
