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
"timestamp": '29/07/2021 04:19 PM',
"title": 'Ngắm nhan sắc và body của nữ chính Cạo Râu Xong, Tôi Nhặt Gái Về Nhà là hiểu ngay vì sao waifu này được yêu thích nhất',
"description": 'Origawa Sayu chính là best girl được yêu thích nhất anime mùa xuân 2021.',
"src": 'https://i.imgur.com/n2USa0A.gif',
"alt": 'CẠO RÂU XONG,TÔI NHẶT GÁI VỀ NHÀ,ORIGAWA SAYU,WAIFU,BEST GIRL,GÁI XINH ANIME,',
"category": 'images',
"date": '29/07/2021',
"time": '04:19 PM',
"link": '/ngam-nhan-sac-va-body-cua-nu-chinh-cao-rau-xong-toi-nhat-gai-ve-nha-la-hieu-ngay-vi-sao-waifu-nay-duoc-yeu-thich-nhat',
"zcomponent": 'page_20210729161930',
"filepath": './20210729161930-ngam-nhan-sac-va-body-cua-nu-chinh-cao-rau-xong-toi-nhat-gai-ve-nha-la-hieu-ngay-vi-sao-waifu-nay-duoc-yeu-thich-nhat.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "images";
const categoryLink = "/images";
const title =
  "Ngắm nhan sắc và body của nữ chính Cạo Râu Xong, Tôi Nhặt Gái Về Nhà là hiểu ngay vì sao waifu này được yêu thích nhất";
const author = "Mẹ Sề";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/07/2021 04:19 PM";
const description =
  "Origawa Sayu chính là best girl được yêu thích nhất anime mùa xuân 2021.";
const link =
  "ngam-nhan-sac-va-body-cua-nu-chinh-cao-rau-xong-toi-nhat-gai-ve-nha-la-hieu-ngay-vi-sao-waifu-nay-duoc-yeu-thich-nhat";
const tagparam = [
  "CẠO RÂU XONG",
  "TÔI NHẶT GÁI VỀ NHÀ",
  "ORIGAWA SAYU",
  "WAIFU",
  "BEST GIRL",
  "GÁI XINH ANIME",
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

export default function page_20210729161930() {
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
                    <strong>Cạo Râu Xong</strong>,{" "}
                    <strong>Tôi Nhặt Gái Về Nhà</strong> là bộ anime nhận được
                    rất nhiều sự quan tâm của khán giả trong loạt anime mùa xuân
                    2021 mới được ra mắt. Bộ phim xoay quanh một nam nhân viên
                    văn phòng 26 tuổi tên là Yoshida bị một cô bé học sinh xin
                    được về nhà anh, đổi lại cô sẽ lấy thân đền đáp. Cô bé ấy
                    tên là <strong>Origawa Sayu</strong>, sở hữu gương mặt xinh
                    đẹp với nét ngây thơ, hồn nhiên trong sáng. Yoshida đồng ý
                    cho phép Sayu đến nhà mình ở nhưng chỉ với một yêu cầu duy
                    nhất là làm việc nhà cho anh. Sayu đã làm rất tốt công việc
                    được giao và kể từ đó hai người bắt đầu cuộc sống chung và
                    chia sẻ cảm xúc cho nhau.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/19/photo-1-1626675367110402449839.gif"
                    alt="1, CẠO RÂU XONG,TÔI NHẶT GÁI VỀ NHÀ,ORIGAWA SAYU,WAIFU,BEST GIRL,GÁI XINH ANIME,"
                    note="Origawa Sayu có nụ cười rất duyên dáng và đáng yêu"
                  />
                  <p>
                    Vấn đề là ngay từ khi mới xuất hiện trong{" "}
                    <strong>Cạo Râu Xong</strong>,{" "}
                    <strong>Tôi Nhặt Gái Về Nhà</strong>, cô nàng Sayu đã nhận
                    được sự chú ý của đông đảo fan anime. Với quá khứ đầy uẩn
                    khúc, cô nàng nữ sinh trung học này được xem là “
                    <strong>best girl</strong>” nhưng đồng thời cũng bị gọi là
                    “bitchy” bởi nhiều khán giả trên khắp thế giới.
                  </p>
                  <RelationNewsInPage category={category} />
                  <ContentImage
                    src="https://64.media.tumblr.com/483053d4e79ffbcf63b770edab28ba3b/9b4ba893325836f6-61/s640x960/9cc24ae60947c3aab954f51a35247e41f81763f5.gifv"
                    alt="2, CẠO RÂU XONG,TÔI NHẶT GÁI VỀ NHÀ,ORIGAWA SAYU,WAIFU,BEST GIRL,GÁI XINH ANIME,"
                    note="Tâm hồn của Origawa Sayu thì đúng là quá đỉnh"
                  />
                  <p>
                    Và bây giờ, sau khi loạt anime mùa xuân 2021 khép lại và
                    cộng đồng fan bình chọn <strong>best girl</strong> của mùa
                    này thì cô gái tai tiếng <strong>Origawa Sayu</strong> lại
                    đứng thứ nhất. Rất nhiều tranh cãi đã nổ ra vì kết quả này,
                    ai cũng có lý lẽ của riêng mình. Nhưng nếu bỏ qua cái quá
                    khứ bỏ nhà đi được 6 tháng và tự thân một mình tìm đường đến
                    Tokyo, cũng như gạ gẫm Yoshida làm tình với mình như một
                    cách trả tiền thuê chỗ ngủ thì Origawa Sayu thực sự là một
                    cô nàng rất đáng yêu, lương thiện, xinh đẹp và sở hữu ngoại
                    hình hết chỗ chê.
                  </p>
                  <ContentImage
                    src="https://64.media.tumblr.com/6c76d84ea994f0a3ad358e126815f704/b8ce78b3674284ac-c4/s540x810/e119ef165d923eeac82e5fb0a3e31e742566dbd3.gifv"
                    alt="3, CẠO RÂU XONG,TÔI NHẶT GÁI VỀ NHÀ,ORIGAWA SAYU,WAIFU,BEST GIRL,GÁI XINH ANIME,"
                    note="Với cái biểu cảm này thì ai mà không thương được chứ!"
                  />
                  <p>
                    Rõ ràng, sau khi gặp gỡ anh chàng Yoshida và có những mối
                    quan hệ mới tốt đẹp hơn, Sayu dần trưởng thành và có ý chí
                    quyết tâm đương đầu với quá khứ đen tối của mình. Sự mạnh mẽ
                    của Sayu đã khiến hầu hết độc giả cực kỳ thán phục, từ đó
                    yêu thích nhân vật này.
                  </p>
                  <ContentImage
                    src="https://1.bp.blogspot.com/-56XHRpPe9IU/YHEOCAWxRZI/AAAAAAACIlQ/kdxJ8OkHfucvZp4W6AbXhqjQlIqDzN48wCPcBGAsYHg/s1920/Hige%2Bwo%2BSoru%2BSoshite%2BJoshikousei%2Bwo%2BHirou%2B-%2BEpisode%2B1%2B-%2BSayu%2BBounces.gif"
                    alt="4, CẠO RÂU XONG,TÔI NHẶT GÁI VỀ NHÀ,ORIGAWA SAYU,WAIFU,BEST GIRL,GÁI XINH ANIME,"
                    note="Khi người con gái này khóc thì ai mà chả muốn che chở."
                  />
                  <p>
                    Dưới đây, mời các bạn cùng chiêm ngưỡng nhan sắc của{" "}
                    <strong>best girl</strong> anime mùa xuân 2021 là sẽ hiểu vì
                    sao cô nàng lại được yêu thích đến thế nhé!
                  </p>
                  <ContentImage
                    src="https://i.imgur.com/XHVAjSX.gif"
                    alt="5, CẠO RÂU XONG,TÔI NHẶT GÁI VỀ NHÀ,ORIGAWA SAYU,WAIFU,BEST GIRL,GÁI XINH ANIME,"
                    note="Origawa Sayu hiện đang là nữ waifu được yêu thích nhất."
                  />
                  <ContentImage
                    src="https://i.imgur.com/n2USa0A.gif"
                    alt="6, CẠO RÂU XONG,TÔI NHẶT GÁI VỀ NHÀ,ORIGAWA SAYU,WAIFU,BEST GIRL,GÁI XINH ANIME,"
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/19/photo-1-16266753783761105624799.gif"
                    alt="7, CẠO RÂU XONG,TÔI NHẶT GÁI VỀ NHÀ,ORIGAWA SAYU,WAIFU,BEST GIRL,GÁI XINH ANIME,"
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/19/photo-1-16266753018692046040943.jpg"
                    alt="8, CẠO RÂU XONG,TÔI NHẶT GÁI VỀ NHÀ,ORIGAWA SAYU,WAIFU,BEST GIRL,GÁI XINH ANIME,"
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/19/photo-1-1626675308345658928553.jpg"
                    alt="9, CẠO RÂU XONG,TÔI NHẶT GÁI VỀ NHÀ,ORIGAWA SAYU,WAIFU,BEST GIRL,GÁI XINH ANIME,"
                    note=""
                  />
                  <ContentImage
                    src="https://ae01.alicdn.com/kf/H5e109cf729c24e6e8b73615ae9124361R/Anime-Hige-wo-Soru-Soshite-Joshikousei-wo-Hirou-Ogiwara-Sayu-Cartoon-Dakimakura-Peach-Skin-Plush-Pillow.jpg_Q90.jpg_.webp"
                    alt="10, CẠO RÂU XONG,TÔI NHẶT GÁI VỀ NHÀ,ORIGAWA SAYU,WAIFU,BEST GIRL,GÁI XINH ANIME,"
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/19/photo-2-16266753760171479679773.png"
                    alt="11, CẠO RÂU XONG,TÔI NHẶT GÁI VỀ NHÀ,ORIGAWA SAYU,WAIFU,BEST GIRL,GÁI XINH ANIME,"
                    note=""
                  />
                  <ContentImage
                    src="https://i.pinimg.com/originals/29/d4/40/29d440f20e53c3c586f0c9d73ee0f6c5.jpg"
                    alt="12, CẠO RÂU XONG,TÔI NHẶT GÁI VỀ NHÀ,ORIGAWA SAYU,WAIFU,BEST GIRL,GÁI XINH ANIME,"
                    note=""
                  />
                  <ContentImage
                    src="https://i.imgur.com/NrpvaWt.jpg"
                    alt="13, CẠO RÂU XONG,TÔI NHẶT GÁI VỀ NHÀ,ORIGAWA SAYU,WAIFU,BEST GIRL,GÁI XINH ANIME,"
                    note=""
                  />
                  <ContentImage
                    src="https://i.imgur.com/7GQcAyr.jpg"
                    alt="14, CẠO RÂU XONG,TÔI NHẶT GÁI VỀ NHÀ,ORIGAWA SAYU,WAIFU,BEST GIRL,GÁI XINH ANIME,"
                    note=""
                  />
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
