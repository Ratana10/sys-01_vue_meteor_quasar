<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="drawer = !drawer" />

        <q-toolbar-title> IT SHOPPING </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above
      :width="200"
      :breakpoint="500"
      bordered
      class="bg-grey-3"
    >
      <q-scroll-area class="fit">
        <div class="menu">
          <q-list>
            <q-item class="item" clickable v-ripple to="/" exact>
              <q-item-section avatar>
                <q-icon name="home" />
              </q-item-section>
              <q-item-section> Home </q-item-section>
            </q-item>

            <q-item class="item" clickable v-ripple to="/user">
              <q-item-section avatar>
                <q-icon name="person" />
              </q-item-section>
              <q-item-section> User </q-item-section>
            </q-item>

            <q-item class="item" clickable v-ripple to="/customer">
              <q-item-section avatar>
                <q-icon name="groups" />
              </q-item-section>
              <q-item-section> Customer </q-item-section>
            </q-item>

            <q-item class="item" clickable v-ripple to="/category">
              <q-item-section avatar>
                <q-icon name="backup_table" />
              </q-item-section>
              <q-item-section> Category </q-item-section>
            </q-item>

            <q-item class="item" clickable v-ripple to="/item">
              <q-item-section avatar>
                <q-icon name="dns" />
              </q-item-section>
              <q-item-section> Item </q-item-section>
            </q-item>

            <q-item class="item" clickable v-ripple to="/supplier">
              <q-item-section avatar>
                <q-icon name="maps_home_work" />
              </q-item-section>
              <q-item-section> Supplier </q-item-section>
            </q-item>

            <q-item class="item" clickable v-ripple to="/purchase">
              <q-item-section avatar>
                <q-icon name="inventory" />
              </q-item-section>
              <q-item-section> Purchase </q-item-section>
            </q-item>

            <q-item class="item" clickable v-ripple to="/sale">
              <q-item-section avatar>
                <q-icon name="add_shopping_cart" />
              </q-item-section>
              <q-item-section> Sale </q-item-section>
            </q-item>

            <q-list bordered class="item">
              <q-expansion-item icon="report" label="report">
                <q-item class="item" clickable v-ripple to="/import">
                  <q-item-section avatar>
                    <q-icon name="arrow_circle_down" />
                  </q-item-section>
                  <q-item-section> Import </q-item-section>
                </q-item>

                <q-item class="item" clickable v-ripple to="/export">
                  <q-item-section avatar>
                    <q-icon name="arrow_circle_up" />
                  </q-item-section>
                  <q-item-section> Export </q-item-section>
                </q-item>
              </q-expansion-item>
            </q-list>

            <q-item class="item" clickable v-ripple >
              <q-item-section avatar>
                <q-icon name="logout" />
              </q-item-section>
              <q-item-section> Logout </q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style>
/* body {
   font-family: sans-serif;
   padding: 10px;
} */
</style>
