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
"timestamp": '05/08/2021 08:47 AM',
"title": 'Sẽ ra sao nếu các loài động vật đều có tạo hình khối hộp vuông như Minecraft?',
"description": 'Đã bao giờ bạn hình dung về việc thế giới quanh ta bỗng nhiên trở thành những khối vuông như trong Minecraft chưa?',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-1-16281597059632071972653.jpg',
"alt": 'MINECRAFT,KHỐI HỘP VUÔNG,GAME 8-BIT,ĐỘNG VẬT,',
"category": 'news',
"date": '05/08/2021',
"time": '08:47 AM',
"link": '/se-ra-sao-neu-cac-loai-dong-vat-deu-co-tao-hinh-khoi-hop-vuong-nhu-minecraft',
"zcomponent": 'page_20210805084722',
"filepath": './20210805084722-se-ra-sao-neu-cac-loai-dong-vat-deu-co-tao-hinh-khoi-hop-vuong-nhu-minecraft.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = 'news';
const categoryLink = '/news';
const title = 'Sẽ ra sao nếu các loài động vật đều có tạo hình khối hộp vuông như Minecraft?';
const author = 'Real Madrid';
const source = 'Pháp luật và bạn đọc';
const timestamp = '05/08/2021 08:47 AM';
const description = 'Đã bao giờ bạn hình dung về việc thế giới quanh ta bỗng nhiên trở thành những khối vuông như trong Minecraft chưa?';
const link = 'se-ra-sao-neu-cac-loai-dong-vat-deu-co-tao-hinh-khoi-hop-vuong-nhu-minecraft';
const tagparam = ["MINECRAFT","KHỐI HỘP VUÔNG","GAME 8-BIT","ĐỘNG VẬT",];
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

export default function page_20210805084722() {
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
                  <div className="contentBodyLeft"><p>Đồ họa 8-bit và những khối vuông đã trở thành điểm đặc trưng nổi tiếng của tựa game <strong>Minecraft</strong>. Nền tảng đồ họa "khối vuông" độc nhất vô nhị, vừa đơn giản vừa ngộ nghĩnh của Minecraft đã chiếm được cảm tình của rất, rất nhiều game thủ trên toàn thế giới.</p>
<p>Đã bao giờ bạn hình dung về việc thế giới quanh ta bỗng nhiên trở thành những khối vuông như trong <strong>Minecraft</strong> chưa? Nếu chưa, hãy xem ngay những bức hình dưới đây để thưởng thức trải nghiệm thị giác hết sức đặc biệt.</p>
<RelationNewsInPage category={category} /><ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-1-16281597059632071972653.jpg' alt='1, MINECRAFT,KHỐI HỘP VUÔNG,GAME 8-BIT,ĐỘNG VẬT,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-1-16281597128881901600216.jpg' alt='2, MINECRAFT,KHỐI HỘP VUÔNG,GAME 8-BIT,ĐỘNG VẬT,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-1-16281597213821405154620.jpg' alt='3, MINECRAFT,KHỐI HỘP VUÔNG,GAME 8-BIT,ĐỘNG VẬT,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-1-16281597291481260532257.jpg' alt='4, MINECRAFT,KHỐI HỘP VUÔNG,GAME 8-BIT,ĐỘNG VẬT,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-1-16281597369111989981130.jpg' alt='5, MINECRAFT,KHỐI HỘP VUÔNG,GAME 8-BIT,ĐỘNG VẬT,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-1-16281597442111134576320.jpg' alt='6, MINECRAFT,KHỐI HỘP VUÔNG,GAME 8-BIT,ĐỘNG VẬT,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-1-16281597544821267661692.jpg' alt='7, MINECRAFT,KHỐI HỘP VUÔNG,GAME 8-BIT,ĐỘNG VẬT,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-1-1628159764382789698233.jpg' alt='8, MINECRAFT,KHỐI HỘP VUÔNG,GAME 8-BIT,ĐỘNG VẬT,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-1-16281597787041512204209.jpg' alt='9, MINECRAFT,KHỐI HỘP VUÔNG,GAME 8-BIT,ĐỘNG VẬT,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-1-162815978944132433376.jpg' alt='10, MINECRAFT,KHỐI HỘP VUÔNG,GAME 8-BIT,ĐỘNG VẬT,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-1-1628159798557753417586.jpg' alt='11, MINECRAFT,KHỐI HỘP VUÔNG,GAME 8-BIT,ĐỘNG VẬT,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-1-1628159817507280408077.jpg' alt='12, MINECRAFT,KHỐI HỘP VUÔNG,GAME 8-BIT,ĐỘNG VẬT,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-1-1628159875869186597078.jpg' alt='13, MINECRAFT,KHỐI HỘP VUÔNG,GAME 8-BIT,ĐỘNG VẬT,' note=''/>
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
