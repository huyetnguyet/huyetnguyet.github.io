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
"timestamp": '05/08/2021 08:46 AM',
"title": 'Xuất hiện thanh niên siêu nhọ, ngồi nhà chơi game mà vẫn bị sét đánh… qua tay cầm',
"description": 'Cày game đang hăng thì bị sét đánh trúng khiến cho thanh niên game thủ bị giật điện thông qua tay cầm, rất may là vẫn an toàn.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/photo-1-1628087795258881430866.jpg',
"alt": '',
"category": 'games',
"date": '05/08/2021',
"time": '08:46 AM',
"link": '/xuat-hien-thanh-nien-sieu-nho-ngoi-nha-choi-game-ma-van-bi-set-danh-qua-tay-cam',
"zcomponent": 'page_20210805084643',
"filepath": './20210805084643-xuat-hien-thanh-nien-sieu-nho-ngoi-nha-choi-game-ma-van-bi-set-danh-qua-tay-cam.js'
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
  "Xuất hiện thanh niên siêu nhọ, ngồi nhà chơi game mà vẫn bị sét đánh… qua tay cầm";
const author = "Axium Fox";
const source = "Pháp luật và bạn đọc";
const timestamp = "05/08/2021 08:46 AM";
const description =
  "Cày game đang hăng thì bị sét đánh trúng khiến cho thanh niên game thủ bị giật điện thông qua tay cầm, rất may là vẫn an toàn.";
const link =
  "xuat-hien-thanh-nien-sieu-nho-ngoi-nha-choi-game-ma-van-bi-set-danh-qua-tay-cam";
const tagparam = [];
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

export default function page_20210805084643() {
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
                      Một game thủ sống ở quận Robertson County thuộc tiểu bang
                      Tennessee của Hoa Kỳ vừa bị sét đánh trúng thông qua...
                      dây kết nối của tay cầm khi anh ta đang chơi game vào lúc
                      thời tiết bên ngoài đang mưa bão lớn.{" "}
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/photo-1-1628087795258881430866.jpg"
                      alt="1, "
                      note=""
                    />
                    <p>
                      Theo như báo cáo của WKRN thì đâu đó tầm 9 giờ 15 phút
                      tối, người đàn ông này đang chơi game sau khi ăn tối xong
                      thì bị sét đánh trúng và anh đã nhanh chóng gọi đường dây
                      nóng để nhờ hỗ trợ. Sau khi đội cứu trợ tới nơi thì họ xác
                      nhận rằng cả căn nhà lẫn khu vực gần đó đã bị sét đánh
                      xuống khiến cho anh ta bị giật điện thông qua tay cầm chơi
                      game.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/photo-1-1628087798640734221096.jpg"
                      alt="2, "
                      note=""
                    />
                    <p>
                      Nghe qua sự việc thì có vẻ tệ nhưng may mắn thay là người
                      đàn ông này vẫn an toàn. Anh ta vẫn có khả năng gọi được
                      đường dây nóng và khi đội cứu hộ tới trợ giúp thì thấy
                      rằng anh ta không hề bị thương mà chỉ muốn gọi để nhờ họ
                      kiểm tra giùm xem anh ấy có bị thương chỗ nào hay không mà
                      thôi. Đội cứu hộ cũng xác nhận là không cần chuyển anh ta
                      tới bệnh viện gần nhất.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/photo-2-16280877988971701544721.jpg"
                      alt="3, "
                      note=""
                    />
                    <p>
                      Mặc dù khả năng bị sét đánh trúng là 1/1000, chúng ta vẫn
                      không nên chủ quan. Bởi vì trước đây cũng từng xảy ra một
                      vụ sét đánh trúng và gây giật điện qua tay cầm. Cụ thể nạn
                      nhân là nữ có tên là Karma – một cao thủ trong tựa game
                      Rocket League. Cô ấy cũng gặp tình trạng tương tự như anh
                      chàng sống ở Robertson County kia nhưng không được may mắn
                      bằng khi hai tay của cô bị phỏng nặng do điện giật từ tay
                      cầm có dây do sét đánh trúng. Sau sự cố đó thì cổng kết
                      nối USB của tay cầm cũng bị nóng chảy theo.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>Tóm tắt:</p>
                    <p>
                      - Một game thủ sống ở quận Robertson, bang Tennessee, Hoa
                      Kỳ vừa rồi bị sét đánh trúng gần nhà vào lúc thời tiết
                      đang mưa bão lớn.
                    </p>
                    <p>
                      - Sự kiện này khiến anh ta bị điện giật thông qua dây kết
                      nối của tay cầm khi đang chơi game.
                    </p>
                    <p>
                      - May mắn là khi đội cứu hộ tới nhà kiểm tra thì xác nhận
                      là anh ta không có thương tích gì.
                    </p>
                    <p>
                      - Trước đây cũng từng có một vụ tương tự, nạn nhân là nữ
                      game thủ Karma nhưng cô ấy lại không may mắn bằng. Hai tay
                      của cô bị phỏng nặng, và cổng USB trên tay cầm cũng bị
                      nóng chảy theo.
                    </p>
                    <p>Nguồn kotaku biên dịch GVN360</p>
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
