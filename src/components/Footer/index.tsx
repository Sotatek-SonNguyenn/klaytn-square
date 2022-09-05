import { Col, Row } from 'antd';
import logoKlaytn from 'assets/logo-square.png';
import './styles.scss';
const Footer = () => {
  return (
    <div className="footer">
      <Row>
        <Col span={15}>
          <img src={logoKlaytn} alt="logo" />
        </Col>
        <Col span={9} className="Col-2">
          <div className="content-footer">
            <span></span>
            <span>Dosc</span>
          </div>
          <div className="content-footer">
            <span></span>
            <span>User Guide </span>
          </div>
          <div className="content-footer">
            <span></span>
            <span>Terms</span>
          </div>
          <div className="content-footer">
            <span></span>
            <span>Privacy Policy</span>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
