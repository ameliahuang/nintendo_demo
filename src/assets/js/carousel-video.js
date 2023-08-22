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
			//  this.carousel_control += 1;
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