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
"title": 'Game thủ tái hiện Thành phố Hồ Chí Minh tươi đẹp trong tựa game Minecraft',
"description": 'Một tác phẩm để đời của game thủ Minecraft Việt.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/11/photo-1-1628618708382440378325.jpg',
"alt": 'Thành phố Hồ Chí Minh,Hồ Chí Minh,game,mine craft,',
"category": 'games',
"date": '11/08/2021',
"time": '10:52 AM',
"link": '/game-thu-tai-hien-thanh-pho-ho-chi-minh-tuoi-dep-trong-tua-game-minecraft',
"zcomponent": 'page_20210811105208',
"filepath": './20210811105208-game-thu-tai-hien-thanh-pho-ho-chi-minh-tuoi-dep-trong-tua-game-minecraft.js'
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
  "Game thủ tái hiện Thành phố Hồ Chí Minh tươi đẹp trong tựa game Minecraft";
const author = "TVG,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "11/08/2021 10:52 AM";
const description = "Một tác phẩm để đời của game thủ Minecraft Việt.";
const link =
  "game-thu-tai-hien-thanh-pho-ho-chi-minh-tuoi-dep-trong-tua-game-minecraft";
const tagparam = ["Thành phố Hồ Chí Minh", "Hồ Chí Minh", "game", "mine craft"];
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

export default function page_20210811105208() {
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
                      Đại dịch COVID-19 đã làm thay đổi lối sống của con người
                      chúng ta trong hai năm trở lại đây, không còn đi du lịch,
                      không còn ra đường cùng bạn bè, ăn chơi và thậm chí là
                      ngắm cảnh. Điều đó khiến con người chúng ta dần xa cách
                      hơn và mất đi niềm vui cực lớn từ thế giới bên ngoài. Để
                      giúp mọi người "bớt nhớ"{" "}
                      <strong>
                        thành phố <strong>Hồ Chí Minh</strong>
                      </strong>{" "}
                      tươi đẹp khi đại dịch COVID-19 căng thẳng, mới đây một{" "}
                      <strong>game</strong> thủ đã tái hiện lại rất nhiều danh
                      lam thắng cảnh nổi tiếng của thành phố vào trong tựa game
                      Minecraft.
                    </p>
                    <p>
                      Cụ thể, mới đây một <strong>game</strong> thủ có tên Lê
                      Duy Hiếu đã chia sẻ dự án nhỏ của mình mang tên "Mini Sài
                      Gòn" nhằm tái hiện lại{" "}
                      <strong>
                        thành phố <strong>Hồ Chí Minh</strong>
                      </strong>{" "}
                      trong tựa game Minecraft vô cùng nổi tiếng. Đây là sản
                      phẩm giúp những người đang ở nhà chống dịch hay những
                      người chưa từng ghé thăm bao giờ cũng có thể ngắm thành
                      phố Hồ Chí Minh tươi đẹp qua màn hình máy tính.
                    </p>
                    <p>
                      Hiện tại, sau nhiều ngày tự xây dựng thì dự án cũng đã
                      được công bố. Ngắm nhìn vẻ đẹp của những công trình tuyệt
                      đẹp trong <strong>game</strong>, chắc hẳn nhiều người cũng
                      có thể cảm thấy vô cùng chân thực và sống động. Những công
                      trình nổi tiếng, tuyến phố đi bộ Nguyễn Huệ giờ đây hiện
                      lên trong Minecraft với một diện mạo mới lạ của những khối
                      hộp, kết hợp với công nghệ đồ họa Ray Tracing hiện đại
                      khiến chúng đẹp hơn bao giờ hết.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Có thể thấy được tâm huyết thật sự lớn của{" "}
                      <strong>game</strong> thủ Lê Duy Hiếu đối với dự án để đời
                      này. Mời game thủ chiêm ngưỡng những hình ảnh tuyệt đẹp ở
                      dưới đây:
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/11/photo-1-1628618708382440378325.jpg"
                      alt="1, Thành phố Hồ Chí Minh,Hồ Chí Minh,game,mine craft,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/11/photo-1-16286187111931882766340.jpg"
                      alt="2, Thành phố Hồ Chí Minh,Hồ Chí Minh,game,mine craft,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/11/photo-2-1628618711680751873630.jpg"
                      alt="3, Thành phố Hồ Chí Minh,Hồ Chí Minh,game,mine craft,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/11/photo-3-1628618710689616825256.jpg"
                      alt="4, Thành phố Hồ Chí Minh,Hồ Chí Minh,game,mine craft,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/11/photo-4-16286187096732046713765.jpg"
                      alt="5, Thành phố Hồ Chí Minh,Hồ Chí Minh,game,mine craft,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/11/photo-5-1628618710336624953089.jpg"
                      alt="6, Thành phố Hồ Chí Minh,Hồ Chí Minh,game,mine craft,"
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
