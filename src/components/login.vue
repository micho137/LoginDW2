<template>
    <form @submit.prevent="onCreatePost()"
        class="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
        <div class="flex w-[30rem] flex-col space-y-10">
            <div class="text-center text-4xl font-medium">Iniciar Sesion</div>

            <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                <input type="text" placeholder="Usuario"
                    class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none" v-model='usuario'/>
            </div>

            <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                <input type="password" placeholder="Contraseña"
                    class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none" v-model='contraseña'/>
            </div>

            <button class="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400">
                INICIAR
            </button>

            <a href="#"
                class="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300">Olvidaste la
                contraseña?</a>

            <p class="text-center text-lg">
                No tienes cuenta?
                <a href="#" class="font-medium text-indigo-500 underline-offset-4 hover:underline">Crea una</a>
            </p>
        </div>
    </form>
</template>

<script>
import axios from 'axios'
export default ({
    data(){
        return{
            usuario:"",
            contraseña:""
        }
    },
    methods:{
        onCreatePost(){
            
        }
    }
})
</script>
