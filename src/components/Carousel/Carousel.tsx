import carouselImageOne from "../../img/carousel/img1.png"
import carouselImageTwo from "../../img/carousel/img2.png"
import carouselImageThree from "../../img/carousel/img3.png"
import carouselImageFour from "../../img/carousel/img4.png"
import carouselImageFive from "../../img/carousel/img5.png"
import carouselImageSix from "../../img/carousel/img6.png"
import carouselImageSeven from "../../img/carousel/img7.png"
import carouselImageEight from "../../img/carousel/img8.png"
import {
  CarouselContainer,
  CarouselItem,
  CarouselTrack,
} from "./Carousel.styled"

// Assets

const Carousel = () => {
  // Crear un array de 8 imágenes
  const images = [
    carouselImageOne,
    carouselImageTwo,
    carouselImageThree,
    carouselImageFour,
    carouselImageFive,
    carouselImageSix,
    carouselImageSeven,
    carouselImageEight,
  ]

  return (
    <CarouselContainer>
      <CarouselTrack>
        {images.map((image, index) => (
          <CarouselItem key={`carousel-item-${index}`}>
            <img src={image} alt={`Carousel panel ${index + 1}`} />
          </CarouselItem>
        ))}
        {/* Duplicamos las imágenes para crear el efecto infinito */}
        {images.map((image, index) => (
          <CarouselItem key={`carousel-item-duplicate-${index}`}>
            <img src={image} alt={`Carousel panel duplicate ${index + 1}`} />
          </CarouselItem>
        ))}
      </CarouselTrack>
    </CarouselContainer>
  )
}

export { Carousel }
