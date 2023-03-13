const indexContent = `
<div class="container">
renderizando el index
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

<section id="encabezados">
		<h2 class="titulos">Encabezados</h2>
		<article>
				<h1>Titulo 1</h1>
				<h2>Titulo 2</h2>
				<h3>Titulo 3</h3>
				<h4>Titulo 4</h4>
				<h5>Titulo 5</h5>
				<h6>Titulo 6</h6>
		</article>
</section>

<section id="botones">
		<h2 class="titulos">Botones</h2>

</section>

</div>
`

const renderIndex = () => {
	closeMenu()
	document.querySelector("#myApp").innerHTML=indexContent
}