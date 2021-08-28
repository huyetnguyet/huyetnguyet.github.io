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
"timestamp": '28/08/2021 08:35 AM',
"title": 'Mỹ nhân Hoa ngữ đóng cảnh hôn khi chưa tròn 18: Trịnh Sảng mãnh liệt suýt gãy mũi, cô cuối gây sốc vì mới 12 tuổi!',
"description": 'Trịnh Sảng thực hiện cảnh hôn đầu đời khi mới 17 tuổi, thế nhưng đó chưa phải "kỷ lục" trẻ nhất Cbiz.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/22/photo-1-1629602143047901615631.jpeg',
"alt": 'Trịnh Sảng,Lý Lan Địch,Tưởng Y Y,ngô lỗi,Tiếu ngạo giang hồ,Thiên Dục,Lý Tiểu Lộ,Cùng Ngắm Mưa Sao Băng,Bí Quả,cảnh hôn,phim Hoa ngữ,phim trung quốc,Phim truyền hình,phim điện ảnh,Trương Hàn,Mỹ nhân Hoa ngữ,',
"category": 'stars',
"date": '28/08/2021',
"time": '08:35 AM',
"link": '/my-nhan-hoa-ngu-dong-canh-hon-khi-chua-tron-18-trinh-sang-manh-liet-suyt-gay-mui-co-cuoi-gay-soc-vi-moi-12-tuoi',
"zcomponent": 'page_20210828083544',
"filepath": './20210828083544-my-nhan-hoa-ngu-dong-canh-hon-khi-chua-tron-18-trinh-sang-manh-liet-suyt-gay-mui-co-cuoi-gay-soc-vi-moi-12-tuoi.js'
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
  "Mỹ nhân Hoa ngữ đóng cảnh hôn khi chưa tròn 18: Trịnh Sảng mãnh liệt suýt gãy mũi, cô cuối gây sốc vì mới 12 tuổi!";
const author = "THÀNH VŨ,";
const source = "Trí Thức Trẻ";
const timestamp = "28/08/2021 08:35 AM";
const description =
  'Trịnh Sảng thực hiện cảnh hôn đầu đời khi mới 17 tuổi, thế nhưng đó chưa phải "kỷ lục" trẻ nhất Cbiz.';
const link =
  "my-nhan-hoa-ngu-dong-canh-hon-khi-chua-tron-18-trinh-sang-manh-liet-suyt-gay-mui-co-cuoi-gay-soc-vi-moi-12-tuoi";
const tagparam = [
  "Trịnh Sảng",
  "Lý Lan Địch",
  "Tưởng Y Y",
  "ngô lỗi",
  "Tiếu ngạo giang hồ",
  "Thiên Dục",
  "Lý Tiểu Lộ",
  "Cùng Ngắm Mưa Sao Băng",
  "Bí Quả",
  "cảnh hôn",
  "phim Hoa ngữ",
  "phim trung quốc",
  "Phim truyền hình",
  "phim điện ảnh",
  "Trương Hàn",
  "Mỹ nhân Hoa ngữ",
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

export default function page_20210828083544() {
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
                      <strong>Trịnh Sảng</strong> thực hiện{" "}
                      <strong>cảnh hôn</strong> đầu đời khi mới 17 tuổi, thế
                      nhưng đó chưa phải "kỷ lục" trẻ nhất Cbiz.
                    </p>
                    <p>
                      Diễn viên nữ của Trung Quốc có rất nhiều sự hi sinh đáng
                      nói, hết lăn xả vì cảnh nóng thì cũng đối mặt với 101 vấn
                      đề khi thực hiện <strong>cảnh hôn</strong> cùng bạn diễn
                      nam. Có một số nữ diễn viên từng có cảnh hôn đầu đời nhưng
                      vẫn chưa tròn 18, thậm chí ở độ tuổi khá trẻ.
                    </p>
                    <h5>
                      1. <strong>Trịnh Sảng</strong> - Cùng Ngắm Mưa Sao Băng
                    </h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/22/photo-1-16296020499702061726535.jpg"
                      alt="1, Trịnh Sảng,Lý Lan Địch,Tưởng Y Y,ngô lỗi,Tiếu ngạo giang hồ,Thiên Dục,Lý Tiểu Lộ,Cùng Ngắm Mưa Sao Băng,Bí Quả,cảnh hôn,phim Hoa ngữ,phim trung quốc,Phim truyền hình,phim điện ảnh,Trương Hàn,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/22/photo-1-16296020407611972007326.jpg"
                      alt="2, Trịnh Sảng,Lý Lan Địch,Tưởng Y Y,ngô lỗi,Tiếu ngạo giang hồ,Thiên Dục,Lý Tiểu Lộ,Cùng Ngắm Mưa Sao Băng,Bí Quả,cảnh hôn,phim Hoa ngữ,phim trung quốc,Phim truyền hình,phim điện ảnh,Trương Hàn,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/22/photo-1-16296021161671110484582.jpg"
                      alt="3, Trịnh Sảng,Lý Lan Địch,Tưởng Y Y,ngô lỗi,Tiếu ngạo giang hồ,Thiên Dục,Lý Tiểu Lộ,Cùng Ngắm Mưa Sao Băng,Bí Quả,cảnh hôn,phim Hoa ngữ,phim trung quốc,Phim truyền hình,phim điện ảnh,Trương Hàn,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/22/photo-1-1629602143047901615631.jpeg"
                      alt="9, Trịnh Sảng,Lý Lan Địch,Tưởng Y Y,ngô lỗi,Tiếu ngạo giang hồ,Thiên Dục,Lý Tiểu Lộ,Cùng Ngắm Mưa Sao Băng,Bí Quả,cảnh hôn,phim Hoa ngữ,phim trung quốc,Phim truyền hình,phim điện ảnh,Trương Hàn,Mỹ nhân Hoa ngữ,"
                      note=""
                    />

                    <p>
                      <strong>Trịnh Sảng</strong> bước đầu thành công là nhờ
                      siêu phẩm <strong>Cùng Ngắm Mưa Sao Băng</strong>, cũng là
                      khi cô có nụ hôn màn ảnh đầu đời khi chỉ mới 17 tuổi.
                      Trong phim, nhân vật của Trịnh Sảng - Sở Vũ Tiêm thường
                      xuyên "khóa môi" nam chính Mộ Dung Vân Hải (
                      <strong>Trương Hàn</strong>). Không chỉ dừng lại ở những
                      kiểu hôn "chuồn chuồn nước", Trịnh Sảng và Trương Hàn còn
                      hôn vô cùng đắm đuối làm người xem không khỏi ngại ngùng.
                      Đôi khi khán giả còn sợ chiếc mũi xinh đẹp của Trịnh Sảng
                      sẽ hỏng mất nếu cứ áp sát Trương Hàn như thế!
                    </p>
                    <h5>
                      2. <strong>Lý Lan Địch</strong> - Bí Quả
                    </h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/22/photo-1-1629640799349691209659.jpg"
                      alt="4, Trịnh Sảng,Lý Lan Địch,Tưởng Y Y,ngô lỗi,Tiếu ngạo giang hồ,Thiên Dục,Lý Tiểu Lộ,Cùng Ngắm Mưa Sao Băng,Bí Quả,cảnh hôn,phim Hoa ngữ,phim trung quốc,Phim truyền hình,phim điện ảnh,Trương Hàn,Mỹ nhân Hoa ngữ,"
                      note=""
                    />

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/22/photo-1-1629640807253804646262.jpg"
                      alt="10, Trịnh Sảng,Lý Lan Địch,Tưởng Y Y,ngô lỗi,Tiếu ngạo giang hồ,Thiên Dục,Lý Tiểu Lộ,Cùng Ngắm Mưa Sao Băng,Bí Quả,cảnh hôn,phim Hoa ngữ,phim trung quốc,Phim truyền hình,phim điện ảnh,Trương Hàn,Mỹ nhân Hoa ngữ,"
                      note=""
                    />

                    <p>
                      Cũng giống <strong>Trịnh Sảng</strong>,{" "}
                      <strong>Lý Lan Địch</strong> có nụ hôn đầu trên phim lúc
                      chỉ mới 17 tuổi. Trong bộ phim <strong>Bí Quả</strong>,{" "}
                      <strong>cảnh hôn</strong> dưới cơn mưa ướt át của Lý Lan
                      Địch và Trần Triết Viễn đã khiến fan "rần rần" vì quá ngọt
                      ngào. Sau này khi đã trưởng thành, Lý Lan Địch lại được
                      cho là khá kỹ tính khi đóng các cảnh hôn. Có lần vì bạn
                      diễn nam tự ý dùng lưỡi, Lý Lan Địch đã ngay lập tức tỏ vẻ
                      khó chịu và cho người đó ăn tát tại chỗ. Lý Lan Địch có
                      thể được xem là một trong số ít diễn viên chủ động bảo vệ
                      bản thân khi đóng các cảnh thân mật trong phim.
                    </p>

                    <h5>
                      3. <strong>Lý Tiểu Lộ</strong> - Thiên Dục
                    </h5>
                    <p>
                      Không chỉ có <strong>cảnh hôn</strong>,{" "}
                      <strong>Lý Tiểu Lộ</strong> khi tham gia{" "}
                      <strong>phim điện ảnh</strong> <strong>Thiên Dục</strong>{" "}
                      của đạo diễn Trần Xung còn đóng không ít cảnh nóng vô cùng
                      "xốn mắt". Lúc này, Lý Tiểu Lộ chỉ mới 16 tuổi nhưng lại
                      có cảnh hôn với bạn diễn nam hơn cô đến 25 tuổi. Trong
                      phim, nhân vật nữ chính bị sử dụng như một "món hàng" của
                      đàn ông, để rồi sau đó qua đời nơi xa xứ. Bộ phim từng bị
                      Cục "sờ gáy" vì nhiều tình tiết 18+, cũng dẫn đến màn
                      "cạch mặt" của Lý Tiểu Lộ đối với đạo diễn kiêm diễn viên
                      gạo cội Trần Xung.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/22/photo-1-16296022846391631209168.jpg"
                      alt="5, Trịnh Sảng,Lý Lan Địch,Tưởng Y Y,ngô lỗi,Tiếu ngạo giang hồ,Thiên Dục,Lý Tiểu Lộ,Cùng Ngắm Mưa Sao Băng,Bí Quả,cảnh hôn,phim Hoa ngữ,phim trung quốc,Phim truyền hình,phim điện ảnh,Trương Hàn,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/22/photo-1-16296023075431334050775.jpg"
                      alt="6, Trịnh Sảng,Lý Lan Địch,Tưởng Y Y,ngô lỗi,Tiếu ngạo giang hồ,Thiên Dục,Lý Tiểu Lộ,Cùng Ngắm Mưa Sao Băng,Bí Quả,cảnh hôn,phim Hoa ngữ,phim trung quốc,Phim truyền hình,phim điện ảnh,Trương Hàn,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/22/photo-1-16296023359891900741338.png"
                      alt="7, Trịnh Sảng,Lý Lan Địch,Tưởng Y Y,ngô lỗi,Tiếu ngạo giang hồ,Thiên Dục,Lý Tiểu Lộ,Cùng Ngắm Mưa Sao Băng,Bí Quả,cảnh hôn,phim Hoa ngữ,phim trung quốc,Phim truyền hình,phim điện ảnh,Trương Hàn,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <p>
                      <strong>Lý Tiểu Lộ</strong> hôn bạn diễn "ông chú"
                    </p>
                    <p>
                      Đoàn phim đã phải dùng "thế thân" ở những cảnh nude vì{" "}
                      <strong>Lý Tiểu Lộ</strong> không chịu đóng
                    </p>
                    <h5>
                      4. <strong>Tưởng Y Y</strong> - Thần Điêu Đại Hiệp phiên
                      bản 2014
                    </h5>
                    <p>
                      Trong phiên bản Thần Điêu Đại Hiệp 2014, bên cạnh dàn sao
                      "khủng" gồm Trần Hiểu, Trần Nghiên Hy, Nghiêm Khoan,
                      Trương Hinh Dư,... thì có thêm 2 diễn viên nhí khá nổi
                      tiếng là <strong>Ngô Lỗi</strong> và{" "}
                      <strong>Tưởng Y Y</strong>. Trong phim, hai diễn viên lần
                      lượt vào vai Dương Quá và Quách phù lúc nhỏ. Khác với cặp
                      Dương Quá - Tiểu Long Nữ kinh điển, phiên bản nhí của
                      Dương Quá và Quách Phù lại được fan yêu thích vô cùng,
                      nhất là với màn "khóa môi" bất ngờ khiến nhiều người sốc
                      óc. Lúc bấy giờ, Tưởng Y Y chỉ mới 12 tuổi còn Ngô Lỗi 14
                      tuổi.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/22/-16296017464811805197098.jpg"
                      alt="11, Trịnh Sảng,Lý Lan Địch,Tưởng Y Y,ngô lỗi,Tiếu ngạo giang hồ,Thiên Dục,Lý Tiểu Lộ,Cùng Ngắm Mưa Sao Băng,Bí Quả,cảnh hôn,phim Hoa ngữ,phim trung quốc,Phim truyền hình,phim điện ảnh,Trương Hàn,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/22/photo-1-16296018069921288649674.gif"
                      alt="14, Trịnh Sảng,Lý Lan Địch,Tưởng Y Y,ngô lỗi,Tiếu ngạo giang hồ,Thiên Dục,Lý Tiểu Lộ,Cùng Ngắm Mưa Sao Băng,Bí Quả,cảnh hôn,phim Hoa ngữ,phim trung quốc,Phim truyền hình,phim điện ảnh,Trương Hàn,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/22/photo-1-16296391258951514791274.jpg"
                      alt="8, Trịnh Sảng,Lý Lan Địch,Tưởng Y Y,ngô lỗi,Tiếu ngạo giang hồ,Thiên Dục,Lý Tiểu Lộ,Cùng Ngắm Mưa Sao Băng,Bí Quả,cảnh hôn,phim Hoa ngữ,phim trung quốc,Phim truyền hình,phim điện ảnh,Trương Hàn,Mỹ nhân Hoa ngữ,"
                      note="Cả hai năm xưa cũng rất thân thiết"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/22/photo-1-16296019185881849882294.jpeg"
                      alt="12, Trịnh Sảng,Lý Lan Địch,Tưởng Y Y,ngô lỗi,Tiếu ngạo giang hồ,Thiên Dục,Lý Tiểu Lộ,Cùng Ngắm Mưa Sao Băng,Bí Quả,cảnh hôn,phim Hoa ngữ,phim trung quốc,Phim truyền hình,phim điện ảnh,Trương Hàn,Mỹ nhân Hoa ngữ,"
                      note=""
                    />

                    <p>Nguồn ảnh: Tổng hợp</p>
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
