<template>
  <div class="title"><p>Gerar Relatório</p></div>
  <q-page>
    <q-form @submit="handleSubmit">
      <div class="teste">
        <q-select outlined v-model="transacao" :options="historico"
        label="Transação" class="q-mb-md select" style="margin-right: 20px;"/>
       <q-select outlined v-model="estoque" :options="estoques"
        label="Estoque" class="q-mb-md select" style="margin-left: 20px;"/>
       </div>
       <div style="display: flex; justify-content: center;">
        <q-input filled v-model="date" class="q-mb-md" label="Data Desejada"
        style="width: 150px; border: 1px solid black; border-radius: 5px; margin-right: 50px;">
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

    </q-input>
        <q-btn type="submit" label="Select" color="primary" style=" width: 120px; height: 58px;"/>

       </div>

    </q-form>
  </q-page>

</template>
<script>
import { ref } from 'vue';

export default {
  setup() {
    return {
      transacao: ref(''),
      estoque: ref(''),

      historico: [
        'Saída', 'Entrada',
      ],
      estoques: [
        ' 1 andar', 'Setor Sul',
      ],
      date: ref('2023-05-31'),
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
.q-table{
  padding: 5px;
}
.table{
  margin: 10px;
}
.teste{
  display: flex;
  justify-content: center;
  width: 100%;
  margin: auto;
}
.select{
  width: 140px;
}

</style>
