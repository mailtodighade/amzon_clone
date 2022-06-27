import bcrypt from 'bcryptjs'
const users = [
{
    name: "neeraj",
    email: "mailtoneeraj@gmail.com",
    password: bcrypt.hashSync('19876', 10),
    isAdmin: true,
  },
  {
    name: "dhiraj",
    email: "mailtodhiraj@gmail.com",
    password: bcrypt.hashSync('123345', 10),
    isAdmin: false,
  },
  {
    name: "suraj",
    email: "mailtosuraj@gmail.com",
    password: bcrypt.hashSync('54321', 10),
    isAdmin: false,
  },
  {
    name: "viraj",
    email: "mailtovairaj@gmail.com",
    password: bcrypt.hashSync('3456', 10),
    isAdmin: false,
  },
];


export default users;
