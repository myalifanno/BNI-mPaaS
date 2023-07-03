Page({
  data: {
    username: '',
    password: ''
  },

  handleUsernameInput(event) {
    console.log(event)
    this.setData({
      username: event.detail.value
    });
  },

  handlePasswordInput(event) {
    this.setData({
      password: event.detail.value
    });
  },

  handleLogin() {
    const { username, password } = this.data;

    if (username === 'example' && password === 'password') {
      my.alert({
        title: 'Login Successful',
        content: 'Welcome!'
      });
    } else {
      my.alert({
        title: 'Login Failed',
        content: 'Invalid username or password.'
      });
    }
  }
});
