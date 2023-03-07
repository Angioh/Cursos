import {defineStore} from "pinia"
import { ref,computed } from "vue"


export const usePermiso = defineStore('permisos',()=>{
    //estado
    const permiso = ref(false)
    //getters
    const estaPermitido = computed(()=> permiso.value)
    //Acciones
    const cambiaPermiso = (valor) => permiso.value = valor

    return{
        estaPermitido,
        cambiaPermiso
    }
})