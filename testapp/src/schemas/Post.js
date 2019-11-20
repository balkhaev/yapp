module.exports = {
  fields: {
    author: {
      type: 'relationship',
      ref: 'User',
    },
    title: {
      type: 'text'
    },
    text: {
      type: 'text'
    },
    status: {
      type: 'select',
      options: ['published', 'drafted'],
    },
    slug: {
      type: 'slug',
      from: 'title',
    },
  },
  methods: {
    toDraft() {
      return this.update({ status: 'drafted' });
    },
  },
};
