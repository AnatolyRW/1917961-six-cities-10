
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

function NotFound (): JSX.Element {
  return (
    <div className="page">
      <Header />
      <div style={{ textAlign: 'center' }}>
        <h1>Ошибка 404. Страница не существует.</h1>
        <Link to='/'>Вернуться на главную страницу</Link>
      </div>
      <Footer />
    </div>
  );
}

export default NotFound;
