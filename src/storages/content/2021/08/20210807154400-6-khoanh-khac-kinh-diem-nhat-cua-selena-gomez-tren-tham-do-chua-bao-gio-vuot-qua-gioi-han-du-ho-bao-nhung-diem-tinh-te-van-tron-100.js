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
"timestamp": '07/08/2021 03:44 PM',
"title": '6 khoảnh khắc kinh diễm nhất của Selena Gomez trên thảm đỏ: Chưa bao giờ vượt quá giới hạn, dù hở bạo nhưng điểm tinh tế vẫn tròn 100',
"description": 'Không biết tới bao giờ chúng ta mới lại được nhìn Selena Gomez thả dáng xuất sắc tiếp đây.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/7/photo-1-1628309575333344594990.jpg',
"alt": 'Selena Gomez,star style,Thời trang thảm đỏ,thảm đỏ,',
"category": 'stars',
"date": '07/08/2021',
"time": '03:44 PM',
"link": '/6-khoanh-khac-kinh-diem-nhat-cua-selena-gomez-tren-tham-do-chua-bao-gio-vuot-qua-gioi-han-du-ho-bao-nhung-diem-tinh-te-van-tron-100',
"zcomponent": 'page_20210807154400',
"filepath": './20210807154400-6-khoanh-khac-kinh-diem-nhat-cua-selena-gomez-tren-tham-do-chua-bao-gio-vuot-qua-gioi-han-du-ho-bao-nhung-diem-tinh-te-van-tron-100.js'
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
  "6 khoảnh khắc kinh diễm nhất của Selena Gomez trên thảm đỏ: Chưa bao giờ vượt quá giới hạn, dù hở bạo nhưng điểm tinh tế vẫn tròn 100";
const author = "GG,";
const source = "Doanh nghiệp và Tiếp thị";
const timestamp = "07/08/2021 03:44 PM";
const description =
  "Không biết tới bao giờ chúng ta mới lại được nhìn Selena Gomez thả dáng xuất sắc tiếp đây.";
const link =
  "6-khoanh-khac-kinh-diem-nhat-cua-selena-gomez-tren-tham-do-chua-bao-gio-vuot-qua-gioi-han-du-ho-bao-nhung-diem-tinh-te-van-tron-100";
const tagparam = [
  "Selena Gomez",
  "star style",
  "Thời trang thảm đỏ",
  "thảm đỏ",
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

export default function page_20210807154400() {
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
                      Không biết tới bao giờ chúng ta mới lại được nhìn{" "}
                      <strong>Selena Gomez</strong> thả dáng xuất sắc tiếp đây.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/7/photo-1-1628309575333344594990.jpg"
                      alt="1, Selena Gomez,star style,Thời trang thảm đỏ,thảm đỏ,"
                      note=""
                    />
                    <p>
                      <strong>Thảm đỏ</strong> là tuy là nơi các ngôi sao chỉ
                      xuất hiện trong ít phút nhưng cũng có thể xem là một sân
                      khấu quan trọng, nơi họ thể hiện kĩ năng điêu luyện trước
                      ống kính và phô diễn những bộ cánh, những tạo hình xuất
                      sắc nhất của mình.
                    </p>
                    <p>
                      Tham gia làng giải trí đã lâu, số lần{" "}
                      <strong>Selena Gomez</strong> xuất hiện trên{" "}
                      <strong>thảm đỏ</strong> nhiều vô kể nhưng để nói về những
                      lần cô xinh đẹp nhất, ấn tượng nhất, thì phải kể đến những
                      khoảnh khắc sau.
                    </p>
                    <p>
                      Điển hình phải kể đến hình ảnh{" "}
                      <strong>Selena Gomez</strong> dung dăng dung dẻ cùng tình
                      cũ Justin Bieber trong chiếc váy đỏ sexy của Dolce &
                      Gabbana khi dự tiệc hậu Oscar do Vanity Fair tổ chức năm
                      2011. Bộ cánh này hoàn thành tốt việc giúp cô sexy một
                      cách chừng mực, không quá trẻ con và cũng không đến mức
                      "già khắm", điều mà Selena Gomez luôn muốn ở thời điểm đó.
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/photo-1-1628325548127529718318.jpg"
                      alt="2, Selena Gomez,star style,Thời trang thảm đỏ,thảm đỏ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/photo-1-1628310528372376383278.jpg"
                      alt="3, Selena Gomez,star style,Thời trang thảm đỏ,thảm đỏ,"
                      note=""
                    />
                    <p>
                      Cũng trong năm 2011, <strong>Selena Gomez</strong> khi
                      xuất hiện với bộ váy lụa được cắt may tinh xảo đến từ nhà
                      mốt Giorgio Armani cũng khiến <strong>thảm đỏ</strong>{" "}
                      AMAs như thêm phần sôi động. Makeup, tóc tai của cô hôm đó
                      cũng cực chuẩn chỉnh, vừa hợp với trang phục mà giờ nhìn
                      vẫn chẳng hề lỗi mốt.
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/photo-1-16283256313892077993694.jpg"
                      alt="4, Selena Gomez,star style,Thời trang thảm đỏ,thảm đỏ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/photo-1-16283105668281597317529.jpg"
                      alt="5, Selena Gomez,star style,Thời trang thảm đỏ,thảm đỏ,"
                      note=""
                    />
                    <p>
                      Sau đó 2 năm, <strong>Selena Gomez</strong> bắt đầu cho
                      phép bản thân được hở bạo hơn, sexy hơn nên trong lần tham
                      dự VMAs 2013, cô đã mạnh dạn chọn 1 chiếc đầm cut-out kết
                      hợp với chất liệu xuyên thấu, pha ren của Versace. Bộ này
                      thì khỏi nói về độ gợi cảm nhưng vẫn rất dư thừa sự tinh
                      tế, bạn hẳn nhiên sẽ không thể tìm ra được điểm phản cảm
                      nào đâu.
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/photo-1-1628325689376952333924.jpg"
                      alt="6, Selena Gomez,star style,Thời trang thảm đỏ,thảm đỏ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/photo-1-16283101561181571297104.jpg"
                      alt="7, Selena Gomez,star style,Thời trang thảm đỏ,thảm đỏ,"
                      note=""
                    />
                    <RelationNewsInPage category={category} />
                    <p>
                      Dù bản thân chưa giành được giải Grammy nào nhưng{" "}
                      <strong>Selena Gomez</strong> vẫn tạo nét cực cháy tại lễ
                      trao giải này vào năm 2016. Bộ váy sequin xanh thẫm của
                      Calvin Klein cùng những được cắt cúp tinh xảo đúng là sinh
                      ra để được ướm lên người Selena mà.
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/photo-1-1628309481189327979130.jpg"
                      alt="8, Selena Gomez,star style,Thời trang thảm đỏ,thảm đỏ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/photo-1-1628309144249440320627.jpg"
                      alt="9, Selena Gomez,star style,Thời trang thảm đỏ,thảm đỏ,"
                      note=""
                    />
                    <p>
                      AMAs 2017 lại đánh dấu một hình ảnh rất khác của{" "}
                      <strong>Selena Gomez</strong>. Thay vì chọn những bộ váy
                      dài thướt tha như mọi khi, cô lại khiến tất cả ngỡ ngàng
                      với chiếc váy da đậm chất punk chic. Đó cũng là lần đầu
                      tiên cô nhuộm tóc bạch kim nữa, giao diện khi ấy phải nói
                      là 10/10.
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/photo-1-16283257470301643256587.jpg"
                      alt="10, Selena Gomez,star style,Thời trang thảm đỏ,thảm đỏ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/photo-1-16283106602081575410852.jpg"
                      alt="11, Selena Gomez,star style,Thời trang thảm đỏ,thảm đỏ,"
                      note=""
                    />
                    <p>
                      Gần đây nhất thì có sự kiện AMAs 2019. Đó cũng là lần{" "}
                      <strong>Selena Gomez</strong> hiên ngang xuất hiện trong
                      mái tóc bob uốn cụp. Không cầu kỳ hay chơi chiêu quá
                      nhiều, cô chỉ chọn 1 set đồ màu neon mà vẫn tạo nét xuất
                      sắc. Spotlight một phần đến từ vòng 1 nóng bỏng như đang
                      muốn được giải phóng khỏi váy áo của cô.
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/photo-1-16283257715581479971292.jpg"
                      alt="12, Selena Gomez,star style,Thời trang thảm đỏ,thảm đỏ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/photo-1-1628310345416937638772.jpg"
                      alt="13, Selena Gomez,star style,Thời trang thảm đỏ,thảm đỏ,"
                      note=""
                    />
                    <p>Ảnh: Internet</p>
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
