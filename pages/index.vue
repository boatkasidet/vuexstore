<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-container>
      <v-row>
        <v-col cols="5" md="4">
          <v-text-field v-model="name" :counter="12" label="Name" required />
        </v-col>
        <v-col cols="5" md="4">
          <v-text-field v-model="Phone" :counter="10" label="Phone" required />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="5" md="3"> Espresso (เอสเพรสโซ่) </v-col>
        <v-col cols="5" md="2">
          <v-text-field
            v-model="Espresso"
            :counter="2"
            label="Quantity"
            required
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="5" md="3"> Americano (อเมริกาโน่) </v-col>
        <v-col cols="5" md="2">
          <v-text-field
            v-model="Americano"
            :counter="2"
            label="Quantity"
            required
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="5" md="3"> Latte (ลาเต้) </v-col>
        <v-col cols="5" md="2">
          <v-text-field
            v-model="Latte"
            :counter="2"
            label="Quantity"
            required
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="5" md="3"> Cappuccino (คาปูชิโน) </v-col>
        <v-col cols="5" md="2">
          <v-text-field
            v-model="Cappuccino"
            :counter="2"
            label="Quantity"
            required
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="5" md="3"> Mocha (มอคค่า) </v-col>
        <v-col cols="5" md="2">
          <v-text-field
            v-model="Mocha"
            :counter="2"
            label="Quantity"
            required
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="5" md="3"> Macchiato (มัคคิอาโต้) </v-col>
        <v-col cols="5" md="2">
          <v-text-field
            v-model="Macchiato"
            :counter="2"
            label="Quantity"
            required
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="5" md="3"> Frappe (เฟร้บเป้) </v-col>
        <v-col cols="5" md="2">
          <v-text-field
            v-model="Frappe"
            :counter="2"
            label="Quantity"
            required
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="5" md="3"> Affogato (อัฟโฟกาโต) </v-col>
        <v-col cols="5" md="2">
          <v-text-field
            v-model="Affogato"
            :counter="2"
            label="Quantity"
            required
          />
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
      lastname: '',
    }
  },
  computed: {
    ...mapGetters(['data']),
  },
  methods: {
    validate() {
      const name = this.name
      const Phone = this.Phone
      const Espresso = this.Espresso
      const Americano = this.Americano
      const Latte = this.Latte
      const Cappuccino = this.Cappuccino
      const Mocha = this.Mocha
      const Macchiato = this.Macchiato
      const Frappe = this.Frappe
      const Affogato = this.Affogato
      this.$store.commit('input', {
        name,
        Phone,
        Espresso,
        Americano,
        Latte,
        Cappuccino,
        Mocha,
        Macchiato,
        Frappe,
        Affogato,
      })
    },
  },
}
</script>
