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
"timestamp": '29/07/2021 04:26 PM',
"title": 'Những bí mật ẩn giấu của các vận động viên Olympic',
"description": 'Qua cách họ tìm mọi cách vượt qua giới hạn bản thân, bạn có thể có cái nhìn mới về cơ thể con người.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/29/photo-1-16275335451592084135479.jpg',
"alt": 'VẬN ĐỘNG VIÊN,CƠ THỂ CON NGƯỜI,THỂ DỤC DỤNG CỤ,CHẠY NƯỚC RÚT,NHÀ VÔ ĐỊCH,OLYMPIC,',
"category": 'news',
"date": '29/07/2021',
"time": '04:26 PM',
"link": '/nhung-bi-mat-an-giau-cua-cac-van-dong-vien-olympic',
"zcomponent": 'page_20210729162657',
"filepath": './20210729162657-nhung-bi-mat-an-giau-cua-cac-van-dong-vien-olympic.js'
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
const title = "Những bí mật ẩn giấu của các vận động viên Olympic";
const author = "Bảo Nam";
const source = "Pháp Luật & Bạn Đọc";
const timestamp = "29/07/2021 04:26 PM";
const description =
  "Qua cách họ tìm mọi cách vượt qua giới hạn bản thân, bạn có thể có cái nhìn mới về cơ thể con người.";
const link = "nhung-bi-mat-an-giau-cua-cac-van-dong-vien-olympic";
const tagparam = [
  "VẬN ĐỘNG VIÊN",
  "CƠ THỂ CON NGƯỜI",
  "THỂ DỤC DỤNG CỤ",
  "CHẠY NƯỚC RÚT",
  "NHÀ VÔ ĐỊCH",
  "OLYMPIC",
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

export default function page_20210729162657() {
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
                      Ảnh chụp X-quang của một <strong>vận động viên</strong>{" "}
                      <strong>thể dục dụng cụ</strong> đang thực hiện một bài
                      tập.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/29/photo-1-16275335451592084135479.jpg"
                      alt="1, VẬN ĐỘNG VIÊN,CƠ THỂ CON NGƯỜI,THỂ DỤC DỤNG CỤ,CHẠY NƯỚC RÚT,NHÀ VÔ ĐỊCH,OLYMPIC,"
                      note=""
                    />
                    <p>
                      Vẽ ra biểu tượng <strong>Olympic</strong> dưới nước bằng
                      bóng khí là một trong các kỹ năng độc đáo và thú vị của
                      các <strong>vận động viên</strong> bơi lội.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/29/photo-1-1627533546371967393297.jpg"
                      alt="2, VẬN ĐỘNG VIÊN,CƠ THỂ CON NGƯỜI,THỂ DỤC DỤNG CỤ,CHẠY NƯỚC RÚT,NHÀ VÔ ĐỊCH,OLYMPIC,"
                      note=""
                    />
                    <p>
                      Lưng của một <strong>vận động viên</strong>{" "}
                      <strong>chạy nước rút</strong> có khả năng hút các vật nhỏ
                      ở môi trường xung quanh.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/29/photo-2-16275335464281667223003.jpg"
                      alt="3, VẬN ĐỘNG VIÊN,CƠ THỂ CON NGƯỜI,THỂ DỤC DỤNG CỤ,CHẠY NƯỚC RÚT,NHÀ VÔ ĐỊCH,OLYMPIC,"
                      note=""
                    />
                    <p>
                      Đây là độ cao mà các <strong>vận động viên</strong> môn
                      trượt tuyết nhảy xa (Ski jumping) phải đối mặt.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/29/photo-3-16275335464861958157870.jpg"
                      alt="4, VẬN ĐỘNG VIÊN,CƠ THỂ CON NGƯỜI,THỂ DỤC DỤNG CỤ,CHẠY NƯỚC RÚT,NHÀ VÔ ĐỊCH,OLYMPIC,"
                      note=""
                    />
                    <p>
                      Các bó cơ trên chân trái của{" "}
                      <strong>vận động viên</strong> đua xe đạp Janez Brajkovič.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/29/photo-4-1627533546547179434431.jpg"
                      alt="5, VẬN ĐỘNG VIÊN,CƠ THỂ CON NGƯỜI,THỂ DỤC DỤNG CỤ,CHẠY NƯỚC RÚT,NHÀ VÔ ĐỊCH,OLYMPIC,"
                      note=""
                    />
                    <p>
                      Đôi chân của <strong>vận động viên</strong> George
                      Hincapie sau cuộc đua xe đạp Tour De France.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/29/photo-5-16275335470651156780401.jpg"
                      alt="6, VẬN ĐỘNG VIÊN,CƠ THỂ CON NGƯỜI,THỂ DỤC DỤNG CỤ,CHẠY NƯỚC RÚT,NHÀ VÔ ĐỊCH,OLYMPIC,"
                      note=""
                    />
                    <p>
                      Chênh lệch chiều cao giữa một{" "}
                      <strong>vận động viên</strong> bóng chuyền và vận động
                      viên thể dục dục của của đội tuyển Nga.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/29/photo-6-16275335465761572029413.jpg"
                      alt="7, VẬN ĐỘNG VIÊN,CƠ THỂ CON NGƯỜI,THỂ DỤC DỤNG CỤ,CHẠY NƯỚC RÚT,NHÀ VÔ ĐỊCH,OLYMPIC,"
                      note=""
                    />
                    <p>
                      Đôi tay của một <strong>vận động viên</strong> chèo thuyền
                      sau thời gian dài ở bên trong chiếc găng tay ẩm ướt.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/29/photo-7-16275335466111471527435.png"
                      alt="8, VẬN ĐỘNG VIÊN,CƠ THỂ CON NGƯỜI,THỂ DỤC DỤNG CỤ,CHẠY NƯỚC RÚT,NHÀ VÔ ĐỊCH,OLYMPIC,"
                      note=""
                    />
                    <p>
                      Đôi chân của <strong>nhà vô địch</strong> bơi lội{" "}
                      <strong>Olympic</strong> Hà Lan Maarten Van Der Weijden
                      sau khi bơi 163 km trong 55 giờ để quyên tiền cho nghiên
                      cứu ung thư.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/29/photo-8-1627533547131786581560.jpg"
                      alt="9, VẬN ĐỘNG VIÊN,CƠ THỂ CON NGƯỜI,THỂ DỤC DỤNG CỤ,CHẠY NƯỚC RÚT,NHÀ VÔ ĐỊCH,OLYMPIC,"
                      note=""
                    />
                    <p>
                      Hãy nhìn cơ bắp trên đôi chân của "Số 10 hoàn hảo đầu tiên
                      trong lịch sử <strong>Olympic</strong>", Nadia Comaneci, ở
                      tuổi 14.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/29/photo-9-16275335466761875548291.jpg"
                      alt="10, VẬN ĐỘNG VIÊN,CƠ THỂ CON NGƯỜI,THỂ DỤC DỤNG CỤ,CHẠY NƯỚC RÚT,NHÀ VÔ ĐỊCH,OLYMPIC,"
                      note=""
                    />
                    <p>
                      <strong>Vận động viên</strong> bơi lội phải xử lý hết mọi
                      đám lông trên cơ thể trước ngày thi đấu.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/29/photo-10-16275335467231140043221.jpg"
                      alt="11, VẬN ĐỘNG VIÊN,CƠ THỂ CON NGƯỜI,THỂ DỤC DỤNG CỤ,CHẠY NƯỚC RÚT,NHÀ VÔ ĐỊCH,OLYMPIC,"
                      note=""
                    />
                    <RelationNewsInPage category={category} />
                    <p>
                      Tai nạn gây chấn thương thảm khốc của một vân động viên cử
                      tạ.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/29/photo-11-1627533546762950416855.jpg"
                      alt="12, VẬN ĐỘNG VIÊN,CƠ THỂ CON NGƯỜI,THỂ DỤC DỤNG CỤ,CHẠY NƯỚC RÚT,NHÀ VÔ ĐỊCH,OLYMPIC,"
                      note=""
                    />
                    <p>
                      Các <strong>vận động viên</strong> đôi khi có thể nghỉ
                      ngơi thư giãn, nhưng các bó cơ của họ thì không.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/29/photo-12-16275335472061375852694.jpg"
                      alt="13, VẬN ĐỘNG VIÊN,CƠ THỂ CON NGƯỜI,THỂ DỤC DỤNG CỤ,CHẠY NƯỚC RÚT,NHÀ VÔ ĐỊCH,OLYMPIC,"
                      note=""
                    />
                    <p>
                      Một <strong>vận động viên</strong>{" "}
                      <strong>thể dục dụng cụ</strong> đang xem TV, nhưng vẫn
                      không bỏ lỡ thời gian rèn luyện.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/29/photo-13-1627533546812818849126.jpg"
                      alt="14, VẬN ĐỘNG VIÊN,CƠ THỂ CON NGƯỜI,THỂ DỤC DỤNG CỤ,CHẠY NƯỚC RÚT,NHÀ VÔ ĐỊCH,OLYMPIC,"
                      note=""
                    />
                    <p>Tắm với nước đá cũng là chuyện xảy ra hàng ngày.</p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/29/photo-14-16275335468391840983892.jpg"
                      alt="15, VẬN ĐỘNG VIÊN,CƠ THỂ CON NGƯỜI,THỂ DỤC DỤNG CỤ,CHẠY NƯỚC RÚT,NHÀ VÔ ĐỊCH,OLYMPIC,"
                      note=""
                    />
                    <p>
                      Giác hơi giờ đã trở nên phổ biến như một phương pháp trị
                      liệu cho các <strong>vận động viên</strong>.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/29/photo-15-16275335468771828069080.jpg"
                      alt="16, VẬN ĐỘNG VIÊN,CƠ THỂ CON NGƯỜI,THỂ DỤC DỤNG CỤ,CHẠY NƯỚC RÚT,NHÀ VÔ ĐỊCH,OLYMPIC,"
                      note=""
                    />
                    <p>
                      Vô số công nghệ đang được áp dụng trong điều trị và phục
                      hồi chấn thượng cho các <strong>vận động viên</strong>.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/29/photo-16-16275335469261592135660.jpg"
                      alt="17, VẬN ĐỘNG VIÊN,CƠ THỂ CON NGƯỜI,THỂ DỤC DỤNG CỤ,CHẠY NƯỚC RÚT,NHÀ VÔ ĐỊCH,OLYMPIC,"
                      note=""
                    />
                    <p>
                      Đừng mong có cơ thể như <strong>vận động viên</strong>, vì
                      đôi khi cơ thể họ không hề cân xứng.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/29/photo-17-16275335469532082969251.jpg"
                      alt="18, VẬN ĐỘNG VIÊN,CƠ THỂ CON NGƯỜI,THỂ DỤC DỤNG CỤ,CHẠY NƯỚC RÚT,NHÀ VÔ ĐỊCH,OLYMPIC,"
                      note=""
                    />
                    <p>Tham khảo BoredPanda</p>
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
