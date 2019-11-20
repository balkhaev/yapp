module.exports = {
  fields: {
    name: {
      type: 'text',
    },
    email: {
      type: 'email',
    },
    isAdmin: {
      type: 'boolean',
    },
    password: {
      type: 'password',
    },
  },
  access: {
    read: false,
    update: false,
    create: false,
    delete: false,
  },
  options: {
    timestamps: true,
  },
};
