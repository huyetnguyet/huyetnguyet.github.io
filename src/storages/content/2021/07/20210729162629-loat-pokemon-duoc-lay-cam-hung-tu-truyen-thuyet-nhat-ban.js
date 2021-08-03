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
"title": 'Loạt Pokémon được lấy cảm hứng từ những con quái vật truyền thuyết',
"description": 'Thế giới Pokémon có rất nhiều điều thú vị, và nó bao gồm cả nguồn gốc của các loài Pokémon.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/28/photo-1-16274085038071368152910.jpg',
"alt": 'POKÉMON,TRUYỀN THUYẾT,',
"category": 'games',
"date": '29/07/2021',
"time": '04:26 PM',
"link": '/loat-pokemon-duoc-lay-cam-hung-tu-truyen-thuyet-nhat-ban',
"zcomponent": 'page_20210729162629',
"filepath": './20210729162629-loat-pokemon-duoc-lay-cam-hung-tu-truyen-thuyet-nhat-ban.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "games";
const categoryLink = "/games";
const title =
  "Loạt Pokémon được lấy cảm hứng từ những con quái vật truyền thuyết";
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:26 PM";
const description =
  "Thế giới Pokémon có rất nhiều điều thú vị, và nó bao gồm cả nguồn gốc của các loài Pokémon.";
const link = "loat-pokemon-duoc-lay-cam-hung-tu-truyen-thuyet-nhat-ban";
const tagparam = ["POKÉMON", "TRUYỀN THUYẾT"];
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

export default function page_20210729162629() {
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
                    <h5>1. Froslass</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/28/photo-1-16274085038071368152910.jpg"
                      alt="1, POKÉMON,TRUYỀN THUYẾT,"
                      note=""
                    />
                    <p>
                      Yuki-onna - người phụ nữ xinh đẹp với bộ kimono màu trắng,
                      thường xuất hiện vào đêm đông giá rét là một trong những{" "}
                      <strong>truyền thuyết</strong> nổi tiếng của xứ hoa anh
                      đào. Yuki-onna không bao giờ để lại dấu chân trên tuyết và
                      những ai xui xẻo gặp bà ta đều mất mạng. Thêm nữa,
                      Yuki-onna còn nguyền rủa những kẻ đang nằm trong chăn ấm
                      nệm êm bằng câu thần chú giá lạnh ác độc nhất nếu như họ
                      đang trú chân trên núi tuyết. "Tình cờ" thay, Froslass
                      chính là phiên bản <strong>Pokémon</strong> của nữ quái ác
                      độc này.
                    </p>
                    <h5>2. Whiscash</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/28/photo-1-162740854716976178195.jpg"
                      alt="2, POKÉMON,TRUYỀN THUYẾT,"
                      note=""
                    />
                    <p>
                      Con cá trê khổng lồ trong <strong>truyền thuyết</strong>{" "}
                      Nhật Bản có tên Onamazu nổi tiếng là bị giam cầm trong
                      những bãi bùn kéo dài vô tận. Con quái vật này khi "lên
                      cơn", chúng sẽ động đậy đều sẽ gây động đất ảnh hưởng tới
                      các thị trấn xung quanh. Dù vậy, chúng không thể tìm đường
                      trốn thoát ra khỏi vũng nước tù đó. Đó chính là nguồn gốc
                      của loài cá trê được lấy ra để tạo cảm hứng cho{" "}
                      <strong>Pokémon</strong> có tên Whiscash.
                    </p>
                    <h5>3. Mawile</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/28/photo-1-1627408628884620085222.png"
                      alt="3, POKÉMON,TRUYỀN THUYẾT,"
                      note=""
                    />
                    <p>
                      Mawile với cái đầu kỳ dị khiến khá nhiều cư dân mạng ngay
                      lập tức liên tưởng tới <strong>truyền thuyết</strong> về
                      Futakuchi-onna. Ngày xửa ngày xưa, có một người đàn ông
                      luôn tự hào vì vợ mình "ăn" rất ít, tiết kiệm được biết
                      bao của cải. Ông ta nào ngờ được rằng, thời gian qua đi,
                      cho đến một đêm, khi bất ngờ thức giấc, ông ta nhìn thấy
                      một cái miệng khác mọc ra từ sau đầu vợ mình, bắt đầu ngấu
                      nghiến hết mọi thứ trong ngôi nhà. Cái miệng ấy ăn liên
                      tục, chẳng chừa thứ gì cả và cuối cùng chính ông chồng
                      cũng bị "ăn" mất.
                    </p>
                    <h5>4. Absol</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/28/photo-1-1627422518741433265570.jpg"
                      alt="4, POKÉMON,TRUYỀN THUYẾT,"
                      note=""
                    />
                    <p>
                      Theo <strong>truyền thuyết</strong> Trung Hoa cổ đại, "Bai
                      Ze" là một con quái thú với nhiều cặp mắt và cái sừng to
                      tướng. Con quái này có lần từng dạy cho hoàng đế Trung Hoa
                      về thế giới siêu nhiên và cách để đánh bại những loài vật…
                      không bình thường. Ở Nhật Bản cũng có một truyền thuyết
                      tương tự dưới cái tên "kutabe". Nó đến các ngôi làng và
                      cảnh báo cho dân chúng biết được những tai ương sắp diễn
                      ra.{" "}
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Trong <strong>Pokémon</strong>, Absol có một câu chuyện
                      đáng buồn cũng chẳng kém. Nó được giới thiệu sở hữu một
                      loại năng lực có thể cảm nhận được trước những thiên tai
                      sắp đến và thường xuất hiện trước thời điểm để cảnh báo
                      nạn nhân. Nhưng thay vì biết ơn, con người lại hiểu lầm
                      rằng Absol chính là nguyên nhân gây ra những thiên tai đau
                      lòng ấy. Cảm thấy lòng tốt của mình bị đối xử ác nghiệt,
                      Absol ẩn mình trên những ngọn núi cao và không bao giờ
                      muốn cảnh báo con người trước cái chết nữa.
                    </p>
                    <h5>5. Ninetails</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/28/photo-1-16274087160441314033478.jpg"
                      alt="5, POKÉMON,TRUYỀN THUYẾT,"
                      note=""
                    />
                    <p>
                      Ninetails được lấy cảm hứng từ loài Cửu Vĩ Hồ Ly nổi
                      tiếng. Cứ 100 năm, nó sẽ mọc thêm 1 cái đuôi mới và bao
                      giờ đủ 9 đuôi, 1 con hồ ly sẽ sở hữu được trí tuệ siêu
                      phàm và sức mạnh kinh thiên, biến bộ lông đỏ thành màu
                      trắng vàng. Đây cũng là lý do vì sao mà khi tiến hóa,
                      Vulpix sẽ mọc ra thêm 3 cái đuôi nữa và chuyển luôn màu
                      của bộ lông. Về sau này, GameFreak đã bổ sung thêm phiên
                      bản hồ ly băng giá với việc đưa thêm Ninetails hệ
                      Ice/Fairy vào game.
                    </p>
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
