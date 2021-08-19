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
"timestamp": '19/08/2021 12:55 PM',
"title": '10 game đồ họa đẹp xuất sắc, phong cảnh thiên nhiên siêu hùng vĩ (P1)',
"description": 'Bạn sẽ bị hớp hổn bởi những tựa game đồ họa đẹp tuyệt vời này.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/16/photo-1-16291136972941823190210.jpg',
"alt": 'RED DEAD REDEMPTION,GAME ĐỒ HỌA ĐẸP,ĐỒ HỌA ĐẸP,TÁC PHẨM NGHỆ THUẬT,GOD OF WAR,THẾ GIỚI ẢO,FAR CRY 4,MÀN ẢNH RỘNG,',
"category": 'games',
"date": '19/08/2021',
"time": '12:55 PM',
"link": '/10-game-do-hoa-dep-xuat-sac-phong-canh-thien-nhien-sieu-hung-vi-p1',
"zcomponent": 'page_20210819125544',
"filepath": './20210819125544-10-game-do-hoa-dep-xuat-sac-phong-canh-thien-nhien-sieu-hung-vi-p1.js'
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
const title =
  "10 game đồ họa đẹp xuất sắc, phong cảnh thiên nhiên siêu hùng vĩ (P1)";
const author = "Real Madrid";
const source = "Trí Thức Trẻ";
const timestamp = "19/08/2021 12:55 PM";
const description =
  "Bạn sẽ bị hớp hổn bởi những tựa game đồ họa đẹp tuyệt vời này.";
const link =
  "10-game-do-hoa-dep-xuat-sac-phong-canh-thien-nhien-sieu-hung-vi-p1";
const tagparam = [
  "RED DEAD REDEMPTION",
  "GAME ĐỒ HỌA ĐẸP",
  "ĐỒ HỌA ĐẸP",
  "TÁC PHẨM NGHỆ THUẬT",
  "GOD OF WAR",
  "THẾ GIỚI ẢO",
  "FAR CRY 4",
  "MÀN ẢNH RỘNG",
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

export default function page_20210819125544() {
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
                    <h5>Red Dead Redemption 2</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/16/photo-1-16291136972941823190210.jpg"
                      alt="1, RED DEAD REDEMPTION,GAME ĐỒ HỌA ĐẸP,ĐỒ HỌA ĐẸP,TÁC PHẨM NGHỆ THUẬT,GOD OF WAR,THẾ GIỚI ẢO,FAR CRY 4,MÀN ẢNH RỘNG,"
                      note=""
                    />
                    <p>
                      {" "}
                      Không quá khi nói rằng{" "}
                      <strong>Red Dead Redemption</strong> 2 là một trong những
                      tựa game đẹp nhất ở thời điểm hiện tại. Game tái hiện sinh
                      động và chân thực vẻ đẹp hoang sơ của nước Mỹ. Những đồng
                      cỏ bát ngát, dòng sông thơ mộng hiền hào, những dãy núi
                      cao quanh năm tuyết phủ hay rừng rậm bạt ngàn cây cổ thụ,
                      tất cả đã tạo nên một Red Dead Redemption 2 mãn nhãn như
                      một <strong>tác phẩm nghệ thuật</strong>.
                    </p>
                    <h5>God of War 2018</h5>
                    <p>
                      Mang đậm màu sắc thần thoại, <strong>God of War</strong>{" "}
                      2018 là sự kết hợp hoàn hảo giữa vẻ đẹp hùng vĩ của Bắc Âu
                      và sự lung linh, thần bí của các loại phép thuật. Game đưa
                      người chơi vào thế giới cổ tích, nơi bạn sẽ trải qua các
                      cung bậc cảm xúc khác nhau từ thế giới thực đến{" "}
                      <strong>thế giới ảo</strong>.{" "}
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-1-1629113329864696756976.jpg"
                      alt="2, RED DEAD REDEMPTION,GAME ĐỒ HỌA ĐẸP,ĐỒ HỌA ĐẸP,TÁC PHẨM NGHỆ THUẬT,GOD OF WAR,THẾ GIỚI ẢO,FAR CRY 4,MÀN ẢNH RỘNG,"
                      note=""
                    />
                    <p>
                      Với sự xuất hiện của PS5, <strong>God of War</strong> 2018
                      (bản remastered) còn hoàn hảo hơn nữa với việc chạy mượt
                      trên nền đồ họa 4K 60 FPS. Một cảm giác tuyệt vời khó thể
                      diễn ra.
                    </p>
                    <h5>Far Cry 4 </h5>
                    <p>
                      Với những người yêu thích du lịch, "Himalayas" chắc chắn
                      là một trong những địa danh mà họ luôn hằng mơ ước. Tuy
                      nhiên, vì nhiều điều kiện khác nhau từ khoảng cách địa lý,
                      sức khỏe cho đến kinh tế mà không phải ai cũng có cơ hội
                      được đặt chân đến đây.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-1-16291130126772132257535.jpg"
                      alt="3, RED DEAD REDEMPTION,GAME ĐỒ HỌA ĐẸP,ĐỒ HỌA ĐẸP,TÁC PHẨM NGHỆ THUẬT,GOD OF WAR,THẾ GIỚI ẢO,FAR CRY 4,MÀN ẢNH RỘNG,"
                      note=""
                    />
                    <p>
                      Để giải quyết bài toán trên, <strong>Far Cry 4</strong> sẽ
                      là sự lựa chọn không hề tồi để các bạn có thể du lịch qua
                      chiếc PC của mình. Lấy bối cảnh tại một quốc gia hư cấu
                      thuộc khu vực dãy Himalaya, Far Cry 4 sẽ đưa bạn đến với
                      thiên nhiên hùng vĩ của nóc nhà thế giới. Phát huy rất tốt
                      truyền thống về thế mạnh đồ họa Crytek, trò chơi sẽ không
                      bao giờ làm bạn thất vọng bởi những hình ảnh lung linh,
                      tuyệt đẹp tựa như chỉ có thể bắt gặp trên những thước phim{" "}
                      <strong>màn ảnh rộng</strong>.
                    </p>
                    <h5>Just Cause 3</h5>
                    <p>
                      Just Cause là một seri game hành động phiêu lưu của hãng
                      Avalanche Stuidos. Phần 1 của tựa game này được phát hành
                      vào năm 2006 và xây dựng dựa trên cuộc chiến tranh Mỹ -
                      Panama (1989-1990). Hai phần tiếp theo được phát hành
                      trong năm 2010 và 2015 với bối cảnh lần lượt là Đông Nam Á
                      và Địa Trung Hải.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-1-16291130251091296262607.jpg"
                      alt="4, RED DEAD REDEMPTION,GAME ĐỒ HỌA ĐẸP,ĐỒ HỌA ĐẸP,TÁC PHẨM NGHỆ THUẬT,GOD OF WAR,THẾ GIỚI ẢO,FAR CRY 4,MÀN ẢNH RỘNG,"
                      note=""
                    />
                    <p>
                      Như đã nói ở trên, bối cảnh chính của Just Cause 3 là tại
                      Địa Trung Hải. Do đó, những hình ảnh liên quan đến biển sẽ
                      là những thứ bạn nhìn thấy nhiều nhất khi tham gia các màn
                      chơi. Với phạm vi địa lý lên đến hơn 1000 km² hoàn toàn tự
                      do từ trên trời cho đến đáy đại dương, bạn sẽ cảm thấy vô
                      cùng thoải mái trong việc khám phá và tìm hiểu từng ngóc
                      ngách của trò chơi.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Hãy thử một lần nhảy dù từ độ cao hàng trăm mét và đáp
                      xuống mặt biển, đó là một cảm giác không khác gì việc đắm
                      mình trong một đại dương trong xanh với những hiệu ứng vật
                      lý và ánh sáng chân thực nhất bạn từng trải nghiệm.
                    </p>
                    <h5>Assassin’s Creed IV</h5>
                    <p>
                      Không thể có nơi nào phù hợp để tận hưởng kì nghỉ hè hơn
                      một thiên đường nhiệt đới, đặc biệt vào cuối thế kỉ XVIII
                      khi có rất nhiều hoạt động diễn ra trên vùng biển Caribbe
                      của Assassin's Creed IV. Bạn có thể đi săn cá voi trắng
                      hay những loài cá lớn khác bằng một cây giáo khổng lồ,
                      việc mà bây giờ đã bị cấm; hoặc ngụp lặn săn tìm kho báu
                      trong xác những con tàu đắm. Nếu không thích bơi lội,
                      người chơi cũng có thể tham gia nhậu nhẹt cùng đám cướp
                      biển, tuy nhiên sẽ cần giữ chừng mực để không bị lôi vào
                      những cuộc đánh lộn.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-1-16291135660931258565017.jpg"
                      alt="5, RED DEAD REDEMPTION,GAME ĐỒ HỌA ĐẸP,ĐỒ HỌA ĐẸP,TÁC PHẨM NGHỆ THUẬT,GOD OF WAR,THẾ GIỚI ẢO,FAR CRY 4,MÀN ẢNH RỘNG,"
                      note=""
                    />
                    <p>
                      Assassin’s Creed IV đã khắc họa rất thành công cuộc sống
                      của tên cướp biển, không chỉ có cướp tàu mà còn nhiều thú
                      vui khác nữa. Do vậy mọi người đều có thể tìm cho mình một
                      hoạt động ưa thích trên vùng biển nhiệt đới xinh đẹp này.
                    </p>
                    <p>(Còn tiếp....)</p>
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
