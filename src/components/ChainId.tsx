import { useWeb3React } from "@web3-react/core";

import chainIds from "../constants/chainIds";

function ChainId() {
  const { chainId } = useWeb3React();

  return (
    <div className="btn capitalize btn-ghost btn-sm rounded-btn">
      {chainIds[chainId] ? (
        <div>
          ({chainId})<span className="sm:flex hidden text-xs">{chainIds[chainId]}</span>
        </div>
      ) : (
        <>
          <span>Chain Id : &nbsp; </span>
          <span>{chainId ?? ""}</span>
        </>
      )}
    </div>
  );
}

export default ChainId;
