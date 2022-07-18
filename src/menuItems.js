import { Link } from 'react-router-dom';

const menuItems = [
  { label: (<Link to="/">Главная</Link>), key: 'home' },
  { label: (<Link to="/news">Новости</Link>), key: 'news' },
  { label: (<Link to="/about">О проекте</Link>), key: 'about' },
  { label: (<Link to="/model">Модель</Link>), key: 'model' },
  { label: (<Link to="/contacts">Контакты</Link>), key: 'contacts' },
];

export default menuItems;