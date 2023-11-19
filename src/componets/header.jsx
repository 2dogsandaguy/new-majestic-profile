import farmPhoto from '../assets/images/me-on-farm.jpg';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="bg-dark text-light p-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="display-4 mb-4" 
            style={{ 
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)' 
              }}
            >
              <span 
              style={{ background: '#fca311',
               padding: '0 10px',
                borderRadius: '5px' 
                }}
                >
                  Robert Frisco
                  </span>
            </h1>
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link" 
                to="/" 
                style={{ background: '#11fc5f',
                padding: '5px',
                borderRadius: '5px' 
                }}
                  >
                About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                className="nav-link" 
                to="my-Work" 
                style={{ background: '#11fc57',
                 padding: '5px',
                  borderRadius: '5px' 
                }}
                  >
                    My Work
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                className="nav-link" 
                to="Contact-Me" 
                style={{ background: '#11fc9a',
                 padding: '5px', 
                 borderRadius: '5px' 
                }}
                 >
                  Contact Me
                  </Link>
              </li>
              <li className="nav-item">
                <Link 
                className="nav-link" 
                to="work-experience" 
                style={{ background: '#11fc57',
                 padding: '5px',
                  borderRadius: '5px' 
                }}
                  >
                    Work Exp.
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-6 text-center">
            <img className="img-fluid rounded-circle mt-4" 
            src={farmPhoto} 
            alt="Guy on the farm" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
