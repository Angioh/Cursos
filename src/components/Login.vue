<template>
  <div>

      <label for="name">Usuario:</label>
      <input
        v-model="usuario"
        type="text"
        id="name"
      />
      <br />
      <label for="password">Contraseña:</label>
      <input
      @keypress.enter="login"
        v-model="contrasenia"
        type="password"
        id="password"
      />
      <br />
      <button :disabled="!usuario && !contrasenia" @click="login">Conectarse</button>

  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import {usePermiso} from "@/stores/PiniaStore"
import { ref,onMounted } from "vue";
import axios  from 'axios'

const router = useRouter();
const contrasenia = ref("")
const usuario = ref("")
let users = ref([])


//Metodos
const login =  async () => {
 const datos = await axios.get('http://localhost:3000/usuarios')
  users = datos.data
  users.map((el)=>{
    if(el.email === usuario.value && el.password===contrasenia.value){
      router.push({path: '/dashboard'})
    }
    else{
      console.log(el.email)
      alert('Usuario o contraseña incorrecto')
      
    }
  })

}


</script>

<style lang="scss" scoped></style>
