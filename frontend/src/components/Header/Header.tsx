import { FC } from 'react';
import cn from 'classnames';
import { NavLink, useLocation } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';
import { UIButton } from '@/components/UI/UIButton';
import { ReactComponent as BagIcon } from '@/assets/icons/bag.svg';
import './Header.scss';

type Props = {
  className?: string;
};

export const Header: FC<Props> = ({ className }) => {
  const location = useLocation();

  return (
    <header className={cn('header', className)}>
      <Stack width="100%" direction="row" justifyContent="space-between">
        <Stack direction="row" alignItems="center">
          <div className="header__logo">
            <span>Food</span> App
          </div>
          <nav className="header__nav nav">
            <NavLink to="/" className="nav__item">
              <BagIcon className="nav__item-icon" />
              <Typography variant="text-sm">Рецепты</Typography>
            </NavLink>
          </nav>
        </Stack>
        <Stack direction="row" alignItems="center" spacing="30px">
          {location.pathname !== '/recipes/create' && (
            <NavLink to="/recipes/create" className="header__create-recipe">
              <UIButton type="button" color="primary">
                Создать рецепт
              </UIButton>
            </NavLink>
          )}
        </Stack>
      </Stack>
    </header>
  );
};
