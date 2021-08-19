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
"timestamp": '19/08/2021 12:59 PM',
"title": '10 game đồ họa đẹp xuất sắc, phong cảnh thiên nhiên siêu hùng vĩ (P2)',
"description": 'Với những người yêu thích game đồ họa đẹp, đây là những cái tên không nên bỏ qua.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/17/photo-1-1629213500801682258591.jpg',
"alt": 'ARMA 3,GAME ĐẸP,GAME ĐỒ HỌA ĐẸP,CHẤT LƯỢNG HÌNH ẢNH,GAME BẮN SÚNG,',
"category": 'games',
"date": '19/08/2021',
"time": '12:59 PM',
"link": '/10-game-do-hoa-dep-xuat-sac-phong-canh-thien-nhien-sieu-hung-vi-p2',
"zcomponent": 'page_20210819125943',
"filepath": './20210819125943-10-game-do-hoa-dep-xuat-sac-phong-canh-thien-nhien-sieu-hung-vi-p2.js'
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
  "10 game đồ họa đẹp xuất sắc, phong cảnh thiên nhiên siêu hùng vĩ (P2)";
const author = "Real Madrid";
const source = "Trí Thức Trẻ";
const timestamp = "19/08/2021 12:59 PM";
const description =
  "Với những người yêu thích game đồ họa đẹp, đây là những cái tên không nên bỏ qua.";
const link =
  "10-game-do-hoa-dep-xuat-sac-phong-canh-thien-nhien-sieu-hung-vi-p2";
const tagparam = [
  "ARMA 3",
  "GAME ĐẸP",
  "GAME ĐỒ HỌA ĐẸP",
  "CHẤT LƯỢNG HÌNH ẢNH",
  "GAME BẮN SÚNG",
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

export default function page_20210819125943() {
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
                      10 <strong>game đồ họa đẹp</strong> xuất sắc, phong cảnh
                      thiên nhiên siêu hùng vĩ (P1)
                    </p>
                    <h5>Arma 3 </h5>
                    <p>
                      <strong>Arma 3</strong> chưa phải là tựa game đòi hỏi cấu
                      hình cao nhất vào thời điểm nó ra mắt tuy nhiên{" "}
                      <strong>chất lượng hình ảnh</strong> mà nó mang lại cho
                      người chơi là không thể chê vào đâu được.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/17/photo-1-1629213486869861358947.jpg"
                      alt="1, ARMA 3,GAME ĐẸP,GAME ĐỒ HỌA ĐẸP,CHẤT LƯỢNG HÌNH ẢNH,GAME BẮN SÚNG,"
                      note="u"
                    />
                    <p>
                      Với phạm vi địa lý lên đến 270 km², các bạn sẽ được trải
                      nghiệm qua những địa hình khác nhau như đồi cát, khu công
                      nghiệp, rừng rập và cả những bờ biển trải dài cát trắng.
                      Hiệu ứng vật lý và ánh sáng là những điểm luôn được chú ý
                      ở những <strong>game bắn súng</strong>.{" "}
                      <strong>Arma 3</strong> đã làm rất tốt những điều này và
                      chắc chắn bạn sẽ không bao giờ phải thất vọng về{" "}
                      <strong>chất lượng hình ảnh</strong> của nó.
                    </p>
                    <h5>Assassin's Creed Odyssey </h5>
                    <p>
                      Odyssey là phiên bản mới của dòng game Assassin’s Creed.
                      Game lấy bối cảnh vào thời nội chiến Hy Lạp. Với nhiệm vụ
                      thay thế món vũ khí Hidden Blade huyền thoại, cặp vũ khí
                      mang tên Spear of Leonidas sẽ song hành cùng nhân vật
                      chính trong hành trình chinh phục vùng đất Hy Lạp đầy màu
                      sắc sử thi.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/17/photo-1-1629213500801682258591.jpg"
                      alt="2, ARMA 3,GAME ĐẸP,GAME ĐỒ HỌA ĐẸP,CHẤT LƯỢNG HÌNH ẢNH,GAME BẮN SÚNG,"
                      note=""
                    />
                    <p>
                      Nhắc đến Hy Lạp là không thể không nhắc đến những bờ biển
                      tuyệt đẹp của Địa Trung Hải, một trong những địa điểm du
                      lịch thu hút hàng triệu lượt khách mỗi năm. Nếu chưa có cơ
                      hội được đến đây, sao bạn không thử một lần trải nghiệm
                      chúng trong Assassin's Creed Odyssey.
                    </p>
                    <h5>Far Cry 5</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/17/photo-1-16292135869131791367866.jpg"
                      alt="3, ARMA 3,GAME ĐẸP,GAME ĐỒ HỌA ĐẸP,CHẤT LƯỢNG HÌNH ẢNH,GAME BẮN SÚNG,"
                      note=""
                    />
                    <p>
                      Far Cry 5 là phần mới của dòng game cùng tên được Ubisoft
                      phát hành. Far Cry 5 sẽ được đặt trong bối cảnh hiện đại
                      tại Montana, Mỹ, nơi nhân vật chính sẽ phải chiến đấu với
                      một nhóm cuồng tín.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Bỏ qua những màn hành động rực lửa, Far Cry 5 sở hữu quang
                      cảnh thiên nhiên cực kỳ đẹp mắt và nên thơ. Game thủ sẽ
                      được thả mình vào không gian đồng quê nước Mỹ, nơi thiên
                      nhiên, núi non, sông nước sẽ tạo nên bức họa tuyệt đẹp mà
                      bạn không thể rời mắt.
                    </p>
                    <h5>Rise of the Tomb Raider</h5>
                    <p>
                      Rise of the Tomb Raider là phần tiếp theo của seri game
                      Tomb Raider được phát hành lần đầu tiên vào năm 2013. Rise
                      of the Tomb Raider được ra mắt chính thức vào ngày
                      10/11/2015 cho phiên bản trên hệ console. Không lâu sau
                      đó, phiên bản PC cũng được phát hành vào ngày 28/1/2016.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/17/photo-1-16292137253861039481619.jpg"
                      alt="4, ARMA 3,GAME ĐẸP,GAME ĐỒ HỌA ĐẸP,CHẤT LƯỢNG HÌNH ẢNH,GAME BẮN SÚNG,"
                      note=""
                    />
                    <p>
                      Lấy bối cảnh tại một khu vực thuộc Bắc Á, Rise of the Tomb
                      Raider sẽ đưa bạn đến với thiên nhiên hùng vĩ của nóc nhà
                      thế giới. Phát huy rất tốt truyền thống về thế mạnh đồ
                      họa, tựa game này sẽ không bao giờ làm bạn thất vọng bởi
                      những hình ảnh lung linh, tuyệt đẹp tựa như chỉ có thể bắt
                      gặp trên những thước phim màn ảnh rộng.
                    </p>
                    <h5>The Witcher 3: Wild Hunt</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/17/photo-1-16292138012812141342400.jpg"
                      alt="5, ARMA 3,GAME ĐẸP,GAME ĐỒ HỌA ĐẸP,CHẤT LƯỢNG HÌNH ẢNH,GAME BẮN SÚNG,"
                      note=""
                    />
                    <p>
                      "The Witcher 3: Wild Hunt" không chỉ là một trong những
                      game xuất sắc, nó còn tạo ra một chuẩn mực mới để những
                      thế hệ game sau vươn tới trên phương diện nội dung, thiết
                      kế và tất nhiên là cả đồ họa. Đúng là chất lượng thật của
                      game không được như những tấm hình quảng cáo marketing,
                      nhưng vẫn phải công nhận rằng "The Witcher 3: Wild Hunt"
                      rất rất đẹp, mang đến cho người chơi một thế giới giả
                      tưởng hết sức rộng lớn và chi tiết.
                    </p>
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
