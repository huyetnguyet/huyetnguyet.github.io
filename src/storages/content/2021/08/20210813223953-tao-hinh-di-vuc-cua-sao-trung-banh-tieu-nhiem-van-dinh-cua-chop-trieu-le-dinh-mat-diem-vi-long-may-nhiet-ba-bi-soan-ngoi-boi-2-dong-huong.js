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
"timestamp": '13/08/2021 10:39 PM',
"title": 'Tạo hình dị vực của sao Trung: Bành Tiểu Nhiễm vẫn "đỉnh của chóp", Triệu Lệ Dĩnh mất điểm vì lông mày, Nhiệt Ba bị soán ngôi bởi 2 đồng hương',
"description": 'Dàn mỹ nhân của Cbiz trông thế nào trong tạo hình dị vực?',
"src": 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/12/banhtieunhiem4-16178756739661902333152-16287582431351905456646.jpg',
"alt": 'sao Trung,sao Hoa ngữ,Cbiz,dị vực,tạo hình dị vực,thời trang trong phim,Địch Lệ Nhiệt Ba,đồng lệ á,triệu lệ dĩnh,Angela Baby,Lưu Thi Thi,Lê Tư,Bành Tiểu Nhiễm,star style,',
"category": 'stars',
"date": '13/08/2021',
"time": '10:39 PM',
"link": '/tao-hinh-di-vuc-cua-sao-trung-banh-tieu-nhiem-van-dinh-cua-chop-trieu-le-dinh-mat-diem-vi-long-may-nhiet-ba-bi-soan-ngoi-boi-2-dong-huong',
"zcomponent": 'page_20210813223953',
"filepath": './20210813223953-tao-hinh-di-vuc-cua-sao-trung-banh-tieu-nhiem-van-dinh-cua-chop-trieu-le-dinh-mat-diem-vi-long-may-nhiet-ba-bi-soan-ngoi-boi-2-dong-huong.js'
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
  'Tạo hình dị vực của sao Trung: Bành Tiểu Nhiễm vẫn "đỉnh của chóp", Triệu Lệ Dĩnh mất điểm vì lông mày, Nhiệt Ba bị soán ngôi bởi 2 đồng hương';
const author = "PHOEBE,";
const source = "Doanh nghiệp và Tiếp thị";
const timestamp = "13/08/2021 10:39 PM";
const description = "Dàn mỹ nhân của Cbiz trông thế nào trong tạo hình dị vực?";
const link =
  "tao-hinh-di-vuc-cua-sao-trung-banh-tieu-nhiem-van-dinh-cua-chop-trieu-le-dinh-mat-diem-vi-long-may-nhiet-ba-bi-soan-ngoi-boi-2-dong-huong";
const tagparam = [
  "sao Trung",
  "sao Hoa ngữ",
  "Cbiz",
  "dị vực",
  "tạo hình dị vực",
  "thời trang trong phim",
  "Địch Lệ Nhiệt Ba",
  "đồng lệ á",
  "triệu lệ dĩnh",
  "Angela Baby",
  "Lưu Thi Thi",
  "Lê Tư",
  "Bành Tiểu Nhiễm",
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

export default function page_20210813223953() {
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
                    <h5>
                      Dàn mỹ nhân của <strong>Cbiz</strong> trông thế nào trong
                      tạo hình <strong>dị vực</strong>?
                    </h5>

                    <p>
                      Mảng phim cổ trang của Trung Quốc không chỉ nổi tiếng nhờ
                      nội dung hấp dẫn, gợi mở tò mò về lịch sử hoành tráng của
                      quốc gia này mà còn vì phục trang cầu kỳ, đẹp mắt. Bên
                      cạnh những tạo hình cổ trang thông thường, hình ảnh các mỹ
                      nhân trong những bộ trang phục <strong>dị vực</strong>{" "}
                      cũng cực kỳ cuốn hút, dưới đây là những mỹ nhân để lại ấn
                      tượng sâu sắc trong tạo hình này.
                    </p>
                    <h5>Bành Tiểu Nhiễm</h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/12/banhtieunhiem4-16178756739661902333152-16287582431351905456646.jpg"
                      alt="1, sao Trung,sao Hoa ngữ,Cbiz,dị vực,tạo hình dị vực,thời trang trong phim,Địch Lệ Nhiệt Ba,đồng lệ á,triệu lệ dĩnh,Angela Baby,Lưu Thi Thi,Lê Tư,Bành Tiểu Nhiễm,star style,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/12/52426857529098130918556505237438482874368n-1628758242733244696967.jpg"
                      alt="2, sao Trung,sao Hoa ngữ,Cbiz,dị vực,tạo hình dị vực,thời trang trong phim,Địch Lệ Nhiệt Ba,đồng lệ á,triệu lệ dĩnh,Angela Baby,Lưu Thi Thi,Lê Tư,Bành Tiểu Nhiễm,star style,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/13/photo-1-1628867826080977193002.gif"
                      alt="21, sao Trung,sao Hoa ngữ,Cbiz,dị vực,tạo hình dị vực,thời trang trong phim,Địch Lệ Nhiệt Ba,đồng lệ á,triệu lệ dĩnh,Angela Baby,Lưu Thi Thi,Lê Tư,Bành Tiểu Nhiễm,star style,"
                      note=""
                    />

                    <p>
                      Nói đến mỹ nhân có tạo hình cổ trang hay{" "}
                      <strong>dị vực</strong> đẹp nhất mà bỏ qua{" "}
                      <strong>Bành Tiểu Nhiễm</strong> thì sẽ là thiếu sót lớn.
                      Vào vai nàng công chúa Tây Lương trong bộ phim Đông Cung,
                      Bành Tiểu Nhiễm khiến người ta thổn thức trước dung mạo
                      xinh đẹp với bộ y phục màu đỏ, khăn choàng che mặt, phụ
                      kiện đeo đầu và các trang sức cùng màu. Tới tận nay, đây
                      cũng là vai diễn và hình tượng đáng nhớ nhất trong sự
                      nghiệp của nữ diễn viên.{" "}
                    </p>
                    <h5>Địch Lệ Nhiệt Ba</h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/12/1338529132321658283580246768258385495758561o-1617898425075461306079-16287583035161046543515.jpeg"
                      alt="3, sao Trung,sao Hoa ngữ,Cbiz,dị vực,tạo hình dị vực,thời trang trong phim,Địch Lệ Nhiệt Ba,đồng lệ á,triệu lệ dĩnh,Angela Baby,Lưu Thi Thi,Lê Tư,Bành Tiểu Nhiễm,star style,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/12/nhiet-ba-8092-1609434009-16287583036261695262444.jpg"
                      alt="4, sao Trung,sao Hoa ngữ,Cbiz,dị vực,tạo hình dị vực,thời trang trong phim,Địch Lệ Nhiệt Ba,đồng lệ á,triệu lệ dĩnh,Angela Baby,Lưu Thi Thi,Lê Tư,Bành Tiểu Nhiễm,star style,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/12/bca56dbc47feaea0f7ef-16287583035681850406275.jpg"
                      alt="5, sao Trung,sao Hoa ngữ,Cbiz,dị vực,tạo hình dị vực,thời trang trong phim,Địch Lệ Nhiệt Ba,đồng lệ á,triệu lệ dĩnh,Angela Baby,Lưu Thi Thi,Lê Tư,Bành Tiểu Nhiễm,star style,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/12/nun1618062475-16287583038191677930458.gif"
                      alt="6, sao Trung,sao Hoa ngữ,Cbiz,dị vực,tạo hình dị vực,thời trang trong phim,Địch Lệ Nhiệt Ba,đồng lệ á,triệu lệ dĩnh,Angela Baby,Lưu Thi Thi,Lê Tư,Bành Tiểu Nhiễm,star style,"
                      note=""
                    />

                    <p>
                      Ít ai biết <strong>Địch Lệ Nhiệt Ba</strong> đã từng tốt
                      nghiệp và trở thành diễn viên múa của Đoàn ca múa nhạc Tân
                      Cương, vì vậy phần trình diễn múa chào mừng năm mới thuyết
                      phục người xem cả phần nhìn lẫn phần thể hiện. Cô diện
                      trang phục dân tộc màu đỏ, điểm xuyết với những vòng dây
                      đính quanh eo và dưới cổ tay, tạo hiệu ứng huyền ảo mỗi
                      khi di chuyển. Màn trình diễn còn thêm phần ấn tượng và bí
                      ẩn nhờ chiếc mạng che mặt thêu đính lấp lánh.{" "}
                    </p>
                    <h5>Angela Baby</h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/12/f40fa8d0ff7c4263307dabba5bbdb0bd-16287583342481432586248.jpg"
                      alt="7, sao Trung,sao Hoa ngữ,Cbiz,dị vực,tạo hình dị vực,thời trang trong phim,Địch Lệ Nhiệt Ba,đồng lệ á,triệu lệ dĩnh,Angela Baby,Lưu Thi Thi,Lê Tư,Bành Tiểu Nhiễm,star style,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/12/c5d26d206a82d940c9a40ef133a98b2b-1585113420188265461391-16287583341991777626084.jpg"
                      alt="8, sao Trung,sao Hoa ngữ,Cbiz,dị vực,tạo hình dị vực,thời trang trong phim,Địch Lệ Nhiệt Ba,đồng lệ á,triệu lệ dĩnh,Angela Baby,Lưu Thi Thi,Lê Tư,Bành Tiểu Nhiễm,star style,"
                      note=""
                    />

                    <p>
                      Là một mỹ nhân Tân Cương, lẽ đương nhiên{" "}
                      <strong>Địch Lệ Nhiệt Ba</strong> cực kỳ hợp với tạo hình{" "}
                      <strong>dị vực</strong>. Trước đó, cô đã gây sốt trong
                      trang phục dân tộc ở bộ phim Trường Ca Hành. Tuy chỉ diện
                      trang phục và mạng che mặt màu xanh trầm khá đơn giản,
                      nhưng đôi mắt to tròn đầy thu hút của nữ diễn viên cũng
                      khiến người ta phải trầm trồ không thôi.{" "}
                    </p>
                    <RelationNewsInPage category={category} />

                    <p>
                      Những tưởng chỉ hợp với hình ảnh hiện đại, song{" "}
                      <strong>Angela Baby</strong> đã chứng minh cô hoàn toàn có
                      thể chinh phục nhiều phong cách khác nhau nhờ nhan sắc
                      xinh đẹp của mình. Tạo hình của cô còn gợi cho khán giả về
                      những cô công chúa Ba Tư thời xưa, phục sức điểm xuyết sắc
                      vàng cũng giúp nữ diễn viên toát ra vài phần vương giả và
                      sang trọng.
                    </p>

                    <h5>Lê Tư</h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/12/f2-1606672534574756587300-1628758363199648980778.jpeg"
                      alt="9, sao Trung,sao Hoa ngữ,Cbiz,dị vực,tạo hình dị vực,thời trang trong phim,Địch Lệ Nhiệt Ba,đồng lệ á,triệu lệ dĩnh,Angela Baby,Lưu Thi Thi,Lê Tư,Bành Tiểu Nhiễm,star style,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/12/letu4-1617875104128273737125-16287583632801069061395.jpg"
                      alt="10, sao Trung,sao Hoa ngữ,Cbiz,dị vực,tạo hình dị vực,thời trang trong phim,Địch Lệ Nhiệt Ba,đồng lệ á,triệu lệ dĩnh,Angela Baby,Lưu Thi Thi,Lê Tư,Bành Tiểu Nhiễm,star style,"
                      note=""
                    />

                    <p>
                      Dù có rất nhiều mỹ nhân vào vai Triệu Mẫn trong Ỷ Thiên Đồ
                      Long Ký nhưng cư dân mạng nhất mực đồng tình rằng không ai
                      có thể vượt qua <strong>Lê Tư</strong>. Dù phục sức không
                      kỳ công và ấn tượng như các mỹ nhân hiện đại, song Lê Tư
                      vẫn rất tỏa sáng trong vai diễn nàng công chúa Triệu Mẫn
                      cao sang và quyền quý.
                    </p>

                    <h5>Triệu Lệ Dĩnh</h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/12/trang-phuc-11-16287583992851515342434.jpg"
                      alt="11, sao Trung,sao Hoa ngữ,Cbiz,dị vực,tạo hình dị vực,thời trang trong phim,Địch Lệ Nhiệt Ba,đồng lệ á,triệu lệ dĩnh,Angela Baby,Lưu Thi Thi,Lê Tư,Bành Tiểu Nhiễm,star style,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/12/chemata-16287583991591388408365.gif"
                      alt="12, sao Trung,sao Hoa ngữ,Cbiz,dị vực,tạo hình dị vực,thời trang trong phim,Địch Lệ Nhiệt Ba,đồng lệ á,triệu lệ dĩnh,Angela Baby,Lưu Thi Thi,Lê Tư,Bành Tiểu Nhiễm,star style,"
                      note=""
                    />

                    <p>
                      Thành công nhờ những vai diễn nũng nịu, dễ thương nhưng{" "}
                      <strong>Triệu Lệ Dĩnh</strong> cũng không ít lần thử sức
                      với những vai diễn mạnh mẽ, gai góc. Cô từng đảm nhận vai
                      mỹ nhân Tây Vực trong bộ phim Thục Sơn Chiến Kỷ và khiến
                      khán giả bất ngờ với hình ảnh dữ dội hơn. Tuy nhiên, hàng
                      lông mày ngang quá đậm lại không hài hòa với tổng thể
                      gương mặt của Dĩnh Bảo lắm, không nhất thiết đóng vai cá
                      tính thì phải kẻ lông mày to, nổi bật như thế đâu.
                    </p>
                    <h5>Cáp Ni Khắc Tư</h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/12/bc1ce12ee02c4e95be7ba8a363247497-1628758436389141040197.gif"
                      alt="13, sao Trung,sao Hoa ngữ,Cbiz,dị vực,tạo hình dị vực,thời trang trong phim,Địch Lệ Nhiệt Ba,đồng lệ á,triệu lệ dĩnh,Angela Baby,Lưu Thi Thi,Lê Tư,Bành Tiểu Nhiễm,star style,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/12/4ceb2c55337b458fbb6e921ea280c2c0-16287584363521453977758.gif"
                      alt="14, sao Trung,sao Hoa ngữ,Cbiz,dị vực,tạo hình dị vực,thời trang trong phim,Địch Lệ Nhiệt Ba,đồng lệ á,triệu lệ dĩnh,Angela Baby,Lưu Thi Thi,Lê Tư,Bành Tiểu Nhiễm,star style,"
                      note=""
                    />

                    <p>
                      Đổi đời sau một tiết mục múa, ngay lập tức Cáp Ni Khắc Tư
                      được đặt lên bàn cân so sánh với{" "}
                      <strong>Địch Lệ Nhiệt Ba</strong> khi cả hai đều xuất thân
                      từ vùng Tân Cương. Sở hữu nhan sắc lai Tây rực rỡ, cuốn
                      hút không kém gì Nhiệt Ba, lại thêm ưu thế nhỏ tuổi hơn,
                      nhiều người kỳ vọng cô nàng sẽ làm nên chuyện trong tương
                      lai. Gương mặt đẹp như thiên thần của cô được khoe trọn
                      trong kiểu tóc búi cao, khoảnh khắc Khắc Tư tháo mạng che
                      mặt cũng gây sốt mạng xã hội trong một thời gian dài.
                    </p>
                    <h5>Đồng Lệ Á</h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/12/a-5-1592359669026feqi-16287584866441502958912.jpg"
                      alt="15, sao Trung,sao Hoa ngữ,Cbiz,dị vực,tạo hình dị vực,thời trang trong phim,Địch Lệ Nhiệt Ba,đồng lệ á,triệu lệ dĩnh,Angela Baby,Lưu Thi Thi,Lê Tư,Bành Tiểu Nhiễm,star style,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/12/bi-quyet-lam-dep-cua-dong-le-a-9a8-4759752-1628758486746322420222.jpg"
                      alt="16, sao Trung,sao Hoa ngữ,Cbiz,dị vực,tạo hình dị vực,thời trang trong phim,Địch Lệ Nhiệt Ba,đồng lệ á,triệu lệ dĩnh,Angela Baby,Lưu Thi Thi,Lê Tư,Bành Tiểu Nhiễm,star style,"
                      note=""
                    />

                    <p>
                      Người ta thường hay kháo nhau vì có sự xuất hiện của{" "}
                      <strong>Đồng Lệ Á</strong> nên{" "}
                      <strong>Địch Lệ Nhiệt Ba</strong> và những nữ diễn viên từ
                      Tân Cương khác không thể độc tôn danh hiệu mỹ nhân Tân
                      Cương đẹp nhất. Nhan sắc của Đồng Lệ Á được xem là có
                      phong độ ổn định nhất, cô sở hữu vẻ đẹp phong tình vạn
                      chủng đầy mê hoặc. Cũng như Cáp Ni Khắc Tư, nữ diễn viên
                      từng để lại dấu ấn khi thể hiện lại điệu múa của Đôn Hoàng
                      Phi Thiên trong trang phục <strong>dị vực</strong>.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/12/e623539c7e274c088a86c50b0bc40295-1628758486971483596409.gif"
                      alt="17, sao Trung,sao Hoa ngữ,Cbiz,dị vực,tạo hình dị vực,thời trang trong phim,Địch Lệ Nhiệt Ba,đồng lệ á,triệu lệ dĩnh,Angela Baby,Lưu Thi Thi,Lê Tư,Bành Tiểu Nhiễm,star style,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/12/nguoi-dep-trung-quoc-mua-vu-khuc-dep-nhu-tien-sa-lam-nguoi-nguoi-lac-trong-ao-mong-bdl1590164303-1592362071-264-width437height328-1628758487069864982181.gif"
                      alt="18, sao Trung,sao Hoa ngữ,Cbiz,dị vực,tạo hình dị vực,thời trang trong phim,Địch Lệ Nhiệt Ba,đồng lệ á,triệu lệ dĩnh,Angela Baby,Lưu Thi Thi,Lê Tư,Bành Tiểu Nhiễm,star style,"
                      note=""
                    />

                    <p>
                      Tạo hình của <strong>Đồng Lệ Á</strong> trong phần trình
                      diễn gợi đến hình ảnh một vị phi tần thời xưa. Cô diện
                      trang phục <strong>dị vực</strong> lấy sắc vàng làm chủ
                      đạo, có tà áo mềm mại để tạo hiệu ứng đẹp mắt, uyển chuyển
                      cho mỗi động tác múa.
                    </p>
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
