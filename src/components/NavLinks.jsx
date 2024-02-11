import { useSelector } from 'react-redux';

const links = [
  { id: 1, url: '/', text: 'home' },
  { id: 2, url: 'about', text: 'about' },
];
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        if((url === 'checkout' || url === 'orders') && user === null) {
          return null;
        }
        return (
          <li key={id}>
            <NavLink className='capitalize' to={url}>
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};
export default NavLinks;