import s from "./ScaleGallery.module.scss";

const imgURL = [
  [
    "/images/scaleGallery/scaleGallery-4.jpg",
    "Maria Sullivan Studio",
    "NY Spring 2020",
  ],
  [
    "/images/scaleGallery/scaleGallery-6.jpg",
    "No 291 Dave Sullivan",
    "Paris fashion week 2019",
  ],
  [
    "/images/scaleGallery/scaleGallery-5.jpg",
    "Cassie Junior",
    "Stadium X Turan 2020",
  ],
  [
    "/images/scaleGallery/scaleGallery-1.jpg",
    "Cassie Junior",
    "Stadium X Turan 2020",
  ],
  [
    "/images/scaleGallery/scaleGallery-7.jpg",
    "Cassie Junior",
    "Stadium X Turan 2020",
  ],
  [
    "/images/scaleGallery/scaleGallery-2.jpg",
    "Cassie Junior",
    "Stadium X Turan 2020",
  ],
  [
    "/images/scaleGallery/scaleGallery-3.jpg",
    "Cassie Junior",
    "Stadium X Turan 2020",
  ],
];

export default function ScaleGallery() {
  return (
    <>
      <nav className={s.nav}>
        <span className={s.nav__item}>+</span>
        <span>PROJECTS</span>
        <span>ABOUT</span>
        <span>CONTACT</span>
      </nav>
      <h1 className={s.title}>Scale Gallery</h1>
      <section className={s.gallery}>
        <div className={s.gallery__firstSection}>
          <p className={s.gallery__firstSection__text}>
            Collection of differents scales. <br />
            Transform : scale you can use it. <br />
            For easy and beautiful animations. <br />
            Just explore.
          </p>

          <div className={s.gallery__firstSection__bottom}>
            <span className={s.gallery__firstSection__bottom__firstline}>
              DEV
            </span>
            <span className={s.gallery__firstSection__bottom__secondline}>
              No. 003
            </span>
          </div>
        </div>
        <div className={s.gallery__gallerySection}>
          {imgURL.map((img, i) => (
            <div key={i} className={s.gallery__gallerySection__imgContainer}>
              <img
                src={img[0]}
                alt={img[1]}
                className={s.gallery__gallerySection__img}
              />
              <div className={s.gallery__gallerySection__text}>
                <span>{img[1]}</span>
                <span>{img[2]}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
