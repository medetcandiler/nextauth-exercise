import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';


// async function getUserByUsername(username) {
//   try {
//     const response = await fetch(`/api/users?username=${encodeURIComponent(username)}`);
//     if (response.ok) {
//       const user = await response.json();
//       return user;
//     }
//     return null;
//   } catch (error) {
//     console.error('Error fetching user:', error);
//     return null;
//   }
// }


export const options = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {
          label: 'Username',
          type: 'text',
          placeholder: 'meddo'
        },
        password: {
          label: 'Password',
          type: 'password'
        }
      },
      async authorize(credentials) {
        const user = {
          id: '33',
          name: 'medet',
          password: '123123asd'
        };
        if (credentials?.username === user.name && credentials?.password === user.password) {
          return user
        } else {
          return null
        }
        // const user = await getUserByUsername(credentials.username);

        // if (user && credentials?.password === user.password) {
        //   // If the user exists and the password matches, return the user object
        //   return { id: user.id, name: user.username };
        // } else {
        //   // If the user is not found or the password doesn't match, return null
        //   return null;
        // }
      }
    })
  ],
}

