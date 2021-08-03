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
"timestamp": '03/08/2021 11:09 AM',
"title": 'Nữ thần lai nhà YG Jeon Somi gây bão với visual siêu thực như búp bê Barbie, Jennie u mê đến mức spam bình luận khen hết lời',
"description": 'Nhan sắc, body của Jeon Somi đỉnh thế nào mà lại khiến Jennie (BLACKPINK) thành fangirl cuồng nhiệt như thế này?',
"src": 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/2/937a26868500482b9ea2a9269c04f50b-16279138982341883782145.jpg',
"alt": 'Jeon Somi,Jennie (BlackPink),Blackpink,nhan sắc sao Hàn,sao Hàn,Somi comeback,somi,The Black Label,YG Entertainment,nữ thần lai,Somi (The Black Label),body của sao,',
"category": 'stars',
"date": '03/08/2021',
"time": '11:09 AM',
"link": '/nu-than-lai-nha-yg-jeon-somi-gay-bao-voi-visual-sieu-thuc-nhu-bup-be-barbie-jennie-u-me-den-muc-spam-binh-luan-khen-het-loi',
"zcomponent": 'page_20210803110946',
"filepath": './20210803110946-nu-than-lai-nha-yg-jeon-somi-gay-bao-voi-visual-sieu-thuc-nhu-bup-be-barbie-jennie-u-me-den-muc-spam-binh-luan-khen-het-loi.js'
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
  "Nữ thần lai nhà YG Jeon Somi gây bão với visual siêu thực như búp bê Barbie, Jennie u mê đến mức spam bình luận khen hết lời";
const author = "QN,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "03/08/2021 11:09 AM";
const description =
  "Nhan sắc, body của Jeon Somi đỉnh thế nào mà lại khiến Jennie (BLACKPINK) thành fangirl cuồng nhiệt như thế này?";
const link =
  "nu-than-lai-nha-yg-jeon-somi-gay-bao-voi-visual-sieu-thuc-nhu-bup-be-barbie-jennie-u-me-den-muc-spam-binh-luan-khen-het-loi";
const tagparam = [
  "Jeon Somi",
  "Jennie (BlackPink)",
  "Blackpink",
  "nhan sắc sao Hàn",
  "sao Hàn",
  "Somi comeback",
  "somi",
  "The Black Label",
  "YG Entertainment",
  "nữ thần lai",
  "Somi (The Black Label)",
  "body của sao",
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

export default function page_20210803110946() {
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
                      Vào ngày 2/8,{" "}
                      <strong>
                        Jeon <strong>Somi</strong>
                      </strong>{" "}
                      đã chính thức trở lại đường đua âm nhạc bằng single Dumb
                      Dumb. Bên cạnh âm nhạc bắt tai cùng MV mãn nhãn, visual
                      của nữ idol tại buổi họp báo quảng bá cho ca khúc mới cũng
                      được cộng đồng mạng bàn luận sôi nổi. Xuất hiện tại
                      showcase comeback, Jeon Somi gây sốc vì nhan sắc siêu
                      thực, màn lột xác đỉnh cao không có điểm gì để chê.
                    </p>
                    <p>
                      Mái tóc vàng bạch kim sang, xịn, mịn giúp visual của{" "}
                      <strong>Somi</strong> trở nên cuốn hút "chết người". Nhờ
                      thay đổi lối trang điểm sang tông nude sang chảnh khiến
                      "bông hồng lai" nhà YG trông trưởng thành hơn hẳn. Nhan
                      sắc của nữ idol sinh năm 2001 ngày càng trở nên hoàn
                      thiện, đường nét gương mặt sắc sảo lai Tây như búp bê.
                      Chưa hết, dân tình cũng không khỏi trầm trồ khi ngắm nhìn
                      body nuột nà ảo diệu như photoshop của nữ idol 20 tuổi sau
                      khi giảm cân. "Bông hồng lai" có chiều cao 1m72 và cân
                      nặng 46,6kg, đôi chân dài miên man, thẳng tắp, thon gọn
                      cùng vóc dáng chuẩn chai Coca khiến nhiều chị em phải ghen
                      tị. Nhìn tổng thể, netizen ví cô nàng không khác gì búp bê
                      Barbie sống.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/202108021101449001703202108021102210120210802110307493-1627928784722414446444.jpg"
                      alt="1, Jeon Somi,Jennie (BlackPink),Blackpink,nhan sắc sao Hàn,sao Hàn,Somi comeback,somi,The Black Label,YG Entertainment,nữ thần lai,Somi (The Black Label),body của sao,"
                      note="Jeon Somi lột xác ngoạn mục, visual đỉnh cao như búp bê Barbie ngoài đời thực. Ngay lập tức, diện mạo mới của nữ idol nhà YG đã trở thành chủ đề hot trên mạng xã hội"
                    />
                    <p>
                      Mái tóc vàng bạch kim cùng thần thái sang chảnh chính là
                      điểm quyến rũ "chết người" của <strong>Somi</strong> trong
                      lần trở lại này. Dưới ống kính máy ảnh phóng viên vốn là
                      "hung thần", thế nhưng Somi vẫn xinh đẹp đến vô thực,
                      gương mặt không khác gì đồ họa máy tính
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/2/937a26868500482b9ea2a9269c04f50b-16279138982341883782145.jpg"
                      alt="2, Jeon Somi,Jennie (BlackPink),Blackpink,nhan sắc sao Hàn,sao Hàn,Somi comeback,somi,The Black Label,YG Entertainment,nữ thần lai,Somi (The Black Label),body của sao,"
                      note=""
                    />
                    <p>
                      Chưa hết, body của cô gái 20 tuổi khiến dân tình không
                      khỏi choáng ngợp. Được biết, để chuẩn bị cho lần trở lại
                      này, <strong>Somi</strong> đã phải tập luyện khắt khe, ép
                      cân xuống chỉ còn 46,6 kg cho chiều cao 1m72. Dù vậy, body
                      của "bông hồng lai" vẫn cực kỳ nuột nà và tràn đầy sức
                      sống, ảo diệu như photoshop
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/2/photo-1-16278881027352114405932-16279138984362037647681.jpg"
                      alt="3, Jeon Somi,Jennie (BlackPink),Blackpink,nhan sắc sao Hàn,sao Hàn,Somi comeback,somi,The Black Label,YG Entertainment,nữ thần lai,Somi (The Black Label),body của sao,"
                      note=""
                    />
                    <p>
                      <strong>Somi</strong> khoe trọn body vượt trội, đường cong
                      cơ thể với những động tác vũ đạo siêu hút mắt
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/2/s1-16278879647571342556340-16279139114501807966645.jpeg"
                      alt="4, Jeon Somi,Jennie (BlackPink),Blackpink,nhan sắc sao Hàn,sao Hàn,Somi comeback,somi,The Black Label,YG Entertainment,nữ thần lai,Somi (The Black Label),body của sao,"
                      note=""
                    />
                    <p>
                      Người hâm mộ choáng ngợp đã đành, đến người chị{" "}
                      <strong>
                        Jennie (<strong>BLACKPINK</strong>)
                      </strong>{" "}
                      cũng không khỏi phát cuồng. Jennie u mê cô em thân thiết
                      đến nỗi phải spam bình luận liên tục trong livestream của{" "}
                      <strong>Somi</strong>: "Cô gái xinh đẹp", "Tóc vàng của em
                      cũng đỉnh lắm đó",...
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      <strong>Somi</strong> và các thành viên{" "}
                      <strong>BLACKPINK</strong> có mối quan hệ thân thiết như
                      chị em. Không chỉ ủng hộ nhau trên mạng xã hội mỗi khi 2
                      bên ra bài hát mới, "hội chị em" còn nhiều lần trực tiếp
                      đến tận nơi ghi hình để ủng hộ, xuất hiện trên các vlog,
                      clip đi chơi, làm việc cùng nhau.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/2/photo-1-16278913268451826203783-162791392570998370552.jpg"
                      alt="5, Jeon Somi,Jennie (BlackPink),Blackpink,nhan sắc sao Hàn,sao Hàn,Somi comeback,somi,The Black Label,YG Entertainment,nữ thần lai,Somi (The Black Label),body của sao,"
                      note=""
                    />
                    <p>
                      <strong>Somi</strong> đỉnh cao như vậy, bao sao Jennie
                      không khỏi u mê cơ chứ. Rapper của{" "}
                      <strong>BLACKPINK</strong> thể hiện mình là 1 fangirl
                      cuồng nhiệt khi liên tục spam bình luận trên trang cá nhân
                      của cô em thân thiết
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/2/s2-16278879649241692808624-1627913925912726619592.jpeg"
                      alt="6, Jeon Somi,Jennie (BlackPink),Blackpink,nhan sắc sao Hàn,sao Hàn,Somi comeback,somi,The Black Label,YG Entertainment,nữ thần lai,Somi (The Black Label),body của sao,"
                      note=""
                    />
                    <p>
                      <strong>Somi</strong> là "gà" của{" "}
                      <strong>THE BLACK LABEL</strong> - công ty con dưới trướng
                      YG nên cô cực kỳ thân thiết với các thành viên BLACKPINK
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/2/e7yl3puuuakekrv-16279142702301672137568.jpg"
                      alt="7, Jeon Somi,Jennie (BlackPink),Blackpink,nhan sắc sao Hàn,sao Hàn,Somi comeback,somi,The Black Label,YG Entertainment,nữ thần lai,Somi (The Black Label),body của sao,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/2/e7yl3rhuuaallxo-1627914270431318461883.jpg"
                      alt="8, Jeon Somi,Jennie (BlackPink),Blackpink,nhan sắc sao Hàn,sao Hàn,Somi comeback,somi,The Black Label,YG Entertainment,nữ thần lai,Somi (The Black Label),body của sao,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/2/e7yl3ptuyakijfk-1627914270468788189184.jpg"
                      alt="9, Jeon Somi,Jennie (BlackPink),Blackpink,nhan sắc sao Hàn,sao Hàn,Somi comeback,somi,The Black Label,YG Entertainment,nữ thần lai,Somi (The Black Label),body của sao,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/2/e7yl3puvgaeueyx-1627914270531498546321.jpg"
                      alt="10, Jeon Somi,Jennie (BlackPink),Blackpink,nhan sắc sao Hàn,sao Hàn,Somi comeback,somi,The Black Label,YG Entertainment,nữ thần lai,Somi (The Black Label),body của sao,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/2/nhan1588043713160113704597-fdf61386-16279149717862143895173.jpg"
                      alt="11, Jeon Somi,Jennie (BlackPink),Blackpink,nhan sắc sao Hàn,sao Hàn,Somi comeback,somi,The Black Label,YG Entertainment,nữ thần lai,Somi (The Black Label),body của sao,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/3/8dc59b72083875c0da336a396a17d19e-16279291556512035579658.jpg"
                      alt="12, Jeon Somi,Jennie (BlackPink),Blackpink,nhan sắc sao Hàn,sao Hàn,Somi comeback,somi,The Black Label,YG Entertainment,nữ thần lai,Somi (The Black Label),body của sao,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/3/4721594f30fa32546cb29badde10ed7e-1627929162915487999509.jpg"
                      alt="13, Jeon Somi,Jennie (BlackPink),Blackpink,nhan sắc sao Hàn,sao Hàn,Somi comeback,somi,The Black Label,YG Entertainment,nữ thần lai,Somi (The Black Label),body của sao,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/3/dadbe998fbcb2907d9eb636604f52409-16279291858301244918828.jpg"
                      alt="14, Jeon Somi,Jennie (BlackPink),Blackpink,nhan sắc sao Hàn,sao Hàn,Somi comeback,somi,The Black Label,YG Entertainment,nữ thần lai,Somi (The Black Label),body của sao,"
                      note=""
                    />
                    <p>Nguồn: Dispatch, Twitter</p>
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
