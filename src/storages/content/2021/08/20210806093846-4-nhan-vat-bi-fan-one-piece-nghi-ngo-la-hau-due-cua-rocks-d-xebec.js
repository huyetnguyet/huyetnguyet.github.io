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
"timestamp": '06/08/2021 09:38 AM',
"title": '4 nhân vật bị fan One Piece nghi ngờ là hậu duệ của Rocks D. Xebec',
"description": 'Có giả thuyết cho rằng Shanks chính là hậu duệ của Rocks D. Xebec.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/6/photo-1-162824203958082222118.jpg',
"alt": 'ONE PIECE,GOL D. ROGER,HẬU DUỆ CỦA ROCKS D. XEBEC,SHANKS,BUGGY,MARSHALL D. TEACH,',
"category": 'games',
"date": '06/08/2021',
"time": '09:38 AM',
"link": '/4-nhan-vat-bi-fan-one-piece-nghi-ngo-la-hau-due-cua-rocks-d-xebec',
"zcomponent": 'page_20210806093846',
"filepath": './20210806093846-4-nhan-vat-bi-fan-one-piece-nghi-ngo-la-hau-due-cua-rocks-d-xebec.js'
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
  "4 nhân vật bị fan One Piece nghi ngờ là hậu duệ của Rocks D. Xebec";
const author = "Mẹ Sề";
const source = "Pháp luật và bạn đọc";
const timestamp = "06/08/2021 09:38 AM";
const description =
  "Có giả thuyết cho rằng Shanks chính là hậu duệ của Rocks D. Xebec.";
const link =
  "4-nhan-vat-bi-fan-one-piece-nghi-ngo-la-hau-due-cua-rocks-d-xebec";
const tagparam = [
  "ONE PIECE",
  "GOL D. ROGER",
  "HẬU DUỆ CỦA ROCKS D. XEBEC",
  "SHANKS",
  "BUGGY",
  "MARSHALL D. TEACH",
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

export default function page_20210806093846() {
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
                      Trong thế giới <strong>One Piece</strong>, Vua hải tặc{" "}
                      <strong>Gol D. Roger</strong> có con trai. Các Tứ Hoàng
                      như Big Mom, Kaido và Râu Trắng cũng có con, có một kẻ tự
                      nhận mình là con ruột của Bố Già, đó là Edward Weevil.
                    </p>
                    <p>
                      Vậy còn Rocks D. Xebec - người từng thống trị đại dương
                      thì sao? Liệu anh ta có đứa con nào không? Giả thuyết về
                      đứa con của Rocks D. Xebec đã được đem ra thảo luận rộng
                      rãi kể từ khi nhân vật này được giới thiệu. Và có bốn cái
                      tên được netizen đồn có thể là{" "}
                      <strong>hậu duệ của Rocks D. Xebec</strong>.
                    </p>
                    <h5>1. Shanks</h5>
                    <p>
                      Một trong những giả thuyết được thảo luận nhiều trong cộng
                      đồng <strong>One Piece</strong> là <strong>Shanks</strong>{" "}
                      là <strong>hậu duệ của Rocks D. Xebec</strong>. Xét về
                      thời gian, Shanks đã 39 tuổi và Biến cố God Valley xảy ra
                      vào 38 năm trước, giả thuyết này nói rằng Shanks mới chỉ 1
                      tuổi khi Rocks đối mặt với Roger. Sau đó, Roger đã chăm
                      sóc anh ta.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/6/photo-1-162824203958082222118.jpg"
                      alt="1, ONE PIECE,GOL D. ROGER,HẬU DUỆ CỦA ROCKS D. XEBEC,SHANKS,BUGGY,MARSHALL D. TEACH,"
                      note=""
                    />
                    <p>
                      Râu Trắng cũng từng thừa nhận rằng khi nhìn thấy{" "}
                      <strong>Shanks</strong>, vết thương mà ông mắc phải từ
                      "người ấy" đã trở nên nhức nhối. Tuy nhiên, vẫn chưa rõ
                      "người ấy" mà Râu Trắng ám chỉ là Roger hay Rocks. Do có
                      rất nhiều bí ẩn liên quan đến Shanks, và anh ấy đã ở cùng
                      nhóm của Roger từ khi còn rất nhỏ nên khả năng này thực sự
                      cũng rất thú vị.
                    </p>
                    <h5>2. Buggy</h5>
                    <p>
                      Nếu xem xét các thành viên trong nhóm của Roger, những
                      người đã gia nhập băng hải tặc này một cách bí ẩn từ khi
                      còn nhỏ còn có <strong>Buggy</strong>, nên gã hề cũng rất
                      dễ bị tình nghi có quan hệ với Rocks. Đây có thể là 1 khả
                      năng vô lý, nhưng cũng đáng để xem xét. Bởi vì Buggy đến
                      từ Grand Line trong khi <strong>Shanks</strong> đến từ
                      West Blue. Có thể God Valley ở Grand Line chứ không phải ở
                      West Blue.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/6/photo-1-1628242040950936415075.jpg"
                      alt="2, ONE PIECE,GOL D. ROGER,HẬU DUỆ CỦA ROCKS D. XEBEC,SHANKS,BUGGY,MARSHALL D. TEACH,"
                      note=""
                    />
                    <p>
                      Mà <strong>Buggy</strong> cũng bằng tuổi{" "}
                      <strong>Shanks</strong> - 39 tuổi, hắn gia nhập nhóm của
                      Roger từ khi còn là một đứa trẻ, điều đó cho thấy rằng
                      Buggy đã được <strong>Gol D. Roger</strong> tìm thấy và
                      chăm sóc. Nhưng sẽ thật buồn cười nếu hậu duệ của huyền
                      thoại Rocks lại là gã hề Buggy.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>3. Marshall D. Teach</h5>
                    <p>
                      Teach cũng có liên hệ đáng ngờ với Rocks D. Xebec. Ngoài
                      sức mạnh bí ẩn của bản thân, Teach đang xây dựng quân đội
                      của mình trên Hachinosu, hòn đảo nơi Rocks D. Xebec bắt
                      đầu hợp nhất những tên cướp biển hùng mạnh vào hạm đội của
                      mình. Tên con tàu của Teach cũng là Sabre of Xebec/Sword
                      of Xebec.
                    </p>
                    <ContentImage
                      src="https://cdn.idntimes.com/content-images/duniaku/post/20200715/blackbeard-marshall-d-teach-8713770a4e88399710439d90bb0c9898.jpg"
                      alt="3, ONE PIECE,GOL D. ROGER,HẬU DUỆ CỦA ROCKS D. XEBEC,SHANKS,BUGGY,MARSHALL D. TEACH,"
                      note=""
                    />
                    <p>
                      Liệu tuổi thơ của Teach có khó khăn vì hắn là con trai của
                      một tên cướp biển tàn nhẫn không? Chìa khóa tạo nên sức
                      mạnh của Teach có phải là do di truyền từ cha mình? Và
                      hiện tại Teach có đang theo bước cha mẹ của mình không?
                      Hay chỉ đơn giản là Teach ngưỡng mộ Xebec và muốn tiếp
                      bước gã hải tặc huyền thoại ấy?
                    </p>
                    <h5>4. Rockstar</h5>
                    <p>
                      Trường hợp này sẽ khó có thể trở thành hiện thực vì
                      Rockstar là một tên cướp biển có tiền thưởng tương đối
                      thấp, và run sợ khi đối mặt với Râu Trắng.
                    </p>
                    <ContentImage
                      src="https://cdn.idntimes.com/content-images/duniaku/post/20190929/rockstar-one-piece-0abc96065d30268188cefecf20407657.jpg"
                      alt="4, ONE PIECE,GOL D. ROGER,HẬU DUỆ CỦA ROCKS D. XEBEC,SHANKS,BUGGY,MARSHALL D. TEACH,"
                      note=""
                    />
                    <p>
                      Nhưng cần nhớ rằng, nhóm của <strong>Shanks</strong> được
                      cho là nhóm hải tặc không có điểm yếu. Mặc dù tiền thưởng
                      của Rockstar trước khi gia nhập nhóm của Shanks "chỉ" 94
                      triệu Belly, nhưng anh ta không phải là gánh nặng trong
                      nhóm.
                    </p>
                    <p>
                      Sau đó, cái tên của nhân vật này dường như có liên quan
                      đến Rocks. <strong>Shanks</strong> cũng quyết định tuyển
                      dụng anh ta, mặc dù tiền thưởng của Rockstar vẫn thua
                      Luffy sau arc Alabasta. Có phải Shanks đã tuyển dụng
                      Rockstar vì biết về lịch sử gia đình của người đàn ông này
                      không?
                    </p>
                    <p>
                      Tuy nhiên, tất cả những nhân vật trên mới chỉ là nghi ngờ
                      từ fan chứa tác giả chưa tiết lộ gì hết. Nên để biết thông
                      tin chính xác chúng ta vẫn cần chờ thêm nhé!
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
