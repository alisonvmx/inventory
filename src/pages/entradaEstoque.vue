<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable max-len -->
<template>
  <div class="title"><p>Entrada/Saída De Estoque</p></div>
  <q-page>
    <q-form @submit="handleSubmit">
      <q-select outlined v-model="model" :options="historico"  label="Tipo de Transação" class="q-mb-md"/>
      <q-input outlined v-model="name" label="Código Item" class="q-mb-md"/>
      <q-select outlined v-model="model" :options="estoques"  label="Estoque" class="q-mb-md"/>
      <q-input outlined v-model="cpf" type="number" label="Quantidade Items" class="q-mb-md"/>
      <q-input filled v-model="date" class="q-mb-md" label="Data/Hora" style="width: 220px; border: 1px solid black; border-radius: 5px;">
      <template v-slot:prepend>
        <q-icon name="event" class="cursor-pointer" >
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-date v-model="date" mask="YYYY-MM-DD HH:mm">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>

      <template v-slot:append>
        <q-icon name="access_time" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-time v-model="date" mask="YYYY-MM-DD HH:mm" format24h>
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-time>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
      <q-btn type="submit" label="Salvar" color="primary"/>
    </q-form>
  </q-page>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    return {
      model: ref(''),
      historico: [
        'Saída', 'Entrada',
      ],

      options: [
        'ex: 1 andar', 'ex: Setor Sul',
      ],
      estoques: [
        'ex: 1 andar', 'ex: Setor Sul',
      ],
      date: ref('2023-05-31 19:30'),

    };
  },
};
</script>

<style>
  .q-form {
    padding: 10px 10px 10px 10px;
    margin: 0% 0% 5% 0%;
  }
.title{
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 2% 0% 0%;
  }
p{
  font-size: 20px;
  margin: 0%;
  font-weight: bold;
}

</style>
