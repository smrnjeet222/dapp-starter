import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";

import { injected } from "../utils/connectors";

const App = function () {
  const { active, account, activate } = useWeb3React<Web3Provider>();

  return (
    <div className="flex justify-center">
      {active && account ? (
        <div>Wallet Connected</div>
      ) : (
        <button
          type="button"
          className="btn btn-outline normal-case disabled:btn-warning mx-auto"
          onClick={() => {
            activate(injected);
          }}
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default App;
