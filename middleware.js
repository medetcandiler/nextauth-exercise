// it means every page need to be auth with nextauth otherwise user cannot visit them
export { default } from 'next-auth/middleware';

// we can specify that which pages we want to keep secret in this case /extra and /dashboard pages cannot be visited without signing in.
export const config = { matcher: ['/extra', '/dashboard'] };