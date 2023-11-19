import farmPhoto from '../assets/images/me-on-farm.jpg';

const Header = () => {
  return (
    <header className="bg-dark text-light p-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="display-4 mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
              <span style={{ background: '#fca311', padding: '0 10px', borderRadius: '5px' }}>Robert Frisco</span>
            </h1>
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link" href="#About-Me" style={{ background: '#11fc5f', padding: '5px', borderRadius: '5px' }}>About Me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#My-Work" style={{ background: '#11fc57', padding: '5px', borderRadius: '5px' }}>My Work</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Contact-Me" style={{ background: '#11fc9a', padding: '5px', borderRadius: '5px' }}>Contact Me</a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 text-center">
            <img className="img-fluid rounded-circle mt-4" src={farmPhoto} alt="Guy on the farm" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
