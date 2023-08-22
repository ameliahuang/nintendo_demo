<template>
  <div class="slide">
	<div class="slide-ctrl">
		<div class="slide-prev" @click="slideCtrl(-1)">Prev</div>
		<div class="slide-next" @click="slideCtrl(1)">Next</div>
	</div>

	<transition-group name="flip-list" tag="ul" class="slide-list">
		<li v-for="item in slideData" :key="item.id">
			<img title="img_videos01" v-bind:src="welfare[item.ref].title">	
			<!-- <article class="slide-article">
				<h3>
					{{ welfare[item.ref].title }}
				</h3>
				<div>
					<p v-for="(info, j) in welfare[item.ref].info" :key="j">
						{{ info }}
					</p>
				</div>
			</article> -->
		</li>
	</transition-group>
	<!-- <div id="kobbe">{{slideData}}</div> -->
	</div>
</template>

<script>
	export default {
		name: "SlideVideo",
		data() {
			return {
				clickWait: false,
				timer: {},
				slideData: [],
				welfare: [
					{					
						title: "../assets/picture/img_videos01.jpg",
						// info: ["年終/績效獎金", "激勵/全勤獎金"],
					},
					{
						title: "../assets/picture/img_videos02.jpg",
						// info: ["婚喪喜慶津貼補助", "生日/生育禮金"],
					},
					{
						title: "../assets/picture/img_videos03.jpg",
						// info: ["新人訓練", "新人訓練", "前輩指導"],
					},
					// {
					// 	title: "多元福利",
					// 	info: ["尾牙餐會", "不定期節慶活動", "咖啡吧/零食櫃"],
					// },
					// {
					// 	title: "完善制度",
					// 	info: ["勞健保", "團保", "週休二日/特休假"],
					// },
					// {
					// 	title: "舒適環境",
					// 	info: ["多元員工休息區", "健身器材"],
					// },
				],
			};
		},
		mounted() {
			for (let i = 0; i < this.welfare.length * 2; i++) {
				let obj = {};
				obj.id = i;
				obj.ref = i % this.welfare.length;
				this.slideData.push(obj);
			}
		},
		methods: {
			copyData() {
				const arr = [];
				for (let i = 0; i < this.welfare.length * 2; i++) {
					let obj = {};
					obj.id = i;
					obj.ref = i % this.welfare.length;
					this.arr.push(obj);
				}
				return arr;
			},
			setTime() {
				this.timer = setTimeout(() => {
					this.clickWait = false;
				}, 500);
			},
			stopTime() {
				clearInterval(this.timer);
			},
			slideCtrl(slidesToShow = 1) {
				if (this.clickWait) {
					return;
				}
				this.stopTime();
				this.clickWait = true;
				if (slidesToShow > 0) {
					const shiftItem = this.slideData.shift();
					this.slideData.push(shiftItem);
					this.setTime();
					return;
				}
				if (slidesToShow < 0) {
					const shiftItem = this.slideData.pop();
					this.slideData.unshift(shiftItem);
					this.setTime();
				}
			},
		},
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	h3 {
		margin: 40px 0 0;
	}
	ul {
		list-style-type: none;
		padding: 0;
	}
	a {
		color: #42b983;
	}
/* slide ctrl */
	.slide-prev,
	.slide-next {
		user-select: none;
		width: 150px;
		display: inline-block;
		background-color: #000;
		color: #fff;
		margin: 0 10px;
		padding: 5px 15px;
		border-radius: 50px;
		cursor: pointer;
		&:hover {
			color: #ff0;
		}
	}
/* slide */
	.slide {
		width: 100%;
		overflow: hidden;
	}
	.slide-list {
		display: flex;
	}
	.slide-list li {
		position: relative;
		flex: calc(100% / 2) 0 0;
		left: calc(-100% / 2 * 2.5);
		@media screen and (max-width: 991px) {
			&:nth-child(4) .slide-article {
			background-color: #ff0;
			}
		}
		@media screen and (min-width: 992px) {
			flex: calc(100% / 4) 0 0;
			left: calc(-100% / 4 * 2.5);
			&:nth-child(5) .slide-article {
			background-color: #ff0;
			}
		}

		&:first-child,
		&:last-child {
			z-index: -1;
			opacity: 0;
		}
	}
	.slide-article {
		background-color: #eee;
		padding-top: 10px;
		height: 100%;
		margin: 10px;
		border-radius: 10px;
		box-sizing: border-box;
		padding: 10px;
	}
	.flip-list-move {
		transition: transform 0.8s;
	}
</style>



<!-- <template>
   <carousel :perpage="3" :autoplay="false" :navigationEnbaled="true">
		<slide>
			<img title="img_videos03" src="../assets/picture/img_videos03.jpg" class="img_videos03">
		</slide>
		<slide>
			<img title="img_videos02" src="../assets/picture/img_videos02.jpg" class="img_videos02">
		</slide>
		<slide>
			<img title="img_videos01" src="../assets/picture/img_videos01.jpg" class="img_videos01">
		</slide>
	</carousel>
</template>

<script>
	import { Carousel, Slide } from 'vue-carousel';
	export default {
		components: {
			Carousel,
			Slide
		}
	};
</script> -->