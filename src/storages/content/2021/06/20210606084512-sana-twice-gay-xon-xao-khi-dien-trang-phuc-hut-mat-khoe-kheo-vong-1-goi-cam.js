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

 <ContentItem title="Sana (TWICE) gây xôn xao khi diện trang phục hút mắt khoe khéo vòng 1 gợi cảm"\description="Không hổ danh mỹ nhân đa phong cách của TWICE, Sana dù đáng yêu hay quyến rũ cũng đều cân được tất." 
src="https://s.vi-serve.com/vi_logo.svg" 
alt="Sana, Twice, Sao Han, Idol, Kpop, " 
category="images" 
time="06/06/2021 08:45 AM" 
link="/sana-twice-gay-xon-xao-khi-dien-trang-phuc-hut-mat-khoe-kheo-vong-1-goi-cam"/>

{title:"Sana (TWICE) gây xôn xao khi diện trang phục hút mắt khoe khéo vòng 1 gợi cảm",\description:"Không hổ danh mỹ nhân đa phong cách của TWICE, Sana dù đáng yêu hay quyến rũ cũng đều cân được tất." ,
src:"https://s.vi-serve.com/vi_logo.svg" ,
alt:"Sana, Twice, Sao Han, Idol, Kpop, " ,
category:"images" ,
time:"06/06/2021 08:45 AM" ,
link:"/sana-twice-gay-xon-xao-khi-dien-trang-phuc-hut-mat-khoe-kheo-vong-1-goi-cam",component:"page_20210606084512",
filepath:"./20210606084512-sana-twice-gay-xon-xao-khi-dien-trang-phuc-hut-mat-khoe-kheo-vong-1-goi-cam.js"},

Sana (TWICE) gây xôn xao khi diện trang phục hút mắt khoe khéo vòng 1 gợi cảm
Không hổ danh mỹ nhân đa phong cách của TWICE, Sana dù đáng yêu hay quyến rũ cũng đều cân được tất.
https://s.vi-serve.com/vi_logo.svg
Sana, Twice, Sao Han, Idol, Kpop, 
images
06/06/2021
08:45 AM
/sana-twice-gay-xon-xao-khi-dien-trang-phuc-hut-mat-khoe-kheo-vong-1-goi-cam
page_20210606084512
./20210606084512-sana-twice-gay-xon-xao-khi-dien-trang-phuc-hut-mat-khoe-kheo-vong-1-goi-cam.js




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
  "Sana (TWICE) gây xôn xao khi diện trang phục hút mắt khoe khéo vòng 1 gợi cảm";
const author = "HẢI LAN,";
const source = "Trí Thức Trẻ";
const date = "06/06/2021";
const time = "08:45 AM";
const description =
  "Không hổ danh mỹ nhân đa phong cách của TWICE, Sana dù đáng yêu hay quyến rũ cũng đều cân được tất.";
const link =
  "sana-twice-gay-xon-xao-khi-dien-trang-phuc-hut-mat-khoe-kheo-vong-1-goi-cam";
const tagparam = ["sana", "twice", "sao-han", "idol", "kpop"];
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

export default function page_20210606084512() {
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
              <div className="author">{author}</div> - Theo {source} | {date}{" "}
              {time}
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
                    <p>
                      TWICE sắp trở lại với album mới Taste Of Love nên công ty
                      chủ quản JYP cũng tích cực để 9 cô gái tham gia quảng bá
                      trong các chương trình truyền hình thực tế. Sana & Dahyun
                      chính là 2 cô nàng mở màn đầu tiên khi xuất hiện trong
                      show thực tế hài hước Amazing Saturday cùng các đàn anh,
                      đàn chị Taeyeon (SNSD), Key (SHINee)...
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/6/photo2021-06-0610-55-43-16229517521241808648820.jpg"
                      alt="Sana, Twice, Sao Han, Idol, Kpop, "
                      note=""
                    />
                    <p>
                      Nổi bần bật trong bộ trang phục màu đỏ, 2 mỹ nhân TWICE đã
                      tương tác rất tốt trong chương trình. Đặc biệt, Sana được
                      stylist cho diện một bộ đồ khoe khéo được vòng 1 gợi cảm.{" "}
                    </p>
                    <p>
                      <ContentImage
                        src="https://kenh14cdn.com/203336854389633024/2021/6/6/ezgifcom-gif-maker-16229517268581135633449.gif"
                        alt="Sana, Twice, Sao Han, Idol, Kpop, "
                        note="Sana được diện trang phục khoe khéo vòng 1"
                      />
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/6/6/ezgifcom-gif-maker-1-162295172680979624917.gif"
                      alt="Sana, Twice, Sao Han, Idol, Kpop, "
                      note=""
                    />
                    <p>
                      Vốn là một mỹ nhân được đánh giá đa phong cách trong
                      TWICE, muốn đáng yêu hay quyến rũ cũng đều có tất, hình
                      ảnh này của Sana khiến các fan không ngừng thích thú.
                    </p>
                    <p>
                      <ContentImage
                        src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/6/sanatwicejypent429457317501125-1622951862800815210565.jpg"
                        alt="Sana, Twice, Sao Han, Idol, Kpop, "
                        note=""
                      />
                      <ContentImage
                        src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/6/qxninnazpvh31-1622951942307339702396.jpg"
                        alt="Sana, Twice, Sao Han, Idol, Kpop, "
                        note=""
                      />
                      <ContentImage
                        src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/6/2222286019067323305222471906153005431656325578752n-1622951862803149823242.jpg"
                        alt="Sana, Twice, Sao Han, Idol, Kpop, "
                        note="Sana là một mỹ nhân đa phong cách của TWICE"
                      />
                      <ContentImage
                        src="https://nv.vi-serve.com/vis-media/472/931/ZXjVJnABtstz7zUe7Gwo_720p.MP4"
                        alt="Sana, Twice, Sao Han, Idol, Kpop, "
                        note=""
                      />
                    </p>
                    <p>Ảnh: Internet</p>
                  </div>
                  <AdsHorizontal />
                </div>

                <RandomFeature />

                <div className="source">Source: {source}</div>

                <FacebookShareButton link={facebookLinkShare} />

                <div className="tags">Tags: {updatedTags}</div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}
