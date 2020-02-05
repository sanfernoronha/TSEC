<template>
  <v-container class="fill-height" id="my_container">
    <!-- <v-row>
      <v-col
        cols="12"
        sm="1"
        md="3"
        lg="3"
        v-for="item in volunteering"
        :key="item.eventID"
        class="mr-5"
      >
        <v-skeleton-loader
          :loading="loading"
          transition="scale-transition"
          height="94"
          type="card-avatar, article, actions"
        >
          <v-card
            class="my-12 mr-12"
            max-width="374"
            elevation="200"
            width="200"
            color="#385F73"
            dark
          >
            <v-img
              height="150"
              src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
              contain
            ></v-img>

            <v-card-title>
              {{item.title}}
              <v-row align="center" justify="end"></v-row>
            </v-card-title>
            <v-card-text>
              <v-row align="center">
                <div class="white--text ml-4">{{item.location}}</div>
              </v-row>

              <div class="my-4 subtitle-2 white--text">{{item.startDate}}</div>
            </v-card-text>

            

            <v-card-actions>
             

              <v-btn small class="ma-2" color="success" @click="viewMore(item.eventID)">View More</v-btn>
            </v-card-actions>
          </v-card>
        </v-skeleton-loader>
      </v-col>
    </v-row> -->
    <h1>This is schedule component</h1>
  </v-container>
</template>

<script>
// import db from "../components/firebaseInit";
export default {
  name: "schedule",
  data() {
    return {
    //   loading: false,
    //   volunteering: [],
    //   keywords: []
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
    // this.loading = true;
    // db.collection("events")
    //   .get()
    //   .then(querySnapshot => {
    //     querySnapshot.forEach(doc => {
    //       const data = {
    //         description: doc.data().Description,
    //         endDate: doc.data().End_Date,
    //         eventID: doc.data().Event_ID,
    //         imageURL: doc.data().Image_URL,
    //         keywords: doc.data().Keywords,
    //         location: doc.data().Location,
    //         startDate: doc.data().Start_Date,
    //         title: doc.data().Title
    //       };
    //       this.volunteering.push(data);
    //       this
    //     });
    //   });
  }
};
</script>