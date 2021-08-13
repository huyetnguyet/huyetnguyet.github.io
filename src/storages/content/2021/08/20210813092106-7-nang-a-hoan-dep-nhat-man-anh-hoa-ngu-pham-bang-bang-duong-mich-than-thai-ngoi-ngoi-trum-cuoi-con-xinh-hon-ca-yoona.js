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
"timestamp": '13/08/2021 09:21 AM',
"title": '7 nàng a hoàn đẹp nhất màn ảnh Hoa ngữ: Phạm Băng Băng - Dương Mịch thần thái ngời ngời, "trùm cuối" còn xinh hơn cả Yoona',
"description": 'Dù chỉ vào vai a hoàn, nhưng những nữ diễn viên này vẫn tỏa sáng nhờ khả năng diễn xuất tốt cùng nhan sắc nổi bật của mình.',
"src": 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/14-16286997509131783388598.jpg',
"alt": 'Trần Tiểu Vân,Phạm Băng Băng,Dương Mịch,triệu lệ dĩnh,Mạnh Tử Nghĩa,thư sướng,Lưu Đào,Mỹ nhân Hoa ngữ,',
"category": 'stars',
"date": '13/08/2021',
"time": '09:21 AM',
"link": '/7-nang-a-hoan-dep-nhat-man-anh-hoa-ngu-pham-bang-bang-duong-mich-than-thai-ngoi-ngoi-trum-cuoi-con-xinh-hon-ca-yoona',
"zcomponent": 'page_20210813092106',
"filepath": './20210813092106-7-nang-a-hoan-dep-nhat-man-anh-hoa-ngu-pham-bang-bang-duong-mich-than-thai-ngoi-ngoi-trum-cuoi-con-xinh-hon-ca-yoona.js'
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
  '7 nàng a hoàn đẹp nhất màn ảnh Hoa ngữ: Phạm Băng Băng - Dương Mịch thần thái ngời ngời, "trùm cuối" còn xinh hơn cả Yoona';
const author = "XỬ NỮ,";
const source = "Trí Thức Trẻ";
const timestamp = "13/08/2021 09:21 AM";
const description =
  "Dù chỉ vào vai a hoàn, nhưng những nữ diễn viên này vẫn tỏa sáng nhờ khả năng diễn xuất tốt cùng nhan sắc nổi bật của mình.";
const link =
  "7-nang-a-hoan-dep-nhat-man-anh-hoa-ngu-pham-bang-bang-duong-mich-than-thai-ngoi-ngoi-trum-cuoi-con-xinh-hon-ca-yoona";
const tagparam = [
  "Trần Tiểu Vân",
  "Phạm Băng Băng",
  "Dương Mịch",
  "triệu lệ dĩnh",
  "Mạnh Tử Nghĩa",
  "thư sướng",
  "Lưu Đào",
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

export default function page_20210813092106() {
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
                      Dù chỉ vào vai a hoàn, nhưng những nữ diễn viên này vẫn
                      tỏa sáng nhờ khả năng diễn xuất tốt cùng nhan sắc nổi bật
                      của mình.
                    </p>
                    <p>
                      1. Trong Hoàn Châu Cách Cách, dù chỉ vào vai a hoàn nhưng
                      nhan sắc mỹ miều vẫn giúp <strong>Phạm Băng Băng</strong>{" "}
                      không hề lép vế trước Triệu Vy và Lâm Tâm Như. Hình ảnh
                      nàng a hoàn có đôi mắt tròn, làn da trắng mịn, đôi môi
                      chúm chím đã in đậm trong tâm trí khán giả.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/14-16286997509131783388598.jpg"
                      alt="1, Trần Tiểu Vân,Phạm Băng Băng,Dương Mịch,triệu lệ dĩnh,Mạnh Tử Nghĩa,thư sướng,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/15-1628699750966960303118.jpg"
                      alt="2, Trần Tiểu Vân,Phạm Băng Băng,Dương Mịch,triệu lệ dĩnh,Mạnh Tử Nghĩa,thư sướng,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/16-1628699750980335346391.jpg"
                      alt="3, Trần Tiểu Vân,Phạm Băng Băng,Dương Mịch,triệu lệ dĩnh,Mạnh Tử Nghĩa,thư sướng,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/18-1628699750991902559838.jpg"
                      alt="4, Trần Tiểu Vân,Phạm Băng Băng,Dương Mịch,triệu lệ dĩnh,Mạnh Tử Nghĩa,thư sướng,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />

                    <p>
                      2. <strong>Dương Mịch</strong> từng vào vai Mạc Tuyết Diên
                      - a hoàn của Đậu Y Phòng (Lâm Tâm Như) trong Mỹ Nhân Tâm
                      Kế. Nhan sắc xinh đẹp cùng khả năng diễn xuất nhập tâm đã
                      giúp Dương Mịch nổi tiếng hơn sau tác phẩm này.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/19-16286999140051548304501.jpg"
                      alt="5, Trần Tiểu Vân,Phạm Băng Băng,Dương Mịch,triệu lệ dĩnh,Mạnh Tử Nghĩa,thư sướng,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/20-16286999140571010248568.jpg"
                      alt="6, Trần Tiểu Vân,Phạm Băng Băng,Dương Mịch,triệu lệ dĩnh,Mạnh Tử Nghĩa,thư sướng,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/22-1628699914074566981258.jpg"
                      alt="7, Trần Tiểu Vân,Phạm Băng Băng,Dương Mịch,triệu lệ dĩnh,Mạnh Tử Nghĩa,thư sướng,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/21-1628699914066852827301.jpg"
                      alt="8, Trần Tiểu Vân,Phạm Băng Băng,Dương Mịch,triệu lệ dĩnh,Mạnh Tử Nghĩa,thư sướng,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />

                    <p>
                      3. Vai diễn A Tế trong Công Chúa Đại Lý từng giúp{" "}
                      <strong>Lưu Đào</strong> khẳng định được diễn xuất thực
                      lực. Nhan sắc và tài năng của cô đã đem đến một vai a hoàn
                      đáng nhớ trên màn ảnh Hoa ngữ.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/27-1628700050074255580228.jpg"
                      alt="9, Trần Tiểu Vân,Phạm Băng Băng,Dương Mịch,triệu lệ dĩnh,Mạnh Tử Nghĩa,thư sướng,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/28-1628700050116734142743.jpg"
                      alt="10, Trần Tiểu Vân,Phạm Băng Băng,Dương Mịch,triệu lệ dĩnh,Mạnh Tử Nghĩa,thư sướng,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />

                    <p>
                      4. Trước khi trở thành ngôi sao hạng A của Cbiz,{" "}
                      <strong>Triệu Lệ Dĩnh</strong> từng chật vật với những vai
                      nhỏ trên màn ảnh. Chẳng hạn như a hoàn Văn Nhạn bên cạnh
                      nữ chính An Dĩ Hiên trong phim Toả Thanh Thu. Nhan sắc của
                      Triệu Lệ Dĩnh khi đó tuy không nổi bật nhưng lại được khen
                      ngợi nhờ nét trong sáng, đáng yêu.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/26-16287001784422020555436.png"
                      alt="11, Trần Tiểu Vân,Phạm Băng Băng,Dương Mịch,triệu lệ dĩnh,Mạnh Tử Nghĩa,thư sướng,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/23-16287001783831269671433.jpg"
                      alt="12, Trần Tiểu Vân,Phạm Băng Băng,Dương Mịch,triệu lệ dĩnh,Mạnh Tử Nghĩa,thư sướng,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/24-1628700178428466150708.png"
                      alt="13, Trần Tiểu Vân,Phạm Băng Băng,Dương Mịch,triệu lệ dĩnh,Mạnh Tử Nghĩa,thư sướng,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/25-1628700178435825782350.jpg"
                      alt="14, Trần Tiểu Vân,Phạm Băng Băng,Dương Mịch,triệu lệ dĩnh,Mạnh Tử Nghĩa,thư sướng,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />

                    <p>
                      5. Trong sự nghiệp của mình, <strong>Thư Sướng</strong>{" "}
                      từng vào vai a hoàn trong Tân Hoắc Nguyên Giáp, Tân Nữ Phò
                      Mã, Bảo Bối Hoàng Cung và Tào Tuyết Cần. Dù tạo hình đơn
                      giản nhưng trông cô vẫn rất rực rỡ.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/31-1628700379173973441564.jpeg"
                      alt="15, Trần Tiểu Vân,Phạm Băng Băng,Dương Mịch,triệu lệ dĩnh,Mạnh Tử Nghĩa,thư sướng,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/30-1628700050129326902020.jpg"
                      alt="16, Trần Tiểu Vân,Phạm Băng Băng,Dương Mịch,triệu lệ dĩnh,Mạnh Tử Nghĩa,thư sướng,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />

                    <p>
                      6. <strong>Trần Tiểu Vân</strong> nổi tiếng sau vai diễn
                      Nhị Tâm trong Hậu Cung Như Ý Truyện. Trong phim, cô là a
                      hoàn của Như Ý (Châu Tấn). Tuy không có quá nhiều đất diễn
                      nhưng Trần Tiểu Vân vẫn được khán giả yêu thích bởi nhan
                      sắc xinh đẹp và lối diễn tự nhiên.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/1-16287005943422048992425.jpg"
                      alt="17, Trần Tiểu Vân,Phạm Băng Băng,Dương Mịch,triệu lệ dĩnh,Mạnh Tử Nghĩa,thư sướng,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/3-16287005943611329492060.jpg"
                      alt="18, Trần Tiểu Vân,Phạm Băng Băng,Dương Mịch,triệu lệ dĩnh,Mạnh Tử Nghĩa,thư sướng,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/5-16287005959901569095634.jpg"
                      alt="19, Trần Tiểu Vân,Phạm Băng Băng,Dương Mịch,triệu lệ dĩnh,Mạnh Tử Nghĩa,thư sướng,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/2-1628700594353981427276.png"
                      alt="20, Trần Tiểu Vân,Phạm Băng Băng,Dương Mịch,triệu lệ dĩnh,Mạnh Tử Nghĩa,thư sướng,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />

                    <p>
                      7. Dù chỉ là một vai rất nhỏ trong Võ Thần Triệu Tử Long,
                      xuất hiện trên hình rất ít nhưng Thạch Nghiễn (
                      <strong>Mạnh Tử Nghĩa</strong>) vẫn "lọt vào mắt xanh"
                      khán giả bởi quá xinh đẹp. Trong nhiều phân cảnh, Thạch
                      Nghiễn thậm chí còn toả sáng hơn cả tiểu thư Hạ Hầu Khinh
                      Y do Yoona thủ vai.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/13-16287007446501861672726.jpg"
                      alt="21, Trần Tiểu Vân,Phạm Băng Băng,Dương Mịch,triệu lệ dĩnh,Mạnh Tử Nghĩa,thư sướng,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/7-1628700744606625363246.jpg"
                      alt="22, Trần Tiểu Vân,Phạm Băng Băng,Dương Mịch,triệu lệ dĩnh,Mạnh Tử Nghĩa,thư sướng,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/6-16287007445991073758099.jpg"
                      alt="23, Trần Tiểu Vân,Phạm Băng Băng,Dương Mịch,triệu lệ dĩnh,Mạnh Tử Nghĩa,thư sướng,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/8-1628700744643741599432.jpg"
                      alt="24, Trần Tiểu Vân,Phạm Băng Băng,Dương Mịch,triệu lệ dĩnh,Mạnh Tử Nghĩa,thư sướng,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
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
