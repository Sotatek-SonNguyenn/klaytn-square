import { ReactComponent as KaikasIcon } from 'assets/kaikas.svg';
import { useKaikasProvider } from 'context/KaikasProviderContext';
import '../styles.scss';

const Kaikas = () => {
  const { connect } = useKaikasProvider();
  const { klaytn } = window;
  const handleInstallKaikas = () => {
    window.open(`https://docs.kaikas.io/01_getting_started/02_quick_start#install-kaikas`);
  };
  return (
    <div className="kaikas" onClick={klaytn ? connect : handleInstallKaikas}>
      <KaikasIcon />
      <span>{klaytn ? 'Kaikas' : 'Install Kaikas'}</span>
    </div>
  );
};

export default Kaikas;
