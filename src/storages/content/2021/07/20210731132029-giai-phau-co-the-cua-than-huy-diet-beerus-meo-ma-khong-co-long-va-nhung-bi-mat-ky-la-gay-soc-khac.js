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
"timestamp": '31/07/2021 01:20 PM',
"title": 'Giải phẫu cơ thể của Thần hủy diệt Beerus: Mèo mà không có lông và những bí mật kỳ lạ gây sốc khác',
"description": 'Trong Dragon Ball Super, Beerus là Thần hủy diệt của Vũ trụ 7. Ông là người vô cùng mạnh mẽ, sở hữu sức mạnh hủy diệt đáng sợ khiến ai cũng phải dè chừng.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/7/31/anh-1-16277170034351938628634.png',
"alt": 'DRAGON BALL SUPER,THẦN HỦY DIỆT,VŨ TRỤ 7,BEERUS,SỨC MẠNH HỦY DIỆT,THIÊN SỨ WHIS,',
"category": 'games',
"date": '31/07/2021',
"time": '01:20 PM',
"link": '/giai-phau-co-the-cua-than-huy-diet-beerus-meo-ma-khong-co-long-va-nhung-bi-mat-ky-la-gay-soc-khac',
"zcomponent": 'page_20210731132029',
"filepath": './20210731132029-giai-phau-co-the-cua-than-huy-diet-beerus-meo-ma-khong-co-long-va-nhung-bi-mat-ky-la-gay-soc-khac.js'
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
  "Giải phẫu cơ thể của Thần hủy diệt Beerus: Mèo mà không có lông và những bí mật kỳ lạ gây sốc khác";
const author = "SuSu";
const source = "Trí Thức Trẻ";
const timestamp = "31/07/2021 01:20 PM";
const description =
  "Trong Dragon Ball Super, Beerus là Thần hủy diệt của Vũ trụ 7. Ông là người vô cùng mạnh mẽ, sở hữu sức mạnh hủy diệt đáng sợ khiến ai cũng phải dè chừng.";
const link =
  "giai-phau-co-the-cua-than-huy-diet-beerus-meo-ma-khong-co-long-va-nhung-bi-mat-ky-la-gay-soc-khac";
const tagparam = [
  "DRAGON BALL SUPER",
  "THẦN HỦY DIỆT",
  "VŨ TRỤ 7",
  "BEERUS",
  "SỨC MẠNH HỦY DIỆT",
  "THIÊN SỨ WHIS",
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

export default function page_20210731132029() {
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
                      Được giới thiệu là một trong 12 vị{" "}
                      <strong>Thần hủy diệt</strong> của thế giới đa vũ trụ
                      trong <strong>Dragon Ball Super</strong>. Trong số nhiều
                      vị thần trong <strong>vũ trụ 7</strong>,{" "}
                      <strong>Beerus</strong> là vị thần đáng sợ nhất. Là vị
                      thần của sự hủy diệt, ông được giao nhiệm vụ duy trì sự
                      cân bằng trong vũ trụ. Sự phá hủy là cần thiết để tạo ra
                      hành tinh mới, nhưng ông không hành động theo lệnh của
                      Zeno hay Đại Thiên Sứ, ông phá hủy theo ý thích của mình.
                    </p>
                    <p>
                      Tuy có sức mạnh đáng sợ là vậy tuy nhiên{" "}
                      <strong>Beerus</strong> là một người hòa đồng và hài hước,
                      điều này càng khiến nhiều khán giả thích thú hơn khi ông
                      ta có bề ngoài khá "tấu hài. Không những thế cơ thể của
                      ông còn có rất nhiều những điểm kỳ lạ.
                    </p>
                    <h5>
                      <strong>Beerus</strong> không có lông
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/31/anh-1-16277170034351938628634.png"
                      alt="1, DRAGON BALL SUPER,THẦN HỦY DIỆT,VŨ TRỤ 7,BEERUS,SỨC MẠNH HỦY DIỆT,THIÊN SỨ WHIS,"
                      note=""
                    />
                    <p>
                      Dù là mèo nhưng <strong>Beerus</strong> không có lông,
                      điều này là do thiết kế của ông dựa trên một giống mèo cụ
                      thể. Về mặt tính cách, Beerus được mô phỏng theo Cornish
                      Rex của người sáng tạo Akira Toriyama, nhưng thiết kế hình
                      ảnh của ông dựa trên loài mèo Sphynx.
                    </p>
                    <p>
                      Chúng không chỉ không có lông mà còn có bàn chân có màng.
                      Màu da của <strong>Beerus</strong> cũng ngụ ý rằng nếu ông
                      có lông, nó sẽ có màu tím, vì màu da của Sphynxes biểu thị
                      màu lông của chúng và loại hoa văn nếu có. Giống mèo
                      Sphynx cũng phù hợp với biểu tượng Ai Cập mà các vị{" "}
                      <strong>Thần hủy diệt</strong> chia sẻ.
                    </p>
                    <h5>
                      Thiết kế của <strong>Beerus</strong> dựa trên 2 vị Thần Ai
                      Cập
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/anh-2-16277170034551221001176.jpg"
                      alt="2, DRAGON BALL SUPER,THẦN HỦY DIỆT,VŨ TRỤ 7,BEERUS,SỨC MẠNH HỦY DIỆT,THIÊN SỨ WHIS,"
                      note=""
                    />
                    <p>
                      Thiết kế của <strong>Beerus</strong> dựa trên các vị thần
                      Ai Cập Anubis và Sekhmet. Sekhmet là nữ thần chữa bệnh của
                      Ai Cập, có nhiệm vụ bảo vệ các Pharaoh và dẫn dắt họ vào
                      trận chiến. Cô ấy có đầu của một con sư tử cái, giống với
                      hình dạng đầu của Beerus. Cô cũng sẽ thực hiện hình phạt
                      thần thánh, thường là dưới hình thức hủy diệt và bệnh
                      dịch, giống như vị trí mà Beerus đang đảm nhiệm.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Còn Anubis là vị thần cầm đầu chó rừng trông coi người
                      chết và quá trình ướp xác. Trong Underworld, Anubis sẽ
                      thực hiện phán xét linh hồn của một người bằng cách sử
                      dụng một chiếc cân và một chiếc lông đà điểu. Với tư cách
                      là <strong>Thần hủy diệt</strong>, điều này phù hợp với mô
                      tả công việc của <strong>Beerus</strong>, đối với một
                      người khi ông đánh giá liệu thứ gì đó có phải là mối đe
                      dọa đối với trật tự của vũ trụ hay không.
                    </p>
                    <h5>
                      <strong>Beerus</strong> hắt hơi cũng có thể phá hủy vũ trụ
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/anh-3-1627717003460763874318.jpg"
                      alt="3, DRAGON BALL SUPER,THẦN HỦY DIỆT,VŨ TRỤ 7,BEERUS,SỨC MẠNH HỦY DIỆT,THIÊN SỨ WHIS,"
                      note=""
                    />
                    <p>
                      Là một <strong>Thần hủy diệt</strong>, nên bạn biết đấy{" "}
                      <strong>Beerus</strong> có thể phá hủy mọi thứ. Và mức độ
                      hủy diệt mà ông ta có thể gây ra thuộc cấp độ vũ trụ. Chỉ
                      bằng cách chạm vào móng tay, ông đã phá hủy một nửa hành
                      tinh trong <strong>Dragon Ball Super</strong>. Bản thân
                      Whis cũng đã thừa nhận rằng, Beerus có thể phá hủy toàn bộ
                      hệ Mặt Trời mà không gặp rắc rối gì.
                    </p>
                    <p>
                      Ngay cả các Kai tối cao cũng đồng tình với tuyên bố của
                      Whis về sức mạnh của <strong>Beerus</strong>. Trên thực
                      tế, người ta nói rằng chỉ một cái hắt hơi của ông cũng đủ
                      để phá hủy một hành tinh.
                    </p>
                    <h5>
                      <strong>Beerus</strong> tạo ra hào quang hủy diệt
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/anh-4-16277170034841514505407.png"
                      alt="4, DRAGON BALL SUPER,THẦN HỦY DIỆT,VŨ TRỤ 7,BEERUS,SỨC MẠNH HỦY DIỆT,THIÊN SỨ WHIS,"
                      note=""
                    />
                    <p>
                      Khi <strong>Beerus</strong> trong trạng thái giận giữ, ông
                      ta bắt đầu tỏa ra một luồng năng lượng hủy diệt. Năng
                      lượng này có sức mạnh xóa bỏ mọi thứ khỏi sự tồn tại.
                      Những thứ duy nhất có thể phá hủy nó là những sinh vật
                      thần thánh khác và đôi cánh vô hiệu hóa của con chim
                      Tokitoki.
                    </p>
                    <p>
                      Nếu người sử dụng sức mạnh này chọn, họ có thể truyền năng
                      lượng cho người khác dưới dạng một quả cầu. Mặc dù{" "}
                      <strong>Beerus</strong> chưa bao giờ thể hiện việc truyền
                      năng lượng này, nhưng chúng ta đã thấy Sidra chuyển năng
                      lượng của mình lên Top trong cuộc chiến chống lại Frieza.
                      Năng lượng Hủy diệt cũng có thể được sử dụng phòng thủ
                      bằng cách tạo ra một hàng rào bảo vệ.
                    </p>
                    <h5>
                      <strong>Beerus</strong> có cơ thể bé nhỏ nhưng lại cực kỳ
                      mạnh
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/5-16277171064001209361795.png"
                      alt="5, DRAGON BALL SUPER,THẦN HỦY DIỆT,VŨ TRỤ 7,BEERUS,SỨC MẠNH HỦY DIỆT,THIÊN SỨ WHIS,"
                      note=""
                    />
                    <p>
                      Mặc dù thân hình của <strong>Beerus</strong> mảnh khảnh và
                      nhỏ bé nhưng ông còn mạnh hơn người anh em song sinh
                      Champa béo tốt của mình. Sự thật này đã được xác nhận bởi
                      Vados vì thế rõ ràng ngoại hình không thể nói nên điều gì.
                      Trong khi cả hai anh em đều là{" "}
                      <strong>Thần hủy diệt</strong>, Champa không có sức chịu
                      đựng hay khả năng phục hồi như Beerus, điều này thể hiện
                      trong cuộc thi oẳn tù tì giữa hai người khi Champa phàn
                      nàn rằng tay ông bắt đầu bị đau trong khi Beerus vẫn ổn.
                    </p>
                    <p>
                      Không những thế dù thân hình bé nhỏ nhưng{" "}
                      <strong>Beerus</strong> có thể hấp thụ lượng thức ăn khổng
                      lồ, khi sự thèm ăn của ông trỗi dậy thì nó có sánh ngang
                      cả với Goku. Bên cạnh đó Beerus còn có sở thích ngủ trưa
                      kéo dài hàng năm trời mà không cần ăn uống bất cứ thứ gì.
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
