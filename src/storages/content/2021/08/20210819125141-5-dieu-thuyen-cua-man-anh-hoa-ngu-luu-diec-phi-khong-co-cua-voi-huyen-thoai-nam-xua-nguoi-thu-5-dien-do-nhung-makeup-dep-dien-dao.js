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
"timestamp": '19/08/2021 12:51 PM',
"title": '5 Điêu Thuyền của màn ảnh Hoa ngữ: Lưu Diệc Phi không có cửa với huyền thoại năm xưa, người thứ 5 diễn đơ nhưng makeup đẹp điên đảo',
"description": 'Điện ảnh Hoa ngữ ghi nhận loạt diễn viên từng vào vai Điêu Thuyền, mỗi người toát lên một khí chất khiến khán giả khó lòng lãng quên.',
"src": 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/15/photo-1-16289989254341697846959.gif',
"alt": 'Điêu Thuyền,Lưu Diệc Phi,cổ lực na trát,trần hồng,đổng tuyền,trần hảo,tứ đại mỹ nhân,Tam Quốc Diễn Nghĩa,tạo hình cổ trang,Mỹ nhân cổ trang,người đẹp cổ trang,sao Hoa ngữ,star style,',
"category": 'stars',
"date": '19/08/2021',
"time": '12:51 PM',
"link": '/5-dieu-thuyen-cua-man-anh-hoa-ngu-luu-diec-phi-khong-co-cua-voi-huyen-thoai-nam-xua-nguoi-thu-5-dien-do-nhung-makeup-dep-dien-dao',
"zcomponent": 'page_20210819125141',
"filepath": './20210819125141-5-dieu-thuyen-cua-man-anh-hoa-ngu-luu-diec-phi-khong-co-cua-voi-huyen-thoai-nam-xua-nguoi-thu-5-dien-do-nhung-makeup-dep-dien-dao.js'
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
  "5 Điêu Thuyền của màn ảnh Hoa ngữ: Lưu Diệc Phi không có cửa với huyền thoại năm xưa, người thứ 5 diễn đơ nhưng makeup đẹp điên đảo";
const author = "CHÚ CÁ TRÊ X CHIM VÀNH KHEN,";
const source = "Trí Thức Trẻ";
const timestamp = "19/08/2021 12:51 PM";
const description =
  "Điện ảnh Hoa ngữ ghi nhận loạt diễn viên từng vào vai Điêu Thuyền, mỗi người toát lên một khí chất khiến khán giả khó lòng lãng quên.";
const link =
  "5-dieu-thuyen-cua-man-anh-hoa-ngu-luu-diec-phi-khong-co-cua-voi-huyen-thoai-nam-xua-nguoi-thu-5-dien-do-nhung-makeup-dep-dien-dao";
const tagparam = [
  "Điêu Thuyền",
  "Lưu Diệc Phi",
  "cổ lực na trát",
  "trần hồng",
  "đổng tuyền",
  "trần hảo",
  "tứ đại mỹ nhân",
  "Tam Quốc Diễn Nghĩa",
  "tạo hình cổ trang",
  "Mỹ nhân cổ trang",
  "người đẹp cổ trang",
  "sao Hoa ngữ",
  "star style",
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

export default function page_20210819125141() {
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
                      Điện ảnh Hoa ngữ ghi nhận loạt diễn viên từng vào vai{" "}
                      <strong>Điêu Thuyền</strong>, mỗi người toát lên một khí
                      chất khiến khán giả khó lòng lãng quên.
                    </p>
                    <h5>
                      <strong>Trần Hồng</strong> -{" "}
                      <strong>Tam Quốc Diễn Nghĩa</strong> (1994) & Lã Bố Và{" "}
                      <strong>Điêu Thuyền</strong> (2003)
                    </h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/15/photo-1-16289989254341697846959.gif"
                      alt="1, Điêu Thuyền,Lưu Diệc Phi,cổ lực na trát,trần hồng,đổng tuyền,trần hảo,tứ đại mỹ nhân,Tam Quốc Diễn Nghĩa,tạo hình cổ trang,Mỹ nhân cổ trang,người đẹp cổ trang,sao Hoa ngữ,star style,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/15/photo-1-16289987995411881512683.jpg"
                      alt="2, Điêu Thuyền,Lưu Diệc Phi,cổ lực na trát,trần hồng,đổng tuyền,trần hảo,tứ đại mỹ nhân,Tam Quốc Diễn Nghĩa,tạo hình cổ trang,Mỹ nhân cổ trang,người đẹp cổ trang,sao Hoa ngữ,star style,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/15/photo-1-1628998764211615295870.jpeg"
                      alt="3, Điêu Thuyền,Lưu Diệc Phi,cổ lực na trát,trần hồng,đổng tuyền,trần hảo,tứ đại mỹ nhân,Tam Quốc Diễn Nghĩa,tạo hình cổ trang,Mỹ nhân cổ trang,người đẹp cổ trang,sao Hoa ngữ,star style,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/15/photo-1-16289988052341283320764.jpg"
                      alt="4, Điêu Thuyền,Lưu Diệc Phi,cổ lực na trát,trần hồng,đổng tuyền,trần hảo,tứ đại mỹ nhân,Tam Quốc Diễn Nghĩa,tạo hình cổ trang,Mỹ nhân cổ trang,người đẹp cổ trang,sao Hoa ngữ,star style,"
                      note=""
                    />

                    <p>
                      <strong>Trần Hồng</strong> được khán giả ưu ái phong danh
                      "<strong>Điêu Thuyền</strong> đẹp nhất". Nữ diễn viên sở
                      hữu nét đẹp mảnh dẻ, trong sáng, đường nét nhỏ nhắn, hài
                      hoà. Ánh mắt người đẹp như biết nói, luôn long lanh ngấn
                      nước, khiến người người rung động. 2 bộ phim cách nhau 9
                      năm song vẻ đẹp của Trần Hồng gần như chẳng thay đổi là
                      mấy.
                    </p>
                    <h5>
                      <strong>Trần Hảo</strong> - Tân{" "}
                      <strong>Tam Quốc Diễn Nghĩa</strong> (2010)
                    </h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/15/photo-1-16289992852711624559456.jpg"
                      alt="5, Điêu Thuyền,Lưu Diệc Phi,cổ lực na trát,trần hồng,đổng tuyền,trần hảo,tứ đại mỹ nhân,Tam Quốc Diễn Nghĩa,tạo hình cổ trang,Mỹ nhân cổ trang,người đẹp cổ trang,sao Hoa ngữ,star style,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/15/photo-1-162899929953068965624.jpg"
                      alt="6, Điêu Thuyền,Lưu Diệc Phi,cổ lực na trát,trần hồng,đổng tuyền,trần hảo,tứ đại mỹ nhân,Tam Quốc Diễn Nghĩa,tạo hình cổ trang,Mỹ nhân cổ trang,người đẹp cổ trang,sao Hoa ngữ,star style,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/15/photo-1-16289992542801437453124.jpg"
                      alt="7, Điêu Thuyền,Lưu Diệc Phi,cổ lực na trát,trần hồng,đổng tuyền,trần hảo,tứ đại mỹ nhân,Tam Quốc Diễn Nghĩa,tạo hình cổ trang,Mỹ nhân cổ trang,người đẹp cổ trang,sao Hoa ngữ,star style,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/15/photo-1-16289992613921843477548.jpeg"
                      alt="8, Điêu Thuyền,Lưu Diệc Phi,cổ lực na trát,trần hồng,đổng tuyền,trần hảo,tứ đại mỹ nhân,Tam Quốc Diễn Nghĩa,tạo hình cổ trang,Mỹ nhân cổ trang,người đẹp cổ trang,sao Hoa ngữ,star style,"
                      note=""
                    />

                    <p>
                      Danh hiệu "<strong>Điêu Thuyền</strong> duyên dáng nhất"
                      có lẽ phù hợp nhất với cái tên <strong>Trần Hảo</strong>.
                      Khác với đàn chị <strong>Trần Hồng</strong>, Trần Hảo có
                      đôi mắt lanh lợi tinh anh, lúng liếng ẩn tình. Cô sở hữu
                      hàng mày cong mảnh cùng làn môi tươi tắn. Mọi cử chỉ, tác
                      phong của cô trong phim luôn đượm tình, thướt tha, hết mực
                      duyên dáng.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p></p>
                    <h5>
                      <strong>Lưu Diệc Phi</strong> - Đổng Tước Đài
                    </h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/15/2021-08-15-191546-16290297666171471904739.jpg"
                      alt="9, Điêu Thuyền,Lưu Diệc Phi,cổ lực na trát,trần hồng,đổng tuyền,trần hảo,tứ đại mỹ nhân,Tam Quốc Diễn Nghĩa,tạo hình cổ trang,Mỹ nhân cổ trang,người đẹp cổ trang,sao Hoa ngữ,star style,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/15/2021-08-15-191550-16290297667451206848111.jpg"
                      alt="10, Điêu Thuyền,Lưu Diệc Phi,cổ lực na trát,trần hồng,đổng tuyền,trần hảo,tứ đại mỹ nhân,Tam Quốc Diễn Nghĩa,tạo hình cổ trang,Mỹ nhân cổ trang,người đẹp cổ trang,sao Hoa ngữ,star style,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/15/photo-1-1628999634886767769634.jpg"
                      alt="11, Điêu Thuyền,Lưu Diệc Phi,cổ lực na trát,trần hồng,đổng tuyền,trần hảo,tứ đại mỹ nhân,Tam Quốc Diễn Nghĩa,tạo hình cổ trang,Mỹ nhân cổ trang,người đẹp cổ trang,sao Hoa ngữ,star style,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/15/photo-1-16289996646261963137539.jpg"
                      alt="12, Điêu Thuyền,Lưu Diệc Phi,cổ lực na trát,trần hồng,đổng tuyền,trần hảo,tứ đại mỹ nhân,Tam Quốc Diễn Nghĩa,tạo hình cổ trang,Mỹ nhân cổ trang,người đẹp cổ trang,sao Hoa ngữ,star style,"
                      note=""
                    />

                    <p>
                      Trong Đổng Tước Đài, <strong>Lưu Diệc Phi</strong> đảm
                      trách 2 vai: <strong>Điêu Thuyền</strong> và con gái Linh
                      Thư. Cô được xem là hiện thân của một "Điêu Thuyền u sầu".
                      Tạo hình của nhân vật này vô cùng giản dị, với bộ y phục
                      đen trắng mộc mạc, không họa tiết; gương mặt trang điểm
                      nhợt nhạt cùng kiểu tóc để xoã tự nhiên. Ngược lại, vai
                      Linh Thư nổi bật trong màu áo đỏ tươi.
                    </p>
                    <h5>
                      <strong>Đổng Tuyền</strong> - Tam Quốc Cơ Mật (2018)
                    </h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/15/photo-1-1629000115353488155332.jpg"
                      alt="13, Điêu Thuyền,Lưu Diệc Phi,cổ lực na trát,trần hồng,đổng tuyền,trần hảo,tứ đại mỹ nhân,Tam Quốc Diễn Nghĩa,tạo hình cổ trang,Mỹ nhân cổ trang,người đẹp cổ trang,sao Hoa ngữ,star style,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/15/photo-1-16290002131131761175921.jpg"
                      alt="14, Điêu Thuyền,Lưu Diệc Phi,cổ lực na trát,trần hồng,đổng tuyền,trần hảo,tứ đại mỹ nhân,Tam Quốc Diễn Nghĩa,tạo hình cổ trang,Mỹ nhân cổ trang,người đẹp cổ trang,sao Hoa ngữ,star style,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/15/photo-1-16290001091021833058520.jpeg"
                      alt="15, Điêu Thuyền,Lưu Diệc Phi,cổ lực na trát,trần hồng,đổng tuyền,trần hảo,tứ đại mỹ nhân,Tam Quốc Diễn Nghĩa,tạo hình cổ trang,Mỹ nhân cổ trang,người đẹp cổ trang,sao Hoa ngữ,star style,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/15/photo-1-16290001025462111204395.jpg"
                      alt="16, Điêu Thuyền,Lưu Diệc Phi,cổ lực na trát,trần hồng,đổng tuyền,trần hảo,tứ đại mỹ nhân,Tam Quốc Diễn Nghĩa,tạo hình cổ trang,Mỹ nhân cổ trang,người đẹp cổ trang,sao Hoa ngữ,star style,"
                      note=""
                    />

                    <p>
                      Tuy chỉ là vai phụ song <strong>Đổng Tuyền</strong> lại
                      được khán giả đón nhận trong Tam Quốc Cơ Mật nhờ hình
                      tượng "<strong>Điêu Thuyền</strong> dịu dàng". Người đẹp
                      sinh năm 1982 gây thương nhớ với vẻ đẹp trong trắng, mong
                      manh. Ánh mắt, nụ cười của cô toát lên vẻ hiền lành, thục
                      lương. Y phục của nhân vật rất giản dị với những gam màu
                      cơ bản đen, be, xám cùng hoạ tiết tối giản.
                    </p>
                    <h5>
                      <strong>Cổ Lực Na Trát</strong> - Võ Thần Triệu Tử Long
                      (2016) & Chân Tam Quốc Vô Song (2021)
                    </h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/15/photo-1-16290003916061298929308.gif"
                      alt="17, Điêu Thuyền,Lưu Diệc Phi,cổ lực na trát,trần hồng,đổng tuyền,trần hảo,tứ đại mỹ nhân,Tam Quốc Diễn Nghĩa,tạo hình cổ trang,Mỹ nhân cổ trang,người đẹp cổ trang,sao Hoa ngữ,star style,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/15/photo-1-16290005498431868681260.png"
                      alt="18, Điêu Thuyền,Lưu Diệc Phi,cổ lực na trát,trần hồng,đổng tuyền,trần hảo,tứ đại mỹ nhân,Tam Quốc Diễn Nghĩa,tạo hình cổ trang,Mỹ nhân cổ trang,người đẹp cổ trang,sao Hoa ngữ,star style,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/15/photo-1-1629000477917866766988.jpg"
                      alt="19, Điêu Thuyền,Lưu Diệc Phi,cổ lực na trát,trần hồng,đổng tuyền,trần hảo,tứ đại mỹ nhân,Tam Quốc Diễn Nghĩa,tạo hình cổ trang,Mỹ nhân cổ trang,người đẹp cổ trang,sao Hoa ngữ,star style,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/15/photo-1-16290004023051501830912.gif"
                      alt="20, Điêu Thuyền,Lưu Diệc Phi,cổ lực na trát,trần hồng,đổng tuyền,trần hảo,tứ đại mỹ nhân,Tam Quốc Diễn Nghĩa,tạo hình cổ trang,Mỹ nhân cổ trang,người đẹp cổ trang,sao Hoa ngữ,star style,"
                      note=""
                    />

                    <p>
                      <strong>Cổ Lực Na Trát</strong> bị đánh giá là phiên bản "
                      <strong>Điêu Thuyền</strong> vô hồn" do diễn xuất "í ẹ".
                      Tuy vậy, nàng mỹ nữ Tân Cương vẫn được tha thứ vì vẻ đẹp
                      trong sáng, không vướng bụi trần. Có lẽ gương mặt trái
                      xoan, ánh nhìn non nớt cùng góc nghiêng đẹp "điếng hồn" là
                      những tiêu chí giúp cô được lựa chọn vào vai một đại mỹ
                      nhân nổi tiếng lịch sử. Ngoài ra, phải công nhận rằng kiểu
                      makeup sương sương cũng hợp với gương mặt cô và tôn hết
                      được những đường nét của Cổ Lực Na Trát.{" "}
                    </p>
                    <p>Nguồn: Tổng hợp</p>
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
