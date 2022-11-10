import { ReactNode } from 'react';

export type Anchor = 'top' | 'left' | 'bottom' | 'right';

export type Route = string;

export type NavbarItem = {
  id: number,
  icon?: ReactNode,
  label: string,
  route: Route
}