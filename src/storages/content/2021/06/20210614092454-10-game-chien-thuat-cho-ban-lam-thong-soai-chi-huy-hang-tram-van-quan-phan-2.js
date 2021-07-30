import React from "react";
import "components/page.css";
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
"timestamp": '14/06/2021 09:24 AM',
"title": '10 game chiến thuật cho bạn làm thống soái, chỉ huy hàng trăm vạn quân (Phần 2)',
"description": 'Game chiến thuật luôn có sức hút kỳ lạ.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/12/photo-1-16235122911981082464026.png',
"alt": 'Game Chien Thuat, Xay Dung Can Cu, The Ky 18, Tang Lop Quy Toc, Age Of Empires, ',
"category": 'games',
"date": '14/06/2021',
"time": '09:24 AM',
"link": '/10-game-chien-thuat-cho-ban-lam-thong-soai-chi-huy-hang-tram-van-quan-phan-2',
"zcomponent": 'page_20210614092454',
"filepath": './20210614092454-10-game-chien-thuat-cho-ban-lam-thong-soai-chi-huy-hang-tram-van-quan-phan-2.js'
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
  "10 game chiến thuật cho bạn làm thống soái, chỉ huy hàng trăm vạn quân (Phần 2)";
const author = "Real Madrid";
const source = "Pháp luật và bạn đọc";
const timestamp = "14/06/2021 09:24 AM";
const description = "Game chiến thuật luôn có sức hút kỳ lạ.";
const link =
  "10-game-chien-thuat-cho-ban-lam-thong-soai-chi-huy-hang-tram-van-quan-phan-2";
const tagparam = [
  "game-chien-thuat",
  "xay-dung-can-cu",
  "the-ky-18",
  "tang-lop-quy-toc",
  "age-of-empires",
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

export default function page_20210614092454() {
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
                <div className="contentBody">
                  <p>
                    10 game chiến thuật cho bạn làm thống soái, chỉ huy hàng
                    trăm vạn quân (Phần 1)
                  </p>
                  <h3>Warhammer 40,000: Dawn Of War II</h3>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/12/photo-1-16235122911981082464026.png"
                    alt="Game Chien Thuat, Xay Dung Can Cu, The Ky 18, Tang Lop Quy Toc, Age Of Empires, "
                    note=""
                  />
                  <p>
                    Tựa game này mang đến khá nhiều cải tiến so với bản Dawn of
                    War đầu tiên, như multiplayer cho phép người chơi co-op, chứ
                    không chỉ đối đầu 1vs1 như trước. Những campaign trong game
                    cũng không còn tuyến tính và yếu tố xây dựng căn cứ cũng bị
                    loại bỏ. Các unit trong game phải được lựa chọn từ trước khi
                    bắt đầu nhiệm vụ và không thể bổ sung thêm khi đang trong
                    quá trình thực hiện nhiệm vụ.
                  </p>
                  <p>
                    Người chơi sẽ phải đưa ra những quyết định tùy vào mục tiêu
                    và địa thế của mỗi nhiệm vụ, dẫn đến những kết quả rất khác
                    nhau. Thậm chí sau khi đã đưa ra quyết định, màn chơi sau đó
                    sẽ có những mục tiêu mới khác nhau tùy thuộc vào diễn biến
                    của các sự kiện.
                  </p>
                  <p>
                    Dawn of War II là một game chiến thuật chính thống nhưng lại
                    mang nặng hơi hướng thể loại RPG, khi mà người chơi có thể
                    lên cấp, và các unit có thể được trang bị những món đồ chiến
                    lợi phẩm thu được từ những màn chơi trước. Đây là một game
                    không thể thiếu cho những ai là fan của dòng RPG và muốn
                    trải nghiệm cảm giác căng não đặc trưng của dòng game chiến
                    thuật.
                  </p>
                  <h3>Europa Universalis 4</h3>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/12/photo-1-162351223199982146155.jpg"
                    alt="Game Chien Thuat, Xay Dung Can Cu, The Ky 18, Tang Lop Quy Toc, Age Of Empires, "
                    note=""
                  />
                  <p>
                    {" "}
                    Europa Universalis IV là tựa game chiến thuật đồ sộ nhất
                    trong tất cả những game về đề tài chiến tranh từ trước đến
                    nay. Game lấy bối cảnh thời kì lịch sử từ giữa thế kỷ 15 cho
                    đến cuối thế kỷ 18, và mang một lượng thông tin khổng lồ về
                    những vị tướng, những chính trị gia, tầng lớp quý tộc cùng
                    hoàng gia của những quốc gia châu Âu trong quãng thời gian
                    đó. Cũng như những người tiền nhiệm của mình, chiến thuật
                    trong Europa Universalis IV có xu hướng nghiêng về chính trị
                    cùng chiến tranh trên diện rộng.
                  </p>
                  <h3>Stronghold: Warlords </h3>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/12/photo-1-162351232952076244069.jpg"
                    alt="Game Chien Thuat, Xay Dung Can Cu, The Ky 18, Tang Lop Quy Toc, Age Of Empires, "
                    note=""
                  />
                  <p>
                    Với những fan của thể loại game chiến thuật, Stronghold chắc
                    chắn là cái tên đã trở nên hết sức quen thuộc. Song hành
                    cũng những series đình đám khác như Total War,{" "}
                    <strong>Age of Empires</strong> hay Civilization, Stronghold
                    trở thành một trong những dòng game chiến thuật được nhiều
                    người yêu thích nhất thế giới.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Series game Stronghold được phát hành lần đầu vào năm 2001
                    bởi Firefly Studios. Tính đến nay, sau gần 20 năm phát
                    triển, dòng game này đã ra mắt được 8 phần (bao gồm cả
                    Stronghold: Warlords). Lấy cảm hứng từ các nền văn minh lớn
                    trên thế giới, series Stronghold sẽ đem đến cho game thủ cái
                    nhìn chân thực nhất về lịch sử phát triển hàng nghìn năm của
                    nhân loại.
                  </p>
                  <h3>Crusader Kings 2 </h3>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/12/photo-1-1623512367785789239581.jpg"
                    alt="Game Chien Thuat, Xay Dung Can Cu, The Ky 18, Tang Lop Quy Toc, Age Of Empires, "
                    note=""
                  />
                  <p>
                    Ra mắt vào năm 2012, Crusader Kings 2 là tựa game chiến
                    thuật thời gian thực lấy bối cảnh Châu Âu thời Trung Cổ
                    (khoảng 1000 – 1400 sau công nguyên). Trong game, người chơi
                    sẽ được điều khiển một trong những triều đại Cơ đốc giáo lớn
                    nhất phương Tây đang cố gắng chiếm đánh toàn bộ châu Âu và
                    thả tự do cho vùng Thánh địa. Crusader Kings II khám phá một
                    trong những thời kì tăm tối nhất của Châu Âu, khi mà nhà thờ
                    lên ngôi và các cuộc thánh chiến xảy ra liên miên.
                  </p>
                  <h3>Victoria 2</h3>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/12/photo-1-162351238768676948460.jpg"
                    alt="Game Chien Thuat, Xay Dung Can Cu, The Ky 18, Tang Lop Quy Toc, Age Of Empires, "
                    note=""
                  />
                  <p>
                    Thời kỳ trong Victoria 2 được xây dựng từ năm 1836 đến năm
                    1936 với hơn 200 quốc gia và vùng lãnh thổ khác nhau. Giống
                    như người tiền nhiệm, Victoria 2 tập trung vào quản lý nội
                    bộ, bao gồm công nghiệp hóa và thay đổi xã hội/chính trị
                    trong một quốc gia với hàng chục hình thái chính phủ khác
                    nhau. Trò chơi mang đến rất nhiều tầm quan trọng cho nền
                    kinh tế của một quốc gia bằng việc có một hệ thống thị
                    trường phức tạp với hơn 50 loại hàng hóa và các nhà máy.
                    Trong khi đó, chiến tranh cũng là một phần không thể thiếu
                    của trò chơi này.
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
