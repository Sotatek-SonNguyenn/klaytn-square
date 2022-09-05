import { Button, Modal } from 'antd';
import { ReactComponent as WalletIcon } from 'assets/Union.svg';
import { useEthereumProvider } from 'context/EthereumProviderContext';
import { useState } from 'react';
import Kaikas from './kaikas';
import Metamask from './metamask';
import './styles.scss';
const Wallet = () => {
  const [visible, setVisible] = useState(false);
  const { connect, disconnect,signerAddress } = useEthereumProvider();
  const walletAddress = localStorage.getItem('walletAddress');
  const showModal = () => {
    setVisible(true);
  };
  const hideModal = () => {
    setVisible(false);
  };

  console.log(signerAddress)
  return (
    <>
      {signerAddress ? (
        <span onClick={showModal} className="connect">
          {signerAddress.slice(0, 6) + '...' + signerAddress.slice(0, 4)}
        </span>
      ) : (
        <span onClick={showModal} className="connect">
          Connect Wallet
        </span>
      )}
      <Modal
        width={320}
        visible={visible}
        onOk={hideModal}
        onCancel={() => {
          hideModal();
        }}
        footer={null}>
        <div className="modal-connect">
          <WalletIcon />
          <div className="modal-connect__text">
            <span>Please Connect a Wallet</span>
            <span>(sample text) To use this feature, you need to connect Klutch wallet.</span>
          </div>
          <Kaikas />
          <Metamask />
        </div>
      </Modal>
    </>
  );
};

export default Wallet;
