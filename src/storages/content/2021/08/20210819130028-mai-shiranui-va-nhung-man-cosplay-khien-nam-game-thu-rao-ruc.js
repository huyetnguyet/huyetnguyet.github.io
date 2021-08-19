import React from "react";
import "components/page.scss";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import {
  RandomFeature,
  RelationNews,
  RelationNewsInPage,
} from "components/methods";

import {
  Content,
  ContentImage,
  FacebookShareButton,
} from "components/content";

import { Helmet } from "react-helmet";



/* ---------------------------------------------------------------- */

/*

 {
"timestamp": '19/08/2021 01:00 PM',
"title": 'Mai Shiranui và những màn cosplay khiến nam game thủ rạo rực',
"description": 'Mai Shiranui là một trong những nữ nhân vật đình đám nhất lịch sử làng game.',
"src": 'https://gamek.mediacdn.vn/thumb_w/690/133514250583805952/2021/8/18/photo-1-16292608991452048745108.jpg',
"alt": 'NHÂN VẬT NỮ,MAI SHIRANUI,COSPLAY,DEAD OR ALIVE,KING OF FIGHTERS,GAME NỔI TIẾNG,',
"category": 'images',
"date": '19/08/2021',
"time": '01:00 PM',
"link": '/mai-shiranui-va-nhung-man-cosplay-khien-nam-game-thu-rao-ruc',
"zcomponent": 'page_20210819130028',
"filepath": './20210819130028-mai-shiranui-va-nhung-man-cosplay-khien-nam-game-thu-rao-ruc.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = 'images';
const categoryLink = '/images';
const title = 'Mai Shiranui và những màn cosplay khiến nam game thủ rạo rực';
const author = 'Real Madrid';
const source = 'Trí Thức Trẻ';
const timestamp = '19/08/2021 01:00 PM';
const description = 'Mai Shiranui là một trong những nữ nhân vật đình đám nhất lịch sử làng game.';
const link = 'mai-shiranui-va-nhung-man-cosplay-khien-nam-game-thu-rao-ruc';
const tagparam = ["NHÂN VẬT NỮ","MAI SHIRANUI","COSPLAY","DEAD OR ALIVE","KING OF FIGHTERS","GAME NỔI TIẾNG",];
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

export default function page_20210819130028() {
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
              <div className="author">{author}</div> - Theo {source} | {timestamp}
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

<p><strong>Mai Shiranui</strong> có thể nói là một trong những <strong>nhân vật nữ</strong> nóng bỏng bậc nhất của làng game và đã xuất hiện rất lâu trước khi dòng game <strong>Dead or Alive</strong> ra đời. Cô nàng võ sĩ trong trang phục kiệm vải màu đỏ từng góp mặt trong phiên bản Fatal Fury 2 vào năm 1992 và sau đó là trong hầu hết các phiên bản của series <strong>King of Fighters</strong> của hãng SNK.</p>
<p>Sau này khi xuất hiện trong <strong>Dead or Alive</strong>, <strong>Mai Shiranui</strong> cũng để lại ấn tượng sâu sắc với bất cứ người nào đã từng chơi qua dòng game này. Với bộ trang phục màu đỏ nổi bật cùng vẻ ngoài bốc lửa, Mai Shiranui luôn chinh phục người chơi từ cái nhìn đầu tiên.</p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/18/photo-1-1629260658341188852369.jpg' alt='1, NHÂN VẬT NỮ,MAI SHIRANUI,COSPLAY,DEAD OR ALIVE,KING OF FIGHTERS,GAME NỔI TIẾNG,' note='Hình ảnh Mai Shiranui trong Dead or Alive 6'/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/690/133514250583805952/2021/8/18/photo-1-16292607354251665941546.jpg' alt='2, NHÂN VẬT NỮ,MAI SHIRANUI,COSPLAY,DEAD OR ALIVE,KING OF FIGHTERS,GAME NỔI TIẾNG,' note='Mai Shiranui trong King of Fighters 15'/>
<p>Hội tụ đầy đủ mọi yếu tố từ vẻ ngoài nóng bỏng cho đến độ phủ sóng cực lớn qua các dòng <strong>game nổi tiếng</strong>, <strong>Mai Shiranui</strong> là hình mẫu lý tưởng cho giới coser. Trong nhiều năm qua, từ Á sang Âu, không biết đã có bao nhiêu bộ ảnh <strong>cosplay</strong> về nữ nhân vật đình đám này. Một điểm chung trong các màn cosplay này là sự gợi cảm, bốc lửa, khiến cho nhiều nam game thủ rạo rực, đứng ngồi không yên.</p>
<RelationNewsInPage category={category} />
<p>Sau đây, mời các bạn đến với những bộ ảnh <strong>cosplay</strong> ấn tượng nhất về nữ nhân vật <strong>Mai Shiranui</strong>:</p>
<p></p>
<p></p>
<p></p>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/690/133514250583805952/2021/8/18/photo-1-16292608991452048745108.jpg' alt='3, NHÂN VẬT NỮ,MAI SHIRANUI,COSPLAY,DEAD OR ALIVE,KING OF FIGHTERS,GAME NỔI TIẾNG,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/690/133514250583805952/2021/8/18/photo-1-16292609126231445840881.jpg' alt='4, NHÂN VẬT NỮ,MAI SHIRANUI,COSPLAY,DEAD OR ALIVE,KING OF FIGHTERS,GAME NỔI TIẾNG,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/690/133514250583805952/2021/8/18/photo-1-1629260925336685017500.jpg' alt='5, NHÂN VẬT NỮ,MAI SHIRANUI,COSPLAY,DEAD OR ALIVE,KING OF FIGHTERS,GAME NỔI TIẾNG,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/8/18/photo-1-16292609629431307665232.jpg' alt='6, NHÂN VẬT NỮ,MAI SHIRANUI,COSPLAY,DEAD OR ALIVE,KING OF FIGHTERS,GAME NỔI TIẾNG,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/8/18/photo-1-1629260948273891212475.jpg' alt='7, NHÂN VẬT NỮ,MAI SHIRANUI,COSPLAY,DEAD OR ALIVE,KING OF FIGHTERS,GAME NỔI TIẾNG,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/8/18/photo-1-16292610073971234765689.jpg' alt='8, NHÂN VẬT NỮ,MAI SHIRANUI,COSPLAY,DEAD OR ALIVE,KING OF FIGHTERS,GAME NỔI TIẾNG,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/8/18/photo-1-16292610004961565386283.jpg' alt='9, NHÂN VẬT NỮ,MAI SHIRANUI,COSPLAY,DEAD OR ALIVE,KING OF FIGHTERS,GAME NỔI TIẾNG,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/690/133514250583805952/2021/8/18/photo-1-16292610734391266718280.jpg' alt='10, NHÂN VẬT NỮ,MAI SHIRANUI,COSPLAY,DEAD OR ALIVE,KING OF FIGHTERS,GAME NỔI TIẾNG,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/690/133514250583805952/2021/8/18/photo-1-16292610840601219852011.jpg' alt='11, NHÂN VẬT NỮ,MAI SHIRANUI,COSPLAY,DEAD OR ALIVE,KING OF FIGHTERS,GAME NỔI TIẾNG,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/690/133514250583805952/2021/8/18/photo-1-16292610980142147085533.jpg' alt='12, NHÂN VẬT NỮ,MAI SHIRANUI,COSPLAY,DEAD OR ALIVE,KING OF FIGHTERS,GAME NỔI TIẾNG,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/690/133514250583805952/2021/8/18/photo-1-1629261105200272217266.jpg' alt='13, NHÂN VẬT NỮ,MAI SHIRANUI,COSPLAY,DEAD OR ALIVE,KING OF FIGHTERS,GAME NỔI TIẾNG,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/690/133514250583805952/2021/8/18/photo-1-16292611133841462958194.jpg' alt='14, NHÂN VẬT NỮ,MAI SHIRANUI,COSPLAY,DEAD OR ALIVE,KING OF FIGHTERS,GAME NỔI TIẾNG,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/8/18/photo-1-16292611312121991523432.jpg' alt='15, NHÂN VẬT NỮ,MAI SHIRANUI,COSPLAY,DEAD OR ALIVE,KING OF FIGHTERS,GAME NỔI TIẾNG,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/8/18/photo-1-1629261122442937822568.jpg' alt='16, NHÂN VẬT NỮ,MAI SHIRANUI,COSPLAY,DEAD OR ALIVE,KING OF FIGHTERS,GAME NỔI TIẾNG,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/18/photo-1-1629261164382986330630.jpg' alt='17, NHÂN VẬT NỮ,MAI SHIRANUI,COSPLAY,DEAD OR ALIVE,KING OF FIGHTERS,GAME NỔI TIẾNG,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/690/133514250583805952/2021/8/18/photo-1-16292611799471093038497.jpg' alt='18, NHÂN VẬT NỮ,MAI SHIRANUI,COSPLAY,DEAD OR ALIVE,KING OF FIGHTERS,GAME NỔI TIẾNG,' note=''/>


                    </div>
                  <AdsHorizontal />
                </div></div>

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
