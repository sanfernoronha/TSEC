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
                <v-form @submit.prevent="forward">
                    <v-row>
                        <v-container>
                            <v-row class="dark--text title">
                            <v-col>
                                1.{{code_array.questions[0]}}
                                
                            </v-col>
                        </v-row>
                            <v-radio-group v-model="answers[0]" row>
                                <v-radio label="1" value="1"></v-radio>
                                <v-radio label="2" value="2"></v-radio>
                                <v-radio label="No Limit" value="No Limit"></v-radio>
                                <v-radio label="Depends on Compiler" value="Depends on Compiler"></v-radio>
                            </v-radio-group>
                        </v-container>
                        <v-container>
                            <v-row class="dark--text title">
                            <v-col>
                                2.{{code_array.questions[1]}}
                                
                            </v-col>
                        </v-row>
                            <v-radio-group v-model="answers[1]" row>
                                <v-radio label="Operator" value="Operator"></v-radio>
                                <v-radio label="Function" value="Function"></v-radio>
                                <v-radio label="Macro" value="Macro"></v-radio>
                                <v-radio label="None of these" value="None of these"></v-radio>
                            </v-radio-group>
                        </v-container>
                        <v-container>
                            <v-row class="dark--text title">
                            <v-col>
                                3.{{code_array.questions[2]}}
                                
                            </v-col>
                        </v-row>
                            <v-radio-group v-model="answers[2]" row>
                                <v-radio label="20" value="20"></v-radio>
                                <v-radio label="0" value="0"></v-radio>
                                <v-radio label="Undefined reference to i" value="Undefined reference to i"></v-radio>
                                <v-radio label="Depends on Compiler" value="Depends on Compiler"></v-radio>
                            </v-radio-group>
                        </v-container>
                        <v-container>
                            <v-row class="dark--text title">
                            <v-col>
                                4.{{code_array.questions[3]}}
                                
                            </v-col>
                        </v-row>
                            <v-radio-group v-model="answers[3]" row>
                                <v-radio label="#include <file>" value="#include <file>"></v-radio>
                                <v-radio label='#include "file"' value='#include "file"'></v-radio>
                                <v-radio label="#include < file" value="#include < file"></v-radio>
                                <v-radio label="All of the above are invalid." value="All of the above are invalid."></v-radio>
                            </v-radio-group>
                        </v-container>
                        <v-container>
                            <v-row class="dark--text title">
                            <v-col>
                                5.{{code_array.questions[4]}}
                                
                            </v-col>
                        </v-row>
                            <v-radio-group v-model="answers[4]" row>
                                <v-radio label="Yes" value="Yes"></v-radio>
                                <v-radio label="Hexadecimal system" value="Hexadecimal system"></v-radio>
                                <v-radio label="Octal system" value="Octal system"></v-radio>
                                <v-radio label="Both, Octal & Decimal" value="Both, Octal & Decimal"></v-radio>
                            </v-radio-group>
                        </v-container>
                        <v-col cols="12" md="6">
        <!-- <v-textarea
          outlined
          name="input-7-4"
          label="Your work experience matters"
          value=""
          v-bind="description"
        ></v-textarea> -->
      </v-col>
                        
                    </v-row>

                  <div class="text-center">
                    <v-btn color="red  my-3" dark type="submit">Register</v-btn>
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
    code_array: {
      questions: ["How many main() function we can have in our project?","What is sizeof() in C?",'int main() { extern int i; i = 20; printf("%d", sizeof(i)); return 0; }',"Following is the invalid inclusion of a file to the current program. Identify it.","In which Decimal system you can convert the binary number 1011011111000101 very easily?"],
      answers: ["1","Operator","Undefined reference to i","#include < file","Hexadecimal system"],
      opt_1: ["1","2","No Limit","Depends on Compiler"],
      opt_2: ["Operator","Function","Macro","None of these"],
      opt_3: ["20","0","Undefined reference to i","Linking Error"],
      opt_4: ["#include <file>",'#include "file"',"#include < file","All of the above are invalid."],
      opt_5: ["Yes","Hexadecimal system","Octal system","Both, Octal & Decimal"]
    },
    answers: [],
    count : 0,
    description: '',
    pass: false
    };
  },
 methods: {
      /* eslint-disable */
    forward: function(e){

      for(var i=0;i<this.answers.length;i++){
        if (this.answers[i] == this.code_array.answers[i]){
          this.count++;
        }
        else continue;
      }
      if (this.count>=3){
        this.pass = true
      }

      db.collection("volunteers_data")
        .where("email", "==", this.$route.params.Email)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref
              .update({
                // description: this.description,
                pass: this.pass,
                score: this.count
              })
              .then(() => {
                  this.$router.push({
        name: "dashboard",
        params: { ID: this.$route.params.ID , Email: this.$route.params.Email }
      })
              });
          });
        });
     

    }
    /* eslint-enable */
  }


};
</script>

