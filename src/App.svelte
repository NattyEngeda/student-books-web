<script>
  import './app.css'
  var count = 0;
  function incrementCount(){
    count+=1;
  }
  
  $: if(count >=10 ){
    console.log('THe element is hight')
  }

  $: console.log('hello natty')

</script>


<h1 class="text-5xl font-bold text-blue-500">Hello {name}</h1>
<button
class="py-3 px-4 rounded-xl bg-blue-500 text-white text-xl"
on:click={incrementCount}>{count}</button>
<style></style>