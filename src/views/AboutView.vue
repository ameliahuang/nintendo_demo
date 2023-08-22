<template>
	<navTop/>
	<main>
		<div class="mainTop">
			<img src="../assets/picture/img_hero01.jpg" class="hero1">
			<img title="logo_site01" src="../assets/picture/logo_site01.png" class="logo_site01">
			<div class="released">
				<div class="releasedtxt">
					<img src="../assets/picture/txt_hero_lead01.svg">
				</div>
			</div>
			<div class="news">
				<div class="newsTitle">
					<div class="newsTitle_en">
						<img src="../assets/picture/heading_news_sub01.svg">
					</div>
					<div class="newsTitle_jp">
						<img src="../assets/picture/heading_news01.svg">
					</div>
				</div>
				<div class="newsBox">
					<div class="newsLeft">
						<div class="newsSideBlock red"></div>
						<div class="newsLeftWhite">
							<div class="newsskewback">
								<img title="newsLeftNext" src="../assets/picture/arrow-right.png" class="newsLeftNext">
								<div class="newsLeftContent">
									<div class="newsLeftDate"> 2023.07.04 </div>
									<div class="newsLeftContentTitle"> 第2弾 入場者プレゼント 配布開始 </div>
								</div>
							</div>
						</div>
					</div>
					<div class="newsRight">
						<div class="newsTwitter">
							<div class="newsSNSWhite">
								<div class="newsskewback">
									<img title="newsImg" src="../assets/picture/twitter.png" class="newsImg">
									<div class="newsTwittertxt"> 公式 Twitter </div>
									<img title="newsTwitterNext" src="../assets/picture/right-arrow.png" class="newsSNSNext newsSNSNext_Twitter">
								</div>
							</div>
							<div class="newsSideBlock blue"></div>
						</div>
						<div class="newsInstagram">                                
							<div class="newsSNSWhite">
								<div class="newsskewback">
									<img title="newsImg" src="../assets/picture/instagram.png" class="newsImg">
									<div class="newsInstagramtxt"> 公式 Instagram </div>
									<img title="newsInstagramNext" src="../assets/picture/arrow-right.png" class="newsSNSNext newsSNSNext_Instagram">
								</div>
							</div>
							<div class="newsSideBlock red"></div>
						</div>
					</div>
				</div>
			</div>
			<carouselVideo class="carousel"/>
		</div>
		<div class="mainStory">
			<img title="bg_story01" src="../assets/picture/bg_story01.png" class="bg_story01">
			<div class="story">
				<img title="storyTitleSub" src="../assets/picture/heading_story_sub01.svg" class="storyTitleSub">
				<img title="storyTitle" src="../assets/picture/heading_story01.svg" class="storyTitle">
				<div class="storyContent">
					<p> ニューヨークで配管工を営む双子の<br>
						兄弟マリオとルイージ。<br>
						謎の土管で迷いこんだのは、魔法に満ちた新世界。<br>
						はなればなれになってしまった兄弟が、<br>
						絆の力で世界の危機に立ち向かう。<br>
					</p>
				</div>
			</div>
			<div class="storyImgs">
				<table>
					<tr>
						<td rowspan="2" colspan="2" class="width_400">
							<div class="img_story img_story01"><img src="../assets/picture/img_story01.jpg"></div>
						</td>
						<td class="width_260">
							<div class="img_story img_story02"><img src="../assets/picture/img_story02.jpg"></div>
						</td>
						<td colspan="2" class="width_520">
							<div class="img_story img_story03"><img src="../assets/picture/img_story03.jpg"></div>
						</td>
					</tr>
					<tr>
						<td colspan="2" class="width_520">
							<div class="img_story img_story04"><img src="../assets/picture/img_story04.jpg"></div>
						</td>
						<td class="width_260">
							<div class="img_story img_story05"><img src="../assets/picture/img_story05.jpg"></div>
						</td>
					</tr>
					<tr>
						<td class="width_195">
							<div class="img_story img_story06"><img src="../assets/picture/img_story06.jpg"></div>
						</td>
						<td class="width_195">
							<div class="img_story img_story07"><img src="../assets/picture/img_story07.jpg"></div>
						</td>
						<td colspan="3" class="width_790">
							<div class="img_story img_story08"><img src="../assets/picture/img_story08.jpg"></div>
						</td>
					</tr>
				</table>
			</div>
		</div>
		<div class="cast">
			<div class="castTitle">
				<img src="../assets/picture/heading_cast_sub01.svg" class="castTitleSub">
				<img src="../assets/picture/heading_cast01.svg" class="castTitleSubTag">
			</div>
			<div class="castlist">
				<div class="castContent">
					<div class="cast_scaleAnimation"></div>
					<div class="castContent_bgParent">
						<img src="../assets/picture/bg_cast01.jpg">
					</div>
					<div class="castContentCorner RightCorner red"></div>
					<img src="../assets/picture/txt_cast_feature_desc01.svg" class="castContent_txt txtLeft">
					<img src="../assets/picture/img_cast01.png" class="castContent_img120 imgRight">
					<img src="../assets/picture/ico_cast_feature_desc01.svg" class="castContent_next castContent_nextRight">
				</div>
				<div class="castContent castContent_position_absolute02">
					<div class="cast_scaleAnimation"></div>
					<div class="castContent_bgParent">
						<img src="../assets/picture/bg_cast02.jpg">
					</div>
					<div class="castContentCorner LeftCorner green"></div>
					<img src="../assets/picture/txt_cast_feature_desc02.svg" class="castContent_txt txtRight">
					<img src="../assets/picture/img_cast02.png" class="castContent_img110 imgLeft">
					<img src="../assets/picture/ico_cast_feature_desc01.svg" class="castContent_next castContent_nextLeft">
				</div>
				<div class="castContent castContent_position_absolute03">
					<div class="cast_scaleAnimation"></div>
					<div class="castContent_bgParent">
						<img src="../assets/picture/bg_cast03.jpg">
					</div>
					<div class="castContentCorner RightCorner pink"></div>
					<img src="../assets/picture/txt_cast_feature_desc03.svg" class="castContent_txt txtLeft">
					<img src="../assets/picture/img_cast03.png" class="castContent_img110 imgRight">
					<img src="../assets/picture/ico_cast_feature_desc01.svg" class="castContent_next castContent_nextRight">
				</div>
				<div class="castContent castContent_position_absolute04">
					<div class="cast_scaleAnimation"></div>
					<div class="castContent_bgParent">
						<img src="../assets/picture/bg_cast04.jpg">
					</div>
					<div class="castContentCorner LeftCorner blue"></div>
					<img src="../assets/picture/txt_cast_feature_desc04.svg" class="castContent_txt txtRight">
					<img src="../assets/picture/img_cast04.png" class="castContent_img110 imgLeft">
					<img src="../assets/picture/ico_cast_feature_desc01.svg" class="castContent_next castContent_nextLeft">
				</div>
				<div class="castContent castContent_position_absolute05">
					<div class="cast_scaleAnimation"></div>
					<div class="castContent_bgParent">
						<img src="../assets/picture/bg_cast05.jpg">
					</div>
					<div class="castContentCorner RightCorner yellow"></div>
					<img src="../assets/picture/txt_cast_feature_desc05.svg" class="castContent_txt txtLeft">
					<img src="../assets/picture/img_cast05.png" class="castContent_img110 imgRight">
					<img src="../assets/picture/ico_cast_feature_desc01.svg" class="castContent_next castContent_nextRight">
				</div>
				<div class="castContent castContent_position_absolute06">
					<div class="cast_scaleAnimation"></div>
					<div class="castContent_bgParent">
						<img src="../assets/picture/bg_cast06.jpg">
					</div>
					<div class="castContentCorner LeftCorner brown"></div>
					<img src="../assets/picture/txt_cast_feature_desc06.svg" class="castContent_txt txtRight">
					<img src="../assets/picture/img_cast06.png" class="castContent_img110 imgLeft">
					<img src="../assets/picture/ico_cast_feature_desc01.svg" class="castContent_next castContent_nextLeft">
				</div>
			</div>
		</div>
		<div class="message">
			<div class="message-top">
				<div class="message-luigi">
					<img src="../assets/picture/img_pict_message02.png">
				</div>
				<div class="message-board">
					<img src="../assets/picture/bg_message_content01_t.png">
					<img src="../assets/picture/bg_message_content01_b.png" class="message-board_b">
					<div class="message_content">
						<img src="../assets/picture/heading_message_sub01.svg" class="message_title">
						<img src="../assets/picture/heading_message01.svg" class="message_producer">
						<p class="message_content-txt">
							スーパーマリオが、映画になりました。 <br>
							この映画は任天堂の開発チームとイルミネーションの制作チームが一緒になって、じっくりと時間をかけて作りました。これまで40年間にわたり作り続けてきたマリオのゲームの世界を楽しいストーリーにまとめたので、観ていて楽しいのと同時に、ゲームを遊んでいただいた時の感覚までよみがえると思います。 <br>
							マリオのゲームを遊んだことのない皆さんも、世代を超えて観ていただけるので、ぜひ映画館でご一緒にマリオたちの冒険を応援してください。
						</p>
						<p class="message_content-producer">
							任天堂株式会社 代表取締役フェロー <br>
							宮本茂
						</p>
					</div>
				</div>
				<div class="message_bg"></div>
				<div class="message-mario">
					<img src="../assets/picture/img_pict_message01.png">
				</div>
				<div class="message-top_bg">
				</div>
			</div>
			<div class="message-img">
				<img src="../assets/picture/img_message01.png">
			</div>
		</div>
		<div class="campaign">
			<div class="campaign_bg">
				<div class="campaign_top">
					<div class="campaign_top_ico">
						<img src="../assets/picture/ico_campaign_heading01.png">
					</div>
					<div class="campaign_top_sub">
						<img src="../assets/picture/heading_campaign_sub01.svg">
					</div>
					<div class="campaign_top_heading">
						<img src="../assets/picture/heading_campaign01.svg">
					</div>
				</div>
				<div class="campaign_main">
					<div class="campaign_main_line red"></div>
					<div class="campaign_main_content">
						<div class="campaign_middle_title_new">
							<img src="../assets/picture/ico_new_campaign_section01.svg">
						</div>
						<div class="campaign_middle_main">
							<div class="campaign_middle_main_content">
								<div class="campaign_middle_main_title">
									<img src="../assets/picture/ico_heading_campaign_section01.png" class="campaign_middle_mushroom_ico">
									<img src="../assets/picture/heading_campaign_section03.svg" class="campaign_middle_title_heading">
								</div>
								<p>
									劇場でご鑑賞いただいたお客様に先着で、映画で重要なカギを握るアイテム <br>
									"スーパースター"をあしらった＜『ザ・スーパーマリオブラザーズ・ムービー』スーパースターステッカー＞をプレゼント。
								</p>
								<div class="campaign_middle_link">
									<svg class="campaign_middle_link_next">
										<use xlink:href="#nc3-svgpack-icon-arrow-round-fill-right" fill="#FF0000"></use>
									</svg>
									<div class="campaign_middle_link_txt"> くわしくはこちら </div>
								</div>
							</div>
							<div class="campaign_middle_star">
								<img src="../assets/picture/img_campaign03.png">
							</div>
						</div>
					</div>
					<div class="campaign_main_line red"></div>
					<div class="campaign_main_content">
						<div class="campaign_bottom_main">
							<div class="campaign_bottom_main_title">
								<img src="../assets/picture/ico_heading_campaign_section01.png" class="campaign_middle_mushroom_ico">
								<img src="../assets/picture/heading_campaign_section02.svg" class="campaign_bottom_title_heading">
							</div>
							<p>
								劇場でご鑑賞いただいたお客様に先着で、映画に登場するいくつかのキャラクターをゲーム中の <br>
								ワンシーンとともに紹介する＜『ザ・スーパーマリオブラザーズ・ムービー』ハテナブック＞を <br>
								プレゼント。
							</p>
							<div class="campaign_bottom_cards">
								<img src="../assets/picture/img_campaign02.png">
							</div>
						</div>
					</div>
					<div class="campaign_main_line red"></div>
					<div class="campaign_picture_peach">
						<img src="../assets/picture/img_pict_campaign01.png">
					</div>
					<div class="campaign_picture_kinopio">
						<img src="../assets/picture/img_pict_campaign02.png">
					</div>
				</div>
			</div>
		</div>
		<div class="information">
			<div class="information_bg">
				<img src="../assets/picture/bg_information01.png">
			</div>
			<div class="information_content">
				<div class="information_title">
					<img src="../assets/picture/heading_information01.svg">
				</div>
				<div class="information_content_line"></div>
				<p> 上映劇場の情報は下記公式サイトをご確認ください </p>
				<div class="information_content_link">
					<img src="../assets/picture/btn_information01.png">
				</div>
			</div>
		</div>
	</main>
	<footer>
		<div class="footer_direct">
			<img src="../assets/picture/bnr_direct01.png" class="footer_direct_pict">
			<img src="../assets/picture/ico_bnr_direct01.svg" class="footer_direct_next">
		</div>
		<div class="footer_link">
			<div class="footer_link_content">
				<svg class="footer_link_next">
					<use xlink:href="#nc3-svgpack-icon-arrow-round-fill-right" fill="#FF0000"></use>
				</svg>
				<p> 任天堂ホームページ </p>
			</div>
			<div class="footer_link_content">
				<svg class="footer_link_next">
					<use xlink:href="#nc3-svgpack-icon-arrow-round-fill-right" fill="#FF0000"></use>
				</svg>
				<p> マリオポータル </p>
			</div>
		</div>
		<p class="footer_copyright"> © 2023 Nintendo and Universal Studios. All Rights Reserved. </p>
	</footer>
</template>

<style lang="scss" src="../assets/scss/mario.scss" scoped></style>

<script>
	import carouselVideo from '@/components/carousel-video.vue';
	import navTop from '@/components/navTop.vue';

	export default {
		name: 'carousel-Video',
		components: {
			carouselVideo,
			navTop
		},
	};
</script>