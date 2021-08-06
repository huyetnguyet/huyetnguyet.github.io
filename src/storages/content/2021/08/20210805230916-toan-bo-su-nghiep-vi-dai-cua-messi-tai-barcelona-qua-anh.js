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
"timestamp": '05/08/2021 11:09 PM',
"title": 'Toàn bộ sự nghiệp vĩ đại của Messi tại Barcelona qua ảnh',
"description": 'Hãy cùng điểm lại top những khoảnh khắc ấn tượng nhất của Lionel Messi trước khi anh rời Barca.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-14-1628201624024814025663.jpg',
"alt": 'messi,barcelona,la liga,messi rời Barca,',
"category": 'news',
"date": '05/08/2021',
"time": '11:09 PM',
"link": '/toan-bo-su-nghiep-vi-dai-cua-messi-tai-barcelona-qua-anh',
"zcomponent": 'page_20210805230916',
"filepath": './20210805230916-toan-bo-su-nghiep-vi-dai-cua-messi-tai-barcelona-qua-anh.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "news";
const categoryLink = "/news";
const title = "Toàn bộ sự nghiệp vĩ đại của Messi tại Barcelona qua ảnh";
const author = "TRẦN GIANG,";
const source = "Trí thức trẻ";
const timestamp = "05/08/2021 11:09 PM";
const description =
  "Hãy cùng điểm lại top những khoảnh khắc ấn tượng nhất của Lionel Messi trước khi anh rời Barca.";
const link = "toan-bo-su-nghiep-vi-dai-cua-messi-tai-barcelona-qua-anh";
const tagparam = ["messi", "barcelona", "la liga", "messi rời Barca"];
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

export default function page_20210805230916() {
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
                    <p>778 trận</p>
                    <p>682 bàn thắng</p>
                    <p>305 kiến tạo</p>
                    <p>6 Quả bóng vàng</p>
                    <p>10 lần vô địch Tây Ban Nha</p>
                    <p>4 Champions League</p>
                    <p>3 Cúp vô địch thế giới cấp CLB</p>
                    <p>7 Cúp Quốc gia TBN</p>
                    <p>7 Siêu cúp TBN</p>
                    <p>3 Siêu cúp châu Âu</p>
                    <p>6 Chiếc giày vàng châu Âu</p>
                    <p>
                      8/3/2012: Ghi 5 bàn vào lưới Bayer Leverkusen, trở thành
                      cầu thủ đầu tiên trong lịch sử lập "bàn tay nhỏ" tại
                      Champions League
                    </p>
                    <p>
                      23/4/2017: <strong>Messi</strong> ghi bàn thắng thứ 500
                      trong màu áo Barca, giúp El Blaugrana hạ gục Real Madrid
                      trong trận siêu kinh điển ngay tại sân Santiago Bernabeu.
                      Sau đó, "El Pulga" gây sốt với màn giơ áo về phía các fan
                      Real
                    </p>
                    <p>
                      Tháng 8/2018: Andres Iniesta rời Barca và{" "}
                      <strong>Messi</strong> chính thức trở thành đội trưởng mới
                      của "Gã khổng lồ xứ Catalan"
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-1-1628201621023310149091.jpg"
                      alt="1, messi,barcelona,la liga,messi rời Barca,"
                      note="14/12/2000: Ký hợp đồng không chính thức với ông Carles Rexach (Giám đốc kỹ thuật Barca) trên một tờ giấy ăn để gia nhập học viện La Masia"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-1-1628201622542432436217.jpg"
                      alt="2, messi,barcelona,la liga,messi rời Barca,"
                      note="Trong trận chung kết Copa Catalunya 2003, Messi phải đeo mặt nạ để thi đấu nhưng vẫn đóng góp 2 bàn thắng trong chiến thắng 4-1 trước Espanyol"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-2-16282016235351053076727.jpg"
                      alt="3, messi,barcelona,la liga,messi rời Barca,"
                      note="16/11/2003: Lần đầu tiên ra sân trong màu áo đội 1 Barca, đó là khi anh vào sân từ băng ghế dự bị ở phút 75 trận giao hữu với Porto"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-3-1628201622856490827005.jpg"
                      alt="4, messi,barcelona,la liga,messi rời Barca,"
                      note="16/10/2004: Có màn ra mắt La Liga trong màu áo Barca ở trận đấu với Espanyol, trở thành cầu thủ trẻ nhất của El Blaugrana ra sân ở một giải đấu chính thức"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-4-16282016225301784899305.jpg"
                      alt="5, messi,barcelona,la liga,messi rời Barca,"
                      note="1/5/2005: Ghi bàn thắng đầu tiên trong màu áo Barca vào lưới Albacete, trở thành cầu thủ ghi bàn trẻ tuổi nhất trong lịch sử đội chủ sân Nou Camp"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-5-1628201623552856101869.jpg"
                      alt="6, messi,barcelona,la liga,messi rời Barca,"
                      note="24/8/2005: Lần đầu đá chính trong màu áo Barca ở trận đấu với Juventus tại cúp Joan Gamper"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-6-16282016225671170949535.jpg"
                      alt="7, messi,barcelona,la liga,messi rời Barca,"
                      note="Mùa giải 2005/06: Giành chức vô địch Champions League đầu tiên cùng Barca"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-7-16282016228891276898301.jpg"
                      alt="8, messi,barcelona,la liga,messi rời Barca,"
                      note="10/3/2007: Lập hat-trick đầu tiên ở trận Siêu kinh điển, trở thành cầu thủ đầu tiên làm được điều này sau 12 năm"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-8-1628201623588885193101.jpg"
                      alt="9, messi,barcelona,la liga,messi rời Barca,"
                      note="16/4/2007: Tái hiện bàn thắng kinh điển của huyền thoại Dìego Maradona tại World Cup 1986. Messi một mình đi bóng qua 5 cầu thủ Getafe và lập siêu phẩm"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-9-16282016225901301109231.jpg"
                      alt="10, messi,barcelona,la liga,messi rời Barca,"
                      note="Mùa 2008/09: Giành cú ăn ba đầu tiên cùng Barca (La Liga, cúp nhà vua Tây Ban Nha và Champions League), ghi bàn vào lưới MU ở trận chung kết Champions League"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-10-16282016229201182146089.jpg"
                      alt="11, messi,barcelona,la liga,messi rời Barca,"
                      note="Năm 2009: Quả bóng vàng đầu tiên"
                    />
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-11-16282016249721302968779.jpg"
                      alt="12, messi,barcelona,la liga,messi rời Barca,"
                      note="Năm 2010: Quả bóng vàng thứ 2"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-12-1628201622610219708242.jpg"
                      alt="13, messi,barcelona,la liga,messi rời Barca,"
                      note="Mùa 2010/11: Giành chức vô địch Champions League thứ ba, ghi bàn vào lưới MU ở trận chung kết"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-13-1628201624625702132921.jpg"
                      alt="14, messi,barcelona,la liga,messi rời Barca,"
                      note="Năm 2011: Quả bóng vàng thứ 3"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-15-1628201622709905881946.jpg"
                      alt="15, messi,barcelona,la liga,messi rời Barca,"
                      note="Tháng 3/2012: Cú hat-trick vào lưới Granada đưa Messi trở thành tay săn bàn vĩ đại nhất lịch sử Barca với 232 bàn thắng"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-16-16282016229731465976240.jpg"
                      alt="16, messi,barcelona,la liga,messi rời Barca,"
                      note="Năm 2012: Quả bóng vàng thứ 4, ở thời điểm đó, Messi trở thành cầu thủ duy nhất trong lịch sử 4 lần giành Quả bóng vàng"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-17-16282016227291797304468.jpg"
                      alt="17, messi,barcelona,la liga,messi rời Barca,"
                      note="Cuối năm 2012, Messi lập kỷ lục Guinness với 91 bàn thắng trong một năm dương lịch"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-18-16282016240381406192773.jpg"
                      alt="18, messi,barcelona,la liga,messi rời Barca,"
                      note="22/11/2014: Lập hat-trick vào lưới Sevilla để trở thành chân sút vĩ đại nhất trong lịch sử La Liga với 253 bàn thắng"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-19-16282016236811009171217.jpg"
                      alt="19, messi,barcelona,la liga,messi rời Barca,"
                      note="Mùa 2014/15: Giành chức vô địch Champions League lần thứ 4 cùng Barca"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-20-1628201622747794472372.jpg"
                      alt="20, messi,barcelona,la liga,messi rời Barca,"
                      note="Năm 2015: Quả bóng vàng thứ 5"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-21-16282016238051658983960.jpg"
                      alt="21, messi,barcelona,la liga,messi rời Barca,"
                      note="30/12/2015: Cán mốc 500 lần ra sân trong màu áo Barca trong trận đấu với Real Betis"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-24-16282016255671061807607.jpg"
                      alt="22, messi,barcelona,la liga,messi rời Barca,"
                      note="2/5/2019: Ghi bàn thắng thứ 600 cho Barca vào lưới Liverpool ở lượt đi bán kết Champions League"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-25-1628201624063994033024.jpg"
                      alt="23, messi,barcelona,la liga,messi rời Barca,"
                      note="Năm 2019: Quả bóng vàng thứ 6, trở thành cầu thủ đầu tiên trong lịch sử giành 6 Quả bóng vàng (nhiều nhất thế giới)"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-26-16282016250551632388078.jpg"
                      alt="24, messi,barcelona,la liga,messi rời Barca,"
                      note="31/1/2021: Ghi bàn thắng thứ 650 trong màu áo Barca vào lưới Sevilla"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-27-1628201626038483775920.jpg"
                      alt="25, messi,barcelona,la liga,messi rời Barca,"
                      note="22/3/2021: Trở thành cầu thủ ra sân nhiều nhất lịch sử Barca (768 trận) trong trận đấu với Real Sociedad"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-28-1628201622757555835151.jpg"
                      alt="26, messi,barcelona,la liga,messi rời Barca,"
                      note="Danh hiệu cuối cùng trong màu áo Barcelona (Cúp nhà vua Tây Ban Nha 2020/21)"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-29-16282016246561289026553.jpg"
                      alt="27, messi,barcelona,la liga,messi rời Barca,"
                      note="16/5/2021: Bàn thắng cuối cùng trong trận đấu cuối cùng với Barca (Barcelona 1-2 Celta Vigo, vòng 37 La Liga)"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-14-1628201624024814025663.jpg"
                      alt="28, messi,barcelona,la liga,messi rời Barca,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-22-16282016229981807089793.jpg"
                      alt="29, messi,barcelona,la liga,messi rời Barca,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-23-1628201622555901638985.jpg"
                      alt="30, messi,barcelona,la liga,messi rời Barca,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-29-16282016246561289026553.jpg"
                      alt="31, messi,barcelona,la liga,messi rời Barca,"
                      note=""
                    />
                    <p>Ảnh: Tổng hợp</p>{" "}
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
