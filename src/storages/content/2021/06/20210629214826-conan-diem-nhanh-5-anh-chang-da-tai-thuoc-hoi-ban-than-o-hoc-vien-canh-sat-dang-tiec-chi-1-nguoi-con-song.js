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
"timestamp": '29/06/2021 09:48 PM',
"title": 'Conan: Điểm nhanh 5 anh chàng đa tài thuộc "Hội bạn thân ở Học viện Cảnh sát", đáng tiếc chỉ 1 người còn sống',
"description": 'Hội bạn thân ở Học viện Cảnh sát gồm có Jinpei Matsuda, Rei Furuya, Wataru Date, Hiromitsu Morofushi và Kenji Hagiwara.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/6/22/photo-1-16243361326392054330609.jpg',
"alt": 'HAGIWARA KENJI,HỌC VIỆN CẢNH SÁT,WILD POLICE STORY,THÁM TỬ LỪNG DANH CONAN,DATE WATARU,MATSUDA JINPEI,',
"category": 'games',
"date": '29/06/2021',
"time": '09:48 PM',
"link": '/conan-diem-nhanh-5-anh-chang-da-tai-thuoc-hoi-ban-than-o-hoc-vien-canh-sat-dang-tiec-chi-1-nguoi-con-song',
"zcomponent": 'page_20210629214826',
"filepath": './20210629214826-conan-diem-nhanh-5-anh-chang-da-tai-thuoc-hoi-ban-than-o-hoc-vien-canh-sat-dang-tiec-chi-1-nguoi-con-song.js'
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
  'Conan: Điểm nhanh 5 anh chàng đa tài thuộc "Hội bạn thân ở Học viện Cảnh sát", đáng tiếc chỉ 1 người còn sống';
const author = "Mẹ Sề";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/06/2021 09:48 PM";
const description =
  "Hội bạn thân ở Học viện Cảnh sát gồm có Jinpei Matsuda, Rei Furuya, Wataru Date, Hiromitsu Morofushi và Kenji Hagiwara.";
const link =
  "conan-diem-nhanh-5-anh-chang-da-tai-thuoc-hoi-ban-than-o-hoc-vien-canh-sat-dang-tiec-chi-1-nguoi-con-song";
const tagparam = [
  "HAGIWARA KENJI",
  "HỌC VIỆN CẢNH SÁT",
  "WILD POLICE STORY",
  "THÁM TỬ LỪNG DANH CONAN",
  "DATE WATARU",
  "MATSUDA JINPEI",
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

export default function page_20210629214826() {
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
                    Hội bạn thân ở <strong>Học viện Cảnh sát</strong> (
                    <strong>Wild Police Story</strong>) trong{" "}
                    <strong>Thám tử lừng danh Conan</strong> mỗi người có một số
                    phận và mục tiêu, điểm chung duy nhất của họ là cùng theo
                    học tại Học viện Cảnh sát thủ đô. Cùng tìm hiểu hội bạn thân
                    đáng ngưỡng mộ này ở dưới đây nhé!
                  </p>
                  <h5>Date Wataru</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/22/photo-1-162433699713520636779.jpg"
                    alt="1, HAGIWARA KENJI,HỌC VIỆN CẢNH SÁT,WILD POLICE STORY,THÁM TỬ LỪNG DANH CONAN,DATE WATARU,MATSUDA JINPEI,"
                    note=""
                  />
                  <p>
                    Wataru Date là thủ lĩnh cương nhu đúng lúc và tràn đầy nhiệt
                    huyết của hội bạn thân ở <strong>Học viện Cảnh sát</strong>.
                    Anh là một sĩ quan thuộc Sở Cảnh sát thủ đô Tokyo thuộc
                    Phòng Điều tra Hình sự số 1. Sau đó anh được giao làm người
                    cố vấn của Wataru Takagi, và họ cùng nhau được biết đến với
                    cái tên "Anh em nhà Wataru". Thật không may, anh ấy bị cuốn
                    vào một tai nạn xe hơi và qua đời một năm trước.
                  </p>
                  <h5>Hiromitsu/Scotch</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/22/photo-1-16243361326392054330609.jpg"
                    alt="2, HAGIWARA KENJI,HỌC VIỆN CẢNH SÁT,WILD POLICE STORY,THÁM TỬ LỪNG DANH CONAN,DATE WATARU,MATSUDA JINPEI,"
                    note=""
                  />
                  <p>
                    Hiromitsu Morofushi là đặc vụ của PBS (Cục Cảnh sát Tokyo),
                    anh nhận nhiệm vụ thâm nhập tổ chức Áo Đen, hoạt động cùng
                    thời với Akai Shuichi và Rei Furuya (Tooru Amuro). Hiromitsu
                    cũng rất được tổ chức tín nhiệm, điều này thể hiện qua bí
                    danh Scotch. Tuy nhiên, giữa lúc mọi thứ đang suôn sẻ,
                    Hiromitsu bị nghi ngờ có dính líu đến PBS.
                  </p>
                  <p>
                    Do đó, để bảo vệ tính tuyệt mật của nhiệm vụ, Hiromitsu đã
                    tự sát trước mặt Akai Shuichi, lúc này anh được Akai tiết lộ
                    sự thật về thân thế FBI của anh ta. Mặc dù Akai đã cố gắng
                    ngăn Hiromitsu tự sát, song trong một tíc tắc bị phân tâm
                    bởi tiếng bước chân của Rei Furuya, Hiromitsu đã kịp bóp cò
                    súng.
                  </p>
                  <h5>Rei/Zero/Bourbon/Amuro</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/22/photo-1-1624335666068136115288.png"
                    alt="3, HAGIWARA KENJI,HỌC VIỆN CẢNH SÁT,WILD POLICE STORY,THÁM TỬ LỪNG DANH CONAN,DATE WATARU,MATSUDA JINPEI,"
                    note=""
                  />
                  <p>
                    Anh thanh niên đầy nghị lực làm 4 công việc cùng một 1 lúc
                    (công an, mafia, nhân viên tiệm coffee, thám tử) có tên thật
                    là Amuro Tooru, anh là cảnh sát của cục An Ninh Nhật Bản
                    thâm nhập vào tổ chức Áo Đen. Anh đóng giả làm một thám tử
                    tư và hoạt động như một nhân viên tình báo trong tổ chức.
                    Quan hệ của anh với FBI Akai Shuichi không được tốt lắm khi
                    cứ mỗi lần chạm mặt đều trở thành "kỷ niệm" không mấy vui
                    vẻ.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Bourbon là một cảnh sát đặc nhiệm có khả năng suy luận và
                    trí tuệ thông minh cộng với kỹ năng xử lý tình huống và bắn
                    súng khá cự phách.
                  </p>
                  <h5>Matsuda Jinpei</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/22/photo-1-1624335322708751982864.jpg"
                    alt="4, HAGIWARA KENJI,HỌC VIỆN CẢNH SÁT,WILD POLICE STORY,THÁM TỬ LỪNG DANH CONAN,DATE WATARU,MATSUDA JINPEI,"
                    note=""
                  />
                  <p>
                    <strong>Matsuda Jinpei</strong> vốn là thành viên trong đội
                    gõ bom thuộc Sở Cảnh sát Tokyo, sau cái chết của người bạn
                    thân Hagiwara, Matsuda được điều sang Phòng điều tra số 1 và
                    trở thành cộng sự của Miwako Sato. Anh là một thám tử thông
                    minh, nhạy bén, luôn giữ cái đầu tỉnh táo và sở hữu một phẩm
                    chất cao quý là đặt mạng sống của những người dân vô tội lên
                    trên cả sinh mạng mình.
                  </p>
                  <p>
                    Trong 1 lần làm nhiệm vụ, để tìm ra vị trí của quả bom cuối,
                    giải cứu tính mạng của người dân thành phố, Matsuda đã tình
                    nguyện hy sinh bản thân mình. Anh chàng cũng có tình cảm với
                    Sato chỉ tiếc là khi anh nói ra được cũng là lúc anh không
                    còn trên đời này nữa.
                  </p>
                  <h5>Hagiwara Kenji</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/22/photo-1-16243356282942099577016.jpg"
                    alt="5, HAGIWARA KENJI,HỌC VIỆN CẢNH SÁT,WILD POLICE STORY,THÁM TỬ LỪNG DANH CONAN,DATE WATARU,MATSUDA JINPEI,"
                    note=""
                  />
                  <p>
                    <strong>Hagiwara Kenji</strong> là anh chàng đào hoa sát
                    gái, cựu racing boy số một Nhật Bản. Kenji là một chàng trai
                    khá vô tư và được giới thiệu là người có năng lực quan sát
                    tuyệt vời, luôn biết cách gây dựng tốt những mối quan hệ.
                  </p>
                  <p>
                    Kenji Hagiwarad đã gia nhập đội đánh bom của Sở Cảnh sát Thủ
                    đô Tokyo cùng với Jinpei Matsuda. Tuy nhiên, anh đã hy sinh
                    trong đợt đầu tiên của một loạt vụ đánh bom bảy năm trước
                    dòng thời gian hiện tại.
                  </p>
                  <p>
                    Những anh chàng đa tài này đã gặp nhau ở{" "}
                    <strong>Học viện Cảnh sát</strong> và thân thiết với nhau.
                    Say này, tuy mỗi người có một ngã rẽ, một sự nghiệp riêng
                    nhưng vẫn giữ được tình bạn đáng quý đó. Và hiện nay chỉ còn
                    lại một mình Rei là còn sống, 4 người kia đều đã qua đời.
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
