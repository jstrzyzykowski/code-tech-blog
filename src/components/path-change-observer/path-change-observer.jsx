import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { hideAllMenus } from '../../redux/menu/menu.actions';

export default function PathChangeObserver() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(hideAllMenus());
    window.scrollTo(0, 0);
  }, [pathname, dispatch]);

  return null;
}
