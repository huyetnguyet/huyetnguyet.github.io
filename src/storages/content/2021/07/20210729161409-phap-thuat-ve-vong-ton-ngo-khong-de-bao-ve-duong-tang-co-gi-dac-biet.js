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
"timestamp": '29/07/2021 04:14 PM',
"title": 'Pháp thuật "vẽ vòng" Tôn Ngộ Không để bảo vệ Đường Tăng có gì đặc biệt?',
"description": 'Trong tập phim "Ba lần đánh bại Bạch Cốt Tinh", Tôn Ngộ Không đã dùng phép này để bảo vệ Đường Tăng đang ở một mình.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/7/6/photo-1-16255712177881351405509.jpg',
"alt": 'TÔN NGỘ KHÔNG,TÂY DU KÝ,ĐƯỜNG TĂNG,',
"category": 'news',
"date": '29/07/2021',
"time": '04:14 PM',
"link": '/phap-thuat-ve-vong-ton-ngo-khong-de-bao-ve-duong-tang-co-gi-dac-biet',
"zcomponent": 'page_20210729161409',
"filepath": './20210729161409-phap-thuat-ve-vong-ton-ngo-khong-de-bao-ve-duong-tang-co-gi-dac-biet.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "news";
const categoryLink = "/news";
const title =
  'Pháp thuật "vẽ vòng" Tôn Ngộ Không để bảo vệ Đường Tăng có gì đặc biệt?';
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:14 PM";
const description =
  'Trong tập phim "Ba lần đánh bại Bạch Cốt Tinh", Tôn Ngộ Không đã dùng phép này để bảo vệ Đường Tăng đang ở một mình.';
const link =
  "phap-thuat-ve-vong-ton-ngo-khong-de-bao-ve-duong-tang-co-gi-dac-biet";
const tagparam = ["TÔN NGỘ KHÔNG", "TÂY DU KÝ", "ĐƯỜNG TĂNG"];
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

export default function page_20210729161409() {
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
                      <strong>Tôn Ngộ Không</strong> được xây dựng là nhân vật
                      có bản lĩnh phi phàm, pháp lực thuộc hàng bậc nhất Tam
                      Giới. Tôn Ngộ Không còn gọi là Tề Thiên Đại Thánh, Mỹ Hầu
                      Vương… là một trong những nhân vật chính của tiểu thuyết{" "}
                      <strong>Tây Du Ký</strong>.
                    </p>
                    <p>
                      Trong tiểu thuyết, <strong>Tôn Ngộ Không</strong> là một
                      con khỉ được sinh ra từ một hòn đá, sau đó Ngộ Không theo
                      Bồ Đề Tổ Sư học phép thuật, được truyền 72 phép biến hóa
                      và Cân đẩu vân nên đã đạt những quyền năng phép thuật siêu
                      nhiên. Là đại sư huynh, Ngộ Không cũng gánh vác trách
                      nhiệm bảo vệ cả sư phụ cùng các sư đệ khỏi những yêu quái
                      muốn làm hại, cản trở đường trên hành trình của cả đoàn
                      thầy trò.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/6/photo-1-16255712177881351405509.jpg"
                      alt="1, TÔN NGỘ KHÔNG,TÂY DU KÝ,ĐƯỜNG TĂNG,"
                      note=""
                    />
                    <p>
                      Theo đó, <strong>Tôn Ngộ Không</strong> gần như lúc nào
                      cũng ở cạnh sư phụ và không bao giờ để người tách đoàn đi
                      một mình. Ở nhiều trường hợp, khi bắt buộc phải một mình
                      rời đi, tìm kiếm sự trợ giúp hoặc có công chuyện quan
                      trọng, Tôn Ngộ Không thường vẽ một vòng tròn lên mặt đất
                      và dặn sư phụ ngồi yên trong đó. Vòng tròn này đã giúp{" "}
                      <strong>Đường Tăng</strong> được an toàn khỏi các yêu quái
                      luôn nhòm ngó, âm mưu làm hại người.
                    </p>
                    <p>
                      Cụ thể, trong tập phim "Ba lần đánh bại Bạch Cốt Tinh", do
                      Trư Bát Giới và Sa Tăng vắng mặt, Ngộ Không đã sử dụng
                      phép thuật vẽ vòng tròn để bảo vệ sư phụ trong lúc rời đi
                      thám thính khu vực xung quanh. Khi thấy{" "}
                      <strong>Đường Tăng</strong> ở một mình, không có ai bên
                      cạnh, một con yêu quái tưởng "vớ bở" đã mò tới định làm
                      hại người nhưng ngay khi tiến lại gần, yêu quái này đã bị
                      vòng tròn của <strong>Tôn Ngộ Không</strong> hất văng ra
                      bên ngoài, vô cùng đau đớn.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/6/photo-1-16255712224051440156818.jpg"
                      alt="2, TÔN NGỘ KHÔNG,TÂY DU KÝ,ĐƯỜNG TĂNG,"
                      note=""
                    />
                    <p>
                      Thực chất đây là một phép thuật trong 72 phép biến hoa
                      thần thông <strong>Tôn Ngộ Không</strong> học được ở chỗ
                      Bồ Đề Tổ Sư có tên là pháp Bố trận, đây chính là thuật
                      pháp ngăn cách và xua đuổi yêu quái khỏi giới hạn được đặt
                      ra. Tuy nhiên, phép thuật này chỉ có thể đối phó với những
                      yêu quái có pháp lực bình thường, chứ gặp phải những đại
                      yêu quái thì không hề có tác dụng.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      {" "}
                      Giải thích về uy lực của vòng tròn trên, nhiều người cho
                      rằng sức mạnh vòng tròn có được là do Gậy Như ý. Tuy
                      nhiên, trên thực tế, <strong>Tôn Ngộ Không</strong> đã vẽ
                      ra vòng tròn này nhờ 72 phép Địa sát do Bồ Đề Tổ sư truyền
                      dạy. Pháp thuật này có tên là pháp Bố trận, hiểu nôm na là
                      thuật pháp ngăn cách và xua đuổi yêu quái khỏi giới hạn
                      được đặt ra.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/6/photo-1-1625571245134296612534.jpg"
                      alt="3, TÔN NGỘ KHÔNG,TÂY DU KÝ,ĐƯỜNG TĂNG,"
                      note=""
                    />
                    <p>
                      Tuy pháp Bố trận lợi hại nhưng thực tế chỉ có thể tác động
                      lên được những yêu quái tầm thường còn khi đối diện với
                      những đại yêu quái mạnh mẽ, phép thuật này gần như chẳng
                      thể làm gì. Dù vậy, năng lực và sự lợi hại của phép thuật
                      này vốn không thể coi thường. Trong{" "}
                      <strong>Tây Du Ký</strong>, phép thuật này đã nhiều lần
                      giúp <strong>Đường Tăng</strong> thoát nạn và hỗ trợ cho 3
                      huynh đệ <strong>Tôn Ngộ Không</strong>, Trư Bát Giới, Sa
                      Tăng trên đường thỉnh kinh.
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
