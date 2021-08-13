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
"timestamp": '12/08/2021 05:33 PM',
"title": 'Tựa game Call of Duty tiếp theo sẽ trở lại với bối cảnh thế chiến thứ hai',
"description": 'Theo những thông tin bị lộ mới nhất, Activision sẽ một lần nữa đem series game đình đám trở lại thế chiến thứ hai.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-1-16287848600011503657039.jpg',
"alt": 'CALL OF DUTY,THẾ CHIẾN THỨ HAI,THÁI BÌNH DƯƠNG,',
"category": 'games',
"date": '12/08/2021',
"time": '05:33 PM',
"link": '/tua-game-call-of-duty-tiep-theo-se-tro-lai-voi-boi-canh-the-chien-thu-hai',
"zcomponent": 'page_20210812173339',
"filepath": './20210812173339-tua-game-call-of-duty-tiep-theo-se-tro-lai-voi-boi-canh-the-chien-thu-hai.js'
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
  "Tựa game Call of Duty tiếp theo sẽ trở lại với bối cảnh thế chiến thứ hai";
const author = "Lê Hảo";
const source = "Trí Thức Trẻ";
const timestamp = "12/08/2021 05:33 PM";
const description =
  "Theo những thông tin bị lộ mới nhất, Activision sẽ một lần nữa đem series game đình đám trở lại thế chiến thứ hai.";
const link =
  "tua-game-call-of-duty-tiep-theo-se-tro-lai-voi-boi-canh-the-chien-thu-hai";
const tagparam = ["CALL OF DUTY", "THẾ CHIẾN THỨ HAI", "THÁI BÌNH DƯƠNG"];
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

export default function page_20210812173339() {
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
                    <p></p>
                    <p>
                      Đệ nhị thế chiến là một trong những cột mốc quan trọng
                      nhất trong lịch sử thế giới, chính vì điều đó cột mốc này
                      đã được nhiều thương hiệu game sử dụng để làm bối cảnh.
                    </p>
                    <p>
                      <strong>Call of Duty</strong> là một ví dụ điển hình. Tuy
                      series này có nhiều tựa game lấy bối cảnh hiện đại, sự
                      khởi nguồn của series chính là ở nhưng năm tháng trong{" "}
                      <strong>thế chiến thứ hai</strong>.
                    </p>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-1-16287848600011503657039.jpg"
                      alt="1, CALL OF DUTY,THẾ CHIẾN THỨ HAI,THÁI BÌNH DƯƠNG,"
                      note=""
                    />
                    <p>
                      Sau 3 tựa game gần nhất là Modern Warfare (20190, Warzone
                      và Black Ops Cold War, Activision đã quyết định đem trò
                      chơi về lại bối cảnh quen thuộc. Đây là một thông tin bị
                      rò rỉ từ các file trong trò chơi Black Ops Cold War.
                    </p>
                    <p>
                      Tên gọi của trò chơi này là Vanguard và theo các hình ảnh
                      bị lộ cho thấy, trò chơi này sẽ có thể chơi cross-gen, có
                      phiên bản Ultimate Edition và bối cảnh chính ở{" "}
                      <strong>Thái Bình Dương</strong>.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Gói Ultimate Edition sẽ bao gồm quyền truy cập sớm vào bản
                      open beta cho những khách hàng đặt hàng trước. Những người
                      mua Ultimate Edition cũng sẽ nhận được một số Operator
                      (nhân vật Multiplayer), một vũ khí mastercraft, một gói vũ
                      khí, một số XP thưởng và các loại tiền thưởng khác.
                    </p>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-1-16287848618511200292319.jpg"
                      alt="2, CALL OF DUTY,THẾ CHIẾN THỨ HAI,THÁI BÌNH DƯƠNG,"
                      note=""
                    />
                    <p>
                      Tuy Activison chưa lên tiếng phủ nhận hay xác thực thông
                      tin trên, họ đã yêu cầu leaker tháo những tấm ảnh khỏi
                      mạng xã hội vì lí do bản quyền. Động thái này đã gián tiếp
                      xác thực sự tồn tài của trò chơi. May mắn thay cho chúng
                      ta, các hình ảnh đã được lan truyền mạnh mẽ trên mạng xã
                      hội.
                    </p>
                    <p>
                      Những hình ảnh bị rò rỉ không đề cập đến ngày phát hành
                      của <strong>Call of Duty</strong>: Vanguard. Hiện tại vẫn
                      chưa rõ khi nào Activision sẽ chính thức ra mắt trò chơi
                      mới.
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
