import { ReactNode } from 'react';

interface IProps {
  href: string;
  children: ReactNode
}

const Link = ({ href, children }: IProps) => (
  <a href={ href }>
    { children }
  </a>
);

export default Link;

