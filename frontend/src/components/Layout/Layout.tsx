import { FC, ReactNode } from 'react';
import cn from 'classnames';
import { Header } from '@/components/Header';
import './Layout.scss';

type Props = {
  classes?: {
    header?: string;
    main?: string;
  };
  children?: ReactNode;
};

export const Layout: FC<Props> = ({ classes, children }) => {
  return (
    <>
      <Header className={classes?.header} />
      <main className={cn('main layout', classes?.main)}>{children}</main>
    </>
  );
};
