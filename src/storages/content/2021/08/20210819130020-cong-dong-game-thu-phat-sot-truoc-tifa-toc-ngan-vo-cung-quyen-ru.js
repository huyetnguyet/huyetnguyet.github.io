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
"timestamp": '19/08/2021 01:00 PM',
"title": 'Cộng đồng game thủ phát sốt trước Tifa tóc ngắn vô cùng quyến rũ',
"description": 'Một Tifa khác lạ nhưng vẫn cực kỳ xinh đẹp.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/18/photo-1-1629259505085449191550.jpg',
"alt": 'CỘNG ĐỒNG GAME,FINAL FANTASY VII,FINAL FANTASY VII REMAKE,NHÂN VẬT NỮ,TIFA,CÔ GÁI XINH ĐẸP,',
"category": 'games',
"date": '19/08/2021',
"time": '01:00 PM',
"link": '/cong-dong-game-thu-phat-sot-truoc-tifa-toc-ngan-vo-cung-quyen-ru',
"zcomponent": 'page_20210819130020',
"filepath": './20210819130020-cong-dong-game-thu-phat-sot-truoc-tifa-toc-ngan-vo-cung-quyen-ru.js'
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
  "Cộng đồng game thủ phát sốt trước Tifa tóc ngắn vô cùng quyến rũ";
const author = "TVG";
const source = "Trí Thức Trẻ";
const timestamp = "19/08/2021 01:00 PM";
const description = "Một Tifa khác lạ nhưng vẫn cực kỳ xinh đẹp.";
const link = "cong-dong-game-thu-phat-sot-truoc-tifa-toc-ngan-vo-cung-quyen-ru";
const tagparam = [
  "CỘNG ĐỒNG GAME",
  "FINAL FANTASY VII",
  "FINAL FANTASY VII REMAKE",
  "NHÂN VẬT NỮ",
  "TIFA",
  "CÔ GÁI XINH ĐẸP",
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

export default function page_20210819130020() {
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
                      Chắc hẳn game thủ nào khi chơi siêu phẩm{" "}
                      <strong>Final Fantasy VII</strong> Remake phát hành vừa
                      qua cũng phải ngã ngũ trước sắc đẹp tuyệt trần của bóng
                      hồng <strong>Tifa</strong> Lockhart, một trong những{" "}
                      <strong>nhân vật nữ</strong> chính xinh đẹp nhất game.
                      Nhiều game thủ còn nhận Tifa là "vợ" của mình và thậm chí
                      họ còn ghen tị với anh chàng Cloud, nhân vật chính trong
                      game vì có cô bạn đẹp như Tifa. Điều điều khiến cho Tifa
                      trở nên hot như vậy chính là sự quyến rũ, gợi cảm những
                      không kém phần mạnh mẽ, sức sống trong tạo hình của nhân
                      vật, khiến cho không ít người chơi phải cảm thấy nóng mắt.
                    </p>
                    <p>
                      Trong game, <strong>Tifa</strong> Lockhart được nhà phát
                      triển game Square Enix mô tả là một{" "}
                      <strong>cô gái xinh đẹp</strong>, có một mái tóc dài đen
                      óng mượt. Cô mặc một chiếc váy ngắn màu trắng đen tạo nên
                      một nét đẹp vô cùng quyến rũ và "sexy". Nhiều game thủ
                      thậm chí còn đã chết mê chết mệt với kiểu tóc dài của Tifa
                      khi họ luôn muốn được một cô gái xinh đẹp tóc dài yêu
                      thương. Tuy nhiên đã bao giờ game thủ tưởng tượng rằng, sẽ
                      thế nào nếu Tifa có mái tóc ngắn chưa?
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/18/photo-1-1629259505085449191550.jpg"
                      alt="1, CỘNG ĐỒNG GAME,FINAL FANTASY VII,FINAL FANTASY VII REMAKE,NHÂN VẬT NỮ,TIFA,CÔ GÁI XINH ĐẸP,"
                      note=""
                    />

                    <p>
                      Cụ thể vào cuối tuần vừa qua, hashtag #
                      <strong>Tifa</strong>ShortHair đã bắt đầu trở thành một
                      trend mới cực Hot trên Twitter khi rất nhiều fan hâm mộ
                      dòng game JRPG cổ điển của Square Enix đã đăng những bức
                      ảnh nghệ thuật về hình ảnh về Tifa với mái tóc ngắn. Thông
                      thường, mái tóc của Tifa rất dài, buông thõng qua hông
                      trước khi được buộc lại trong một dải ruy băng. Giờ đây,
                      những hình ảnh này cho thấy Tifa của chúng ta vẫn rất xinh
                      đẹp dù có là kiểu tóc nào đi chăng nữa.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/18/photo-3-1629259506575405351840.jpg"
                      alt="4, CỘNG ĐỒNG GAME,FINAL FANTASY VII,FINAL FANTASY VII REMAKE,NHÂN VẬT NỮ,TIFA,CÔ GÁI XINH ĐẸP,"
                      note=""
                    />

                    <p>
                      Được biết, Hashtag này xuất hiện khi nghệ sĩ Strawderryst
                      đưa ra lời thách thức mọi người rằng hãy đăng{" "}
                      <strong>Tifa</strong> với mái tóc ngắn và đăng ảnh của
                      chính cô ấy. Strawderryst cho biết rằng việc tạo ra một
                      Tifa tóc ngắn là từ chính tưởng tượng và niềm yêu thích
                      của cô với nhân vật Tifa trong{" "}
                      <strong>Final Fantasy VII</strong> Remake. "Là một nghệ sĩ
                      và một người thích tưởng tượng, tôi có rất nhiều ý tưởng
                      và quan điểm và mái tóc ngắn của Tifa là một trong số đó."
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/18/photo-4-16292595060862001379723.jpg"
                      alt="5, CỘNG ĐỒNG GAME,FINAL FANTASY VII,FINAL FANTASY VII REMAKE,NHÂN VẬT NỮ,TIFA,CÔ GÁI XINH ĐẸP,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/18/photo-5-1629259507593327611991.jpg"
                      alt="6, CỘNG ĐỒNG GAME,FINAL FANTASY VII,FINAL FANTASY VII REMAKE,NHÂN VẬT NỮ,TIFA,CÔ GÁI XINH ĐẸP,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/18/photo-6-16292595070851939775120.jpg"
                      alt="7, CỘNG ĐỒNG GAME,FINAL FANTASY VII,FINAL FANTASY VII REMAKE,NHÂN VẬT NỮ,TIFA,CÔ GÁI XINH ĐẸP,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/18/photo-7-16292595066031210880401.jpg"
                      alt="8, CỘNG ĐỒNG GAME,FINAL FANTASY VII,FINAL FANTASY VII REMAKE,NHÂN VẬT NỮ,TIFA,CÔ GÁI XINH ĐẸP,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/18/photo-8-1629259506106701104942.jpg"
                      alt="9, CỘNG ĐỒNG GAME,FINAL FANTASY VII,FINAL FANTASY VII REMAKE,NHÂN VẬT NỮ,TIFA,CÔ GÁI XINH ĐẸP,"
                      note=""
                    />
                    <p>
                      Hình ảnh <strong>Tifa</strong> với mái tóc ngắn đã lan
                      truyền mạnh mẽ và mở đầu cho một chuỗi dài các bài đăng từ
                      những fan hâm mộ dòng game Final Fantasy khác, những người
                      đã thể hiện những cách diễn giải của riêng họ về Tifa tóc
                      ngắn. Thậm chí có những bài đăng hình ảnh vẽ tay hay hình
                      ảnh anime vô cùng gợi cảm của Tifa tóc ngắn được chia sẻ
                      rầm rộ trên Twitter.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Nói về <strong>Tifa</strong> Lockhart, đây là bóng hồng
                      được game thủ hết mực yêu quý. Tifa là người bạn thân nhất
                      của Cloud khi đã cùng anh sống qua thời niên thiếu tại quê
                      nhà trước khi Cloud gia nhập SOLDIER. Cô cũng là một thành
                      viên của AVALANCHE và là người chịu trách nhiệm thuyết
                      phục Cloud gia nhập nhóm của Barret sau khi rời khởi tổ
                      chức cũ. Là một chiến binh với kĩ năng chiến đấu điêu
                      luyện kể cả bằng tay không, Tifa là một con người lạc
                      quan, thấu hiểu mọi người và là sợi dây liên kết kéo mọi
                      người gần nhau hơn để cùng nhau tiến về phía trước.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/18/photo-1-1629259506065400823124.jpg"
                      alt="2, CỘNG ĐỒNG GAME,FINAL FANTASY VII,FINAL FANTASY VII REMAKE,NHÂN VẬT NỮ,TIFA,CÔ GÁI XINH ĐẸP,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/18/photo-2-16292595065411652883318.jpg"
                      alt="3, CỘNG ĐỒNG GAME,FINAL FANTASY VII,FINAL FANTASY VII REMAKE,NHÂN VẬT NỮ,TIFA,CÔ GÁI XINH ĐẸP,"
                      note=""
                    />

                    <p>
                      Thiết kế ban dầu của <strong>Tifa</strong> khá đơn giản
                      với một bộ trang phục thể thao áo trắng – váy đen cùng đôi
                      bốt nâu tạo nên sức sống và sự khỏe khoắn cho bóng hồng
                      này. Với phiên bản remake, Tifa được lột xác để trở nên
                      quyến rũ và gợi cảm hơn, nhưng vẫn giữ bộ trang phục cũ
                      trừ mái tóc có phần ngắn lại để trông phù hợp với vẻ ngoài
                      của cô trong FF7: Advent Children và qua những mô tả khác.
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
