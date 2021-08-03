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
"timestamp": '03/08/2021 11:12 AM',
"title": 'Muốn "bóc trần" nhan sắc Rosé (BLACKPINK) ở hậu trường mà bó tay, "đắt" nhất combo tóc vàng bay tôn lên visual đẹp muốn lịm đi',
"description": 'Rosé (BLACKPINK) thực sự đẹp như nàng thơ trong hậu trường chương trình The Sea Of Hope.',
"src": 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/3/unnamed-1-16279577072521308032579.jpg',
"alt": 'Blackpink,rosé (blackpink),Rosé,the sea of hope,nhan sắc sao Hàn,nhan sắc của blackpink,nhan sắc của sao Hàn,nhan sắc thật của sao,',
"category": 'stars',
"date": '03/08/2021',
"time": '11:12 AM',
"link": '/muon-boc-tran-nhan-sac-rose-blackpink-o-hau-truong-ma-bo-tay-dat-nhat-combo-toc-vang-bay-ton-len-visual-dep-muon-lim-di',
"zcomponent": 'page_20210803111244',
"filepath": './20210803111244-muon-boc-tran-nhan-sac-rose-blackpink-o-hau-truong-ma-bo-tay-dat-nhat-combo-toc-vang-bay-ton-len-visual-dep-muon-lim-di.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "stars";
const categoryLink = "/stars";
const title =
  'Muốn "bóc trần" nhan sắc Rosé (BLACKPINK) ở hậu trường mà bó tay, "đắt" nhất combo tóc vàng bay tôn lên visual đẹp muốn lịm đi';
const author = "SON,";
const source = "Trí Thức Trẻ";
const timestamp = "03/08/2021 11:12 AM";
const description =
  "Rosé (BLACKPINK) thực sự đẹp như nàng thơ trong hậu trường chương trình The Sea Of Hope.";
const link =
  "muon-boc-tran-nhan-sac-rose-blackpink-o-hau-truong-ma-bo-tay-dat-nhat-combo-toc-vang-bay-ton-len-visual-dep-muon-lim-di";
const tagparam = [
  "Blackpink",
  "rosé (blackpink)",
  "Rosé",
  "the sea of hope",
  "nhan sắc sao Hàn",
  "nhan sắc của blackpink",
  "nhan sắc của sao Hàn",
  "nhan sắc thật của sao",
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

export default function page_20210803111244() {
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
                      Chẳng mấy khi tham dự show thực tế nên mỗi lần các thành
                      viên <strong>BLACKPINK</strong> xuất hiện trên truyền
                      hình, fan đều vui mừng thấy rõ vì được chiêm ngưỡng nhan
                      sắc rạng rỡ, tự nhiên, dáng vẻ đáng yêu ngoài đời của thần
                      tượng.{" "}
                    </p>
                    <p>
                      Mới đây nhất, "đóa hồng nước Úc" <strong>Rosé</strong> đã
                      gây sốt sau khi tham gia chương trình{" "}
                      <strong>The Sea Of Hope</strong>. Ai cũng biết Rosé luôn
                      đẹp không tì vết, cực sang chảnh và lộng lẫy trên MV hay
                      ảnh tạp chí. Thế nhưng ngoài đời cô nàng liệu có còn lung
                      linh đến thế? Câu trả lời là có!
                    </p>
                    <p>
                      Trong video hậu trường, visual tự nhiên của giọng ca chính{" "}
                      <strong>BLACKPINK</strong> tỏa sáng giữa khung cảnh biển.
                      Góc mặt thon gọn với đường nét xinh xắn, nữ tính cùng làn
                      da trắng bóc và bờ vai đẹp chuẩn mực, mái tóc vàng bồng
                      bềnh tết gọn thỉnh thoảng bay trong gió càng tôn lên vẻ
                      đẹp tựa nàng thơ của <strong>Rosé</strong>. Lên show đã
                      đẹp ngất ngây như tiên tử nhưng ở hậu trường, giọng ca
                      chính của BLACKPINK lại càng mê hồn hơn. Gọi cô là nàng
                      thơ biển cả cũng không hề sai một chút nào.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/856d899588d5b6c257953a225e2a8a7b-16279574920971913719875.jpg"
                      alt="1, Blackpink,rosé (blackpink),Rosé,the sea of hope,nhan sắc sao Hàn,nhan sắc của blackpink,nhan sắc của sao Hàn,nhan sắc thật của sao,"
                      note="Rosé khoe vẻ đẹp tựa nàng thơ trong video hậu trường chương trình The Sea Of Hope. Mái tóc vàng tung bay giữa làn gió biển tôn lên visual trong trẻo của giọng ca chính BLACKPINK"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/e49rppuucaejkqd-16279575530081712382797.jpg"
                      alt="2, Blackpink,rosé (blackpink),Rosé,the sea of hope,nhan sắc sao Hàn,nhan sắc của blackpink,nhan sắc của sao Hàn,nhan sắc thật của sao,"
                      note="Rosé vô cùng thoải mái, tự nhiên khi tương tác với dàn cast của chương trình. Chỉ động tác vuốt tóc đơn giản và nụ cười đầy năng lượng tích cực, tươi rói đã khiến trái tim fan bấn loạn"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/3/e5eas-rvoamlmcc-1627957391637771741013.jpg"
                      alt="3, Blackpink,rosé (blackpink),Rosé,the sea of hope,nhan sắc sao Hàn,nhan sắc của blackpink,nhan sắc của sao Hàn,nhan sắc thật của sao,"
                      note="Dọn bàn ăn thôi mà Rosé cũng cho ra đời khung cảnh đẹp ngất ngây tựa như cắt ra từ MV"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/3/r-16279576226001968571520.jpg"
                      alt="4, Blackpink,rosé (blackpink),Rosé,the sea of hope,nhan sắc sao Hàn,nhan sắc của blackpink,nhan sắc của sao Hàn,nhan sắc thật của sao,"
                      note="Rosé khéo léo diện đồ để khoe ra vòng eo con kiến đặc trưng. Chẳng cần phải có ánh đèn studio xung quanh, Rosé vẫn tự tin tỏa sáng ngay cả trong điều kiện ánh sáng thường, không có bất kì hiệu ứng nào. Khung cảnh xung quanh dường như trở nên đẹp hơn hẳn bởi sự xuất hiện của nữ idol"
                    />
                    <p>
                      Sau khi "đóa hồng nước Úc" xuất hiện trên{" "}
                      <strong>The Sea Of Hope</strong>, fan đã có vô vàn khoảnh
                      khắc đẹp như tiên tử của Rosé
                    </p>
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/3/unnamed-16279577073522120101865.jpg"
                      alt="5, Blackpink,rosé (blackpink),Rosé,the sea of hope,nhan sắc sao Hàn,nhan sắc của blackpink,nhan sắc của sao Hàn,nhan sắc thật của sao,"
                      note="Vẻ đẹp ngọt ngào, trong sáng của Rosé trên show đối lập hẳn với diện mạo quyến rũ, khí chất thường thấy trên sân khấu"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/3/unnamed-16279577073522120101865.jpg"
                      alt="6, Blackpink,rosé (blackpink),Rosé,the sea of hope,nhan sắc sao Hàn,nhan sắc của blackpink,nhan sắc của sao Hàn,nhan sắc thật của sao,"
                      note="Rosé tỏa sáng nhất khi cất cao giọng hát ngọt ngào trời ban"
                    />
                    <p>
                      Những hình ảnh đẹp như mơ của <strong>Rosé</strong> khiến
                      fan xao xuyến không thôi
                    </p>
                    <p>Đến khoảnh khắc ngơ ngác cũng "cưng xỉu"</p>
                    <p>
                      <strong>Rosé</strong> còn đăng thêm những khoảnh khắc cực
                      kỳ xinh đẹp và lãng mạn khác trên Instagram cá nhân, không
                      cần chỉnh sửa gì cũng đẹp ngất ngây như thế này đây
                    </p>
                    <p>Nguồn: Instagram, Twitter, YouTube</p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/3/unnamed-1-16279577072521308032579.jpg"
                      alt="7, Blackpink,rosé (blackpink),Rosé,the sea of hope,nhan sắc sao Hàn,nhan sắc của blackpink,nhan sắc của sao Hàn,nhan sắc thật của sao,"
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
