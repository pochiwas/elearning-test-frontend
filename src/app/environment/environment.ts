export const environment = {
  production: false,
  api: {
    base: 'http://localhost:3000/api',
    courses: {
      getAllCourse: '/courses/getAllCourse',
      createCourse: '/courses/createCourse',
      updatedCourse: '/courses/updatedCourse',
      delete: '/courses/deletedCourse',
    },
    users: {
      getAllUser: '/users/getAllUser',
      createUser: '/users/createUser',
      updateUser: '/users/updateUser',
      deleteUser: '/users/deleteUser',
    },
    auth: {
      login: '/auth/login',
      register: '/auth/register',
    },
  },
};
