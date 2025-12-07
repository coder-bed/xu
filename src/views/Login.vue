<template>
	<div class="login">
		<div class="layer1"></div>
		<div class="layer2"></div>
		<div class="layer3"></div>
		<div class="layer4"></div>
		<div class="layer5"></div>
	</div>
</template>

<script lang="ts" setup>
let num = 5;
console.log(num);
</script>

<style lang="scss" scoped>
@use 'sass:math';
@use 'sass:string';
.login {
	position: relative;
	width: 100vw;
	height: 100vh;
	background: linear-gradient(to bottom, #0a2463, #000000);
}
@function star($n) {
	$result: '#{math.random(100)}vw #{math.random(100)}vh 0 #fff';
	@for $i from 2 through $n {
		$result: '#{$result},#{math.random(100)}vw #{math.random(100)}vh 0 #fff';
	}
	@return string.unquote($result);
}
$n: 5;
$duration: 400s;
$count: 1000;
@for $i from 1 through $n {
	$duration: math.floor(math.div($duration, 2));
	$count: math.floor(math.div($count, 2));
	.layer#{$i} {
		position: fixed;
		left: 0;
		top: 0;
		width: #{$i}px;
		height: #{$i}px;
		border-radius: 50%;
		box-shadow: star($count);
		animation: moveUp $duration linear infinite;
	}
	.layer#{$i}::after {
		content: '';
		position: inherit;
		width: inherit;
		height: inherit;
		border-radius: inherit;
		box-shadow: inherit;
		left: 0;
		top: 100vh;
	}
}
@keyframes moveUp {
	to {
		transform: translateY(-100vh);
	}
}
</style>
