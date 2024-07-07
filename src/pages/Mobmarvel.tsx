import { FunctionComponent, useCallback } from "react";
import styles from "./Mobmarvel.module.css";

const Mobmarvel: FunctionComponent = () => {
  const onLinkContainerClick = useCallback(() => {
    window.open("https://twitter.com/");
  }, []);

  const onLinkContainerClick1 = useCallback(() => {
    window.open("https://youtube.com/");
  }, []);

  const onLinkContainerClick2 = useCallback(() => {
    window.open("https://t.me/");
  }, []);

  const onLinkContainerClick3 = useCallback(() => {
    window.open("https://instagram.com/");
  }, []);

  const onLinkContainerClick4 = useCallback(() => {
    window.open("https://www.reddit.com/");
  }, []);

  return (
    <div className={styles.mobmarvel}>
      <section className={styles.aboutUs}>
        <div className={styles.matter}>
          <div className={styles.vectorParent}>
            <img className={styles.vectorIcon} alt="" src="/img/vector.svg" />
            <img className={styles.vectorIcon1} alt="" src="/img/vector.svg" />
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.aNewKing}>A New King Has Risen</div>
              <div className={styles.meetPolaThe}>
              Marv, a frog with a distinct personality, stands out in the Solana
            ecosystem. He’s slightly racist, a trait that sometimes leads to
            awkward social interactions. His shyness makes him a reserved
            figure, often observing more than participating. However, Marv's
            love for dressing up adds a flair to his character, making him a
            stylish and memorable ruler..
              </div>
              <div className={styles.polaImage}>
                <div className={styles.vectorGroup}>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="/img/vector-2.svg"
                  />
                  <div className={styles.thisIsNot}>
                  Despite his quirks, Marv has risen to prominence in Solana,
                  where he rules with a gentle touch and a keen sense of
                  fashion. His approach to leadership combines his shy nature
                  with an undeniable charisma, creating a balance that resonates
                  with his community.
                  </div>
                </div>
              </div>
              <img
                className={styles.crowmAnimationIcon}
                alt=""
                src="/img/c.gif"
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.header}>
        <div className={styles.headerContent}>
          <img
            className={styles.headerContentChild}
            alt=""
            src="/img/group-34.svg"
          />
          <div className={styles.headerRight}>
            <div className={styles.marvLetters}>
              <h1 className={styles.m}></h1>
              <h1 className={styles.m1}>M</h1>
              <div className={styles.frameParent}>
                <div className={styles.aParent}>
                  <h1 className={styles.a}></h1>
                  <h1 className={styles.a1}>A</h1>
                </div>
                <div className={styles.rParent}>
                  <h1 className={styles.r}></h1>
                  <h1 className={styles.r1}>R</h1>
                </div>
                <div className={styles.vParent}>
                  <h1 className={styles.v}></h1>
                  <h1 className={styles.v1}>V</h1>
                </div>
              </div>
              <div className={styles.hiImPola}>
              Marv is a slightly racist, shy frog who loves to dress
                        up.  In the world of Solana, Marv has become a unique
                        and influential figure.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.headerInner}>
          <div className={styles.headerRightParent}>
            <div className={styles.headerRight1}>
              <button className={styles.button}>
                <div className={styles.buttonChild} />
                <div className={styles.buyNow}>Buy Now</div>
              </button>
            </div>
            <div className={styles.pic}>
              <img
                className={styles.marvBlack00011}
                loading="lazy"
                alt=""
                src="/img/marv-black0001-1@2x.png"
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.roadmap}>
        <img className={styles.roadmapChild} alt="" src="/img/vector-17.svg" />
        <div className={styles.roadmapContent}>
          <div className={styles.roadmapTitle}>
            <div className={styles.roadmapp}>ROADMAPP</div>
          </div>
          <div className={styles.roadmapPhases}>
            <div className={styles.roadmapPhasesInner}>
              <div className={styles.frameGroup}>
                <img
                  className={styles.frameItem}
                  alt=""
                  src="/img/group-69@2x.png"
                />
                <div className={styles.getMarvParent}>
                  <div className={styles.getMarv}>GET $MARV</div>
                  <div className={styles.div}>
                    <span className={styles.txt}>
                      <span>1</span>
                      <span className={styles.span}>.</span>
                    </span>
                  </div>
                  <img
                    className={styles.getMarvIcon}
                    alt=""
                    src="/img/01--get-marv@2x.png"
                  />
                </div>
                <img
                  className={styles.meteoconsstarFillIcon}
                  loading="lazy"
                  alt=""
                  src="/img/meteoconsstarfill@2x.png"
                />
              </div>
            </div>
            <div className={styles.image2Parent}>
              <img className={styles.image2Icon} alt="" src="/img/image-2@2x.png" />
              <img
                className={styles.meteoconsstarFillIcon1}
                loading="lazy"
                alt=""
                src="/img/meteoconsstarfill@2x.png"
              />
              <img
                className={styles.meteoconsstarFillIcon2}
                loading="lazy"
                alt=""
                src="/img/meteoconsstarfill@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.image3Parent}>
          <img className={styles.image3Icon} alt="" src="/img/image-3@2x.png" />
          <img className={styles.fiveStarsIcon} alt="" src="/img/five-stars.svg" />
          <img
            className={styles.fiveStarsIcon1}
            loading="lazy"
            alt=""
            src="/img/vector-19.svg"
          />
          <img
            className={styles.meteoconsstarFillIcon3}
            loading="lazy"
            alt=""
            src="/img/meteoconsstarfill@2x.png"
          />
          <img
            className={styles.meteoconsstarFillIcon4}
            alt=""
            src="/img/meteoconsstarfill@2x.png"
          />
          <img
            className={styles.meteoconsstarFillIcon5}
            loading="lazy"
            alt=""
            src="/img/meteoconsstarfill@2x.png"
          />
        </div>
        <div className={styles.roadmapContent1}>
          <div className={styles.image4Parent}>
            <img className={styles.image4Icon} alt="" src="/img/image-4@2x.png" />
            <img
              className={styles.meteoconsstarFillIcon6}
              loading="lazy"
              alt=""
              src="/img/meteoconsstarfill@2x.png"
            />
          </div>
          <div className={styles.movingFrame}>
            <div className={styles.frameContainer}>
              <div className={styles.meowParent}>
                <div className={styles.meow}>$ MEOW</div>
                <div className={styles.imPola}>#I’M POLA</div>
              </div>
              <div className={styles.marvParent}>
                <h3 className={styles.marv}>$MARV</h3>
                <div className={styles.imMarv}>#I’M MARV</div>
              </div>
              <div className={styles.marvGroup}>
                <h3 className={styles.marv1}>$MARV</h3>
                <div className={styles.imMarv1}>#I’M MARV</div>
              </div>
              <div className={styles.marvContainer}>
                <h3 className={styles.marv2}>$MARV</h3>
                <div className={styles.imMarv2}>#I’M MARV</div>
              </div>
              <div className={styles.frameDiv}>
                <h3 className={styles.marv3}>$MARV</h3>
                <div className={styles.imMarv3}>#I’M MARV</div>
              </div>
              <div className={styles.marvParent1}>
                <h3 className={styles.marv4}>$MARV</h3>
                <div className={styles.imMarv4}>#I’M MARV</div>
              </div>
              <div className={styles.marvParent2}>
                <h3 className={styles.marv5}>$MARV</h3>
                <div className={styles.imMarv5}>#I’M MARV</div>
              </div>
              <div className={styles.marvParent3}>
                <h3 className={styles.marv6}>$MARV</h3>
                <div className={styles.imMarv6}>#I’M MARV</div>
              </div>
              <div className={styles.marvParent4}>
                <h3 className={styles.marv7}>$MARV</h3>
                <div className={styles.imMarv7}>#I’M MARV</div>
              </div>
              <div className={styles.marvParent5}>
                <h3 className={styles.marv8}>$MARV</h3>
                <div className={styles.imMarv8}>#I’M MARV</div>
              </div>
              <div className={styles.marvParent6}>
                <h3 className={styles.marv9}>$MARV</h3>
                <div className={styles.imMarv9}>#I’M MARV</div>
              </div>
              <div className={styles.marvParent7}>
                <h3 className={styles.marv10}>$MARV</h3>
                <div className={styles.imMarv10}>#I’M MARV</div>
              </div>
              <div className={styles.marvParent8}>
                <h3 className={styles.marv11}>$MARV</h3>
                <div className={styles.imMarv11}>#I’M MARV</div>
              </div>
              <div className={styles.marvParent9}>
                <h3 className={styles.marv12}>$MARV</h3>
                <div className={styles.imMarv12}>#I’M MARV</div>
              </div>
              <div className={styles.marvParent10}>
                <h3 className={styles.marv13}>$MARV</h3>
                <div className={styles.imMarv13}>#I’M MARV</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.bg}>
        <div className={styles.bgChild} />
        <img
          className={styles.marvWebLastPageWithBg0002}
          alt=""
          src="/img/marv-web-last-page-with-bg0002-1@2x.png"
        />
        <div className={styles.disclaimerWrapper}>
          <div className={styles.disclaimer}>DISCLAIMER</div>
        </div>
        <div className={styles.overlayshadow}>
          <div className={styles.button1}>
            <input
              className={styles.container}
              placeholder="Legal Disclaimer"
              type="text"
            />
            <div className={styles.container1}>
              <div className={styles.container2}>
                <img className={styles.icon} alt="" src="/img/icon.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.overlayshadow1}>
          <div className={styles.button2}>
            <input
              className={styles.container3}
              placeholder="Risk Disclosure"
              type="text"
            />
            <div className={styles.container4}>
              <div className={styles.container5}>
                <img className={styles.icon1} alt="" src="/img/icon.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.overlayshadow2}>
          <div className={styles.button3}>
            <div className={styles.link}>
              <div className={styles.buyMarv}>Buy $Marv</div>
            </div>
          </div>
          <div className={styles.border}>
            <div className={styles.margin}>
              <div className={styles.container6}>
                <div className={styles.contractAddress0x76e7447baf}>
                  <p>
                    Contract Addreess
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.button4}>
              <div className={styles.container7}>
                <img className={styles.icon2} alt="" src="/img/icon-2.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.socialLinks}>
          <div className={styles.socialContent}>
            <div className={styles.communityContent}>
              <div className={styles.polasvg}>
                <div className={styles.groupDiv}>
                  <div className={styles.frameWrapper}>
                    <div className={styles.mParent}>
                      <div className={styles.m2}>M</div>
                      <div className={styles.m3}>M</div>
                    </div>
                  </div>
                  <div className={styles.aGroup}>
                    <div className={styles.a2}>A</div>
                    <div className={styles.a3}>A</div>
                  </div>
                  <div className={styles.frameWrapper1}>
                    <div className={styles.rGroup}>
                      <div className={styles.r2}>R</div>
                      <div className={styles.r3}>R</div>
                    </div>
                  </div>
                  <div className={styles.vGroup}>
                    <div className={styles.v2}>V</div>
                    <div className={styles.v3}>V</div>
                  </div>
                </div>
              </div>
              <div className={styles.joinTheMarv}>
                Join the Marv at Club Base.
              </div>
            </div>
            <div className={styles.socialIcons}>
              <div className={styles.iconsContainer}>
                <div className={styles.socialContent1}>
                  <div className={styles.link1} onClick={onLinkContainerClick}>
                    <img
                      className={styles.icon3}
                      loading="lazy"
                      alt=""
                      src="/img/icon-3.svg"
                    />
                  </div>
                  <div className={styles.link2} onClick={onLinkContainerClick1}>
                    <img
                      className={styles.icon4}
                      loading="lazy"
                      alt=""
                      src="/img/dex.png"
                    />
                  </div>
                  <div className={styles.link3} onClick={onLinkContainerClick2}>
                    <img className={styles.icon5} alt="" src="/img/icon-5.svg" />
                  </div>
                  <div className={styles.link4} onClick={onLinkContainerClick3}>
                    <img className={styles.icon6} alt="" src="/img/icon" />
                  </div>
                </div>
                <nav className={styles.goPolaGoContainer}>
                  <div className={styles.container8}>
                    <div className={styles.container9}>
                      <div className={styles.goPolaGo}>Go Marv Go!</div>
                    </div>
                    <div className={styles.container10}>
                      <div className={styles.margin1}>
                        <div className={styles.container11}>
                          <div className={styles.link5}>
                            <div className={styles.joinPolarmy}>
                              Join POLArmy
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.margin2}>
                        <div className={styles.container12}>
                          <div className={styles.link6}>
                            <div className={styles.memes}>Memes</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.margin3}>
                        <div className={styles.container13}>
                          <div className={styles.link7}>
                            <a className={styles.twitter}>Twitter</a>
                          </div>
                        </div>
                      </div>
                      <div className={styles.margin4}>
                        <div className={styles.container14}>
                          <div className={styles.link8}>
                            <div className={styles.telegram}>Telegram</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.margin5}>
                        <div className={styles.container15}>
                          <div className={styles.link9}>
                            <div className={styles.reddit}>Reddit</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a className={styles.metrics}>Metrics</a>
                  <div className={styles.container16}>
                    <div className={styles.margin6}>
                      <div className={styles.container17}>
                        <div className={styles.link10}>
                          <div className={styles.coingecko}>CoinGecko</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.margin7}>
                      <div className={styles.container18}>
                        <div className={styles.link11}>
                          <div className={styles.coinmarketcap}>
                            Coinmarketcap
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.margin8}>
                      <div className={styles.container19}>
                        <div className={styles.link12}>
                          <div className={styles.dextools}>Dextools</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
              <div className={styles.link13} onClick={onLinkContainerClick4}>
                <img className={styles.icon7} alt="" src="/img/icon" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.galleryParent}>
        <div className={styles.gallery}>
          <div className={styles.galleryContainer}>
            <div className={styles.picsParent}>
              <div className={styles.pics}>
                <img
                  className={styles.roadMap000100071}
                  alt=""
                  src="/img/road-map00010007-1@2x.png"
                />
              </div>
              <div className={styles.galleryItem}>
                <div className={styles.pics1}>
                  <img
                    className={styles.roadMap000100081}
                    alt=""
                    src="/img/road-map00010008-1@2x.png"
                  />
                </div>
                <div className={styles.marvgallery}>MARVGALLERY</div>
              </div>
            </div>
          </div>
          <div className={styles.galleryItems}>
            <div className={styles.galleryWrapper}>
              <div className={styles.gallery1}>
                <div className={styles.images}>
                  <div className={styles.frameParent1}>
                    <div className={styles.rectangleWrapper}>
                      <div className={styles.frameInner} />
                    </div>
                    <div className={styles.rectangleGroup}>
                      <div className={styles.rectangleDiv} />
                      <img
                        className={styles.marvAndPepCostumes0008}
                        loading="lazy"
                        alt=""
                        src="/img/marv-and-pep-costumes0008@2x.png"
                      />
                    </div>
                  </div>
                  <div className={styles.rectangleContainer}>
                    <div className={styles.frameChild1} />
                    <div className={styles.rectangleParent1}>
                      <div className={styles.frameChild2} />
                      <img
                        className={styles.untitled2000111}
                        loading="lazy"
                        alt=""
                        src="/img/untitled20001-1-1@2x.png"
                      />
                    </div>
                  </div>
                  <div className={styles.rectangleParent2}>
                    <div className={styles.frameChild3} />
                    <div className={styles.rectangleParent3}>
                      <div className={styles.frameChild4} />
                      <img
                        className={styles.marvWebNewSet0009}
                        loading="lazy"
                        alt=""
                        src="/img/marv-web-new-set0009@2x.png"
                      />
                    </div>
                  </div>
                  <div className={styles.rectangleParent4}>
                    <div className={styles.frameChild5} />
                    <div className={styles.rectangleParent5}>
                      <div className={styles.frameChild6} />
                      <img
                        className={styles.marvMems0011Icon}
                        loading="lazy"
                        alt=""
                        src="/img/marv-mems0011@2x.png"
                      />
                    </div>
                  </div>
                  <div className={styles.rectangleParent6}>
                    <div className={styles.frameChild7} />
                    <div className={styles.rectangleParent7}>
                      <div className={styles.frameChild8} />
                      <img
                        className={styles.roadMap0008Icon}
                        alt=""
                        src="/img/road-map0008@2x.png"
                      />
                    </div>
                  </div>
                  <div className={styles.rectangleParent8}>
                    <div className={styles.frameChild9} />
                    <div className={styles.rectangleParent9}>
                      <div className={styles.frameChild10} />
                      <img
                        className={styles.marvMems0013Icon}
                        alt=""
                        src="/img/marv-mems0013@2x.png"
                      />
                    </div>
                  </div>
                  <div className={styles.rectangleParent10}>
                    <div className={styles.frameChild11} />
                    <div className={styles.rectangleParent11}>
                      <div className={styles.frameChild12} />
                      <img
                        className={styles.marvAndPepCostumes0009}
                        alt=""
                        src="/img/marv-and-pep-costumes0009@2x.png"
                      />
                    </div>
                  </div>
                  <div className={styles.rectangleParent12}>
                    <div className={styles.frameChild13} />
                    <div className={styles.rectangleParent13}>
                      <div className={styles.frameChild14} />
                      <img
                        className={styles.marvMems0015Icon}
                        alt=""
                        src="/img/marv-mems0015@2x.png"
                      />
                    </div>
                  </div>
                  <div className={styles.frameParent2}>
                    <div className={styles.rectangleFrame}>
                      <div className={styles.frameChild15} />
                    </div>
                    <div className={styles.rectangleParent14}>
                      <div className={styles.frameChild16} />
                      <img
                        className={styles.marvWebNewSet0007}
                        loading="lazy"
                        alt=""
                        src="/img/marv-web-new-set0007@2x.png"
                      />
                    </div>
                  </div>
                  <div className={styles.rectangleParent15}>
                    <div className={styles.frameChild17} />
                    <div className={styles.rectangleParent16}>
                      <div className={styles.frameChild18} />
                      <img
                        className={styles.roadMap0007Icon}
                        loading="lazy"
                        alt=""
                        src="/img/road-map0007@2x.png"
                      />
                    </div>
                  </div>
                  <div className={styles.rectangleParent17}>
                    <div className={styles.frameChild19} />
                    <div className={styles.rectangleParent18}>
                      <div className={styles.frameChild20} />
                      <img
                        className={styles.marvMems0003Icon}
                        loading="lazy"
                        alt=""
                        src="/img/marv-mems0003@2x.png"
                      />
                    </div>
                  </div>
                  <div className={styles.rectangleParent19}>
                    <div className={styles.frameChild21} />
                    <div className={styles.rectangleParent20}>
                      <div className={styles.frameChild22} />
                      <img
                        className={styles.marvMems0012Icon}
                        loading="lazy"
                        alt=""
                        src="/img/marv-mems0012@2x.png"
                      />
                    </div>
                  </div>
                  <div className={styles.rectangleParent21}>
                    <div className={styles.frameChild23} />
                    <div className={styles.rectangleParent22}>
                      <div className={styles.frameChild24} />
                      <img
                        className={styles.marv0005Icon}
                        alt=""
                        src="/img/marv0005@2x.png"
                      />
                    </div>
                  </div>
                  <div className={styles.rectangleParent23}>
                    <div className={styles.frameChild25} />
                    <div className={styles.rectangleParent24}>
                      <div className={styles.frameChild26} />
                      <img
                        className={styles.marvAndPepCostumes0001}
                        alt=""
                        src="/img/marv-and-pep-costumes0001@2x.png"
                      />
                    </div>
                  </div>
                  <div className={styles.rectangleParent25}>
                    <div className={styles.frameChild27} />
                    <div className={styles.rectangleParent26}>
                      <div className={styles.frameChild28} />
                      <img
                        className={styles.marvAndPepCostumes0005}
                        alt=""
                        src="/img/marv-and-pep-costumes0005@2x.png"
                      />
                    </div>
                  </div>
                  <div className={styles.rectangleParent27}>
                    <div className={styles.frameChild29} />
                    <div className={styles.rectangleParent28}>
                      <div className={styles.frameChild30} />
                      <img
                        className={styles.marvAndPepCostumes0006}
                        alt=""
                        src="/img/marv-and-pep-costumes0006@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.notoupArrowParent}>
              <img
                className={styles.notoupArrowIcon}
                alt=""
                src="/img/notouparrow@2x.png"
              />
              <img
                className={styles.notoupArrowIcon1}
                alt=""
                src="/img/notouparrow-1@2x.png"
              />
            </div>
          </div>
          <div className={styles.notoupArrowGroup}>
            <img
              className={styles.notoupArrowIcon2}
              loading="lazy"
              alt=""
              src="/img/notouparrow@2x.png"
            />
            <img
              className={styles.notoupArrowIcon3}
              loading="lazy"
              alt=""
              src="/img/notouparrow-1@2x.png"
            />
          </div>
        </div>
        <div className={styles.extraFrame}>
          <img
            className={styles.marvWebLastPage0001}
            alt=""
            src="/img/marv-web-last-page0001@2x.png"
          />
          <img
            className={styles.marvWebSiteBagrount0001}
            alt=""
            src="/img/marv-web-site-bagrount0001@2x.png"
          />
          <div className={styles.pageContainer}>
            <div className={styles.frameParent3}>
              <div className={styles.justChillingParent}>
                <div className={styles.justChilling}>#JUST CHILLING</div>
                <img
                  className={styles.cloudThinkingBubble}
                  loading="lazy"
                  alt=""
                  src="/img/cloud-thinking-bubble@2x.png"
                />
                <div className={styles.thinkingToBuy}>Thinking to buy Marv</div>  
              </div>
              <div className={styles.heroElements}>
                <div className={styles.frameParent4}>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.meownomicsContainerParent}>
        <div className={styles.meownomicsContainer}>
          <div className={styles.meowjomics}>
            <div className={styles.meowjomicsTitle}>
              <div className={styles.meownomics}>Marvnomics</div>
              <div className={styles.meetPolaThe1}>
                Marv's journey in the Solana world is a testament to his unique
                 approach to leadership. He continues to engage with his community,
                  embracing their support and feedback. His dedication to
                  decentralization and community growth remains at the heart of his
                  reign, inspiring others to join him in creating a vibrant and
                  inclusiveecosystem.
              </div>
            </div>
            <div className={styles.taxonomies}>
              <div className={styles.tokenomicsGrid}>
                <div className={styles.tokenomicsImagesParent}>
                  <div className={styles.tokenomicsImages} />
                  <div className={styles.taxonomyTitles}>
                    <img
                      className={styles.untitled2000511}
                      loading="lazy"
                      alt=""
                      src="/img/untitled20005-1-1@2x.png"
                    />
                  </div>
                  <div className={styles.taxProperties}>
                    <div className={styles.taxes}>
                      T<span className={styles.axes}>AXES</span>
                    </div>
                  </div>
                  <a className={styles.tokenActions}>0/0</a>
                </div>
                <div className={styles.rectangleParent29}>
                  <div className={styles.frameChild31} />
                  <div className={styles.untitled2000311Wrapper}>
                    <img
                      className={styles.untitled2000311}
                      loading="lazy"
                      alt=""
                      src="/img/untitled20003-1-1@2x.png"
                    />
                  </div>
                  <div className={styles.freezeMintWrapper}>
                    <div className={styles.freezeMintContainer}>
                      <span className={styles.f}>F</span>
                      <span className={styles.reeze}>{`REEZE `}</span>
                      <span className={styles.m4}>{`& M`}</span>
                      <span className={styles.int}>INT</span>
                    </div>
                  </div>
                  <div className={styles.revoke}>
                    <span className={styles.revokeTxt}>
                      R<span className={styles.evoke}>evoke</span>
                    </span>
                  </div>
                </div>
                <div className={styles.rectangleParent30}>
                  <div className={styles.frameChild32} />
                  <div className={styles.photo20240703141157Wrapper}>
                    <img
                      className={styles.photo20240703141157Icon}
                      loading="lazy"
                      alt=""
                      src="/img/photo-20240703-141157@2x.png"
                    />
                  </div>
                  <div className={styles.frameParent5}>
                    <div className={styles.liquidityWrapper}>
                      <div className={styles.liquidity}>Liquidity</div>
                    </div>
                    <div className={styles.burned}>Burned</div>
                  </div>
                </div>
                <div className={styles.rectangleParent31}>
                  <div className={styles.frameChild33} />
                  <div className={styles.untitled2000411Wrapper}>
                    <img
                      className={styles.untitled2000411}
                      loading="lazy"
                      alt=""
                      src="/img/untitled20004-1-1@2x.png"
                    />
                  </div>
                  <div className={styles.totalSupplyWrapper}>
                    <div className={styles.totalSupply}>Total Supply</div>
                  </div>
                  <div className={styles.m5}>100M</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent32}>
            <div className={styles.frameChild34} />
            <div className={styles.buyHeading}>
              <div className={styles.howToBuy}>HOW TO BUY</div>
            </div>
            <div className={styles.guideSteps}>
              <div className={styles.phantomStep}>
                <div className={styles.howToBuyStepsContainer}>
                  <div className={styles.downloadInstructions}>
                    <div className={styles.groupParent}>
                      <img
                        className={styles.groupIcon1}
                        alt=""
                        src="/img/group.svg"
                      />
                      <img
                        className={styles.buy11Icon}
                        loading="lazy"
                        alt=""
                        src="/img/buy1-1@2x.png"
                      />
                    </div>
                  </div>
                  <div className={styles.instructionContainer}>
                    <div className={styles.installInstructions}>
                      <div className={styles.downloadPhantomExtension}>
                        Download PHANTOM ​Extension
                      </div>
                    </div>
                    <div className={styles.installAction}>
                      <img
                        className={styles.groupIcon2}
                        alt=""
                        src="/img/group-1.svg"
                      />
                      <div className={styles.downloadAndInstall}>
                        Download and install ​phantom on the ​appstore, or,
                        ​alternatively if ​you’re on desktop ​download and
                        install ​the browser ​extension.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.secureSol}>
                <div className={styles.group}>
                  <div className={styles.rectangle} />
                  <img
                    className={styles.groupIcon3}
                    alt=""
                    src="/img/group-2.svg"
                  />
                </div>
                <img className={styles.groupIcon4} alt="" src="/img/group-3.svg" />
              </div>
              <div className={styles.installPhantom}>
                <a className={styles.secureYourSolContainer}>
                  <p className={styles.secureYour}>Secure your</p>
                  <p className={styles.sol}>SOL</p>
                </a>
                <div className={styles.secureSource}>
                  <div className={styles.youCanBuy}>
                    you can buy ​$sol from any ​exchange and ​even on ​phantom
                    ​wallet
                  </div>
                </div>
              </div>
              <div className={styles.buyMarv1}>
                <img
                  className={styles.groupIcon5}
                  loading="lazy"
                  alt=""
                  src="/img/group-4.svg"
                />
              </div>
            </div>
            <div className={styles.marvPurchase}>
              <div className={styles.buyMarvAction}>
                <img
                  className={styles.groupIcon6}
                  loading="lazy"
                  alt=""
                  src="/img/group-5.svg"
                />
              </div>
              <div className={styles.frameParent6}>
                <div className={styles.buySomeMarvWrapper}>
                  <a className={styles.buySomeMarvContainer}>
                    <p className={styles.buySome}>Buy some</p>
                    <p className={styles.marv14}>​$MaRV</p>
                  </a>
                </div>
                <div className={styles.groupGroup}>
                  <div className={styles.group1}>
                    <div className={styles.rectangle1} />
                    <img
                      className={styles.groupIcon7}
                      alt=""
                      src="/img/group-6.svg"
                    />
                    <img
                      className={styles.vectorIcon3}
                      alt=""
                      src="/img/vector-3.svg"
                    />
                  </div>
                  <div className={styles.nowGoTo}>
                    Now go to ​Raydium and paste ​the $MARV ​Contract Address
                    ​to swap your SOL.
                  </div>
                </div>
              </div>
              <div className={styles.group2}>
                <img className={styles.groupIcon8} alt="" src="/img/group-7.svg" />
                <div className={styles.addToYourWalletWrapper}>
                  <div className={styles.addToYourContainer}>
                    <p className={styles.addToYour}>Add to Your</p>
                    <p className={styles.wallet}>​Wallet</p>
                  </div>
                </div>
                <div className={styles.nowYoureAll}>
                  Now you’re all set! ​Welcome aboard the ​next rocket to the
                  ​moon, just import the ​contract address to ​view you’re
                  holdings ​and you can track ​your earnings.
                </div>
                <img
                  className={styles.groupIcon9}
                  loading="lazy"
                  alt=""
                  src="/img/group-8.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.memes1}>
          <div className={styles.memeTitle}>
            <div className={styles.marvmemes}>MARVMEMES</div>
          </div>
          <div className={styles.memesContent}>
            <div className={styles.memeRows}>
              <img
                className={styles.memeRowsChild}
                alt=""
                src="/img/group-62@2x.png"
              />
              <div className={styles.memeRowsInner}>
                <div className={styles.frameParent7}>
                  <img
                    className={styles.frameIcon}
                    alt=""
                    src="/img/frame-64@2x.png"
                  />
                  <img
                    className={styles.pinIcon}
                    loading="lazy"
                    alt=""
                    src="/img/pin@2x.png"
                  />
                </div>
              </div>
              <img
                className={styles.line1Memes}
                alt=""
                src="/img/line-1-memes@2x.png"
              />
              <div className={styles.memeRowsInner1}>
                <div className={styles.frameParent8}>
                  <img
                    className={styles.frameChild35}
                    alt=""
                    src="/img/frame-64-1@2x.png"
                  />
                  <img
                    className={styles.pinIcon1}
                    loading="lazy"
                    alt=""
                    src="/img/pin-1@2x.png"
                  />
                </div>
              </div>
              <img
                className={styles.memeRowsItem}
                alt=""
                src="/img/group-62-1@2x.png"
              />
              <img
                className={styles.line2Memes}
                alt=""
                src="/img/line-2-memes@2x.png"
              />
              <img
                className={styles.line3Memes}
                alt=""
                src="/img/line-3-memes@2x.png"
              />
              <div className={styles.memeRowsInner2}>
                <div className={styles.frameParent9}>
                  <img
                    className={styles.frameChild36}
                    alt=""
                    src="/img/frame-64-2@2x.png"
                  />
                  <img
                    className={styles.pinIcon2}
                    loading="lazy"
                    alt=""
                    src="/img/pin-2@2x.png"
                  />
                </div>
              </div>
              <img
                className={styles.memeRowsChild1}
                loading="lazy"
                alt=""
                src="/img/group-66@2x.png"
              />
            </div>
            <div className={styles.memeScroller}>
              <div className={styles.notoupArrowContainer}>
                <img
                  className={styles.notoupArrowIcon4}
                  loading="lazy"
                  alt=""
                  src="/img/notouparrow-4@2x.png"
                />
                <img
                  className={styles.notoupArrowIcon5}
                  loading="lazy"
                  alt=""
                  src="/img/notouparrow-5@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mobmarvel;
