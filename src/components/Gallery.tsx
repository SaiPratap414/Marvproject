import { FunctionComponent, useRef } from "react";
import styles from "./Gallery.module.css";

export type GalleryType = {
  className?: string;
};

const Gallery: FunctionComponent<GalleryType> = ({ className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section
      className={[styles.gallery, className].join(" ")}
      data-scroll-to="Gallery"
    >
      <div className={styles.gallery1}>
        <div className={styles.marvgallery}>MARVGALLERY</div>
        <div className={styles.imageGrid}>
          <div ref={containerRef} className={styles.gridContent}>
            <div className={styles.images}>
              <div className={styles.frameParent}>
                <div className={styles.imagePlaceholdersWrapper}>
                  <div className={styles.imagePlaceholders} />
                </div>
                <div className={styles.imageContentParent}>
                  <div className={styles.imageContent} />
                  <img
                    className={styles.marvAndPepCostumes0008}
                    loading="lazy"
                    alt=""
                    src="/marv-and-pep-costumes0008@2x.png"
                  />
                </div>
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.rectangleWrapper}>
                  <div className={styles.frameChild} />
                </div>
                <div className={styles.rectangleParent}>
                  <div className={styles.frameItem} />
                  <img
                    className={styles.untitled2000111}
                    loading="lazy"
                    alt=""
                    src="/untitled20001-1-1@2x.png"
                  />
                </div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.rectangleContainer}>
                  <div className={styles.frameInner} />
                </div>
                <div className={styles.rectangleGroup}>
                  <div className={styles.rectangleDiv} />
                  <img
                    className={styles.marvWebNewSet0009}
                    alt=""
                    src="/marv-web-new-set0009@2x.png"
                  />
                </div>
              </div>
              <div className={styles.groupDiv}>
                <div className={styles.rectangleFrame}>
                  <div className={styles.frameChild1} />
                </div>
                <div className={styles.rectangleParent1}>
                  <div className={styles.frameChild2} />
                  <img
                    className={styles.marvMems0011Icon}
                    alt=""
                    src="/marv-mems0011@2x.png"
                  />
                </div>
              </div>
              <div className={styles.frameParent1}>
                <div className={styles.rectangleWrapper1}>
                  <div className={styles.frameChild3} />
                </div>
                <div className={styles.rectangleParent2}>
                  <div className={styles.frameChild4} />
                  <img
                    className={styles.roadMap0008Icon}
                    alt=""
                    src="/road-map0008@2x.png"
                  />
                </div>
              </div>
              <div className={styles.frameParent2}>
                <div className={styles.rectangleWrapper2}>
                  <div className={styles.frameChild5} />
                </div>
                <div className={styles.rectangleParent3}>
                  <div className={styles.frameChild6} />
                  <img
                    className={styles.marvMems0013Icon}
                    alt=""
                    src="/marv-mems0013@2x.png"
                  />
                </div>
              </div>
              <div className={styles.frameParent3}>
                <div className={styles.rectangleWrapper3}>
                  <div className={styles.frameChild7} />
                </div>
                <div className={styles.rectangleParent4}>
                  <div className={styles.frameChild8} />
                  <img
                    className={styles.marvAndPepCostumes0009}
                    alt=""
                    src="/marv-and-pep-costumes0009@2x.png"
                  />
                </div>
              </div>
              <div className={styles.frameParent4}>
                <div className={styles.rectangleWrapper4}>
                  <div className={styles.frameChild9} />
                </div>
                <div className={styles.rectangleParent5}>
                  <div className={styles.frameChild10} />
                  <img
                    className={styles.marvMems0015Icon}
                    alt=""
                    src="/marv-mems0015@2x.png"
                  />
                </div>
              </div>
              <div className={styles.frameParent5}>
                <div className={styles.rectangleWrapper5}>
                  <div className={styles.frameChild11} />
                </div>
                <div className={styles.rectangleParent6}>
                  <div className={styles.frameChild12} />
                  <img
                    className={styles.marvWebNewSet0007}
                    loading="lazy"
                    alt=""
                    src="/marv-web-new-set0007@2x.png"
                  />
                </div>
              </div>
              <div className={styles.frameParent6}>
                <div className={styles.rectangleWrapper6}>
                  <div className={styles.frameChild13} />
                </div>
                <div className={styles.rectangleParent7}>
                  <div className={styles.frameChild14} />
                  <img
                    className={styles.roadMap0007Icon}
                    loading="lazy"
                    alt=""
                    src="/road-map0007@2x.png"
                  />
                </div>
              </div>
              <div className={styles.frameParent7}>
                <div className={styles.rectangleWrapper7}>
                  <div className={styles.frameChild15} />
                </div>
                <div className={styles.rectangleParent8}>
                  <div className={styles.frameChild16} />
                  <img
                    className={styles.marvMems0003Icon}
                    alt=""
                    src="/marv-mems0003@2x.png"
                  />
                </div>
              </div>
              <div className={styles.frameParent8}>
                <div className={styles.rectangleWrapper8}>
                  <div className={styles.frameChild17} />
                </div>
                <div className={styles.rectangleParent9}>
                  <div className={styles.frameChild18} />
                  <img
                    className={styles.marvMems0012Icon}
                    alt=""
                    src="/marv-mems0012@2x.png"
                  />
                </div>
              </div>
              <div className={styles.frameParent9}>
                <div className={styles.rectangleWrapper9}>
                  <div className={styles.frameChild19} />
                </div>
                <div className={styles.rectangleParent10}>
                  <div className={styles.frameChild20} />
                  <img
                    className={styles.marv0005Icon}
                    alt=""
                    src="/marv0005-1@2x.png"
                  />
                </div>
              </div>
              <div className={styles.frameParent10}>
                <div className={styles.rectangleWrapper10}>
                  <div className={styles.frameChild21} />
                </div>
                <div className={styles.rectangleParent11}>
                  <div className={styles.frameChild22} />
                  <img
                    className={styles.marvAndPepCostumes0001}
                    alt=""
                    src="/marv-and-pep-costumes0001@2x.png"
                  />
                </div>
              </div>
              <div className={styles.frameParent11}>
                <div className={styles.rectangleWrapper11}>
                  <div className={styles.frameChild23} />
                </div>
                <div className={styles.rectangleParent12}>
                  <div className={styles.frameChild24} />
                  <img
                    className={styles.marvAndPepCostumes0005}
                    alt=""
                    src="/marv-and-pep-costumes0005@2x.png"
                  />
                </div>
              </div>
              <div className={styles.frameParent12}>
                <div className={styles.rectangleWrapper12}>
                  <div className={styles.frameChild25} />
                </div>
                <div className={styles.rectangleParent13}>
                  <div className={styles.frameChild26} />
                  <img
                    className={styles.marvAndPepCostumes0006}
                    alt=""
                    src="/marv-and-pep-costumes0006@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.galleryTitles}>
          <img
            className={styles.roadMap000100071}
            loading="lazy"
            alt=""
            src="/road-map00010007-1@2x.png"
          />
        </div>
        <div className={styles.galleryTitles1}>
          <img
            className={styles.roadMap000100081}
            loading="lazy"
            alt=""
            src="/road-map00010008-1@2x.png"
          />
        </div>
      </div>
      <div className={styles.arrows}>
        <img
          className={styles.notoupArrowIcon}
          alt="Scroll Left"
          src="/notouparrow@2x.png"
          onClick={scrollLeft}
        />
        <img
          className={styles.notoupArrowIcon1}
          alt="Scroll Right"
          src="/notouparrow-1@2x.png"
          onClick={scrollRight}
        />
      </div>
    </section>
  );
};

export default Gallery;
