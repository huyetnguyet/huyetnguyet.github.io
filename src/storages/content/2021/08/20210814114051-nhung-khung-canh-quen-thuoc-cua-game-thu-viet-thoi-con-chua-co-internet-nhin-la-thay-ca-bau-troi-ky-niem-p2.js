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
"timestamp": '14/08/2021 11:40 AM',
"title": 'Những khung cảnh quen thuộc của game thủ Việt thời còn chưa có Internet, nhìn là thấy cả bầu trời kỷ niệm (p2)',
"description": 'Những hình ảnh đáng quý gợi về không biết bao nhiêu cảm xúc cho thế hệ các game thủ.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/10/photo-1-1628566717051642727140.jpg',
"alt": 'GAME THỦ,GAME,TIN TỨC GAME,',
"category": 'games',
"date": '14/08/2021',
"time": '11:40 AM',
"link": '/nhung-khung-canh-quen-thuoc-cua-game-thu-viet-thoi-con-chua-co-internet-nhin-la-thay-ca-bau-troi-ky-niem-p2',
"zcomponent": 'page_20210814114051',
"filepath": './20210814114051-nhung-khung-canh-quen-thuoc-cua-game-thu-viet-thoi-con-chua-co-internet-nhin-la-thay-ca-bau-troi-ky-niem-p2.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = 'games';
const categoryLink = '/games';
const title = 'Những khung cảnh quen thuộc của game thủ Việt thời còn chưa có Internet, nhìn là thấy cả bầu trời kỷ niệm (p2)';
const author = 'Mặt Trứng';
const source = 'Trí Thức Trẻ';
const timestamp = '14/08/2021 11:40 AM';
const description = 'Những hình ảnh đáng quý gợi về không biết bao nhiêu cảm xúc cho thế hệ các game thủ.';
const link = 'nhung-khung-canh-quen-thuoc-cua-game-thu-viet-thoi-con-chua-co-internet-nhin-la-thay-ca-bau-troi-ky-niem-p2';
const tagparam = ["GAME THỦ","GAME","TIN TỨC GAME",];
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

export default function page_20210814114051() {
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

<p>Thế hệ <strong><strong>game</strong> thủ</strong> thời nay có vô vàn những thú vui để giải trí. Chỉ với một chiếc smartphone, chúng có thể thỏa thích tìm kiếm, hòa mình vào những cái tên như PUBG Mobile, Liên Quân Mobile hay Free Fire. Tuy nhiên, đôi khi "dư thừa" quá lại khiến chúng ta nhớ về thời xưa - về những hình ảnh, ký ức thời mà làng game Việt vẫn còn sơ khai hơn bao giờ hết. Khi mà Internet hay ADSL vẫn còn là thuật ngữ lạ tai, PC vẫn đang cài Win98 và điện tử 4 nút là thú vui giải trí "nhà giàu" của những đứa trẻ thời bấy giờ. Cùng lên chuyến xe du hành thời gian và về lại làng game trong giai đoạn đấy nhé.</p>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/10/photo-1-16285666126572136945762.jpg' alt='1, GAME THỦ,GAME,TIN TỨC GAME,' note='Cận cảnh một bộ điện tử 4 nút với hai chiếc tay cầm màu vàng huyền thoại là đây chứ đâu'/>
<p>Hàng "mới" trước khi xỉn màu là đây</p>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/10/photo-1-1628566652835948495096.jpg' alt='2, GAME THỦ,GAME,TIN TỨC GAME,' note='Có ai còn nhớ khẩu súng này để chơi game gì không nào'/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/10/photo-1-16285678223621118873199.jpg' alt='3, GAME THỦ,GAME,TIN TỨC GAME,' note='Trò này mà không có súng thì mất hay'/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/10/photo-1-16285667574801164865142.jpg' alt='4, GAME THỦ,GAME,TIN TỨC GAME,' note='Hồi bé có ai đua nhau nhảy cờ xem ai được cao hơn không'/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/10/photo-1-1628567573849886659401.jpg' alt='5, GAME THỦ,GAME,TIN TỨC GAME,' note='Băng 4-5 trò thì hay, băng 999 trò thì toàn lặp lại phải không nào'/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/10/photo-1-16285676798121894038793.jpg' alt='6, GAME THỦ,GAME,TIN TỨC GAME,' note='Thế hệ 95,96 và 2K làm sao hiểu được đây là gì'/>
<p>"Map chống cổng" thời những năm 199x đây</p>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/10/photo-1-16285677761741252788347.jpg' alt='7, GAME THỦ,GAME,TIN TỨC GAME,' note='Game nhập vai thời đấy đây'/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/10/photo-1-16285677827741500362632.jpg' alt='8, GAME THỦ,GAME,TIN TỨC GAME,' note='Siêu khó để phá đảo nhé'/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/10/photo-1-1628567799214232274499.jpg' alt='9, GAME THỦ,GAME,TIN TỨC GAME,' note='Còn đây là dòng game đối kháng'/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/10/photo-1-16285678039051235462255.jpg' alt='10, GAME THỦ,GAME,TIN TỨC GAME,' note='Cũng như đá bóng'/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/10/photo-1-1628566832469869252393.jpg' alt='11, GAME THỦ,GAME,TIN TỨC GAME,' note='Thời xưa để ngồi một mình một máy như anh chàng này là cũng thuộc hàng ngũ đại gia rồi'/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/10/photo-1-16285668574481201704930.jpg' alt='12, GAME THỦ,GAME,TIN TỨC GAME,' note='Cyber game thời ảnh đen trắng'/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/10/photo-1-16285668801311907439986.jpg' alt='13, GAME THỦ,GAME,TIN TỨC GAME,' note='Các game thủ thời xưa cũng chẳng có ghế ngồi hay phụ kiện nào khác đâu'/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/10/103862948413657359360821888229033971485725n-16285670880801460464905.jpg' alt='14, GAME THỦ,GAME,TIN TỨC GAME,' note='Đây cũng là ước mơ một thời của không biết bao nhiêu thanh niên đâu'/>
<RelationNewsInPage category={category} />
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/10/photo-1-162856718403591976383.png' alt='15, GAME THỦ,GAME,TIN TỨC GAME,' note='Quán game PS1 như thế này cũng là tân tiến lắm rồi đấy'/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/10/game1-1628567300275927342995.jpg' alt='16, GAME THỦ,GAME,TIN TỨC GAME,' note='Rồi cái thời mà có PC màn hình thùng để bắn Half-Life đã là cả một hạnh phúc rồi'/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/10/photo-1-16285675356002010002484.jpg' alt='17, GAME THỦ,GAME,TIN TỨC GAME,' note='Bộ máy PS1 - tài sản quý như vàng của mọi game thủ lúc bấy giờ'/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/10/photo-1-16285673421821198580555.png' alt='18, GAME THỦ,GAME,TIN TỨC GAME,' note='Anh em nào nhớ được đây là tựa game gì không'/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/10/photo-1-16285673663671614150076.png' alt='19, GAME THỦ,GAME,TIN TỨC GAME,' note='Final Fantasy hồi xưa cũng chỉ thế này mà thôi'/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/10/photo-1-16285673811701585970774.png' alt='20, GAME THỦ,GAME,TIN TỨC GAME,' note='Tương tự như vậy là Rồng Đen'/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/10/photo-1-16285673948821623648832.png' alt='21, GAME THỦ,GAME,TIN TỨC GAME,' note='Hay như Dynasty Warrior phiên bản cổ xưa cũng đơn giản như vậy'/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/10/photo-1-1628567441862442870353.jpg' alt='22, GAME THỦ,GAME,TIN TỨC GAME,' note='Rambo Lùn thì cũng chỉ như thế này mà thôi'/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/10/photo-1-16285678996961476127157.jpg' alt='23, GAME THỦ,GAME,TIN TỨC GAME,' note='Cảnh tượng này cũng quen thuộc với các game thủ thế hệ thời ấy lắm'/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/10/photo-1-16285679681461698581880.jpg' alt='24, GAME THỦ,GAME,TIN TỨC GAME,' note='Hình ảnh quen thuộc khi khởi động máy tính'/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/10/photo-1-1628567987151140073245.png' alt='25, GAME THỦ,GAME,TIN TỨC GAME,' note='Màn hình của phần lớn game thủ thời bấy giờ'/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/10/photo-1-16285680494681060163697.jpg' alt='26, GAME THỦ,GAME,TIN TỨC GAME,' note='Máy tính thời xưa cũng chỉ cần thế này thôi'/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/10/photo-1-1628568261225366727079.jpg' alt='27, GAME THỦ,GAME,TIN TỨC GAME,' note='Bọn trẻ thời nay đôi khi không biết viên bi bên trong để làm gì nữa'/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/10/photo-1-16285681835451868363076.jpg' alt='28, GAME THỦ,GAME,TIN TỨC GAME,' note='Ai nhớ đây là phần mềm gì không'/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/10/photo-1-1628568240952704264686.jpg' alt='29, GAME THỦ,GAME,TIN TỨC GAME,' note='Socola sỏi - huyền thoại ăn vặt của game thủ ngày ấy'/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/10/photo-1-1628566717051642727140.jpg' alt='30, GAME THỦ,GAME,TIN TỨC GAME,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/10/cyber-game-nhung-ngay-xua-cu-048b7c-162856762971070422626.png' alt='31, GAME THỦ,GAME,TIN TỨC GAME,' note=''/>


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
