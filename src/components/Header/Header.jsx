
import SelectUser from "../SelectUser/SelectUser";
import Logo from "../Logo/Logo";

const logos = ["/Frame 11.png", "/vite.svg"];

function Header() {
  return (
    <>
      <Logo image={logos[0]} />
      <SelectUser />
    </>
  );
}

export default Header;
