import clsx from "clsx";
import s from "./Header.module.css";
const Header = () => {
  return (
    <div className={clsx(s.headerContainer)}>
      <h2>Header</h2>
      <p className={s.textHeader}>Text Header</p>
    </div>
  );
};

export default Header;
