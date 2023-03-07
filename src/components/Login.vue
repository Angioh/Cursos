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
const login =  () =>{
    if(usuario.value === users.value){
      router.push({path: '/dashboard'})
    }
    else{
      alert('Usuario o contraseña incorrecto')
    }

}
onMounted(async () => {
 const datos = await axios.get('http://localhost:3000/usuarios')
  users = datos.data.map((el)=> el.email)
  console.log(users)
  console.log(usuario)
 
})
</script>

<style lang="scss" scoped></style>
