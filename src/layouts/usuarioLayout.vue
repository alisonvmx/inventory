<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title style="font-weight: bold !important;">
          A3J Inventories
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
    >
      <q-list>
        <q-item-label
          header
        >
          Serviços
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';

const linksList = [
  {
    title: 'Home',
    icon: 'home',
    link: '/usuario',
  },
  {
    title: 'Inventário',
    icon: 'card_giftcard',
    link: '/usuario/listarItems',
  },
  {
    title: 'Cadastrar Item',
    icon: 'card_giftcard',
    link: '/usuario/cadastroItem',
  },
  {
    title: 'Cadastrar Estoque',
    icon: 'history',
    link: '/usuario/cadastroEstoque',
  },
  {
    title: 'Controle De Usuários',
    icon: 'shuffle',
    link: '/usuario/ControleUsuarios',
  },
  {
    title: 'Entrada/Saída De Estoque',
    icon: 'supervisor_account',
    link: '/usuario/entradaEstoque',
  },
  {
    title: 'Histórico',
    icon: 'room_preferences',
    link: '/usuario/historico',
  },
  {
    title: 'Gerar Relatorio',
    icon: 'room_preferences',
    link: '/usuario/Relatorio',
  },
];

export default defineComponent({
  name: 'InquilinoMainLayout',
  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
<style>
a{
  text-decoration: none;
  color: black;
}
</style>
