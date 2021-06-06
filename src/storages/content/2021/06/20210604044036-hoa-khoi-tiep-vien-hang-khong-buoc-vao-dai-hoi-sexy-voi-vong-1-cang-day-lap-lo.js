import React from "react";
import "components/page.css";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import { RandomFeature } from "components/methods";
import { Player } from "video-react";

import { Content, ContentImage, FacebookShareButton } from "components/content";

/* ---------------------------------------------------------------- */

/*

 <ContentItem title="Hoa khôi tiếp viên Vietnam Airlines: Không hở thì thôi, chứ hở là phải 'xịt máu mũi'"
content="Thường xuất hiện trong bộ đồng phục tiếp viên hàng không nên hình ảnh gợi cảm của Dương Thu Thảo khiến nhiều người trầm trồ." 
src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/3/16/duongthaooo151880898115856967157405764542858277423554n-16159055909201675405743.jpg" 
alt="Tiep Vien Hang Khong, Duong Thu Thao, Sexy, Dai Hoi Sexy, Goi Cam, Gai Xinh, Hot Girl, " 
category="images" 
time="04/06/2021 04:40 PM" 
link="/hoa-khoi-tiep-vien-hang-khong-buoc-vao-dai-hoi-sexy-voi-vong-1-cang-day-lap-lo"/>

{title="Hoa khôi tiếp viên Vietnam Airlines: Không hở thì thôi, chứ hở là phải 'xịt máu mũi'",
content="Thường xuất hiện trong bộ đồng phục tiếp viên hàng không nên hình ảnh gợi cảm của Dương Thu Thảo khiến nhiều người trầm trồ." ,
src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/3/16/duongthaooo151880898115856967157405764542858277423554n-16159055909201675405743.jpg" ,
alt="Tiep Vien Hang Khong, Duong Thu Thao, Sexy, Dai Hoi Sexy, Goi Cam, Gai Xinh, Hot Girl, " ,
category="images" ,
time="04/06/2021 04:40 PM" ,
link="/hoa-khoi-tiep-vien-hang-khong-buoc-vao-dai-hoi-sexy-voi-vong-1-cang-day-lap-lo",component="page_20210604044036",
filepath="../storages/content/20210604044036-hoa-khoi-tiep-vien-hang-khong-buoc-vao-dai-hoi-sexy-voi-vong-1-cang-day-lap-lo.js"},

Hoa khôi tiếp viên Vietnam Airlines: Không hở thì thôi, chứ hở là phải 'xịt máu mũi'
Thường xuất hiện trong bộ đồng phục tiếp viên hàng không nên hình ảnh gợi cảm của Dương Thu Thảo khiến nhiều người trầm trồ.
https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/3/16/duongthaooo151880898115856967157405764542858277423554n-16159055909201675405743.jpg
Tiep Vien Hang Khong, Duong Thu Thao, Sexy, Dai Hoi Sexy, Goi Cam, Gai Xinh, Hot Girl, 
images
04/06/2021
04:40 PM
/hoa-khoi-tiep-vien-hang-khong-buoc-vao-dai-hoi-sexy-voi-vong-1-cang-day-lap-lo
page_20210604044036
../storages/content/20210604044036-hoa-khoi-tiep-vien-hang-khong-buoc-vao-dai-hoi-sexy-voi-vong-1-cang-day-lap-lo.js




<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "images";
const categoryLink = "/images";
const title =
  "Hoa khôi tiếp viên Vietnam Airlines: Không hở thì thôi, chứ hở là phải 'xịt máu mũi'";
const author = "SA,";
const source = "Pháp luật & Bạn đọc";
const date = "04/06/2021";
const time = "04:40 PM";
const description =
  "Thường xuất hiện trong bộ đồng phục tiếp viên hàng không nên hình ảnh gợi cảm của Dương Thu Thảo khiến nhiều người trầm trồ.";
const link =
  "hoa-khoi-tiep-vien-hang-khong-buoc-vao-dai-hoi-sexy-voi-vong-1-cang-day-lap-lo";
const tagparam = [
  "tiep-vien-hang-khong",
  "duong-thu-thao",
  "sexy",
  "dai-hoi-sexy",
  "goi-cam",
  "gai-xinh",
  "hot-girl",
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

export default function page_20210604044036() {
  return (
    <>
      <Content>
        <div className="page">
          <AdsVertical />
          <div className="path">
            <a href="/" className="pathName">
              home
            </a>
            <div className="pathName" style={{ color: "red" }}>
              >
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
              <div className="author">{author}</div> - Theo {source} | {date}{" "}
              {time}
            </p>
          </div>
          <FacebookShareButton link={facebookLinkShare} />

          <div class="containerContent">
            <AdsHorizontal />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <div className="contentBody">
                  <p>
                    Các tiếp viên hàng không luôn có sức hút nhất định là chuyện
                    rõ ràng. Đặc biệt, có những nhân vật còn cực kì nổi tiếng
                    trên MXH với lượng followers chẳng thua kém các KOL bao
                    nhiêu. Dương Thu Thảo (SN 1992) - tiếp viên xinh đẹp của
                    Vietnam Airlines là một trong số đó.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/3/16/duongthaooo151880898115856967157405764542858277423554n-16159055909201675405743.jpg"
                    alt="Tiep Vien Hang Khong, Duong Thu Thao, Sexy, Dai Hoi Sexy, Goi Cam, Gai Xinh, Hot Girl, "
                    note="Hoa khôi tiếp viên hàng không Dương Thu Thảo"
                  />
                  <p>
                    Ngoài gương mặt xinh đẹp, vóc dáng cao ráo và khí chất hơn
                    người, Dương Thu Thảo còn thu hút dân tình vì phong cách đa
                    dạng, "cân đẹp" mọi style. Nếu như khi đi làm chỉn chu,
                    chừng mực bao nhiêu thì khi đi chơi, "hoa khôi" tiếp viên
                    hàng không lại sexy khó cưỡng bấy nhiêu. Loạt ảnh mới của
                    Dương Thu Thảo chứng minh điều này.
                  </p>
                  <p>
                    Trong những bức hình, Thu Thảo mặc croptop cột dây hở ngực,
                    để lộ vòng 1 đầy đặn, lấp ló cực sexy. Kết hợp với chiếc áo
                    gợi cảm, nữ tiếp viên hàng không đình đám chọn quần lưng cao
                    ống rộng, làm tôn lên vóc dáng cao ráo. Bởi vậy mà chẳng cần
                    diện bikini như các gái xinh khác, Dương Thu Thảo vẫn đường
                    đường chính chính xí một vị trí chắc chắn ở "đại hội" sexy
                    đầu năm.
                  </p>

                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/3/16/duongthaooo1611301394388958840344881171035672327775914n-16159048655571068288922.jpg"
                    alt="Tiep Vien Hang Khong, Duong Thu Thao, Sexy, Dai Hoi Sexy, Goi Cam, Gai Xinh, Hot Girl, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/3/16/duongthaooo1602602414379477441296495361840017947011597n-1615904864861420160712.jpg"
                    alt="Tiep Vien Hang Khong, Duong Thu Thao, Sexy, Dai Hoi Sexy, Goi Cam, Gai Xinh, Hot Girl, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/3/16/duongthaooo1603126684375545473132715133136275137813916n-1615904865056119806266.jpg"
                    alt="Tiep Vien Hang Khong, Duong Thu Thao, Sexy, Dai Hoi Sexy, Goi Cam, Gai Xinh, Hot Girl, "
                    note="Loạt ảnh gợi cảm của 'hoa khôi' tiếp viên hàng không"
                  />
                  <p>
                    Kèm với loạt ảnh, Dương Thu Thảo còn không quên thả thính:
                    "Hôm nay em thấy nặng đầu. Trên đầu là tóc, trong đầu là
                    anh". Chỉ là sưu tầm từ cõi mạng thôi nhưng nghe người đẹp
                    nói thế này thì anh nào mà không đổ đứ đừ được.
                  </p>
                  <p>
                    Lâu lâu mới thấy người đẹp hàng không lấn sang style sexy
                    nên dân tình liền thả tim mỏi tay và dành lời khen tới tấp:
                    "Ngày càng xinh luôn", "Đẹp quá chị ơi", "Sexy quá đi", "Xin
                    tips da đẹp dáng xinh Thảo ơi",...
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/3/16/duongthaooo11997479024039869432303832686999976238084238n-1615904864829683573962.jpg"
                    alt="Tiep Vien Hang Khong, Duong Thu Thao, Sexy, Dai Hoi Sexy, Goi Cam, Gai Xinh, Hot Girl, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/3/16/duongthaooo1183461283272784050618871434316012618679477n-1615904864764838281441.jpg"
                    alt="Tiep Vien Hang Khong, Duong Thu Thao, Sexy, Dai Hoi Sexy, Goi Cam, Gai Xinh, Hot Girl, "
                    note="Những khoảnh khắc xinh đẹp đi vào lòng người của Dương Thu Thảo"
                  />
                  <p>
                    Tuy nhiên trong một hình ảnh khác, vòng 1 của Dương Thu Thảo
                    khá khiêm tốn. Không biết nữ tiếp viên hàng không này có bí
                    kíp riêng hay nhờ phương pháp đặc biệt nào không nhỉ? Cơ mà
                    cho dù đó là gì thì năng lực hiếm có của hội con gái chính
                    là những pha biến hoá khôn lường thế này đấy!
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/3/16/duongthaooo1208038563397486270997697012964881199985159n-1615909362143987363866.jpg"
                    alt="Tiep Vien Hang Khong, Duong Thu Thao, Sexy, Dai Hoi Sexy, Goi Cam, Gai Xinh, Hot Girl, "
                    note="Bức hình cho thấy vòng 1 khiêm tốn của Dương Thu Thảo"
                  />
                  <p>Ảnh: IG nhân vật</p>
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
