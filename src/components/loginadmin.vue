<template>
  <div>
    <v-app-bar app color="yellow darken-1" dark>
      <v-btn depressed class="transparent" to="/">
        <v-toolbar-title class="text-uppercase white--text">
          <span class="font-weight-light">Sun</span>
          <span>Shine</span>
        </v-toolbar-title>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn depressed class="transparent" to="/">Back to Home</v-btn>
    </v-app-bar>

    <v-layout justify-center>
      <v-container id="admin" class="fill-height" fluid v-if="!submitted">
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-alert
              :value="alert"
              color="success"
              dark
              icon="mdi-check"
              transition="scale-transition"
            >Logging you in as {{email}}</v-alert>
            <v-alert
              :value="alert_fail"
              color="error"
              dark
              icon="mdi-check"
              transition="scale-transition"
            >Please check your email and password</v-alert>
            <v-card class="elevation-12" :loading="loading">
              <v-toolbar color="black">
                <v-toolbar-title class="white--text">Staff Login</v-toolbar-title>
                <div class="flex-grow-1"></div>
              </v-toolbar>

              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="email"
                    label="Email ID"
                    name="email"
                    :rules="emailRules"
                    prepend-icon
                    type="text"
                    width="50px"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="password"
                    label="Password"
                    name="password"
                    :rules="passwordRules"
                    prepend-icon
                    type="password"
                    required
                  ></v-text-field>
                </v-form>
              </v-card-text>

              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn
                  color="black"
                  class="white--text"
                  v-on:click.prevent="post"
                  @click="login"
                >Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-footer color="yellow darken-1" app>
        <span class="white--text">&copy; (TE COMPUTER Webmasters-2019)</span>
      </v-footer>
    </v-layout>
  </div>
</template>

<script>
// import db from "../components/firebaseinit";
import firebase from "firebase";
export default {
  name: "adminlogin",
  data: () => ({
    alert: false,
    valid: false,
    password: "",
    staff_email: [],
    passwordRules: [
      v => !!v || "Password is required",
      v => (v.length = 8 || "Enter valid passsword")
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    loading: false,
    alert_fail: false
  }),
  created() {
    this.loading = false;
    // db.collection("staff_data")
    //   .get()
    //   .then(querySnapshot => {
    //     querySnapshot.forEach(doc => {
    //       var email = doc.data().Email;
    //       this.staff_email.push(email);
    //     });
    //   });
  },
  methods: {
      /* eslint-disable */
    login: function(e) {
      this.loading = true;
     
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(
            user => {
              this.alert = true;

              this.$router.push({
                name: "dashboardAdmin",
                params: { Email: this.email }
              });
            },
            err => {
              this.alert_fail = true;
              this.$router.push({
                name: "loginadmin"
              });
            }
          );
        e.preventDefault();
      
    }
    /* eslint-enable */
  }
};
</script>

<style>
#admin {
  margin-left: 30%;
  margin-right: 30%;
  margin-top: 100px;
}
</style>