import React from 'react';
import { ReactComponent as MetamaskIcon } from 'assets/metamask.svg';
import { useEthereumProvider } from 'context/EthereumProviderContext';
const Metamask = () => {
  const { connect } = useEthereumProvider();
  const { ethereum } = window;
  const handleInstallMetamask = () => {
    window.open(`https://metamask.io/download/`);
  };
  return (
    <div className="metamask" onClick={!ethereum ? handleInstallMetamask : connect}>
      <MetamaskIcon />
      {!ethereum ? <span>Install Metamask</span> : <span>Metamask</span>}
    </div>
  );
};

export default Metamask;
