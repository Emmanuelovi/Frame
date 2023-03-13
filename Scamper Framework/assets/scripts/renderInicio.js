const inicioContent = `
<div class="container">
renderizando el inicio
<section id="introduccion">
    <h2 class="titulos">Introducción</h2>
    <article>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque libero excepturi impedit, ea blanditiis provident eligendi nisi minima enim dignissimos corrupti accusamus reprehenderit eveniet iusto natus quibusdam distinctio magni voluptate.</p>
        <p>Ea ullam iure nemo rem deleniti. Animi libero dicta quis quas quae magni beatae, placeat obcaecati explicabo, itaque ducimus perspiciatis laudantium necessitatibus ea minus modi rem non sunt. Soluta, ipsa!</p>
        <p>Nulla corrupti officiis laboriosam laborum nemo soluta esse aliquam. Sed voluptatum nobis expedita placeat a odit necessitatibus veniam consequatur, quis eligendi facilis, laudantium fugiat voluptate fugit, dicta veritatis ipsam quisquam!</p>
    </article>
</section>

<section id="requerimientos">
    <h2 class="titulos">Requerimientos</h2>
    <article>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque libero excepturi impedit, ea blanditiis provident eligendi nisi minima enim dignissimos corrupti accusamus reprehenderit eveniet iusto natus quibusdam distinctio magni voluptate.</p>
        <p>Ea ullam iure nemo rem deleniti. Animi libero dicta quis quas quae magni beatae, placeat obcaecati explicabo, itaque ducimus perspiciatis laudantium necessitatibus ea minus modi rem non sunt. Soluta, ipsa!</p>
        <p>Nulla corrupti officiis laboriosam laborum nemo soluta esse aliquam. Sed voluptatum nobis expedita placeat a odit necessitatibus veniam consequatur, quis eligendi facilis, laudantium fugiat voluptate fugit, dicta veritatis ipsam quisquam!</p>
    </article>
</section>

<section id="botones">
    <h2 class="titulos">Botones</h2>

</section>

</div>
`

const renderInicio = () => {
    closeMenu()
    document.querySelector("#myApp").innerHTML=inicioContent
}