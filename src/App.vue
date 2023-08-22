<template>
	<router-link to="/">Home</router-link> |
	<router-link to="/about">About</router-link>
	<router-view/>
</template>

<style lang="scss">
	body {
		margin: 0;
		padding: 0;
		font-family: "nc3Jp", "YakuHanJPs", "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", sans-serif !important;
	}

	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
</style>
