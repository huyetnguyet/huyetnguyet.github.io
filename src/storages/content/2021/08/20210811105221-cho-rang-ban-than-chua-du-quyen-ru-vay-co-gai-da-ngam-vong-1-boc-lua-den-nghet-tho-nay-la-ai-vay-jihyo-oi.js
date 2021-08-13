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
"timestamp": '11/08/2021 10:52 AM',
"title": 'Cho rằng bản thân chưa đủ quyến rũ, vậy cô gái da ngăm, vòng 1 bốc lửa đến nghẹt thở này là ai vậy Jihyo ơi?',
"description": 'Bạn thích Jihyo theo style nào hơn?',
"src": 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/a0884d1de96a751a5e54df493b268381-1628651532991781129728.jpg',
"alt": 'jihyo (twice),TWICE,star style,sao Hàn,idol,Kpop,quyến rũ,sexy,dễ thương,',
"category": 'stars',
"date": '11/08/2021',
"time": '10:52 AM',
"link": '/cho-rang-ban-than-chua-du-quyen-ru-vay-co-gai-da-ngam-vong-1-boc-lua-den-nghet-tho-nay-la-ai-vay-jihyo-oi',
"zcomponent": 'page_20210811105221',
"filepath": './20210811105221-cho-rang-ban-than-chua-du-quyen-ru-vay-co-gai-da-ngam-vong-1-boc-lua-den-nghet-tho-nay-la-ai-vay-jihyo-oi.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "stars";
const categoryLink = "/stars";
const title =
  "Cho rằng bản thân chưa đủ quyến rũ, vậy cô gái da ngăm, vòng 1 bốc lửa đến nghẹt thở này là ai vậy Jihyo ơi?";
const author = "PHOEBE,";
const source = "Doanh nghiệp và Tiếp thị";
const timestamp = "11/08/2021 10:52 AM";
const description = "Bạn thích Jihyo theo style nào hơn?";
const link =
  "cho-rang-ban-than-chua-du-quyen-ru-vay-co-gai-da-ngam-vong-1-boc-lua-den-nghet-tho-nay-la-ai-vay-jihyo-oi";
const tagparam = [
  "jihyo (twice)",
  "TWICE",
  "star style",
  "sao Hàn",
  "idol",
  "Kpop",
  "quyến rũ",
  "sexy",
  "dễ thương",
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

export default function page_20210811105221() {
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
                    <p>
                      Đóng đinh với phong cách "cute hột me" từ những ngày đầu
                      tiên, Jihyo nói riêng và <strong>TWICE</strong> nói chung
                      không có nhiều cơ hội để thể hiện những khía cạnh khác của
                      bản thân. Trong TWICE, dù là trưởng nhóm nhưng độ nổi
                      tiếng của Jihyo lại lép vế hơn các thành viên còn lại, một
                      phần vì dân Hàn khắt khe với thân hình tròn trịa của cô,
                      dù rằng Jihyo có gương mặt xinh đẹp như búp bê cùng vòng 1
                      "rất gì và này nọ".
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/a0884d1de96a751a5e54df493b268381-1628651532991781129728.jpg"
                      alt="1, jihyo (twice),TWICE,star style,sao Hàn,idol,Kpop,quyến rũ,sexy,dễ thương,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/20180218-124539-1-16286515322792027990822.jpg"
                      alt="2, jihyo (twice),TWICE,star style,sao Hàn,idol,Kpop,quyến rũ,sexy,dễ thương,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/0a83b7b53403163c1110961888983fff-16286515309872104595516.jpg"
                      alt="3, jihyo (twice),TWICE,star style,sao Hàn,idol,Kpop,quyến rũ,sexy,dễ thương,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/11/screenshot-453-16286535197461574804397.png"
                      alt="4, jihyo (twice),TWICE,star style,sao Hàn,idol,Kpop,quyến rũ,sexy,dễ thương,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/dm2-wayu4airdh4-16286515332171233304370.jpg"
                      alt="5, jihyo (twice),TWICE,star style,sao Hàn,idol,Kpop,quyến rũ,sexy,dễ thương,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/jpfconq43or41-16286515332431908255675.jpg"
                      alt="6, jihyo (twice),TWICE,star style,sao Hàn,idol,Kpop,quyến rũ,sexy,dễ thương,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/a69e83edae69fe7707e6bb2e994a8a9f-16286515328991466565666.jpg"
                      alt="7, jihyo (twice),TWICE,star style,sao Hàn,idol,Kpop,quyến rũ,sexy,dễ thương,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/5b8001502747959b47fd9737e8378082-16275380896011185707422-16286515313421478538054.jpg"
                      alt="8, jihyo (twice),TWICE,star style,sao Hàn,idol,Kpop,quyến rũ,sexy,dễ thương,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/920c4ca9b7d999e63fca17fb9c543858-16286515322732061481504.jpg"
                      alt="9, jihyo (twice),TWICE,star style,sao Hàn,idol,Kpop,quyến rũ,sexy,dễ thương,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/206ce5f0d17ba06863d9304311f6eee7-1628651532221329322266.jpg"
                      alt="10, jihyo (twice),TWICE,star style,sao Hàn,idol,Kpop,quyến rũ,sexy,dễ thương,"
                      note=""
                    />
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/tumblrpbw6k4nafc1wi7204o1400-1628651699297308731175.gif"
                      alt="11, jihyo (twice),TWICE,star style,sao Hàn,idol,Kpop,quyến rũ,sexy,dễ thương,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/c01d083605b386281dc085732c9c9c4247f715a0r1-268-350hq-1628651533136278196911.gif"
                      alt="12, jihyo (twice),TWICE,star style,sao Hàn,idol,Kpop,quyến rũ,sexy,dễ thương,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/134dbef9b6cb3f8a8abe24f884912842-1-16286515321811846459634.gif"
                      alt="13, jihyo (twice),TWICE,star style,sao Hàn,idol,Kpop,quyến rũ,sexy,dễ thương,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/2189971973625935385726297371659689466768085n-16286515327131388804076.jpg"
                      alt="14, jihyo (twice),TWICE,star style,sao Hàn,idol,Kpop,quyến rũ,sexy,dễ thương,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/2007846701210215534971466347988050582825507n-1627538089656960210993-16286515327711510942789.jpg"
                      alt="15, jihyo (twice),TWICE,star style,sao Hàn,idol,Kpop,quyến rũ,sexy,dễ thương,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/2254571213093424330944310747282519639165069n-1627538089704460878833-16286515327841019400016.jpg"
                      alt="16, jihyo (twice),TWICE,star style,sao Hàn,idol,Kpop,quyến rũ,sexy,dễ thương,"
                      note=""
                    />

                    <p>Ảnh: Sưu tầm</p>
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
