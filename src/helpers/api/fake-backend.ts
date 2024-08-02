import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
const mock = new MockAdapter(axios)
interface UserData {
	id: number
	username: string
	password: string
	firstName: string
	lastName: string
	role: string
	token: string
}

export function configureFakeBackend() {
	const users: UserData[] = [
		{
			id: 1,
			username: 'user',
			password: 'password',
			firstName: 'Ethan',
			lastName: 'Hunt',
			role: 'Admin',
			token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb2RlcnRoZW1lcyIsImlhdCI6MTU4NzM1NjY0OSwiZXhwIjoxOTAyODg5NDQ5LCJhdWQiOiJjb2RlcnRoZW1lcy5jb20iLCJzdWIiOiJzdXBwb3J0QGNvZGVydGhlbWVzLmNvbSIsImxhc3ROYW1lIjoiVGVzdCIsIkVtYWlsIjoic3VwcG9ydEBjb2RlcnRoZW1lcy5jb20iLCJSb2xlIjoiQWRtaW4iLCJmaXJzdE5hbWUiOiJIeXBlciJ9.P27f7JNBF-vOaJFpkn-upfEh3zSprYfyhTOYhijykdI',
		},
		{
			id: 1,
			username: 'test',
			password: 'test',
			firstName: 'Test',
			lastName: 'User',
			role: 'Admin',
			token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb2RlcnRoZW1lcyIsImlhdCI6MTU4NzM1NjY0OSwiZXhwIjoxOTAyODg5NDQ5LCJhdWQiOiJjb2RlcnRoZW1lcy5jb20iLCJzdWIiOiJzdXBwb3J0QGNvZGVydGhlbWVzLmNvbSIsImxhc3ROYW1lIjoiVGVzdCIsIkVtYWlsIjoic3VwcG9ydEBjb2RlcnRoZW1lcy5jb20iLCJSb2xlIjoiQWRtaW4iLCJmaXJzdE5hbWUiOiJIeXBlciJ9.P27f7JNBF-vOaJFpkn-upfEh3zSprYfyhTOYhijykdI',
		},
	]
mock.onPost('/login/').reply((config) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const params = JSON.parse(config.data);
        const filteredUsers = users.filter((user) => {
          return user.username === params.username && user.password === params.password;
        });

        if (filteredUsers.length) {
          const user = filteredUsers[0];
          resolve([200, user]);
        } else {
          resolve([401, { message: 'Username or password is incorrect' }]);
        }
      }, 1000);
    });
  });
}