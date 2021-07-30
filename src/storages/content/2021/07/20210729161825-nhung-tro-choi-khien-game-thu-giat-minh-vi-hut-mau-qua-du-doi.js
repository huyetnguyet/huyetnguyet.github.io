import React from "react";
import "components/page.css";
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
"timestamp": '29/07/2021 04:18 PM',
"title": 'Những trò chơi khiến game thủ giật mình vì "hút máu" quá dữ dội',
"description": 'Những pha hút máu này xứng đáng được kể tới vì chúng được sinh ra đúng với mục đích "hút máu" người chơi tới tận giọt cuối cùng.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/7/17/photo-1-1626467721491353955828.jpg',
"alt": 'GAME,HÚT MÁU,',
"category": 'games',
"date": '29/07/2021',
"time": '04:18 PM',
"link": '/nhung-tro-choi-khien-game-thu-giat-minh-vi-hut-mau-qua-du-doi',
"zcomponent": 'page_20210729161825',
"filepath": './20210729161825-nhung-tro-choi-khien-game-thu-giat-minh-vi-hut-mau-qua-du-doi.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "games";
const categoryLink = "/games";
const title = 'Những trò chơi khiến game thủ giật mình vì "hút máu" quá dữ dội';
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:18 PM";
const description =
  'Những pha hút máu này xứng đáng được kể tới vì chúng được sinh ra đúng với mục đích "hút máu" người chơi tới tận giọt cuối cùng.';
const link = "nhung-tro-choi-khien-game-thu-giat-minh-vi-hut-mau-qua-du-doi";
const tagparam = ["GAME", "HÚT MÁU"];
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

export default function page_20210729161825() {
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
            <AdsHorizontal />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <RelationNews category={category} />
                <div className="contentBody">
                  <h5>1. Train Simulator</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/17/photo-1-1626467721491353955828.jpg"
                    alt="1, GAME,HÚT MÁU,"
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/16/photo-1-1626454581147738600482.jpg"
                    alt="2, GAME,HÚT MÁU,"
                    note=""
                  />
                  <p>
                    Train Simulator là một tựa <strong>game</strong> giả lập
                    việc lái tàu. Nó có tổng cộng 230 bản DLC. Và mỗi bản như
                    vậy đều có một cái giá không hề rẻ, nó rơi vào khoảng 20 -
                    40 USD lúc chưa giảm giá. Nhưng khác với những cái tên kể
                    trên, Train Simulator tuy có nhiều DLC nhưng không hề bị
                    cộng đồng game thủ ghét bỏ. Vì những bản DLC của nó được
                    phát hành trải dài cho tất cả phiên bản chứ không chỉ dành
                    riêng cho phần ra mắt năm 2016 và có thể ứng dụng cho các
                    phiên bản sau.
                  </p>
                  <p>
                    Bình thường, những <strong>game</strong> hiện có trên thị
                    trường thường chỉ được phát hành kèm theo một số bản DLC
                    nhất định. Còn đối với Train Simulator thì không, nó có tổng
                    cộng hàng tấn các bản DLC mà bạn có thể chi để có được trải
                    nghiệm tốt nhất khi chơi game. Cái giá để bạn chi hết cả
                    đống DLC đó nằm ở mức không tưởng, lên tới 8566 USD vào năm
                    2019, một con số khổng lồ với các game thủ.
                  </p>
                  <h5>2. Rocksmith</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/16/photo-1-1626454565113825815740.jpg"
                    alt="3, GAME,HÚT MÁU,"
                    note=""
                  />
                  <p>
                    Khi nói đến <strong>game</strong> âm nhạc, có lẽ các fan
                    game đều sẽ nghĩ ngay đến những cái tên như Guitar Hero,
                    Rock Band hay DJ Hero. Các tựa game này đều yêu cầu bạn phải
                    sở hữu công cụ riêng chỉ để chơi, chẳng hạn như những bộ đàn
                    trống “đồ chơi” với giá không hề rẻ chỉ để chơi những tựa
                    game đó, ngoài ra chúng hoàn toàn vô dụng với những game
                    khác, hay cũng chỉ mang tính “làm cảnh” ngoài đời thật.{" "}
                  </p>
                  <p>
                    Với Rocksmith thì khác, tựa <strong>game</strong> cho phép
                    bạn chơi bằng guitar thực thụ và lấy tiền của bạn theo kiểu
                    khác - các bài hát trong game. Tổng giá trị các bài hát
                    trong game lên tới hơn 6 nghìn USD. Dĩ nhiên, bạn không nhất
                    thiết phải mua hết tất cả nhạc trong game, nhưng con số
                    khổng lồ này cũng khiến nhiều game thủ giật mình với mức giá
                    đáng sợ kể trên.{" "}
                  </p>
                  <h5>3. Dead or Alive 5</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/16/photo-1-16264545425451490180070.jpg"
                    alt="4, GAME,HÚT MÁU,"
                    note=""
                  />
                  <p>
                    Series "Dead or Alive" không phải là một cái tên xa lạ khi
                    nghĩ tới những bộ trang phục quái đản nhất trong thế giới
                    ảo, nhưng thông thường sự quái đản này luôn đi đôi chuyện
                    gợi cảm quá mức. Dead or Alive 5 nói tiếp truyền thống của
                    các <strong>game</strong> trước đó, và nó "
                    <strong>hút máu</strong>" game thủ còn ghê gớm hơn cả các
                    đàn anh.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Theo đó, DoA 5 ra mắt hoàn toàn miễn phí, và nhà sản xuất
                    thu tiền lại bằng cách bán các trang phục cho{" "}
                    <strong>game</strong> thủ. Nếu như mức giá chỉ rơi vào tầm 5
                    - 10 USD/bộ trang phục thì chấp nhận được, đằng nào chúng
                    được chào bán với mức giá lên tới 70 USD - còn cao hơn cả
                    những tựa game bom tấn thông thường được bày bán. Có lẽ chỉ
                    có các game thủ mê DoA lắm mới có thể chi ra số tiền này.
                  </p>
                  <h5>4. Gal*Gun</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/16/photo-1-16264546064191331232357.jpg"
                    alt="5, GAME,HÚT MÁU,"
                    note=""
                  />
                  <p>
                    Gal*Gun Double Peace là một tựa <strong>game</strong> khá kỳ
                    quặc và làm cho rất nhiều người không hài lòng về tính chất
                    của nó. Ban đầu, bạn chỉ tương tác khá nhẹ nhàng với các cô
                    gái trong game, nhưng về sau thì mọi thứ trở nên biến thái
                    và táo bạo hơn rất nhiều.{" "}
                  </p>
                  <p>
                    Dù vậy, sự táo bạo mà nhà thiết kế tạo ra cho{" "}
                    <strong>game</strong> cũng chẳng bằng sự táo tợn mà họ đã
                    đặt ra cho các món đồ trong game, tiêu biểu nhất là
                    Pheromone Z. Đây là một cái "ống nhòm" cho phép bạn nhìn
                    xuyên quần áo ngay lập tức, với một mức giá cũng… lố bịch
                    không kém. Nó được đặt với mức giá 70 USD, "vừa đủ" để các
                    game thủ táy máy tò mò sẽ đặt mua nhằm soi mói các cô gái
                    một cách tối đa.{" "}
                  </p>
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
