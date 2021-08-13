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
"timestamp": '11/08/2021 10:54 AM',
"title": 'Tứ đại mỹ nhân trên màn ảnh Hoa ngữ: "Vương Chiêu Quân" Dương Mịch có lép vế trước loạt nhan sắc huyền thoại?',
"description": 'Nhan sắc của tứ đại mỹ nhân trên màn ảnh Hoa ngữ thu hút đông đảo sự chú ý của netizen.',
"src": 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/8/photo-1-15700670484611852808998-1628426119499114659797.jpg',
"alt": 'tứ đại mỹ nhân,sao Trung,sao Hoa ngữ,Dương Mịch,Tưởng Cần Cần,trần hồng,Lâm Phương Bình,star style,tạo hình nhân vật,tạo hình trong phim,',
"category": 'stars',
"date": '11/08/2021',
"time": '10:54 AM',
"link": '/tu-dai-my-nhan-tren-man-anh-hoa-ngu-vuong-chieu-quan-duong-mich-co-lep-ve-truoc-loat-nhan-sac-huyen-thoai',
"zcomponent": 'page_20210811105414',
"filepath": './20210811105414-tu-dai-my-nhan-tren-man-anh-hoa-ngu-vuong-chieu-quan-duong-mich-co-lep-ve-truoc-loat-nhan-sac-huyen-thoai.js'
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
  'Tứ đại mỹ nhân trên màn ảnh Hoa ngữ: "Vương Chiêu Quân" Dương Mịch có lép vế trước loạt nhan sắc huyền thoại?';
const author = "NOSTALGIA,";
const source = "Doanh nghiệp và Tiếp thị";
const timestamp = "11/08/2021 10:54 AM";
const description =
  "Nhan sắc của tứ đại mỹ nhân trên màn ảnh Hoa ngữ thu hút đông đảo sự chú ý của netizen.";
const link =
  "tu-dai-my-nhan-tren-man-anh-hoa-ngu-vuong-chieu-quan-duong-mich-co-lep-ve-truoc-loat-nhan-sac-huyen-thoai";
const tagparam = [
  "tứ đại mỹ nhân",
  "sao Trung",
  "sao Hoa ngữ",
  "Dương Mịch",
  "Tưởng Cần Cần",
  "trần hồng",
  "Lâm Phương Bình",
  "star style",
  "tạo hình nhân vật",
  "tạo hình trong phim",
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

export default function page_20210811105414() {
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
                      <strong>Tứ đại mỹ nhân</strong> Trung Quốc gồm Tây Thi,
                      Điêu Thuyền, Vương Chiêu Quân và Dương Ngọc Hoàn vẫn luôn
                      là một trong những giai thoại lôi cuốn và gây tò mò nhất
                      đối với đông đảo người có hứng thú với lịch sử nước này.
                      Cuộc đời của họ đều đã được dựng thành phim, vậy nếu bạn
                      tò mò ai là người được chọn mặt gửi vàng thì kéo xuống
                      dưới để đọc nhé!
                    </p>
                    <p></p>
                    <p>
                      Đệ nhất mỹ nhân thời Xuân Thu, được xem là người đứng đầu{" "}
                      <strong>tứ đại mỹ nhân</strong> thời trung cổ là những gì
                      người ta miêu tả về Tây Thi. Tương truyền, nàng sở hữu
                      dung mạo mà cá khi thấy cũng phải ngừng bơi, hổ thẹn lặn
                      xuống đáy.{" "}
                    </p>
                    <p>
                      Dù có rất nhiều mỹ nhân từng đảm nhận vai diễn Tây Thi
                      nhưng người chiếm được danh xưng "Tây Thi trên màn ảnh đẹp
                      nhất" lại thuộc về <strong>Tưởng Cần Cần</strong> (1995).
                      Cô sở hữu nét đẹp và phong thái cổ điển, thanh tú, giống
                      với những gì sử sách mô tả về Tây Thi nhất. Chẳng cần trâm
                      cài, phục sức hay trang điểm cầu kỳ, Tưởng Cần Cần vẫn tỏa
                      ra khí chất của một đại mỹ nhân huyền thoại vạn người mê.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/8/photo-1-15700670484611852808998-1628426119499114659797.jpg"
                      alt="1, tứ đại mỹ nhân,sao Trung,sao Hoa ngữ,Dương Mịch,Tưởng Cần Cần,trần hồng,Lâm Phương Bình,star style,tạo hình nhân vật,tạo hình trong phim,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/8/76feb0dd-e0d9-4426-aa68-ecc9e0cb7266-1628426119475955009372.jpg"
                      alt="2, tứ đại mỹ nhân,sao Trung,sao Hoa ngữ,Dương Mịch,Tưởng Cần Cần,trần hồng,Lâm Phương Bình,star style,tạo hình nhân vật,tạo hình trong phim,"
                      note=""
                    />
                    <p>
                      Năm 18 tuổi, <strong>Dương Mịch</strong> ghi dấu ấn khi
                      đảm nhiệm vai Vương Chiêu Quân - một trong{" "}
                      <strong>tứ đại mỹ nhân</strong> của Trung Quốc thời Hán.
                      Nếu như nhan sắc của Tây Thi được ví như "trầm ngư" (cá
                      lặn) thì dung nhan của Vương Chiêu Quân có khả năng làm
                      "lạc nhạn" (chim sa).
                    </p>
                    <p>
                      Tuổi đời còn trẻ nhưng khi phải trang điểm già dặn với son
                      môi đậm, mày cong, mắt trầm, <strong>Dương Mịch</strong>{" "}
                      vẫn thể hiện được khí chất kiều diễm của Vương Chiêu Quân.
                      Tạo hình mặc váy, để lộ vai trần, được tô điểm với loạt
                      phụ kiện cầu kỳ giúp Dương Mịch tỏa ra thần thái yêu mị,
                      mê người khiến khán giả phải xuýt xoa không ngừng.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/8/base64-1628427013224869983345.png"
                      alt="3, tứ đại mỹ nhân,sao Trung,sao Hoa ngữ,Dương Mịch,Tưởng Cần Cần,trần hồng,Lâm Phương Bình,star style,tạo hình nhân vật,tạo hình trong phim,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/8/fe33-isehnnk6883233-1587011841599413228503-1628426683583809439822.jpg"
                      alt="4, tứ đại mỹ nhân,sao Trung,sao Hoa ngữ,Dương Mịch,Tưởng Cần Cần,trần hồng,Lâm Phương Bình,star style,tạo hình nhân vật,tạo hình trong phim,"
                      note=""
                    />

                    <RelationNewsInPage category={category} />
                    <p>
                      Dương Ngọc Hoàn, hay còn được gọi là Dương Quý Phi được
                      cho là khắc họa rõ nét nhất qua màn thể hiện của nữ diễn
                      viên <strong>Lâm Phương Bình</strong>. Dưới thời nhà
                      Đường, phụ nữ chỉ được xem là đẹp khi có thân hình tròn
                      trịa, đẫy đà. Vì vậy, Lâm Phương Bình phải tăng thêm 15kg
                      để có thể hóa thân vào vai diễn trọn vẹn nhất.{" "}
                    </p>
                    <p>
                      Bên cạnh nhan sắc diễm lệ, đôi mắt lúng liếng, bờ môi căng
                      mọng, thì phục trang quyến rũ, hở một khoảng lớn ở trước
                      ngực cũng giúp <strong>Lâm Phương Bình</strong> truyền tải
                      thành công hình ảnh Dương Quý Phi lả lơi, gợi cảm. Dù sau
                      đó Phạm Băng Băng cũng rất thành công với vai diễn này,
                      song Lâm Phương Bình vẫn là mỹ nhân diễn vai Dương Quý Phi
                      thuyết phục nhất trong lòng khán giả khi xét cả sắc lẫn
                      tài.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/8/3d32b27f-7847-4e93-87fc-1d2711ddd829-1628427070214167122651.jpeg"
                      alt="5, tứ đại mỹ nhân,sao Trung,sao Hoa ngữ,Dương Mịch,Tưởng Cần Cần,trần hồng,Lâm Phương Bình,star style,tạo hình nhân vật,tạo hình trong phim,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/8/0bc10242-10d5-480b-b4fd-66ee4e084466-1628427070093816397613.jpeg"
                      alt="6, tứ đại mỹ nhân,sao Trung,sao Hoa ngữ,Dương Mịch,Tưởng Cần Cần,trần hồng,Lâm Phương Bình,star style,tạo hình nhân vật,tạo hình trong phim,"
                      note=""
                    />

                    <p>
                      Mỹ nhân được netizen ca ngợi đẹp hơn cả Vương Tổ Hiền
                      chính là nữ diễn viên <strong>Trần Hồng</strong>. Năm
                      1994, bà tham gia bộ phim Tam Quốc Diễn Nghĩa với vai diễn
                      Điêu Thuyền. Nhờ màn thể hiện nhân vật xuất sắc, người hâm
                      mộ hào phóng phong cho bà danh xưng "Điêu Thuyền đẹp nhất
                      màn ảnh Hoa ngữ".{" "}
                    </p>
                    <p>
                      Không son đậm, mắt trầm, "Điêu Thuyền"{" "}
                      <strong>Trần Hồng</strong> lại có lối trang điểm nhẹ
                      nhàng, mong manh hơn với son môi, phấn má và màu mắt hồng
                      nhạt, gợi hình ảnh một mỹ nhân yếu đuối, chưa thấu sự đời
                      để dễ dàng lừa được trái tim nam nhân. Dù bới tóc cao hay
                      thả tóc, nhan sắc của Trần Hồng đều khiến người ta rung
                      động không thôi.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/8/base64-1628427124730553904190.png"
                      alt="7, tứ đại mỹ nhân,sao Trung,sao Hoa ngữ,Dương Mịch,Tưởng Cần Cần,trần hồng,Lâm Phương Bình,star style,tạo hình nhân vật,tạo hình trong phim,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/8/base64-16284271372571696583152.png"
                      alt="8, tứ đại mỹ nhân,sao Trung,sao Hoa ngữ,Dương Mịch,Tưởng Cần Cần,trần hồng,Lâm Phương Bình,star style,tạo hình nhân vật,tạo hình trong phim,"
                      note=""
                    />

                    <p>Ảnh: Sưu tầm</p>
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
