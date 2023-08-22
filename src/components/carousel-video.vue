<template>
	<div class="videos" id="carousel">
		<div class="videosTitle">
			<div class="videosTag">
				<img title="heading_videos01" src="../assets/picture/heading_videos01.svg" class="heading_videos01">
			</div>
			<div class="videosTitletxt">
				<img src="../assets/picture/heading_videos_sub01.svg">
			</div>
			<div class="videosChange">
				<div class="previousVideoBackgroud" @click="carousel_minus(), carousel_move_right()">
					<img title="previous_video" src="../assets/picture/previous_video.png" class="previous_video">
				</div>
				<div class="nextVideoBackgroud" @click="carousel_plus(), carousel_move_left()">
					<img title="next_video" src="../assets/picture/next_video.png" class="next_video">
				</div>
			</div>
		</div>
		<div class="videosCarousel">
			<img title="img_videos03" src="../assets/picture/img_videos03.jpg" class="img_videos03" :class="carousel_animation">
			<img title="img_videos02" src="../assets/picture/img_videos02.jpg" class="img_videos02" :class="carousel_animation">
			<img title="img_videos01" src="../assets/picture/img_videos01.jpg" class="img_videos01" :class="carousel_animation">
		</div>
	</div>
</template>

<style lang="scss" src="../assets/scss/carousel.scss" scoped></style>

<script>
	export default {
		el: '#carousel',
		data() {
			return {
				carousel_control: 1,
				carousel_animation: '',
			};
		},
		methods: {
			carousel_plus() { 
				// if (this.carousel_control < 3) {
				// 	this.carousel_control += 1;
				// }
				this.carousel_control < 3 ? this.carousel_control += 1 : ''
			},
			carousel_minus() {
				if (this.carousel_control > 1) {
					this.carousel_control -= 1;
				}
			},
			carousel_move_left() {
				if (this.carousel_control == 2) {
					this.carousel_animation = 'nextVideo';
				} else if (this.carousel_control == 3) {
					this.carousel_animation = 'nextVideo2'
				}
			},
			carousel_move_right() {
				if (this.carousel_control == 2) {
					this.carousel_animation = 'previousVideo2';
				} else if (this.carousel_control == 1) {
					this.carousel_animation = 'previousVideo'
				}
			},
		},
	};
</script>