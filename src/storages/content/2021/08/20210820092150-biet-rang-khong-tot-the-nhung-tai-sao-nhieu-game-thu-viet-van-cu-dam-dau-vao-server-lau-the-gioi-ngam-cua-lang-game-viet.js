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
"timestamp": '20/08/2021 09:21 AM',
"title": 'Biết rằng không tốt, tại sao nhiều game thủ Việt vẫn cứ đâm đầu vào "server lậu"?',
"description": 'Không phải ngẫu nhiên mà dù nhận thức được vấn đề, thế nhưng game thủ Việt vẫn rất ưa thích server lậu.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/15/photo-1-16290080798151868990329.jpg',
"alt": 'GAME,TIN TỨC GAME,GAME THỦ,BÀI ĐÁNG CHÚ Ý,',
"category": 'games',
"date": '20/08/2021',
"time": '09:21 AM',
"link": '/biet-rang-khong-tot-the-nhung-tai-sao-nhieu-game-thu-viet-van-cu-dam-dau-vao-server-lau-the-gioi-ngam-cua-lang-game-viet',
"zcomponent": 'page_20210820092150',
"filepath": './20210820092150-biet-rang-khong-tot-the-nhung-tai-sao-nhieu-game-thu-viet-van-cu-dam-dau-vao-server-lau-the-gioi-ngam-cua-lang-game-viet.js'
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
  'Biết rằng không tốt, tại sao nhiều game thủ Việt vẫn cứ đâm đầu vào "server lậu"?';
const author = "Mặt Trứng";
const source = "Trí Thức Trẻ";
const timestamp = "20/08/2021 09:21 AM";
const description =
  "Không phải ngẫu nhiên mà dù nhận thức được vấn đề, thế nhưng game thủ Việt vẫn rất ưa thích server lậu.";
const link =
  "biet-rang-khong-tot-the-nhung-tai-sao-nhieu-game-thu-viet-van-cu-dam-dau-vao-server-lau-the-gioi-ngam-cua-lang-game-viet";
const tagparam = ["GAME", "TIN TỨC GAME", "GAME THỦ", "BÀI ĐÁNG CHÚ Ý"];
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

export default function page_20210820092150() {
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
                      Thực tế thì ngay từ những giai đoạn đầu khi làng{" "}
                      <strong>game</strong> online Việt mới hình thành, các
                      server lậu đã bắt đầu phát triển ở Việt Nam mà ví dụ dễ
                      thấy nhất chính là sự xuất hiện của MU Online - một tựa
                      game được cho là "lậu" ở thời điểm ấy. Dần dần, khi làng
                      game Việt dần đi vào quỹ đạo, những tưởng những trường hợp
                      game lậu, server lậu sẽ ngày càng bị hạn chế, xóa sổ theo
                      thời gian. Nhưng không, chúng vẫn phát triển một cách mạnh
                      mẽ, thậm chí còn thu hút không ít những người chơi tham
                      gia. Vậy thì lý do nào khiến cho các{" "}
                      <strong>game thủ</strong> Việt lại hào hứng, thậm chí
                      không quản ngại những "bất an" để tham gia các server lậu
                      tới vậy.
                    </p>
                    <h5>Được thỏa mãn đam mê</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/15/photo-1-16290080798151868990329.jpg"
                      alt="1, GAME,TIN TỨC GAME,GAME THỦ,BÀI ĐÁNG CHÚ Ý,"
                      note=""
                    />

                    <p>
                      Tất nhiên, server lậu còn có một tên gọi khác là "private
                      server", tức là các server riêng chỉ phục vụ cho một nhóm
                      người chơi. Về cơ bản, đây vẫn là phạm luật nhưng đối với
                      nhiều người, đó lại là cách duy nhất để họ có thể tìm lại
                      ký ức, tiếp tục gắn bó với những tựa <strong>game</strong>{" "}
                      nước ngoài bị đóng cửa vì lý do nào đó. Chắc chắn, các
                      private server là lựa chọn duy nhất. Về mặt lý thuyết,
                      những tựa game kiểu như GunZ Online trong quá khứ, với
                      tiền bản quyền khổng lồ thì gần như chẳng có cửa để được
                      chính thức phát hành ở Việt Nam.
                    </p>
                    <RelationNewsInPage category={category} />

                    <p>
                      Đó cũng là lý do mà các server lậu ra đời và cũng là sự
                      lựa chọn duy nhất cho các <strong>game</strong> thủ muốn
                      thỏa mãn đam mê với các tựa game này một cách ổn định,
                      thay vì phải tìm kiếm server nước ngoài và bị ảnh hưởng
                      rất nhiều bởi yếu tố đường truyền.
                    </p>
                    <h5>Dân cày chay cũng hiểu được cảm giác bá đạo</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/15/photo-1-16290082576781070276336.jpg"
                      alt="2, GAME,TIN TỨC GAME,GAME THỦ,BÀI ĐÁNG CHÚ Ý,"
                      note=""
                    />

                    <p>
                      Điều này cũng xuất hiện ở một số server lậu khi nó cung
                      cấp cho người tham gia một số lượng tiền tệ trong{" "}
                      <strong>game</strong> tương đối lớn mỗi ngày - điều mà các{" "}
                      <strong>game thủ</strong> cày chay có lẽ nằm mơ cũng chẳng
                      thể nghĩ tới khi chơi các server chính thống. Điều này
                      giúp họ thỏa mãn được việc có sức mạnh cực lớn trong game
                      - điều chắc chắn chẳng ai làm được khi chơi một cách bình
                      thường.
                    </p>
                    <h5>Tuy nhiên, server lậu cũng tiềm tàng những rủi ro</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/15/-16290093178361334957677.jpg"
                      alt="3, GAME,TIN TỨC GAME,GAME THỦ,BÀI ĐÁNG CHÚ Ý,"
                      note=""
                    />

                    <p>
                      Rủi ro đầu tiên và cũng dễ thấy nhất chính là việc các
                      server lậu có thể "sập" bất cứ lúc nào không hay vì đơn
                      giản, chúng vi phạm bản quyền nặng và nếu như bị phanh
                      phui ra, viễn cảnh server đóng cửa có thể trở thành hiện
                      thực bất cứ lúc nào. Điều này chắc chắn sẽ gây ra lãng phí
                      không ít thời gian, công sức và đôi khi là cả tiền bạc của
                      các <strong>game</strong> thủ.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/15/-16290093265931137242651.jpg"
                      alt="4, GAME,TIN TỨC GAME,GAME THỦ,BÀI ĐÁNG CHÚ Ý,"
                      note=""
                    />

                    <p>
                      Bên cạnh đó, dù thế nào đi nữa thì rõ ràng, hệ thống
                      server lậu vẫn luôn là vấn nạn nhức nhối và ảnh hưởng
                      nghiêm trọng tới sự phát triển của làng{" "}
                      <strong>game</strong> online Việt. Thế nên, nếu là một{" "}
                      <strong>game thủ</strong> có ý thức, tốt nhất hãy bài trừ
                      và tẩy chay, đừng tham gia vào các server lậu nhé.
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
