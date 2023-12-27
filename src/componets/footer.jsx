import animeImage from '../assets/images/onePiece.jpg';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 custom-footer text-center">
            <p>&copy; 2023 Robert Frisco</p>
            <img className="img-fluid anime-image" style={{ width: '50%' }}src={animeImage} alt="Anime" />
            
          </div>
        </div>
      </div>
    </footer>
  );
}
