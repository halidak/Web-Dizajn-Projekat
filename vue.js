const app = Vue.createApp({
  data() {
    return {
      data: [
        {
          id: 'liam',
          name: 'Liam Smith',
          phone: '060123456',
          email: 'liam@gmail.com',
        },
        {
          id: 'leslie',
          name: 'Leslie Maury',
          phone: '060876543',
          email: 'leslie@gmail.com',
        },
        {
            id: 'helen',
            name: 'Helen Emmeret',
            phone: '060453545',
            email: 'helen@gmail.com',
          },
          {
            id: 'robert',
            name: 'Robert Hall',
            phone: '060876395',
            email: 'robert@gmail.com',
          },
        ],
      };
    },
  });

app.component('friend-contact', {
  template: `
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails()">
      {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
  `,
  props: ['friend'],
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});
   
app.mount('#app');
