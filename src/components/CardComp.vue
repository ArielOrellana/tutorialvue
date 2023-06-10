<template>    
    <div class="card">
        <div class="card-body">
            <h5 v-if="title" class="card-title">{{ title }}</h5>
            <p v-if="parrafo" class="card-text">{{ parrafo }}</p>
            <img v-if="picture" :src="picture" alt="post img">
            <!-- se le puede agregar un name="default" pero es lo mismo que no ponerle nada al slot -->
            <slot></slot>
            <div class="d-grid gap-2">
                <!--
                    v-for= es foreach en otros leguajes
                    v-bind: se lo puede resumir a (:) dos puntos
                    :key es una validacion 
                -->
                <button v-for="btn in btns" :key="btn.text" class="btn" v-bind:class="btn.class">{{btn.txt}}</button>
                <slot name="footer"></slot>
            </div>
        </div>
    </div> 
</template>

<script>
export default {
    name: 'CardComp',
    props:['title', 'parrafo', 'btns', 'picture'],
}
</script>

<style scoped>
    .card{
        border: none;
        box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
    }
    .card img{
        max-width: 100%;
    }
</style>