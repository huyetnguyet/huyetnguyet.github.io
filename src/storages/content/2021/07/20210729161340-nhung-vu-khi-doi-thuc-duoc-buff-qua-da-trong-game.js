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
"timestamp": '29/07/2021 04:13 PM',
"title": 'Những vũ khí đời thực được buff quá đà trong game',
"description": 'Các vũ khí này thực sự rất mạnh trong game, khiến cho người chơi phải tự hỏi xem đời thực có thật sự mạnh như thế này không.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/7/6/photo-1-1625590321049993105138.jpg',
"alt": 'GAME,ĐỜI THỰC,',
"category": 'games',
"date": '29/07/2021',
"time": '04:13 PM',
"link": '/nhung-vu-khi-doi-thuc-duoc-buff-qua-da-trong-game',
"zcomponent": 'page_20210729161340',
"filepath": './20210729161340-nhung-vu-khi-doi-thuc-duoc-buff-qua-da-trong-game.js'
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
const title = "Những vũ khí đời thực được buff quá đà trong game";
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:13 PM";
const description =
  "Các vũ khí này thực sự rất mạnh trong game, khiến cho người chơi phải tự hỏi xem đời thực có thật sự mạnh như thế này không.";
const link = "nhung-vu-khi-doi-thuc-duoc-buff-qua-da-trong-game";
const tagparam = ["GAME", "ĐỜI THỰC"];
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

export default function page_20210729161340() {
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
                    <h5>1. Desert Eagle - Counter Strike</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/6/photo-1-1625590321049993105138.jpg"
                      alt="1, GAME,ĐỜI THỰC,"
                      note=""
                    />
                    <p>
                      {" "}
                      Desert Eagle là khẩu súng quá nổi tiếng với anh em nào
                      chơi <strong>game</strong> bắn súng, và đây cũng là một
                      trong những khẩu súng được yêu thích nhất trong game, phim
                      điện ảnh, phim truyền hình vì nó được mạ một lớp chrome
                      sáng bóng và sát thương của nó cũng rất cao.
                    </p>
                    <p>
                      Một trong những phiên bản DE đầu tiên được tái hiện chính
                      xác nhất trong <strong>game</strong> là vào năm 2000, khi
                      Counter-Strike ra mắt. Game bắn súng ngày nay thì đa số
                      đều có cây này trong kho vũ khí.
                    </p>
                    <p>
                      Ngoài Counter-Strike ra thì cũng có nhiều{" "}
                      <strong>game</strong> khác "sao y" được khẩu DE: súng có
                      sát thương rất cao, sử dụng cỡ đạn to, có độ giật (recoil)
                      cao, và bắn không được chính xác như những khẩu súng lục
                      khác.
                    </p>
                    <p>
                      Vấn đề ở đây là nếu có một <strong>game</strong> cố gắng
                      mô tả lực lượng quân đội hoặc nhân viên cơ quan chính phủ
                      một cách chính xác nhất, thì DE sẽ không có cửa để được
                      nêu tên trong danh sách vũ khí của những đối tượng này.
                    </p>
                    <p>
                      Và mặc dù xuất hiện rất nhiều trong <strong>game</strong>,
                      hiện tại chỉ có 2 lực lượng đặc nhiệm trên thế giới sử
                      dụng DE là lực lượng của Ba Lan và Bồ Đào Nha, nhưng có
                      điều là cả 2 đều không sử dụng phiên bản đạn .50 AC mà anh
                      em hay xài trong Counter-Strike.
                    </p>
                    <h5>2. Minigun - Grand Theft Auto V</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/6/photo-1-16255902389551428307087.jpg"
                      alt="2, GAME,ĐỜI THỰC,"
                      note=""
                    />
                    <p>
                      {" "}
                      Súng minigun là một phát minh rất là độc đáo. Nó có trọng
                      lượng khoảng 38,6kg (phiên bản nhẹ hơn thì là 18,6kg) và
                      khả năng "nhả" ra khoảng từ 2000 đến 6000 viên đạn trong
                      vòng 1 phút. Phiên bản minigun thường thấy nhất trong{" "}
                      <strong>game</strong> là M134.
                    </p>
                    <p>
                      GTA V cũng không phải là ngoại lệ. Xuất hiện lần đầu vào
                      năm 2002 trong bản Vice City, khẩu minigun đã trở thành
                      món vũ khí trứ danh của dòng <strong>game</strong> này, và
                      sau đó tiếp tục góp mặt trong 8 tựa game nữa.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Tuy nhiên, minigun trong GTA V lại khác xa thực tế rất
                      nhiều. Phiên bản nặng thì chỉ đứng 1 chỗ xài được thôi,
                      nên M134 trong GTA là phiên bản nhẹ. Nhưng mặc dù con số
                      18,6kg kia cứ cho là "nhẹ" đi, chúng ta còn phải tính thêm
                      lượng đạn cần phải mang theo nữa.
                    </p>
                    <p>
                      Khi kỹ năng bắn súng của nhân vật trong{" "}
                      <strong>game</strong> được đẩy lên tối đa thì bạn có thể
                      đem theo tới 9999 viên đạn, nghĩa là bạn phải vác thêm
                      tới… 272,2kg đạn được nữa. Cho nên trừ khi bạn là một vị
                      thần, bằng không thì vừa vác theo súng & đạn dược, vừa đi
                      bộ lòng vòng mà không cần khung đỡ, vừa ghìm được cây súng
                      không bị giật là một nhiệm vụ bất khả thi.
                    </p>
                    <h5>3. Cung tên - The Last of Us</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/6/photo-1-16255901749571148528476.jpg"
                      alt="3, GAME,ĐỜI THỰC,"
                      note=""
                    />
                    <p>
                      Mục tiêu trong <strong>game</strong> là bằng mọi giá, bạn
                      phải sống. Trong phân đoạn đầu tiên, bạn sẽ tìm thấy một
                      bộ cung tên nằm trên tầng thượng.
                    </p>
                    <p>
                      Cây cung là thứ vũ khí khoái khẩu của nhiều{" "}
                      <strong>game</strong> thủ vì nó vừa im lặng (gần như là
                      vậy), vừa "bắn phát chết luôn". Chẳng hạn như Far Cry 3,
                      Skyrim, Horizon Zero Dawn đều có vũ khí này, và nó rất là
                      lợi hại. Còn đối với TLoU, cung tên là thứ vũ khí cực kì
                      quan trọng, nó vừa giúp bạn ẩn mình, vừa giúp hạ gục mục
                      tiêu nhanh gọn lẹ.
                    </p>
                    <p>
                      Tuy nhiên, nó có một cơ chế khá là buồn cười: Sát thương
                      của mũi tên sẽ tăng khi nhân vật chính Joel đang ẩn mình.
                      Cũng một mũi tên, cùng nhắm vào một vị trí, cùng bắn đi
                      với một vận tốc giống nhau, nhưng nếu bạn đang núp thì kẻ
                      địch sẽ chết ngay, còn ngược lại thì… chỉ như là vết muỗi
                      cắn.
                    </p>
                    <h5>4. Tất cả vũ khí - Left 4 Dead 2</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/6/photo-1-1625590625666234152946.jpg"
                      alt="4, GAME,ĐỜI THỰC,"
                      note=""
                    />
                    <p>
                      Là một trong những tượng đài <strong>game</strong> thể
                      loại bắn zombie, L4D2 đã chinh phục được hàng triệu game
                      thủ không chỉ ngày ấy mà bây giờ vẫn thế. Với phiên bản
                      mới, L4D2 có tới 16 vũ khí, cộng với 11 vũ khí cận chiến
                      (melee weapon), trong khi phần 1 chỉ có 6 vũ khí mà thôi.
                      Ở ngoài <strong>đời thực</strong>, khi thay băng đạn mới,
                      bạn chỉ cần lên đạn một lần rồi cứ thế mà xả hết băng
                      thôi. Tuy nhiên, vũ khí trong L4D2 thì không được "thực
                      tế" như vậy. Cứ mỗi khi bạn đổi súng là nhân vật trong
                      game lại lên đạn thêm lần nữa, mặc dù trước đó đã làm động
                      tác này rồi. Nếu bạn làm vậy ở ngoài thực tế thì bạn sẽ
                      uổng mất viên đạn chưa bắn, hoặc tệ hơn là làm kẹt súng
                      luôn.
                    </p>
                  </div>
                  <AdsHorizontal />
                </div>

                <RandomFeature />

                <div className="source">Source: {source}</div>

                <FacebookShareButton link={facebookLinkShare} />

                <div className="tags">Tags: {updatedTags}</div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}
