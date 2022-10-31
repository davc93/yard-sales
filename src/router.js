import { products } from './data';
import { Contact } from './routes/Contact';
import { Home } from './routes/Home';
import { Login } from './routes/Login';
import { Signup } from './routes/Signup';

export const routes = [];
routes.push({ name: 'Home', path: '/', exec: Home });
routes.push({ name: 'Login', path: '/login', exec: Login });
routes.push({ name: 'Contact', path: '/contact', exec: Contact });

routes.push({ name: 'Sign up', path: '/signup', exec: Signup });

export function router() {
  const { pathname } = window.location;
  const route = routes.find((route) => route.path === pathname);
  route.exec();
}
