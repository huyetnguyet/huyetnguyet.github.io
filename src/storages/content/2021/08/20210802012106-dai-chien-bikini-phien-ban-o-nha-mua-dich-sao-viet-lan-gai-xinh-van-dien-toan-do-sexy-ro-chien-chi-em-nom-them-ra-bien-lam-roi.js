import React from "react";
import "components/page.scss";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import {
  RandomFeature,
  RelationNews,
  RelationNewsInPage,
} from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

import { Helmet } from "react-helmet";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": '02/08/2021 01:21 AM',
"title": 'Đại chiến bikini phiên bản ở nhà mùa dịch: Sao Việt lẫn gái xinh vẫn diện toàn đồ sexy rõ chiến, chị em nom thèm ra biển lắm rồi',
"description": 'Vẫn là trào lưu lên đồ ở nhà nhưng cục diện đã thay đổi khi chị đại Thanh Hằng khiến đàn em thơ phần nào bị lu mờ.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/2/2288412615766622333288115516340885772097766n-16278676557721976941634.jpg',
"alt": 'show your best contest,show your best,estee lauder,nghỉ dịch,Gái đẹp đại chiến bikini,đồ bơi,thanh hằng,Kiều Ly Phạm,vợ Rhymastic,star style,Nhà Lên Đèn, Em Lên Đồ,',
"category": 'images',
"date": '02/08/2021',
"time": '01:21 AM',
"link": '/dai-chien-bikini-phien-ban-o-nha-mua-dich-sao-viet-lan-gai-xinh-van-dien-toan-do-sexy-ro-chien-chi-em-nom-them-ra-bien-lam-roi',
"zcomponent": 'page_20210802012106',
"filepath": './20210802012106-dai-chien-bikini-phien-ban-o-nha-mua-dich-sao-viet-lan-gai-xinh-van-dien-toan-do-sexy-ro-chien-chi-em-nom-them-ra-bien-lam-roi.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "images";
const categoryLink = "/images";
const title =
  "Đại chiến bikini phiên bản ở nhà mùa dịch: Sao Việt lẫn gái xinh vẫn diện toàn đồ sexy rõ chiến, chị em nom thèm ra biển lắm rồi";
const author = "TUYẾT NGÂY THER,";
const source = "Doanh nghiệp và Tiếp thị";
const timestamp = "02/08/2021 01:21 AM";
const description =
  "Vẫn là trào lưu lên đồ ở nhà nhưng cục diện đã thay đổi khi chị đại Thanh Hằng khiến đàn em thơ phần nào bị lu mờ.";
const link =
  "dai-chien-bikini-phien-ban-o-nha-mua-dich-sao-viet-lan-gai-xinh-van-dien-toan-do-sexy-ro-chien-chi-em-nom-them-ra-bien-lam-roi";
const tagparam = [
  "show your best contest",
  "show your best",
  "estee lauder",
  "nghỉ dịch",
  "Gái đẹp đại chiến bikini",
  "đồ bơi",
  "thanh hằng",
  "Kiều Ly Phạm",
  "vợ Rhymastic",
  "star style",
  "Nhà Lên Đèn, Em Lên Đồ",
];
const facebookLinkShare =
  "https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fhuyetnguyet.com%2F" +
  link +
  "&layout=button_count&size=small&width=77&height=20&appId";

const updatedTags = tagparam.map((tag) => {
  const link =
    "https://www.google.com/search?q=huyetnguyet+" + tag.replace(" ", "+");
  return (
    <a href={link} className="tag">
      {tag}
    </a>
  );
});

export default function page_20210802012106() {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <Content>
        <div className="page">
          <AdsVertical />
          <div className="path">
            <a href="/" className="pathName">
              home
            </a>
            <div className="pathName" style={{ color: "red" }}>
              {">"}
            </div>
            <a href={categoryLink} className="pathName">
              {category}
            </a>
          </div>
          <div className="title">
            <h1>{title}</h1>
          </div>
          <div className="info">
            <p>
              <div className="author">{author}</div> - Theo {source} |{" "}
              {timestamp}
            </p>
          </div>
          <FacebookShareButton link={facebookLinkShare} />

          <div class="containerContent">
            <AdsVertical />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <RelationNews category={category} />
                <div className="contentBody">
                  <div className="contentBodyLeft">
                    <p>Chúng ta không thể khiến phái đẹp bớt đẹp!</p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/2/2288412615766622333288115516340885772097766n-16278676557721976941634.jpg"
                      alt="1, show your best contest,show your best,estee lauder,nghỉ dịch,Gái đẹp đại chiến bikini,đồ bơi,thanh hằng,Kiều Ly Phạm,vợ Rhymastic,star style,Nhà Lên Đèn, Em Lên Đồ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/2/2274618755356166877329487385147539199433366n-16278676556941846532592.jpg"
                      alt="2, show your best contest,show your best,estee lauder,nghỉ dịch,Gái đẹp đại chiến bikini,đồ bơi,thanh hằng,Kiều Ly Phạm,vợ Rhymastic,star style,Nhà Lên Đèn, Em Lên Đồ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/2/2250810807873204319569038156590296382098306n-16278676550891663199319.jpg"
                      alt="3, show your best contest,show your best,estee lauder,nghỉ dịch,Gái đẹp đại chiến bikini,đồ bơi,thanh hằng,Kiều Ly Phạm,vợ Rhymastic,star style,Nhà Lên Đèn, Em Lên Đồ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/2/2264552603421717775666666955226206714317620n-16278676555871793087464.jpg"
                      alt="4, show your best contest,show your best,estee lauder,nghỉ dịch,Gái đẹp đại chiến bikini,đồ bơi,thanh hằng,Kiều Ly Phạm,vợ Rhymastic,star style,Nhà Lên Đèn, Em Lên Đồ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/2/22563572814669234303328834705316555889734344n-1627867655201826227420.jpg"
                      alt="5, show your best contest,show your best,estee lauder,nghỉ dịch,Gái đẹp đại chiến bikini,đồ bơi,thanh hằng,Kiều Ly Phạm,vợ Rhymastic,star style,Nhà Lên Đèn, Em Lên Đồ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/2/2141967925950920385326967030069282487718295n-16278727684401949237078.jpg"
                      alt="6, show your best contest,show your best,estee lauder,nghỉ dịch,Gái đẹp đại chiến bikini,đồ bơi,thanh hằng,Kiều Ly Phạm,vợ Rhymastic,star style,Nhà Lên Đèn, Em Lên Đồ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/2/21438998139487836785814183585785860883646518n-16278727687421828676366.jpg"
                      alt="7, show your best contest,show your best,estee lauder,nghỉ dịch,Gái đẹp đại chiến bikini,đồ bơi,thanh hằng,Kiều Ly Phạm,vợ Rhymastic,star style,Nhà Lên Đèn, Em Lên Đồ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/2/1983244162344328414543651880245184183796244n-1627872768391515840077.jpg"
                      alt="8, show your best contest,show your best,estee lauder,nghỉ dịch,Gái đẹp đại chiến bikini,đồ bơi,thanh hằng,Kiều Ly Phạm,vợ Rhymastic,star style,Nhà Lên Đèn, Em Lên Đồ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/2/2260073265332381077965381587249102344416845n-1627867655364687467591.jpg"
                      alt="9, show your best contest,show your best,estee lauder,nghỉ dịch,Gái đẹp đại chiến bikini,đồ bơi,thanh hằng,Kiều Ly Phạm,vợ Rhymastic,star style,Nhà Lên Đèn, Em Lên Đồ,"
                      note=""
                    />
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/2/2257788461204804593289637971943240337140909n-1627867655233278888291.jpg"
                      alt="10, show your best contest,show your best,estee lauder,nghỉ dịch,Gái đẹp đại chiến bikini,đồ bơi,thanh hằng,Kiều Ly Phạm,vợ Rhymastic,star style,Nhà Lên Đèn, Em Lên Đồ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/2/21138028311213729316863726865127911454631532n-1627872768413553734874.jpg"
                      alt="11, show your best contest,show your best,estee lauder,nghỉ dịch,Gái đẹp đại chiến bikini,đồ bơi,thanh hằng,Kiều Ly Phạm,vợ Rhymastic,star style,Nhà Lên Đèn, Em Lên Đồ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/2/liuuuliuu1991151507985652610987562977103343253598710n-1627877254725866385492.jpeg"
                      alt="12, show your best contest,show your best,estee lauder,nghỉ dịch,Gái đẹp đại chiến bikini,đồ bơi,thanh hằng,Kiều Ly Phạm,vợ Rhymastic,star style,Nhà Lên Đèn, Em Lên Đồ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/2/225097018509240880300744282541541503321300n-1627867655147919333862.jpg"
                      alt="13, show your best contest,show your best,estee lauder,nghỉ dịch,Gái đẹp đại chiến bikini,đồ bơi,thanh hằng,Kiều Ly Phạm,vợ Rhymastic,star style,Nhà Lên Đèn, Em Lên Đồ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/2/224096181251771792503860535549784571759112n-16278676550331561226772.jpg"
                      alt="14, show your best contest,show your best,estee lauder,nghỉ dịch,Gái đẹp đại chiến bikini,đồ bơi,thanh hằng,Kiều Ly Phạm,vợ Rhymastic,star style,Nhà Lên Đèn, Em Lên Đồ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/2/2245702727910165015860147726092534209498980n-1627867655067488559535.jpg"
                      alt="15, show your best contest,show your best,estee lauder,nghỉ dịch,Gái đẹp đại chiến bikini,đồ bơi,thanh hằng,Kiều Ly Phạm,vợ Rhymastic,star style,Nhà Lên Đèn, Em Lên Đồ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/2/2233906035125251133491512204613484595011569n-16278676549881034313635.jpg"
                      alt="16, show your best contest,show your best,estee lauder,nghỉ dịch,Gái đẹp đại chiến bikini,đồ bơi,thanh hằng,Kiều Ly Phạm,vợ Rhymastic,star style,Nhà Lên Đèn, Em Lên Đồ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/2/2242900407296794243982556982105802905703034n-1627869388204415260862.jpg"
                      alt="17, show your best contest,show your best,estee lauder,nghỉ dịch,Gái đẹp đại chiến bikini,đồ bơi,thanh hằng,Kiều Ly Phạm,vợ Rhymastic,star style,Nhà Lên Đèn, Em Lên Đồ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/2/2266249681514743670931216891956756199384573n-16278693882621305121028.jpg"
                      alt="18, show your best contest,show your best,estee lauder,nghỉ dịch,Gái đẹp đại chiến bikini,đồ bơi,thanh hằng,Kiều Ly Phạm,vợ Rhymastic,star style,Nhà Lên Đèn, Em Lên Đồ,"
                      note=""
                    />

                    <p>Ảnh: Internet</p>
                  </div>
                  <AdsHorizontal />
                </div>
              </div>

              <RandomFeature />

              <div className="source">Source: {source}</div>

              <FacebookShareButton link={facebookLinkShare} />

              <div className="tags">Tags: {updatedTags}</div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}
