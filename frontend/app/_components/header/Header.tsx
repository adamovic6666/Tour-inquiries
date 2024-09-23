import { navigation } from "@/app/_utils/navigation.json";
import { Navigation } from "@/app/_types";
import NavLink from "./NavLink";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          {navigation.map(({ name, url }: Navigation) => {
            return (
              <li key={url}>
                <NavLink url={url}>{name}</NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
