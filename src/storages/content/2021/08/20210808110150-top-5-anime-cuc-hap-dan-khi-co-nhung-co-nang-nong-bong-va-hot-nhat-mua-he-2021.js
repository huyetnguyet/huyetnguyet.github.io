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
"timestamp": '08/08/2021 11:01 AM',
"title": 'Top 5 anime cực hấp dẫn khi có những cô nàng nóng bỏng và hot nhất mùa hè 2021',
"description": 'Các anime hấp dẫn người xem không chỉ bởi nội dung mà nhân vật nữ trong phim cũng là một yếu tố quyết định dẫn đến thành công của bộ phim.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/7/nh-1-1628321240615429169804.jpg',
"alt": 'ANIME HÈ 2021,NHÂN VẬT ANIME,NỮ CHÍNH ANIME,TOP ANIME HẤP DẪN,',
"category": 'games',
"date": '08/08/2021',
"time": '11:01 AM',
"link": '/top-5-anime-cuc-hap-dan-khi-co-nhung-co-nang-nong-bong-va-hot-nhat-mua-he-2021',
"zcomponent": 'page_20210808110150',
"filepath": './20210808110150-top-5-anime-cuc-hap-dan-khi-co-nhung-co-nang-nong-bong-va-hot-nhat-mua-he-2021.js'
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
  "Top 5 anime cực hấp dẫn khi có những cô nàng nóng bỏng và hot nhất mùa hè 2021";
const author = "SuSu";
const source = "Trí Thức Trẻ";
const timestamp = "08/08/2021 11:01 AM";
const description =
  "Các anime hấp dẫn người xem không chỉ bởi nội dung mà nhân vật nữ trong phim cũng là một yếu tố quyết định dẫn đến thành công của bộ phim.";
const link =
  "top-5-anime-cuc-hap-dan-khi-co-nhung-co-nang-nong-bong-va-hot-nhat-mua-he-2021";
const tagparam = [
  "ANIME HÈ 2021",
  "NHÂN VẬT ANIME",
  "NỮ CHÍNH ANIME",
  "TOP ANIME HẤP DẪN",
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

export default function page_20210808110150() {
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
                      Mùa hè năm nay, chúng ta đang được hòa mình vào những bộ
                      phim anime vô cùng thú vị và hấp dẫn. Một điểm hút các fan
                      đến từ các anime năm nay không thể không kể đến các nhân
                      vật nữ được tạo hình một cách độc đáo từ ngoại hình xinh
                      đẹp đến tính cách cũng cực kỳ đặc biệt.
                    </p>
                    <p>
                      Và dưới đây là 5 anime cực hấp dẫn khi có những cô nàng
                      nóng bỏng được đánh giá nhất mùa hè 2021.
                    </p>
                    <h5>Shadows House - Emilico</h5>
                    <p>
                      Shadows House xoay quanh một gia đình sống ẩn dật trong
                      dinh thự khổng lồ. Có điều, dinh thự này rất kỳ lạ, có màu
                      đen bóng và đôi khi tạo ra cả than. Mỗi thành viên trong
                      gia đình đều có một con búp bê sống để làm người hầu cho
                      mình. Emilico là một trong những con búp bê đó. Chỉ mới
                      được tạo ra và hiểu về sự tồn tại của mình, nhưng Emilico
                      rất tò mò về dinh thự kỳ lạ mà mình đang sống.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/7/nh-1-1628321240615429169804.jpg"
                      alt="1, ANIME HÈ 2021,NHÂN VẬT ANIME,NỮ CHÍNH ANIME,TOP ANIME HẤP DẪN,"
                      note=""
                    />
                    <p>
                      Lấy bối cảnh phương tây kết hợp bầu không khí huyền bí, ma
                      mị và bí ẩn, Shadows House đã gây ấn tượng mạnh với cộng
                      đồng anime kể từ khi mới ra mắt đầu năm nay.
                    </p>
                    <h5>Vivy: Fluorite Eye's Song – Vivy</h5>
                    <p>
                      Câu chuyện Vivy – Fluorite Eye’s Song diễn ra ở Nearland -
                      một công viên giải trí AI, nơi "ước mơ, hy vọng và khoa
                      học" cùng tồn tại. Công viên giải trí là nơi AI đầu tiên
                      kiểu người tự động ra đời. Vivy là một AI hát trên sân
                      khấu cho những người tham dự công viên mỗi ngày, vì chỉ
                      thị của cô ấy là "làm cho mọi người hạnh phúc qua những
                      bài hát". Cô biểu diễn hết lòng vì những người tham dự
                      trong công viên.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/7/anh-2-1628321240547282585519.jpg"
                      alt="2, ANIME HÈ 2021,NHÂN VẬT ANIME,NỮ CHÍNH ANIME,TOP ANIME HẤP DẪN,"
                      note=""
                    />
                    <p>
                      Một ngày nọ, một AI tên là Matsumoto xuất hiện trước mặt
                      cô, nói rằng anh đến từ 100 năm sau ở tương lai với chỉ
                      thị "làm việc với Vivy để sửa chữa lịch sử và ngăn chặn
                      cuộc chiến giữa AI và con người nổ ra". Hành trình cứu lấy
                      100 năm của nữ ca sĩ AI Vivy bắt đầu.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>
                      Hige wo Soru. Soshite Joshikousei wo Hirou - Sayu Ogiwara
                    </h5>
                    <p>
                      Sayu Ogiwara là một nữ sinh trung học bỏ trốn từ Hokkaido
                      đến Tokyo. Một đêm nọ, khi đang ngồi xổm bên dưới cột điện
                      thoại, cô có cuộc gặp gỡ định mệnh với một người làm công
                      ăn lương say xỉn tên là Yoshida. Sau khi chạy trốn khỏi
                      quê hương và gia đình, Sayu buộc phải thích nghi và sống
                      cuộc sống mới với tư cách là một nữ sinh trung học bỏ
                      trốn. Không còn tiền để duy trì những nhu cầu cơ bản của
                      mình như thức ăn và chỗ ở, cô ấy tập trung quyết tâm và sử
                      dụng cách quyến rũ đàn ông, sử dụng cơ thể của mình như
                      một con bài mặc cả để tồn tại.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/7/anh-4-1628321240557892988355.jpg"
                      alt="3, ANIME HÈ 2021,NHÂN VẬT ANIME,NỮ CHÍNH ANIME,TOP ANIME HẤP DẪN,"
                      note=""
                    />
                    <p>
                      Khi giữ lối sống này trong khoảng nửa năm, cô trở nên khôn
                      ngoan và sử dụng mặt nạ tán tỉnh vui tươi để che giấu nỗi
                      đau của mình và sử dụng nụ cười rạng rỡ của mình để lừa
                      dối. Để che giấu danh tính của mình, cô đã sử dụng bí
                      danh. Cô ấy cũng phát triển mức độ trưởng thành cao và trí
                      lực vững vàng, những đặc điểm mà một nữ sinh trung học
                      bình thường không có ở độ tuổi của cô ấy.
                    </p>
                    <h5>Koi to Yobu ni wa Kimochi Warui - Ichika Arima</h5>
                    <p>
                      Ichika Arima là nữ nhân vật chính của bộ truyện Koi to
                      Yobu ni wa Kimochi Warui. Cô ấy là bạn thân nhất của Rio
                      Amakusa, người sau khi cứu Ryo Amakusa khỏi ngã cầu thang
                      và đưa bữa trưa cho anh ấy, cuối cùng đã nhận được sự tiếp
                      cận nhiệt tình của Ryo. Ichika nhìn thấy một người đàn ông
                      sắp ngã xuống cầu thang trên nhà ga xe lửa và kéo anh ta
                      lại bằng cách sử dụng ô của cô từ cổ áo của anh ta, vô
                      tình làm anh ta nghẹt thở trong quá trình cô ấy hoảng sợ.
                      Anh ấy cảm ơn cô ấy vì đã cứu mạng anh ấy và cô ấy nghe
                      nói rằng anh ấy chưa ăn sáng và có khả năng yếu do thiếu
                      máu, cô ấy đưa cho anh ấy hộp cơm trưa của mình trong
                      trạng thái hoảng sợ và vội vàng rời đi khi cô ấy đang đi
                      học muộn.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/7/anh-44-1628321240585615186757.jpg"
                      alt="4, ANIME HÈ 2021,NHÂN VẬT ANIME,NỮ CHÍNH ANIME,TOP ANIME HẤP DẪN,"
                      note=""
                    />
                    <p>
                      Sau đó, cô đến nhà bạn bè của mình và khi anh trai cô trở
                      về, cô ngạc nhiên đó là người đàn ông lúc nãy ở ga xe lửa.
                      Khi Rio Amakusa nói chuyện điện thoại, người đàn ông tự
                      giới thiệu mình là Ryo Amakusa , anh trai của Rio. Anh ấy
                      muốn cảm ơn cô ấy, nhưng cho rằng việc mua quần áo hoặc
                      giày của cô ấy là quá rẻ và dành cho cô ấy một nụ hôn và
                      cơ thể của anh ấy. Ichika ngay lập tức chán ghét và bày tỏ
                      điều đó, tuy nhiên Ryo thấy phản ứng của cô ấy thật tuyệt
                      vời.
                    </p>
                    <h5>Don't Toy With Me, Miss Nagatoro - Nagatoro</h5>
                    <p>
                      Don't Toy With Me, Miss Nagatoro xoay quanh học sinh trung
                      học Hayase Nagatoro rất thích dành thời gian rảnh để làm
                      một việc, đó là bắt nạt Senpai của cô ấy! Sau khi Nagatoro
                      và những người bạn của cô tình cờ nhìn thấy những bức vẽ
                      của một họa sĩ đầy tham vọng, họ cảm thấy thích thú khi
                      bắt nạt Senpai nhút nhát một cách không thương tiếc.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/7/anh-5-16283212405721475980162.jpeg"
                      alt="5, ANIME HÈ 2021,NHÂN VẬT ANIME,NỮ CHÍNH ANIME,TOP ANIME HẤP DẪN,"
                      note=""
                    />
                    <ContentImage
                      src="https://static-cmsads.admicro.vn/cmsads/2021/01/phot-1609988157328.jpeg"
                      alt="6, ANIME HÈ 2021,NHÂN VẬT ANIME,NỮ CHÍNH ANIME,TOP ANIME HẤP DẪN,"
                      note=""
                    />
                    <p>
                      Nagatoro quyết tâm tiếp tục trò chơi tàn ác của mình và
                      đến thăm anh hàng ngày để cô có thể buộc Senpai làm bất cứ
                      điều gì có lợi cho cô vào thời điểm đó, đặc biệt nếu điều
                      đó khiến anh không thoải mái. Hơi bị kích thích và có phần
                      sợ hãi Nagatoro, Senpai liên tục bị cuốn vào những trò hề
                      của cô khi sở thích, sở thích, ngoại hình và thậm chí cả
                      tính cách của anh đều bị lợi dụng để chống lại anh khi cô
                      giải trí với chi phí của anh. Thời gian trôi qua, Senpai
                      nhận ra rằng anh ấy không thích sự hiện diện của Nagatoro.
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
