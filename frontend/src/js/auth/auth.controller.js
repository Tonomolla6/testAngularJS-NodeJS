class AuthCtrl {
  constructor(User, $state, Toastr) {
    'ngInject';

    this._User = User;
    this._$state = $state;
    this._toastr = Toastr;

    this.title = $state.current.title;
    this.authType = $state.current.name.replace('app.', '');

  }

  submitForm() {
    this.isSubmitting = true;

    this._User.attemptAuth(this.authType, this.formData).then(
      (res) => {
        this._toastr.showToastr("success", "Has iniciado sesion correctamente");
        setTimeout(() => {
          this._$state.go('app.home');
        }, 1000);
      },
      (err) => {
        this.isSubmitting = false;
        this.errors = err.data.errors;
      }
    )
  }
}

export default AuthCtrl;