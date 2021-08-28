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
"timestamp": '28/08/2021 08:51 AM',
"title": '4 nàng Thái tử phi của màn ảnh Hoa ngữ: Bành Tiểu Nhiễm - Bạch Lộc khổ hết phần thiên hạ, trùm cuối lẳng lơ không ai bằng',
"description": 'Đây đều là những nàng Thái tử phi tuyệt sắc của màn ảnh Hoa ngữ.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/27/24046443911759036162424096988002265811029896n-1630078071902378160743.jpg',
"alt": 'Bạch Lộc,Bành Tiểu Nhiễm,Trương Thiên Ái,Lý Khải Hinh,Trường An Như Cố (2021),Trường An Như Cố,Thái Tử Phi Thăng Chức Ký (2015),Đông Cung (2019),Mỹ nhân Hoa ngữ,',
"category": 'stars',
"date": '28/08/2021',
"time": '08:51 AM',
"link": '/4-nang-thai-tu-phi-cua-man-anh-hoa-ngu-banh-tieu-nhiem-bach-loc-kho-het-phan-thien-ha-trum-cuoi-lang-lo-khong-ai-bang',
"zcomponent": 'page_20210828085141',
"filepath": './20210828085141-4-nang-thai-tu-phi-cua-man-anh-hoa-ngu-banh-tieu-nhiem-bach-loc-kho-het-phan-thien-ha-trum-cuoi-lang-lo-khong-ai-bang.js'
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
  "4 nàng Thái tử phi của màn ảnh Hoa ngữ: Bành Tiểu Nhiễm - Bạch Lộc khổ hết phần thiên hạ, trùm cuối lẳng lơ không ai bằng";
const author = "XỬ NỮ,";
const source = "Trí Thức Trẻ";
const timestamp = "28/08/2021 08:51 AM";
const description =
  "Đây đều là những nàng Thái tử phi tuyệt sắc của màn ảnh Hoa ngữ.";
const link =
  "4-nang-thai-tu-phi-cua-man-anh-hoa-ngu-banh-tieu-nhiem-bach-loc-kho-het-phan-thien-ha-trum-cuoi-lang-lo-khong-ai-bang";
const tagparam = [
  "Bạch Lộc",
  "Bành Tiểu Nhiễm",
  "Trương Thiên Ái",
  "Lý Khải Hinh",
  "Trường An Như Cố (2021)",
  "Trường An Như Cố",
  "Thái Tử Phi Thăng Chức Ký (2015)",
  "Đông Cung (2019)",
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

export default function page_20210828085141() {
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
                      Đây đều là những nàng Thái tử phi tuyệt sắc của màn ảnh
                      Hoa ngữ.
                    </p>
                    <h5>
                      1. Thôi Thời Nghi (<strong>Trường An Như Cố</strong>)
                    </h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/27/24046443911759036162424096988002265811029896n-1630078071902378160743.jpg"
                      alt="1, Bạch Lộc,Bành Tiểu Nhiễm,Trương Thiên Ái,Lý Khải Hinh,Trường An Như Cố (2021),Trường An Như Cố,Thái Tử Phi Thăng Chức Ký (2015),Đông Cung (2019),Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/26/11-1629968435271142807445.jpg"
                      alt="2, Bạch Lộc,Bành Tiểu Nhiễm,Trương Thiên Ái,Lý Khải Hinh,Trường An Như Cố (2021),Trường An Như Cố,Thái Tử Phi Thăng Chức Ký (2015),Đông Cung (2019),Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/26/12-1629968435280684567558.jpg"
                      alt="3, Bạch Lộc,Bành Tiểu Nhiễm,Trương Thiên Ái,Lý Khải Hinh,Trường An Như Cố (2021),Trường An Như Cố,Thái Tử Phi Thăng Chức Ký (2015),Đông Cung (2019),Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/26/0077fudfly1gtnfd6eykyg30w00lcnpg-1629975528870640729450.gif"
                      alt="15, Bạch Lộc,Bành Tiểu Nhiễm,Trương Thiên Ái,Lý Khải Hinh,Trường An Như Cố (2021),Trường An Như Cố,Thái Tử Phi Thăng Chức Ký (2015),Đông Cung (2019),Mỹ nhân Hoa ngữ,"
                      note=""
                    />

                    <p>
                      Trong <strong>Trường An Như Cố</strong>, Thôi Thời Nghi (
                      <strong>Bạch Lộc</strong>) là con gái độc nhất của danh
                      môn Thôi thị, vừa sinh ra đã được chỉ định làm Thái tử phi
                      tương lai. Nàng có tính cách thiện lương, khả ái, thông
                      minh hơn người. Đem lòng yêu Châu Sinh Thần (Nhậm Gia
                      Luân) nhưng cuối cùng nàng phải thành thân với Thái tử vì
                      gánh vác danh tiếng gia tộc. Sau này khi Thái tử xử tử
                      Châu Sinh Thần, nàng đã quyết định nhảy thành tự vẫn.
                    </p>

                    <h5>2. Tiểu Phong (Đông Cung)</h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/26/6-1629968689403524166680.jpg"
                      alt="4, Bạch Lộc,Bành Tiểu Nhiễm,Trương Thiên Ái,Lý Khải Hinh,Trường An Như Cố (2021),Trường An Như Cố,Thái Tử Phi Thăng Chức Ký (2015),Đông Cung (2019),Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/26/9-1629968689450191537139.jpg"
                      alt="5, Bạch Lộc,Bành Tiểu Nhiễm,Trương Thiên Ái,Lý Khải Hinh,Trường An Như Cố (2021),Trường An Như Cố,Thái Tử Phi Thăng Chức Ký (2015),Đông Cung (2019),Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/26/8-1629968689436271827836.jpg"
                      alt="6, Bạch Lộc,Bành Tiểu Nhiễm,Trương Thiên Ái,Lý Khải Hinh,Trường An Như Cố (2021),Trường An Như Cố,Thái Tử Phi Thăng Chức Ký (2015),Đông Cung (2019),Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/26/7-16299686894141270456928.jpg"
                      alt="7, Bạch Lộc,Bành Tiểu Nhiễm,Trương Thiên Ái,Lý Khải Hinh,Trường An Như Cố (2021),Trường An Như Cố,Thái Tử Phi Thăng Chức Ký (2015),Đông Cung (2019),Mỹ nhân Hoa ngữ,"
                      note=""
                    />

                    <p>
                      Đông Cung kể về câu chuyện yêu hận đan xen của thái tử
                      Trung Nguyên - Lý Thừa Ngân (Trần Tinh Húc) và công chúa
                      Tây Lương - Tiểu Phong (<strong>Bành Tiểu Nhiễm</strong>).
                      Lý Thừa Ngân đã lừa gạt tình cảm của Tiểu Phong, hại cô
                      nước mất nhà tan khiến cô nhảy xuống sông Quên tự tử. Sau
                      khi được cứu, Tiểu Phong quên hết mọi chuyện đã xảy ra, cô
                      bị ép về Trung Nguyên thành thân với Lý Thừa Ngân. Sau 3
                      năm làm một Thái tử phi an phận, những sự việc ngoài ý
                      muốn đã đưa ký ức của Tiểu Phong quay trở lại. Cuối cùng
                      cô quyên sinh để rời bỏ Lý Thừa Ngân vĩnh viễn.
                    </p>

                    <h5>3. Lưu Ngọc Dao (Thái Tử Phi Giả Mạo)</h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/26/17-16299688402832144665898.jpg"
                      alt="8, Bạch Lộc,Bành Tiểu Nhiễm,Trương Thiên Ái,Lý Khải Hinh,Trường An Như Cố (2021),Trường An Như Cố,Thái Tử Phi Thăng Chức Ký (2015),Đông Cung (2019),Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/26/16-16299688402741807724128.jpg"
                      alt="9, Bạch Lộc,Bành Tiểu Nhiễm,Trương Thiên Ái,Lý Khải Hinh,Trường An Như Cố (2021),Trường An Như Cố,Thái Tử Phi Thăng Chức Ký (2015),Đông Cung (2019),Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/26/15-16299688402681434537625.jpg"
                      alt="10, Bạch Lộc,Bành Tiểu Nhiễm,Trương Thiên Ái,Lý Khải Hinh,Trường An Như Cố (2021),Trường An Như Cố,Thái Tử Phi Thăng Chức Ký (2015),Đông Cung (2019),Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/26/14-16299688402421622869673.jpg"
                      alt="11, Bạch Lộc,Bành Tiểu Nhiễm,Trương Thiên Ái,Lý Khải Hinh,Trường An Như Cố (2021),Trường An Như Cố,Thái Tử Phi Thăng Chức Ký (2015),Đông Cung (2019),Mỹ nhân Hoa ngữ,"
                      note=""
                    />

                    <p>
                      Lưu Ngọc Dao (<strong>Lý Khải Hinh</strong>) từ nhỏ đã
                      được cha mẹ nuông chiều nên tính cách vô cùng bướng bỉnh
                      và ương ngạnh. Ngọc Dao có sở thích ngao du thiên hạ,
                      trong một lần bỏ nhà lên núi làm sơn tặc đại vương, cô
                      nàng đụng độ với chàng Thái tử Lý Triệt (Triệu Dịch Khâm).
                      Mối quan hệ "oan gia" của họ cũng vì thế mà bắt đầu từ
                      đây. Để có được một rương vàng, Ngọc Dao quyết định cưới
                      Thái tử, thế nhưng tất cả quá trình thành hôn đều được làm
                      giả.
                    </p>

                    <h5>4. Trương Bồng Bồng (Thái Tử Phi Thăng Chức Ký)</h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/26/ad9b3c08d9c04298b0fcca0aa08c3577-1629969205362472182704.jpg"
                      alt="12, Bạch Lộc,Bành Tiểu Nhiễm,Trương Thiên Ái,Lý Khải Hinh,Trường An Như Cố (2021),Trường An Như Cố,Thái Tử Phi Thăng Chức Ký (2015),Đông Cung (2019),Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/26/2-16299691130111414762064.gif"
                      alt="16, Bạch Lộc,Bành Tiểu Nhiễm,Trương Thiên Ái,Lý Khải Hinh,Trường An Như Cố (2021),Trường An Như Cố,Thái Tử Phi Thăng Chức Ký (2015),Đông Cung (2019),Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/26/5-16299691130711956721218.gif"
                      alt="17, Bạch Lộc,Bành Tiểu Nhiễm,Trương Thiên Ái,Lý Khải Hinh,Trường An Như Cố (2021),Trường An Như Cố,Thái Tử Phi Thăng Chức Ký (2015),Đông Cung (2019),Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/26/3-16299691130521604463727.gif"
                      alt="18, Bạch Lộc,Bành Tiểu Nhiễm,Trương Thiên Ái,Lý Khải Hinh,Trường An Như Cố (2021),Trường An Như Cố,Thái Tử Phi Thăng Chức Ký (2015),Đông Cung (2019),Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <p>
                      Trương Bằng (Trương Lâm Hoán) là một công tử đào hoa thời
                      hiện đại vì trốn bạn gái mà nhảy xuống hồ bơi và vô tình
                      xuyên không về thời cổ đại. Khi tỉnh dậy, Trương Bằng mới
                      nhận ra mình chưa chết nhưng linh hồn lại nằm trong thân
                      xác của Thái tử phi Trương Bồng Bồng (
                      <strong>Trương Thiên Ái</strong>). Mặc dù tìm đủ mọi cách
                      nhưng Trương Bằng không thể trở về cuộc sống trước đây của
                      mình, anh đành phải tiếp tục cuộc sống trong thân xác của
                      Trương Bồng Bồng. Vì vậy nét tính cách của Trương Bồng
                      Bồng khá nổi loạn và "bá đạo" nhất chốn hậu cung. Nhiều
                      khán giả còn bình chọn cho nhân vật của Trương Thiên Ái là
                      Thái tử phi lẳng lơ nhất màn ảnh.
                    </p>

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
