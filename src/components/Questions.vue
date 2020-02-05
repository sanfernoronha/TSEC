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
          <v-col cols="12" sm="8" md="12">
            <v-card class="elevation-12">
              <v-toolbar color="yellow darken-4">
                <v-toolbar-title class="white--text">Answer a few questions based on your interests</v-toolbar-title>
                <div class="flex-grow-1"></div>
              </v-toolbar>

              <v-card-text>
                <v-form>
                    <v-row>
                        <v-container>
                            <v-row class="dark--text title">
                            <v-col>
                                This is question 1
                                
                            </v-col>
                        </v-row>
                            <v-radio-group v-model="row" row>
                                <v-radio label="Option 1" value="radio-1"></v-radio>
                                <v-radio label="Option 2" value="radio-2"></v-radio>
                            </v-radio-group>
                        </v-container>
                        <v-col cols="12" md="6">
        <v-textarea
          outlined
          name="input-7-4"
          label="Your work experience matters"
          value=""
        ></v-textarea>
      </v-col>
                        
                    </v-row>

                  <div class="text-center">
                    <v-btn color="red  my-3" dark type="submit" @click="forward()">Register</v-btn>
                  </div>
                </v-form>
              </v-card-text>
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
/* eslint-disable */
import db from "./firebaseinit";

import firebase from "firebase";
/* eslint-enable */

export default {
  name: "questions",
  data() {
    return {
    column: 1,
    row: null,
    code_array: {}
    };
  },
 methods: {
      /* eslint-disable */
    forward: function(e){
        this.$router.push({
        name: "dashboard",
        params: { ID: this.$route.params.ID , Email: this.$route.params.Email }
      })
    }
    /* eslint-enable */
  },

  created(){
      
    
      /* eslint-disable */
     db.collection("questions")
     .doc("code1")
     .get()
     .then(function(doc) {
            let data1 = {
              questions:doc.data().questions,
              answers: doc.data().answers,
              opt_1:doc.data().opt_1,
              opt_2:doc.data().opt_2,
              opt_3:doc.data().opt_3,
              opt_4:doc.data().opt_4,
              opt_5:doc.data().opt_5
        
            };
        
     }); 
/* eslint-enable */
   
  }
};
</script>

