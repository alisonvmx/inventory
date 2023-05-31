<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <q-card-section class="login flex justify-center items-center"
  style="height: 100vh; background-color: #1976D2; flex-direction: column;">

    <q-section class="q-mb-lg"
    style="text-align: center; text-transform: uppercase; font-weight: bold; color: white;">
      <img src="/src/assets/cart.svg">
      <p>cond orders</p>
    </q-section>

    <q-form class="flex justify-center items-center column" @submit.prevent="login">
      <q-input class="q-mb-xs" rounded outlined bg-color="white" color="black"
      v-model="user.cpf" label="Usuário" mask="###.###.###-##" required>
        <template #prepend>
          <q-avatar>
            <img src="/src/assets/user.svg">
          </q-avatar>
        </template>
      </q-input>
      <q-input rounded outlined bg-color="white" color="black" v-model="user.password"
      label="Chave de Acesso" type="password" maxlength="12" required>
        <template #prepend>
          <q-avatar>
            <img src="/src/assets/house.svg">
          </q-avatar>
        </template>
      </q-input>
      <p class="q-mt-lg q-mb-none" style="color: white; text-transform: uppercase;
        font-weight: bold;">
          Perfil de usuário
       </p>
      <q-section class="flex justify-center items-center row">
        <q-select rounded outlined  v-model="user.perfil" :options="options"
        style="text-transform: uppercase; width: 152px;"
        bg-color="white">
          <template v-slot:append>
            <q-avatar>
              <img src="/src/assets/user.svg">
            </q-avatar>
          </template>
        </q-select>
        <q-btn round style="background-color: white; margin-left: 10px;"
        type="submit" onclick="">
          <q-avatar size = "42px">
            <img src = "/src/assets/logar.jpg">
          </q-avatar>
        </q-btn >
      </q-section>
    </q-form>
  </q-card-section>
</template>

<script setup>
import { ref, reactive } from 'vue';

const options = ref(['Usuário', 'Gerente']);

const user = reactive({
  cpf: '',
  password: '',
  perfil: options.value[0],
});

</script>
