import { useWeb3React } from "@web3-react/core";
import Link from "next/link";

import Account from "./Account";
import Balance from "./Balance";
import ChainId from "./ChainId";
import ConnectBtn from "./ConnectBtn";

function Header() {
  const { active, account, error } = useWeb3React();
  // const [theme, setTheme] = useLocalStorage<"dark" | "light">("theme", "dark");

  // useEffect(() => {
  //   document.documentElement.setAttribute("data-theme", theme);
  // }, []);

  // const toggleTheme = () => {
  //   setTheme((prevTheme) => {
  //     document.documentElement.setAttribute("data-theme", prevTheme === "dark" ? "light" : "dark");
  //     return prevTheme === "dark" ? "light" : "dark";
  //   });
  // };

  return (
    <div className="mb-2 shadow-lg navbar bg-neutral text-neutral-content sm:rounded-box">
      <div className="flex-1 px-2 mx-2 gap-2">
        <span className="text-lg font-bold">{active ? "🟢" : error ? "🔴" : "🟠"}</span>
        {active && account && (
          <>
            <Link href="/">
              <a>
                <ChainId />
              </a>
            </Link>
          </>
        )}
      </div>
      <div className="flex-none hidden px-2 mx-2 lg:flex">
        <div className="flex items-center">
          {active && account && (
            <>
              <Account />
              <Balance />
            </>
          )}
          <ConnectBtn />
          {/* <button type="button" onClick={toggleTheme} className="btn ">
            {theme === "dark" ? "🌞" : "🌙"}
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
