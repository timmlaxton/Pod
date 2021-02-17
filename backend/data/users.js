import bcrypt from 'bcryptjs';

const users = [
	{
		name: 'Admin User',
		email: 'admin@example.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: true
	},
	{
		name: 'Tim',
		email: 'tim@example.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: false
	}
];

export default users;
