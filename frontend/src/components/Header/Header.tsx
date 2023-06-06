import { FC } from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';
import { ReactComponent as HeartIcon } from '@/assets/icons/heart.svg';
import { ReactComponent as BagIcon } from '@/assets/icons/bag.svg';
import './Header.scss';

type Props = {
  className?: string;
};

export const Header: FC<Props> = ({ className }) => {
  return (
    <header className={cn('header', className)}>
      <Stack width="100%" direction="row" justifyContent="space-between">
        <Stack direction="row" alignItems="center">
          <div className="header__logo">
            <span>Food</span>App
          </div>
          <nav className="header__nav nav">
            <NavLink to="/" className="nav__item">
              <BagIcon className="nav__item-icon" />
              <Typography variant="text-sm">Рецепты</Typography>
            </NavLink>
          </nav>
        </Stack>
        <Stack direction="row" alignItems="center" spacing="30px">
          <NavLink to="/saved">
            <HeartIcon className="header__saved-icon" />
          </NavLink>
          <NavLink to="/recipe/create">
            <Button type="button" variant="contained">
              <Typography variant="text-sm" fontWeight={500}>
                Создать рецепт
              </Typography>
            </Button>
          </NavLink>
        </Stack>
      </Stack>
    </header>
  );
};
