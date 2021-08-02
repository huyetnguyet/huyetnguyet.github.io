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
"timestamp": '29/07/2021 04:20 PM',
"title": 'Top 10 Pokémon khiến con người cảm thấy sợ hãi nhất, nhiều loài đáng sợ ngay từ vẻ ngoài',
"description": 'Con người và Pokémon hầu hết cùng tồn tại một cách hòa hợp, nhưng những Pokémon nguy hiểm này có thể làm hại con người nếu không được kiểm soát.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/18/photo-1-16266038127731600690029.jpg',
"alt": 'POKÉMON,POKÉMON KHIẾN CON NGƯỜI SỢ,MEWTWO,GENGAR,ALAKAZAM,COFAGRIGUS,HYDREIGON,',
"category": 'games',
"date": '29/07/2021',
"time": '04:20 PM',
"link": '/top-10-pokemon-khien-con-nguoi-cam-thay-so-hai-nhat-nhieu-loai-dang-so-ngay-tu-ve-ngoai',
"zcomponent": 'page_20210729162017',
"filepath": './20210729162017-top-10-pokemon-khien-con-nguoi-cam-thay-so-hai-nhat-nhieu-loai-dang-so-ngay-tu-ve-ngoai.js'
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
  "Top 10 Pokémon khiến con người cảm thấy sợ hãi nhất, nhiều loài đáng sợ ngay từ vẻ ngoài";
const author = "Mẹ Sề";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/07/2021 04:20 PM";
const description =
  "Con người và Pokémon hầu hết cùng tồn tại một cách hòa hợp, nhưng những Pokémon nguy hiểm này có thể làm hại con người nếu không được kiểm soát.";
const link =
  "top-10-pokemon-khien-con-nguoi-cam-thay-so-hai-nhat-nhieu-loai-dang-so-ngay-tu-ve-ngoai";
const tagparam = [
  "POKÉMON",
  "POKÉMON KHIẾN CON NGƯỜI SỢ",
  "MEWTWO",
  "GENGAR",
  "ALAKAZAM",
  "COFAGRIGUS",
  "HYDREIGON",
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

export default function page_20210729162017() {
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
            <AdsHorizontal />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <RelationNews category={category} />
                <div className="desktop">
                  <AdsHorizontal />
                </div>
                <div className="contentBody">
                  <p>
                    Sau hơn 25 năm, <strong>Pokémon</strong> vẫn là thương hiệu
                    thành công và rất ăn khách vào thời điểm hiện tại. Một trong
                    những điểm cốt lỗi của series là xoay quanh cuộc hành trình
                    của nhà huấn luyện và các Pokémon, phát triển tình bạn và
                    khám phá điều mới mẻ.
                  </p>
                  <p>
                    Đôi khi cũng có một vài <strong>Pokémon</strong> đem lại cho
                    con người cảm giác nguy hiểm, nỗi sợ hãi và ác cảm. Sau đây,
                    hãy cùng nhau điểm qua các Pokémon như vậy nhé!
                  </p>
                  <h5>10. Mewtwo</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/18/photo-1-16266038127731600690029.jpg"
                    alt="1, POKÉMON,POKÉMON KHIẾN CON NGƯỜI SỢ,MEWTWO,GENGAR,ALAKAZAM,COFAGRIGUS,HYDREIGON,"
                    note=""
                  />
                  <p>
                    Mỗi phần <strong>Pokémon</strong> từ video game cho đến
                    anime đều có sự hiện diện từ những Pokémon huyền thoại như{" "}
                    <strong>Mewtwo</strong>. Mewto là Pokémon xuất hiện từ những
                    ấn phẩm game đầu tiên, sản phẩm được tạo ra từ thí nghiệm
                    gen.
                  </p>
                  <p>
                    Vì chỉ được xem như vật thí nghiệm, nên{" "}
                    <strong>Pokémon</strong> này mang nỗi căm ghét dành cho cả
                    con người lẫn Pokémon. Kết hợp với năng lực tâm linh mạnh mẽ
                    đã biến <strong>Mewtwo</strong> trở thành nỗi khiếp sợ thực
                    sự.
                  </p>
                  <h5>9. Gengar</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/18/photo-1-16266038136841917289061.jpg"
                    alt="2, POKÉMON,POKÉMON KHIẾN CON NGƯỜI SỢ,MEWTWO,GENGAR,ALAKAZAM,COFAGRIGUS,HYDREIGON,"
                    note=""
                  />
                  <p>
                    <strong>Pokémon</strong> có rất nhiều hệ khác nhau, từ tự
                    nhiên cho tới huyền bí. Hệ ma là một trong số đó, khi
                    Pokémon này nằm giữa ranh giới của sự sống và cái chết. Cái
                    tên nổi tiếng chính là <strong>Gengar</strong>, một trong
                    những Pokémon Gen I và nỗi sợ hãi dành cho các nhà huấn
                    luyện.
                  </p>
                  <p>
                    Với nụ cười mang nét ma mãnh và bản tính tinh nghịch của
                    mình, <strong>Gengar</strong> có thể tạo nên những màn hù
                    dọa khiến cho nhiều người sợ hãi.
                  </p>
                  <h5>8. Alakazam</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/18/photo-2-16266038141591260829383.jpg"
                    alt="3, POKÉMON,POKÉMON KHIẾN CON NGƯỜI SỢ,MEWTWO,GENGAR,ALAKAZAM,COFAGRIGUS,HYDREIGON,"
                    note=""
                  />
                  <p>
                    Các <strong>Pokémon</strong> hệ tâm linh ở những ấn phẩm đầu
                    tiên trong loạt game Pokémon thường được đánh giá là mạnh mẽ
                    và nguy hiểm. Chỉ với năng lực dịch chuyển tức thời và sức
                    mạnh dựa trên khái niệm ESP thôi cũng biến chúng rất khó để
                    đánh bại.
                  </p>
                  <p>
                    Abra là một trong số đó, đặc biệt ở hình dạng tiến hóa cuối
                    cùng <strong>Alakazam</strong>. Đây là một{" "}
                    <strong>Pokémon</strong> có thể thôi miên và thao túng tâm
                    trí của con người, qua đó làm theo mệnh lệnh của chúng.
                  </p>
                  <h5>7. Cofagrigus</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/18/photo-3-1626603815181252586746.jpg"
                    alt="4, POKÉMON,POKÉMON KHIẾN CON NGƯỜI SỢ,MEWTWO,GENGAR,ALAKAZAM,COFAGRIGUS,HYDREIGON,"
                    note=""
                  />
                  <p>
                    <strong>Cofagrigus</strong> là một <strong>Pokémon</strong>{" "}
                    thuộc Gen V với thiết kế đặc biệt dựa trên phong cách Ai
                    Cập, sở hữu khả năng cải trang thành cổ quan tài. Với khả
                    năng của mình, Cofagrius sẽ dụ những kẻ đào mộ và giam giữ
                    vào bên trong cơ thể của chúng.
                  </p>
                  <h5>6. Hydreigon</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/18/photo-4-16266038146881157384158.jpg"
                    alt="5, POKÉMON,POKÉMON KHIẾN CON NGƯỜI SỢ,MEWTWO,GENGAR,ALAKAZAM,COFAGRIGUS,HYDREIGON,"
                    note=""
                  />
                  <p>
                    <strong>Pokémon</strong> hệ bóng tối và hệ rồng luôn được
                    xem là một trong những cái tên mạnh mẽ, đáng sợ nhất. Vậy sẽ
                    như thế nào nếu là Pokémon có cả hai hệ ấy. Đó chính là{" "}
                    <strong>Hydreigon</strong>, một Pokémon ba đầu và có tính
                    khí bất thường hơn Pokémon nào khác.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Đối với <strong>Hydreigon</strong>, bất kỳ chuyển động nào
                    cũng đều được xem như có ý định tấn công vào{" "}
                    <strong>Pokémon</strong> này và sẽ trở nên hung hãn.
                  </p>
                  <h5>5. Garchomp</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/18/photo-1-16266038474971259485989.jpg"
                    alt="6, POKÉMON,POKÉMON KHIẾN CON NGƯỜI SỢ,MEWTWO,GENGAR,ALAKAZAM,COFAGRIGUS,HYDREIGON,"
                    note=""
                  />
                  <p>
                    Đôi khi cũng có những <strong>Pokémon</strong> mà chỉ cần
                    nhìn qua tạo hình thôi là đã thấy có nét đáng sợ rồi, như
                    trường hợp của Garchomp. Garchomp là Pokémon hệ rồng, đất
                    với tính khí cực kỳ hùng hổ, biến chúng trở thành cái tên mà
                    ít có nhà huấn luyện nào muốn chọc giận tại khu vực Sinnoh.
                  </p>
                  <p>
                    Garchomp di chuyển rất nhanh và có thể dễ dàng gây ra tổn
                    thương trong chớp mắt. Bất kỳ ai khi đối đầu đều dành ra sự
                    cẩn trọng đối với Garchomp.
                  </p>
                  <h5>4. Guzzlord</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/18/photo-1-16266038486371793996173.jpg"
                    alt="7, POKÉMON,POKÉMON KHIẾN CON NGƯỜI SỢ,MEWTWO,GENGAR,ALAKAZAM,COFAGRIGUS,HYDREIGON,"
                    note=""
                  />
                  <p>
                    Có không ít những <strong>Pokémon</strong> với tạo hình mới
                    lạ và gây tò mò, như Gen VII ở khu vực Alola. Pokémon hệ
                    bóng tối và rồng Guzzlord là một trong số đó, với nguồn gốc
                    từ ngoài hành tinh tạo nên sự đáng sợ dành cho những ai phải
                    chạm mặt.
                  </p>
                  <p>
                    Guzzlord không ngần ngại tấn công ngay lập tức, và có một
                    khẩu vị không phân biệt đối tượng nào. Điều đó biến{" "}
                    <strong>Pokémon</strong> này trở thành một trong những cái
                    tên nguy hiểm nhất tại khu vực Alola.
                  </p>
                  <h5>3. Gyarados</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/18/photo-2-162660384967789609909.jpg"
                    alt="8, POKÉMON,POKÉMON KHIẾN CON NGƯỜI SỢ,MEWTWO,GENGAR,ALAKAZAM,COFAGRIGUS,HYDREIGON,"
                    note=""
                  />
                  <p>
                    Gyarados là dạng tiến hóa từ Magikarp và được xem như một
                    trong những <strong>Pokémon</strong> nổi tiếng nhất. Điều
                    làm nên Gyarados là rất khó để bắt giữ và cực kỳ nguy hiểm
                    đối với những ai đang di chuyển ở trên mặt nước. Mà yếu tố
                    chính thể hiện sự đáng sợ của Gyarados có thể nhìn ra ngay
                    từ ngoại hình.
                  </p>
                  <h5>2. Yveltal</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/18/photo-3-16266038491602073423229.jpg"
                    alt="9, POKÉMON,POKÉMON KHIẾN CON NGƯỜI SỢ,MEWTWO,GENGAR,ALAKAZAM,COFAGRIGUS,HYDREIGON,"
                    note=""
                  />
                  <p>
                    Không ít các <strong>Pokémon</strong> huyền thoại được xem
                    như đại diện cho sự hủy diệt, nằm giữa lằn ranh của sự sống
                    và cái chết. Và Yveltal cũng không phải là ngoại lệ. Yveltal
                    là Pokémon hệ bóng tối và bay lượn xuất hiện từ khu vực
                    Kalos, sở hữu khả năng hấp thụ sự sống từ mọi nơi khác nhau.
                    Yveltal không khác gì một quả bom nổ chậm mà có thể xóa sạch
                    toàn bộ nhân loại nếu bung hết sức mạnh.
                  </p>
                  <h5>1. Giratina</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/18/photo-4-1626603840006639064301.jpg"
                    alt="10, POKÉMON,POKÉMON KHIẾN CON NGƯỜI SỢ,MEWTWO,GENGAR,ALAKAZAM,COFAGRIGUS,HYDREIGON,"
                    note=""
                  />
                  <p>
                    Có thể nói Gen IV là một trong những điểm thú vị của thương
                    hiệu <strong>Pokémon</strong>, khi xuất hiện cả ba huyền
                    thoại gồm Arceus, Dialga và Palkia. Đây đều là những cái tên
                    sở hữu sức mạnh vô song mà có thể làm thay đổi cả vũ trụ.
                    Tuy nhiên, sẽ không thể nào bỏ qua cái tên tiếp theo là
                    Giratina.
                  </p>
                  <p>
                    Giratina là kẻ thống trị ở Distortion Wold và được Arceus
                    xem như mối hiểm họa cần phải được loại bỏ. Với sức mạnh của
                    mình và bản tính đại diện cho sự hỗn loạn, Giratina có thể
                    đặt dấu chấm hết cho toàn bộ vũ trụ.
                  </p>
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
