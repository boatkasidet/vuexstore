<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-container>
      <v-row>
        <v-col cols="5" md="4">
          <h4>Name</h4>
          <v-text-field v-model="name" :counter="12" required />
        </v-col>
        <v-col cols="5" md="4">
          <h4>Phone</h4>
          <v-text-field v-model="Phone" :counter="10" required />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="5" md="3"> Espresso (เอสเพรสโซ่) </v-col>
        <v-col cols="5" md="2">
          <h4>Quantity</h4>
          <v-text-field v-model="Es" :counter="2" required />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="5" md="3"> Americano (อเมริกาโน่) </v-col>
        <v-col cols="5" md="2">
          <h4>Quantity</h4>
          <v-text-field v-model="Am" :counter="2" required />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="5" md="3"> Latte (ลาเต้) </v-col>
        <v-col cols="5" md="2">
          <h4>Quantity</h4>
          <v-text-field v-model="La" required />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="5" md="3"> Cappuccino (คาปูชิโน) </v-col>
        <v-col cols="5" md="2">
          <h4>Quantity</h4>
          <v-text-field v-model="Ca" :counter="2" required />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="5" md="3"> Mocha (มอคค่า) </v-col>
        <v-col cols="5" md="2">
          <h4>Quantity</h4>
          <v-text-field v-model="Mo" :counter="2" required />
        </v-col>
      </v-row>
    </v-container>
    <v-btn color="success" class="mr-4" @click="validate"> Submit </v-btn>
  </v-form>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      name: '',
      Phone: '',
      Es: '',
      Am: '',
      La: '',
      Ca: '',
      Mo: '',
    }
  },
  computed: {
    ...mapGetters(['data']),
  },
  methods: {
    validate() {
      const name = this.name
      const Phone = this.Phone
      const Es = this.Es
      const Am = this.Am
      const La = this.La
      const Ca = this.Ca
      const Mo = this.Mo
      this.$store.commit('input', {
        name,
        Phone,
        Es,
        Am,
        La,
        Ca,
        Mo,
      })
    },
  },
}
</script>
