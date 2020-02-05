<template>
  <v-container class="fill-height">
    <v-row>
      <v-col
        cols="12"
        sm="1"
        md="3"
        lg="3"
        v-for="item in schools"
        :key="item.id"
        class="mr-5"
      >
        
          <v-card
            class="my-12 mr-12"
            max-width="374"
            elevation="200"
            width="200"
            color="#385F73"
            dark
          >
            <!-- <v-img
              height="150"
              src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
              contain
            ></v-img> -->

            <v-card-title class="subtitle-2">
              {{item.name}}
              <v-row align="center" justify="end"></v-row>
            </v-card-title>
            <v-card-text>
              <v-row align="center">
                <div class="white--text ml-4">{{item.location}}</div>
              </v-row>

              <div>
              <v-row>
                <v-col
                  v-for="(labels,index) in item.clubs"
                  :key="labels[index]"
                  cols="12"
                  sm="1"
                  md="4"
                  lg="5"
                >
                  <v-chip class="ma-2" color="primary" label text-color="white" small >
                    
                    {{labels}}
                  </v-chip>
                </v-col>
              </v-row>
            </div>

              <!-- <div class="my-4 subtitle-2 white--text">{{item.startDate}}</div> -->
            </v-card-text>

            

            <v-card-actions>
             

              <!-- <v-btn small class="ma-2" color="success" @click="viewMore(item.eventID)">View More</v-btn> -->
            </v-card-actions>
          </v-card>
        
      </v-col>
    </v-row>
    
  </v-container>
</template>

<script>
import db from "../components/firebaseinit";
export default {
  name: "mumbai",
  data() {
    return {
      loading: false,
      schools: [],
      keywords: []
    };
  },
  methods: {
    // viewMore(id) {
    //   this.$router.push({
    //     name: "viewMore",
    //     params: { EventID: id, volEmail: this.$route.params.userEmail }
    //   });
    // }
  },
  created() {
    this.loading = true;
    db.collection("schools")
    .where("location","==","Mumbai")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            clubs: doc.data().clubs,
            location: doc.data().location,
            name: doc.data().name,
            id: doc.id
          };
          this.schools.push(data);
          
          
        });
      });
  }
};
</script>