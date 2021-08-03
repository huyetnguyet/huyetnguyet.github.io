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
"timestamp": '18/06/2021 01:00 PM',
"title": 'Top 10 anime đang phát sóng được đánh giá cao nhất hiện nay theo MyAnimeList',
"description": 'Anime mùa xuân năm nay không có nhiều tác phẩm ấn tượng bằng năm ngoái nhưng vẫn có những cái tên rất tuyệt vời cho bạn thưởng thức.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/18/odd-taxi-16240043903291086406425.jpg',
"alt": 'ANIME,TOP ANIME,ANIME HAY,ODD TAXI,TOKYO REVENGERS,THÁM TỬ LỪNG DANH CONAN,MEGALO BOX 2,',
"category": 'games',
"date": '18/06/2021',
"time": '01:00 PM',
"link": '/top-10-anime-dang-phat-song-duoc-danh-gia-cao-nhat-hien-nay-theo-myanimelist',
"zcomponent": 'page_20210618130016',
"filepath": './20210618130016-top-10-anime-dang-phat-song-duoc-danh-gia-cao-nhat-hien-nay-theo-myanimelist.js'
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
  "Top 10 anime đang phát sóng được đánh giá cao nhất hiện nay theo MyAnimeList";
const author = "Mẹ Sề";
const source = "Pháp luật và bạn đọc";
const timestamp = "18/06/2021 01:00 PM";
const description =
  "Anime mùa xuân năm nay không có nhiều tác phẩm ấn tượng bằng năm ngoái nhưng vẫn có những cái tên rất tuyệt vời cho bạn thưởng thức.";
const link =
  "top-10-anime-dang-phat-song-duoc-danh-gia-cao-nhat-hien-nay-theo-myanimelist";
const tagparam = [
  "ANIME",
  "TOP ANIME",
  "ANIME HAY",
  "ODD TAXI",
  "TOKYO REVENGERS",
  "THÁM TỬ LỪNG DANH CONAN",
  "MEGALO BOX 2",
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

export default function page_20210618130016() {
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
                    <h3>
                      10. <strong>Odd Taxi</strong> - 7.88
                    </h3>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/18/odd-taxi-16240043903291086406425.jpg"
                      alt="1, ANIME,TOP ANIME,ANIME HAY,ODD TAXI,TOKYO REVENGERS,THÁM TỬ LỪNG DANH CONAN,MEGALO BOX 2,"
                      note=""
                    />
                    <p>
                      Kotokawa là một tài xế taxi sống một cuộc sống bình
                      thường, đánh thuế một số khách hàng kỳ quặc xung quanh. Là
                      một người lạ hơi lập dị, không có họ hàng thân thích hay
                      quan hệ gì với người khác, sở thích của Kotokawa là nghe
                      Rakugo trên radio trước khi đi ngủ. Vào lúc này, những
                      người duy nhất anh ấy có thể coi là bạn bè là bác sĩ gia
                      đình Gouriki, và người bạn học trung học Kakihana của anh
                      ấy.
                    </p>
                    <p>
                      Kabasawa, một sinh viên đại học muốn gây xôn xao dư luận,
                      Shirakawa, một y tá đang che giấu điều gì đó, nhóm hài
                      Homo Sapiens, người bán không chạy, tên lưu manh Dobu của
                      thành phố và nhóm thần tượng tân binh Mystery Kiss — cuộc
                      trò chuyện với những người này, mà lẽ ra không có nhiều ý
                      nghĩa, dẫn đến một cô gái biến mất.
                    </p>
                    <h3>9. Tokyo Revengers - 8.06</h3>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/18/tokyo-revengers-draken-confront-mikey-1624004375080735769958.jpg"
                      alt="2, ANIME,TOP ANIME,ANIME HAY,ODD TAXI,TOKYO REVENGERS,THÁM TỬ LỪNG DANH CONAN,MEGALO BOX 2,"
                      note=""
                    />
                    <p>
                      Sau nhiều năm vắng bóng trong các mùa{" "}
                      <strong>anime</strong>, cuối cùng thể loại du côn học
                      đường Nhật Bản đã trở lại với siêu phẩm{" "}
                      <strong>Tokyo Revengers</strong>. Anime Tokyo Revengers
                      nói về nhân vật Takemichi Hanagaki, một thanh niên có cuộc
                      sống tạm bợ và không có bất kì mục tiêu nào. Sau khi nhận
                      ra mối tình đầu thời học sinh của mình qua đời vì vướng
                      vào cuộc đối đầu giữa các băng đảng, Takemichi đột nhiên
                      quay về quá khứ 12 năm trước. Với mong muốn thay đổi tương
                      lai, Takemichi bắt đầu dấn thân vào con đường du đãng đầy
                      máu và nước mắt nhằm cứu lấy cô bạn gái của mình.
                    </p>
                    <h3>8. Thám tử lừng danh Conan - 8.16</h3>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/18/last-wizard-of-the-century-16240043616001071481298.jpeg"
                      alt="3, ANIME,TOP ANIME,ANIME HAY,ODD TAXI,TOKYO REVENGERS,THÁM TỬ LỪNG DANH CONAN,MEGALO BOX 2,"
                      note=""
                    />
                    <p>
                      <strong>Thám tử lừng danh Conan</strong> vẫn được phát
                      sóng trong suốt nhiều thập kỷ qua. Điều bất ngờ là dù đã
                      có độ dài hơn một nghìn tập, Conan vẫn tiếp tục phá án
                      nhằm đánh sập tổ chức tội phạm nguy hiểm nhất Nhật Bản.
                      Việc Conan cứ mãi truy đuổi tổ chức Áo Đen bao nhiêu năm
                      dường như không hề làm khán giả cảm thấy có chút mệt mỏi.
                      Ngược lại thương hiệu này còn thường xuyên ra movie phụ để
                      thu hút fan.
                    </p>
                    <h3>7. Megalo Box 2 - 8.28</h3>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/18/megalo-box-nomad-1624004348673864661571.jpg"
                      alt="4, ANIME,TOP ANIME,ANIME HAY,ODD TAXI,TOKYO REVENGERS,THÁM TỬ LỪNG DANH CONAN,MEGALO BOX 2,"
                      note=""
                    />
                    <p>
                      Megalo Box là một trong những loạt phim hoạt hình nổi
                      tiếng nhất năm 2018, và phần phim thứ 2 của nó ra mắt
                      trong năm nay cũng đạt thành công lớn. Trong khi mùa 1
                      chúng ta đã chứng kiến Gearless Joe vươn lên trở thành nhà
                      vô địch hàng đầu của Megalonia thì phần thứ hai bắt đầu
                      vào bảy năm sau, với một Joe lớn tuổi hơn. Anh đã mệt mỏi
                      và suy sụp và chỉ chiến đấu để kiếm đủ tiền để tồn tại.
                      Rồi Joe gặp một người đàn ông tên là Chief và câu chuyện
                      của anh ta khiến Joe được thúc đẩy để giúp con người này.
                    </p>
                    <h3>6. Moriarty the Patriot mùa 2 - 8.29</h3>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/18/moriarty-the-patriot-sherlock-holmes-episode-6-1624004332631493063503.jpg"
                      alt="5, ANIME,TOP ANIME,ANIME HAY,ODD TAXI,TOKYO REVENGERS,THÁM TỬ LỪNG DANH CONAN,MEGALO BOX 2,"
                      note=""
                    />
                    <p>
                      Nhân vật chính của câu chuyện là James Moriarty, nhân vật
                      phản diện nổi tiếng trong loạt truyện Sherlock Holmes của
                      Sir Arthur Conan Doyle. Trong manga, anh ta là một đứa trẻ
                      mồ côi, người đảm nhận cái tên William James Moriarty khi
                      anh ta và em trai của mình được nhận vào gia đình
                      Moriarty. Khi còn trẻ, anh ta tìm cách loại bỏ những căn
                      bệnh do hệ thống giai cấp nghiêm ngặt của nước Anh gây ra.
                    </p>
                    <h3>5. Vivy – Fluorite Eye’s Song - 8.47</h3>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/18/vivy-and-matsumoto-vivy-fluorites-eyes-1624004318176938638291.jpg"
                      alt="6, ANIME,TOP ANIME,ANIME HAY,ODD TAXI,TOKYO REVENGERS,THÁM TỬ LỪNG DANH CONAN,MEGALO BOX 2,"
                      note=""
                    />
                    <p>
                      Câu chuyện Vivy – Fluorite Eye’s Song diễn ra ở
                      “Nearland”, một công viên giải trí AI, nơi “ước mơ, hy
                      vọng và khoa học” cùng tồn tại. Công viên giải trí là nơi
                      AI đầu tiên kiểu người tự động ra đời. Vivy là một AI hát
                      trên sân khấu cho những người tham dự công viên mỗi ngày,
                      vì chỉ thị của cô ấy là “làm cho mọi người hạnh phúc qua
                      những bài hát”. Cô biểu diễn hết lòng vì những người tham
                      dự trong công viên. Một ngày nọ, một AI tên là Matsumoto
                      xuất hiện trước mặt cô, nói rằng anh đến từ 100 năm sau ở
                      tương lai với chỉ thị “làm việc với Vivy để sửa chữa lịch
                      sử và ngăn chặn cuộc chiến giữa AI và con người nổ ra”.
                      Hành trình cứu lấy 100 năm của nữ ca sĩ AI Vivy bắt đầu.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h3>4. Kingdom mùa 3 - 8.37</h3>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/18/kingdom-anime-16240043047282111661573.jpg"
                      alt="7, ANIME,TOP ANIME,ANIME HAY,ODD TAXI,TOKYO REVENGERS,THÁM TỬ LỪNG DANH CONAN,MEGALO BOX 2,"
                      note=""
                    />

                    <p>
                      Kingdom mùa 3 đáng nhẽ đã phát sóng vào mùa hè năm ngoái,
                      nhưng loạt phim đã bị hoãn lại do đại dịch. Bộ phim tiếp
                      tục câu chuyện của Li Xin và nhiệm vụ của anh ấy để hoàn
                      thành mục tiêu thống nhất Trung Quốc của vua Ying Zheng.
                      Lần này, quân đội Tần đối đầu với chiến lược gia thiên tài
                      Li Mu, người đã đẩy họ vào thế bí khi bất ngờ bị buộc phải
                      đối mặt với quân đội của sáu quốc gia khác nhau cùng một
                      lúc.
                    </p>

                    <h3>3. One Piece - 8.54</h3>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/18/one-piece-anime-straw-hat-pirates-smiling-1624004284657219608763.jpg"
                      alt="8, ANIME,TOP ANIME,ANIME HAY,ODD TAXI,TOKYO REVENGERS,THÁM TỬ LỪNG DANH CONAN,MEGALO BOX 2,"
                      note=""
                    />
                    <p>
                      One Piece không phải là một <strong>anime</strong> mới,
                      nhưng nó vẫn đang được phát sóng mặc dù tác giả Oda nói bộ
                      truyện đã hoàn thành được 80%. Luffy và băng Mũ Rơm vẫn
                      tiếp tục đi khắp thế giới để tìm kiếm kho báu vĩ đại nhất
                      từ trước đến nay - One Piece.
                    </p>
                    <h3>2. To Your Eternity - 8.66</h3>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/18/to-your-eternity-fushi-writing-16240042690411025470614.jpg"
                      alt="9, ANIME,TOP ANIME,ANIME HAY,ODD TAXI,TOKYO REVENGERS,THÁM TỬ LỪNG DANH CONAN,MEGALO BOX 2,"
                      note=""
                    />
                    <p>
                      Thêm một bộ truyện tranh mới từ tác giả của A Silent Voice
                      nổi tiếng với nội dung tâm lý, tình cảm và một câu chuyện
                      sử thi kéo dài thời gian và không gian… Một cậu bé cô đơn
                      lang thang vùng Bắc Cực của Bắc Mỹ đã gặp một con sói, cả
                      hai nhanh chóng trở thành bạn của nhau, sống dựa vào nhau
                      để tồn tại trong môi trường khắc nghiệt. To Your Eternity
                      là một bộ truyện tranh hoàn toàn độc đáo và cảm động về
                      cái chết, sự sống, sự luân hồi và bản chất của tình yêu
                    </p>
                    <h3>1. Fruits Basket: The Final - 8.86</h3>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/18/fruits-basket-hatori-and-mayu-1624004243185529534248.jpg"
                      alt="10, ANIME,TOP ANIME,ANIME HAY,ODD TAXI,TOKYO REVENGERS,THÁM TỬ LỪNG DANH CONAN,MEGALO BOX 2,"
                      note=""
                    />
                    <p>
                      Fruits Basket là một trong những <strong>anime</strong>{" "}
                      nổi tiếng nhất những năm 2000. Thế nên không có gì ngạc
                      nhiên khi một phiên bản làm lại của thương hiệu này đã đạt
                      được thành công đáng kinh ngạc. Bản làm lại nhằm mục đích
                      chuyển thể hoàn toàn nội dung của manga vì anime gốc của
                      những năm 2000 chỉ có 26 tập ngắn.
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
