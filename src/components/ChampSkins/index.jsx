import { useEffect, useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import style from "./ChampSkins.module.scss"

export default function ChampSkins({ champID, champName, skinList }) {
	const [activeSlide, setActiveSlide] = useState(0)
	const [sliderPerView, setSlidesPerView] = useState(
		skinList.length <= 2 ? 1 : 2
	)
	const [initialSlide, setInitialSlide] = useState(0)
	const slideRef = useRef(null)

	useEffect(() => {
		const checkSlidesPerView = () => {
			const isDisplayReduced = window.innerWidth <= 1024
			setSlidesPerView(isDisplayReduced ? 1 : skinList.length <= 2 ? 1 : 2)
			const newInitialSlide = isDisplayReduced
				? 0
				: skinList.length > 2 && skinList.length <= 4
				? Math.floor(skinList.length / 2)
				: 0
			setInitialSlide(newInitialSlide)
			slideRef.current && slideRef.current.slideToLoop(newInitialSlide)
		}
		checkSlidesPerView()
		window.addEventListener("resize", checkSlidesPerView)
	}, [skinList.length])

	const handleSlideChange = (swiper) => {
		setActiveSlide(swiper.realIndex)
	}

	const handleSlideClick = (index) => {
		slideRef.current && slideRef.current.slideToLoop(index)
	}

	return (
		<section className={`flex-column ${style.carousel}`}>
			<h1>Skins</h1>
			<Swiper
				onSwiper={(swiper) => {
					slideRef.current = swiper
					swiper.on("slideChange", handleSlideChange)
				}}
				modules={[Pagination]}
				pagination={{
					clickable: true,
				}}
				loop={skinList.length > 4}
				spaceBetween={16}
				slidesPerView={sliderPerView}
				initialSlide={initialSlide}
				centeredSlides={true}
				speed={1000}
				freeMode={false}
				allowTouchMove={true}
				grabCursor={true}
				className={`${style.slides} ${
					skinList.length < 3 ? style.noEffects : ""
				}`}
			>
				{skinList.map((skin, index) => (
					<SwiperSlide
						key={skin.num}
						onClick={() => handleSlideClick(index)}
						className={`${style.slide} ${
							skinList.length < 3 ? style.big : ""
						} ${activeSlide === index ? style.active : ""}`}
					>
						<img
							src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champID}_${skin.num}.jpg`}
							alt={skin.name}
							className="img"
						/>
						<span>{index === 0 ? "Default " + champName : skin.name}</span>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	)
}
