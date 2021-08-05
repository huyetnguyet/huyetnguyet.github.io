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
"timestamp": '05/08/2021 08:46 AM',
"title": 'Tổng hợp những trái ác quỷ Zoan thần thoại đã xuất hiện trong One Piece, ai cũng bá đạo ngoại trừ người này?',
"description": 'Được xem là loại trái ác quỷ hiếm nhất, cùng chúng tôi điểm qua những người sở hữu sức mạnh đáng sợ trong One Piece này nhé!',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/ky1-1628082681430236186284.png',
"alt": 'ONE PIECE,FAN ONE PIECE,CỘNG ĐỒNG ONE PIECE,TỨ HOÀNG KAIDO,PHƯỢNG HOÀNG MARCO,NĂNG LỰC ÁC QUỶ YAMATO,TRÁI ÁC QUỶ,ZOAN THẦN THOẠI,THỦY SƯ SENGOKU,',
"category": 'games',
"date": '05/08/2021',
"time": '08:46 AM',
"link": '/tong-hop-nhung-trai-ac-quy-zoan-than-thoai-da-xuat-hien-trong-one-piece-ai-cung-ba-dao-ngoai-tru-nguoi-nay',
"zcomponent": 'page_20210805084633',
"filepath": './20210805084633-tong-hop-nhung-trai-ac-quy-zoan-than-thoai-da-xuat-hien-trong-one-piece-ai-cung-ba-dao-ngoai-tru-nguoi-nay.js'
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
  "Tổng hợp những trái ác quỷ Zoan thần thoại đã xuất hiện trong One Piece, ai cũng bá đạo ngoại trừ người này?";
const author = "Sầu Thiên Thu";
const source = "Trí Thức Trẻ";
const timestamp = "05/08/2021 08:46 AM";
const description =
  "Được xem là loại trái ác quỷ hiếm nhất, cùng chúng tôi điểm qua những người sở hữu sức mạnh đáng sợ trong One Piece này nhé!";
const link =
  "tong-hop-nhung-trai-ac-quy-zoan-than-thoai-da-xuat-hien-trong-one-piece-ai-cung-ba-dao-ngoai-tru-nguoi-nay";
const tagparam = [
  "ONE PIECE",
  "FAN ONE PIECE",
  "CỘNG ĐỒNG ONE PIECE",
  "TỨ HOÀNG KAIDO",
  "PHƯỢNG HOÀNG MARCO",
  "NĂNG LỰC ÁC QUỶ YAMATO",
  "TRÁI ÁC QUỶ",
  "ZOAN THẦN THOẠI",
  "THỦY SƯ SENGOKU",
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

export default function page_20210805084633() {
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
                    <h5>Uo Uo No Mi, Model Seiryu</h5>
                    <p>Người sở hữu: Kaido.</p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/ky1-1628082681430236186284.png"
                      alt="1, ONE PIECE,FAN ONE PIECE,CỘNG ĐỒNG ONE PIECE,TỨ HOÀNG KAIDO,PHƯỢNG HOÀNG MARCO,NĂNG LỰC ÁC QUỶ YAMATO,TRÁI ÁC QUỶ,ZOAN THẦN THOẠI,THỦY SƯ SENGOKU,"
                      note=""
                    />

                    <p>
                      Đây là <strong>trái ác quỷ</strong>{" "}
                      <strong>Zoan thần thoại</strong> cho phép người sở hữu
                      biến đổi thành một con rồng châu Á khổng lồ. Uo Uo No Mi,
                      Model Seiryu là "món quà" của Big Mom dành cho Kaido. Về
                      sau, tiến sĩ Vegapunk đã chiết xuất và tạo ra trái ác quỷ
                      nhân tạo. Momonosuke chính là người đã vô tình ăn phải
                      trái ác quỷ nhân tạo ấy.
                    </p>
                    <p>
                      Uo Uo No Mi, Model Seiryu ngoài việc khiến người sở hữu
                      biến thành một con rồng dũng mãnh, nó còn đem lại cho
                      Kaido nhiều sức mạnh khác nhau như bay lượn, phun ra lửa.
                      Khả năng ấn tượng nhất của Uo Uo No Mi, Model Seiryu có lẽ
                      là hỏa vân, thứ mây lửa có thể nhấc bổng cả một hòn đảo và
                      di chuyển nó theo ý thích của người sở hữu. Kaido đang làm
                      điều này khi nhấc cả đảo Quỷ về Hoa đô.
                    </p>
                    <h5>Hebi Hebi No Mi, Model Yamata No Orochi</h5>
                    <p>Người sở hữu: Kurozumi Orochi.</p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/ky2-16280826906621264832376.jpg"
                      alt="2, ONE PIECE,FAN ONE PIECE,CỘNG ĐỒNG ONE PIECE,TỨ HOÀNG KAIDO,PHƯỢNG HOÀNG MARCO,NĂNG LỰC ÁC QUỶ YAMATO,TRÁI ÁC QUỶ,ZOAN THẦN THOẠI,THỦY SƯ SENGOKU,"
                      note=""
                    />
                    <p>
                      Hebi Hebi No Mi, Model Yamata No Orochi là{" "}
                      <strong>trái ác quỷ</strong> dựa trên con Bát Kỳ Đại Xà
                      trong Thần Đạo Nhật Bản. Tương truyền, Bát Kỳ Đại Xà có
                      thân hình khổng lồ, trải dài 8 thung lũng, 8 quả đồi. Nó
                      ngụy trang bằng rêu phong, cây bách và cây tuyết tùng
                      trông không khác gì một dãy núi khổng lồ.
                    </p>
                    <p>
                      Trong truyện <strong>One Piece</strong>, Hebi Hebi No Mi,
                      Model Yamata No Orochi đã giúp Orochi biến thân thành một
                      con quái vật rắn 8 đầu. Rơi vào tay người khác có lẽ trái{" "}
                      <strong>Zoan thần thoại</strong> này sẽ rất mạnh nhưng rơi
                      vào tay Orochi thì không. Orochi đã bị giết 2 lần bởi
                      Kaido và nhóm Cửu Hồng Bao nhưng chưa chắc hắn đã chết.
                      Theo nhiều dự đoán, Hebi Hebi No Mi, Model Yamata No
                      Orochi cho người sở hữu số mạng bằng với số đầu còn lại
                      của nó. Có thể nói mang tiếng là người sở hữu một{" "}
                      <strong>trái ác quỷ</strong> Zoan thần thoại mạnh mẽ là
                      vậy nhưng Orochi hiện tại vẫn chưa thể hiện nhiều trong
                      arc Wano.
                    </p>
                    <h5>Hito Hito No Mi, Model: Daibutsu</h5>
                    <p>Người sở hữu: Sengoku.</p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/ky3-162808269504648511414.png"
                      alt="3, ONE PIECE,FAN ONE PIECE,CỘNG ĐỒNG ONE PIECE,TỨ HOÀNG KAIDO,PHƯỢNG HOÀNG MARCO,NĂNG LỰC ÁC QUỶ YAMATO,TRÁI ÁC QUỶ,ZOAN THẦN THOẠI,THỦY SƯ SENGOKU,"
                      note=""
                    />
                    <p>
                      Dựa trên hình tượng Đức Phật, Hito Hito No Mi, Model:
                      Daibutsu khiến chủ sở hữu có thể biến thân thành một bức
                      tượng phật bằng vàng khổng lồ, kèm theo đó là khá nhiều
                      năng lực ấn tượng. Sengoku vốn là Thủy Sư Đô Đốc và có khả
                      năng chiến đấu rất ấn tượng nên ông tận dụng rất tốt sức
                      mạnh của trái <strong>Zoan thần thoại</strong> này. Hiện
                      tại trong mạch truyện <strong>One Piece</strong> thì
                      Sengoku đã tạm lui về hậu phương. Tuy nhiên sức mạnh của
                      ông vẫn là một trong những ẩn số lớn nhất của bộ truyện
                      này.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>Inu Inu No Mi, Model Kyubi No Kitsune</h5>
                    <p>Người sở hữu: Catarina Devon.</p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/ky4-1628082699068227485717.jpg"
                      alt="4, ONE PIECE,FAN ONE PIECE,CỘNG ĐỒNG ONE PIECE,TỨ HOÀNG KAIDO,PHƯỢNG HOÀNG MARCO,NĂNG LỰC ÁC QUỶ YAMATO,TRÁI ÁC QUỶ,ZOAN THẦN THOẠI,THỦY SƯ SENGOKU,"
                      note=""
                    />
                    <p>
                      Inu Inu No Mi, Model Kyubi No Kitsune là{" "}
                      <strong>trái ác quỷ</strong>{" "}
                      <strong>Zoan thần thoại</strong> có nguồn gốc từ loài Cửu
                      Vĩ Hồ. Theo truyền thuyết, Cửu Vĩ Hồ có khả năng biến
                      thành những cô gái xinh đẹp và dụ dỗ đàn ông. Chúng cũng
                      là loài yêu quái có pháp lực cao cường và thường xuyên làm
                      hại con người.
                    </p>
                    <p>
                      Trong <strong>One Piece</strong>, Inu Inu No Mi, Model
                      Kyubi No Kitsune đã đem lại năng lực "cải trang" cho Devon
                      – một thành viên của băng Tứ Hoàng Râu Đen. Trong tương
                      lai thì băng Mũ Rơm sớm muộn gì cũng sẽ đụng độ băng Râu
                      Đen, chúng ta sẽ được thấy nhiều hơn về sức mạnh của trái{" "}
                      <strong>Zoan Thần Thoại</strong> này.
                    </p>
                    <h5>Inu Inu No Mi, Model Oguchi No Makami</h5>
                    <p>Người sở hữu: Yamato.</p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/ky5-1628082703207141245317.jpg"
                      alt="5, ONE PIECE,FAN ONE PIECE,CỘNG ĐỒNG ONE PIECE,TỨ HOÀNG KAIDO,PHƯỢNG HOÀNG MARCO,NĂNG LỰC ÁC QUỶ YAMATO,TRÁI ÁC QUỶ,ZOAN THẦN THOẠI,THỦY SƯ SENGOKU,"
                      note=""
                    />
                    <p>
                      Đây là trái <strong>Zoan thần thoại</strong> được tiết lộ
                      trong <strong>One Piece</strong> chap 1020. Dựa trên
                      truyền thuyết về thần sói Ooguchi No Makami của Nhật Bản,
                      Inu Inu No Mi, Model Oguchi No Makami được Kaido gọi là
                      "trái thủ hộ của Wano Quốc". Yamato đã phần nào thể hiện
                      sức mạnh của <strong>trái ác quỷ</strong> này trong trận
                      chiến với chính cha của mình là Kaido.
                    </p>
                    <p>
                      Theo các tài liệu lịch sử cổ đại về thần thoại của Nhật
                      Bản ghi chép, khoảng năm 100, Khi Yamato Takeru, con trai
                      của hoàng đế Keikko đi lạc trên một con đường gần núi
                      Nitake, ông đã bị một con quỷ địa phương hóa thành một con
                      nai trắng cản đường và tấn công. Lúc này, Ooguchi No
                      Makami - những con sói trắng to lớn đã xuất hiện và chỉ
                      cho Yamato đường đi. Yamato sau đó lập miếu thờ và xem
                      Oguchi No Makami như vị thần bảo vệ tại Mitake.
                    </p>
                    <h5>Tori Tori No Mi, Model Phoenix</h5>
                    <p>Người sở hữu: Marco.</p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/ky6-16280827070701590930267.png"
                      alt="6, ONE PIECE,FAN ONE PIECE,CỘNG ĐỒNG ONE PIECE,TỨ HOÀNG KAIDO,PHƯỢNG HOÀNG MARCO,NĂNG LỰC ÁC QUỶ YAMATO,TRÁI ÁC QUỶ,ZOAN THẦN THOẠI,THỦY SƯ SENGOKU,"
                      note=""
                    />
                    <p>
                      Đúng với tên gọi, Tori Tori No Mi, Model Phoenix có thể
                      khiến Marco biến thân thành một con phượng hoàng to lớn
                      với nhiều khả năng khác nhau. Một trong những năng lực ấn
                      tượng nhất của trái <strong>Zoan thần thoại</strong> này
                      là khả năng phục hồi thần kỳ của nó. Marco có thể sử dụng
                      ngọn lửa này để phục hồi cơ thể ngay cả khi ở dạng người
                      hay phóng lửa vào các đồng minh để phục hồi thương tích
                      cho họ nhanh chóng hơn. Với một bác sĩ như Marco, năng lực
                      từ Tori Tori No Mi, Model Phoenix giúp anh trở thành một
                      nhân vật nguy hiểm bậc nhất trong{" "}
                      <strong>One Piece</strong>.
                    </p>
                    <p>
                      Trên đây là những những <strong>trái ác quỷ</strong>{" "}
                      <strong>Zoan thần thoại</strong> đã xuất hiện trong{" "}
                      <strong>One Piece</strong>, ai cũng bá đạo ngoại trừ
                      Orochi. Các bạn thấy sao về loại trái ác quỷ này trong One
                      Piece? Hãy để lại ý kiến của mình nhé!
                    </p>
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
