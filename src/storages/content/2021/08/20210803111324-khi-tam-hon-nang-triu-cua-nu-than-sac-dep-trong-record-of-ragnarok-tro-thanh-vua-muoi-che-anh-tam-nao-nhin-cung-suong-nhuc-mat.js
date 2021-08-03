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
"timestamp": '03/08/2021 11:13 AM',
"title": 'Khi "tâm hồn nặng trĩu" của nữ thần sắc đẹp trong Record Of Ragnarok trở thành vựa muối chế ảnh, tấm nào nhìn cũng sướng nhức mắt',
"description": 'Xem loạt ảnh chế theo nữ thần sắc đẹp trong Record Of Ragnarok dưới đây mà các fan đều phải tấm tắc khen quá sáng tạo.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/2/-162790902781713007764.jpg',
"alt": 'RECORD OF RAGNAROK,APHRODITE,NỮ THẦN SẮC ĐẸP,ẢNH CHẾ APHRODITE,MEME APHRODITE,',
"category": 'games',
"date": '03/08/2021',
"time": '11:13 AM',
"link": '/khi-tam-hon-nang-triu-cua-nu-than-sac-dep-trong-record-of-ragnarok-tro-thanh-vua-muoi-che-anh-tam-nao-nhin-cung-suong-nhuc-mat',
"zcomponent": 'page_20210803111324',
"filepath": './20210803111324-khi-tam-hon-nang-triu-cua-nu-than-sac-dep-trong-record-of-ragnarok-tro-thanh-vua-muoi-che-anh-tam-nao-nhin-cung-suong-nhuc-mat.js'
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
  'Khi "tâm hồn nặng trĩu" của nữ thần sắc đẹp trong Record Of Ragnarok trở thành vựa muối chế ảnh, tấm nào nhìn cũng sướng nhức mắt';
const author = "Mẹ Sề";
const source = "Pháp luật và bạn đọc";
const timestamp = "03/08/2021 11:13 AM";
const description =
  "Xem loạt ảnh chế theo nữ thần sắc đẹp trong Record Of Ragnarok dưới đây mà các fan đều phải tấm tắc khen quá sáng tạo.";
const link =
  "khi-tam-hon-nang-triu-cua-nu-than-sac-dep-trong-record-of-ragnarok-tro-thanh-vua-muoi-che-anh-tam-nao-nhin-cung-suong-nhuc-mat";
const tagparam = [
  "RECORD OF RAGNAROK",
  "APHRODITE",
  "NỮ THẦN SẮC ĐẸP",
  "ẢNH CHẾ APHRODITE",
  "MEME APHRODITE",
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

export default function page_20210803111324() {
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
                      Trong series anime <strong>Record Of Ragnarok</strong>{" "}
                      đang phát trực tuyến trên Netflix, hình ảnh nữ thần tình
                      yêu <strong>Aphrodite</strong> với điểm nhấn là vòng một
                      quá khổ đã khiến nhiều người không thể rời mắt. Vòng một
                      của nàng thậm chí còn to đến mức phải có người đỡ nếu
                      không sẽ chẳng hiểu có chuyện gì xảy ra. Hình ảnh quyến rũ
                      của vị nữ thần này không chỉ khiến nhiều người mê mệt mà
                      còn trở thành meme tấu hài được cộng đồng mạng vô cùng yêu
                      thích.
                    </p>
                    <p>
                      Và bây giờ, hãy cùng điểm qua loạt ảnh chế được lấy cảm
                      hứng từ <strong>nữ thần sắc đẹp</strong>{" "}
                      <strong>Aphrodite</strong> trong anime{" "}
                      <strong>Record Of Ragnarok</strong> được thực hiện bởi các
                      nghệ sĩ và người hâm mộ khác nhau trên Internet nhé!
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/photo-1-1627908173870531219683.jpg"
                      alt="1, RECORD OF RAGNAROK,APHRODITE,NỮ THẦN SẮC ĐẸP,ẢNH CHẾ APHRODITE,MEME APHRODITE,"
                      note="Hình ảnh này được lấy cảm hứng từ những hãng đồ ăn nhanh nổi tiếng thế giới là Wendys, Colonel Sanders và McDonalds."
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/photo-1-1627908672002281634761.jpg"
                      alt="2, RECORD OF RAGNAROK,APHRODITE,NỮ THẦN SẮC ĐẸP,ẢNH CHẾ APHRODITE,MEME APHRODITE,"
                      note="Nhân vật Alexandra Trese và Kambal trong loạt phim Trese cũng được trình chiếu trên Netflix khi được chế theo phong cách của Aphrodite."
                    />
                    <p>
                      Đội 7 trong Naruto cũng không thể đứng ngoài trào lưu này
                      nhưng kết quả thì "thật bất ngờ".
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/photo-1-16279087755611740439197.jpg"
                      alt="3, RECORD OF RAGNAROK,APHRODITE,NỮ THẦN SẮC ĐẸP,ẢNH CHẾ APHRODITE,MEME APHRODITE,"
                      note="Từ bao giờ nữ hoàng Historia trong Attack on Titan lại có vòng một khủng như thế này chứ!"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/photo-1-16279090408481221236007.jpg"
                      alt="4, RECORD OF RAGNAROK,APHRODITE,NỮ THẦN SẮC ĐẸP,ẢNH CHẾ APHRODITE,MEME APHRODITE,"
                      note="Ngay cả các cô gái ở Love Live cũng bắt chước nữ thần tình yêu trong Record of Ragnarok."
                    />
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/photo-1-16279088167601440744463.jpg"
                      alt="5, RECORD OF RAGNAROK,APHRODITE,NỮ THẦN SẮC ĐẸP,ẢNH CHẾ APHRODITE,MEME APHRODITE,"
                      note="Một sự kết hợp giữa 3 nhân vật Venti, Dilluc và Kaeya trong trò chơi Genshin Impact cũng khá tuyệt vời."
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/photo-1-16279088444502094948243.jpg"
                      alt="6, RECORD OF RAGNAROK,APHRODITE,NỮ THẦN SẮC ĐẸP,ẢNH CHẾ APHRODITE,MEME APHRODITE,"
                      note="Mấy anh chàng trong Jujutsu Kaisen cũng khá thích làm trò đấy chứ!"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/photo-1-16279088875131028894891.jpg"
                      alt="7, RECORD OF RAGNAROK,APHRODITE,NỮ THẦN SẮC ĐẸP,ẢNH CHẾ APHRODITE,MEME APHRODITE,"
                      note="Có rất nhiều nhân vật trong manga/anime và game tham gia phong cách chế meme theo nàng Aphrodite đấy nhé!"
                    />
                    <p>
                      Vâng, nhìn vào loạt ảnh trên đã đủ thấy sức hút bởi vòng
                      một khủng cần có người nâng của{" "}
                      <strong>nữ thần sắc đẹp</strong>{" "}
                      <strong>Aphrodite</strong> trong anime{" "}
                      <strong>Record Of Ragnarok</strong> hot như thế nào rồi
                      đấy! Và bạn có cảm nghĩ như thế nào về loạt ảnh này, hãy
                      chia sẻ nhé!
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/2/-162790902781713007764.jpg"
                      alt="8, RECORD OF RAGNAROK,APHRODITE,NỮ THẦN SẮC ĐẸP,ẢNH CHẾ APHRODITE,MEME APHRODITE,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/photo-1-1627908956947502918066.jpg"
                      alt="9, RECORD OF RAGNAROK,APHRODITE,NỮ THẦN SẮC ĐẸP,ẢNH CHẾ APHRODITE,MEME APHRODITE,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/photo-1-1627908965643551640278.jpg"
                      alt="10, RECORD OF RAGNAROK,APHRODITE,NỮ THẦN SẮC ĐẸP,ẢNH CHẾ APHRODITE,MEME APHRODITE,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/photo-1-1627908972683140155437.jpg"
                      alt="11, RECORD OF RAGNAROK,APHRODITE,NỮ THẦN SẮC ĐẸP,ẢNH CHẾ APHRODITE,MEME APHRODITE,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/-1627908979301109965863.jpg"
                      alt="12, RECORD OF RAGNAROK,APHRODITE,NỮ THẦN SẮC ĐẸP,ẢNH CHẾ APHRODITE,MEME APHRODITE,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/photo-1-16279089995531235251415.jpg"
                      alt="13, RECORD OF RAGNAROK,APHRODITE,NỮ THẦN SẮC ĐẸP,ẢNH CHẾ APHRODITE,MEME APHRODITE,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/photo-1-16279090072562002181684.jpg"
                      alt="14, RECORD OF RAGNAROK,APHRODITE,NỮ THẦN SẮC ĐẸP,ẢNH CHẾ APHRODITE,MEME APHRODITE,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/photo-1-1627909015110537520470.jpg"
                      alt="15, RECORD OF RAGNAROK,APHRODITE,NỮ THẦN SẮC ĐẸP,ẢNH CHẾ APHRODITE,MEME APHRODITE,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/-1627909106737339048115.jpg"
                      alt="16, RECORD OF RAGNAROK,APHRODITE,NỮ THẦN SẮC ĐẸP,ẢNH CHẾ APHRODITE,MEME APHRODITE,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/photo-1-1627909124260692267571.jpg"
                      alt="17, RECORD OF RAGNAROK,APHRODITE,NỮ THẦN SẮC ĐẸP,ẢNH CHẾ APHRODITE,MEME APHRODITE,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/photo-1-16279091392251528668109.jpg"
                      alt="18, RECORD OF RAGNAROK,APHRODITE,NỮ THẦN SẮC ĐẸP,ẢNH CHẾ APHRODITE,MEME APHRODITE,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/-16279091714611890103828.jpg"
                      alt="19, RECORD OF RAGNAROK,APHRODITE,NỮ THẦN SẮC ĐẸP,ẢNH CHẾ APHRODITE,MEME APHRODITE,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/photo-1-162790918516348165271.jpg"
                      alt="20, RECORD OF RAGNAROK,APHRODITE,NỮ THẦN SẮC ĐẸP,ẢNH CHẾ APHRODITE,MEME APHRODITE,"
                      note=""
                    />
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
